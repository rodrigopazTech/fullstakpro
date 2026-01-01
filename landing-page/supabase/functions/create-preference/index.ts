// @ts-nocheck
// Supabase Edge Function - Deno Runtime
// Los errores de tipos se ignoran porque este código se ejecuta en Deno, no Node.js

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface PreferenceRequest {
  enrollment_id: string;
  title: string;
  price: number;
  email: string;
  payer_name?: string;
}

interface MercadoPagoPreference {
  id: string;
  init_point: string;
  sandbox_init_point: string;
}

Deno.serve(async (req: Request): Promise<Response> => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { enrollment_id, title, price, email, payer_name } =
      body as PreferenceRequest;

    // Validar datos requeridos
    if (!enrollment_id || !title || !price || !email) {
      return new Response(
        JSON.stringify({
          error: "Faltan campos requeridos: enrollment_id, title, price, email",
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Obtener Access Token de Mercado Pago desde variables de entorno
    const mpAccessToken = Deno.env.get("MP_ACCESS_TOKEN");
    if (!mpAccessToken) {
      console.error("MP_ACCESS_TOKEN no configurado");
      return new Response(
        JSON.stringify({ error: "Configuración del servidor incompleta" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // URL del webhook de n8n (configurar en variables de entorno)
    const webhookUrl = Deno.env.get("MP_WEBHOOK_URL") || "";
    const frontendUrl =
      Deno.env.get("FRONTEND_URL") || "http://localhost:5173";

    // Crear preferencia en Mercado Pago
    const preferenceData = {
      items: [
        {
          title: title,
          quantity: 1,
          unit_price: price,
          currency_id: "MXN",
        },
      ],
      payer: {
        email: email,
        name: payer_name || "",
      },
      external_reference: enrollment_id, // ¡CLAVE! Vincula el pago con el enrollment
      back_urls: {
        success: `${frontendUrl}/pago-exitoso`,
        failure: `${frontendUrl}/pago-fallido`,
        pending: `${frontendUrl}/pago-pendiente`,
      },
      auto_return: "approved",
      notification_url: webhookUrl, // URL donde MP enviará las notificaciones
      statement_descriptor: "CURSO FULLSTACK",
      expires: false,
      metadata: {
        enrollment_id: enrollment_id,
        plan: title,
      },
    };

    console.log("Creando preferencia:", JSON.stringify(preferenceData, null, 2));

    const mpResponse = await fetch(
      "https://api.mercadopago.com/checkout/preferences",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${mpAccessToken}`,
        },
        body: JSON.stringify(preferenceData),
      }
    );

    if (!mpResponse.ok) {
      const errorText = await mpResponse.text();
      console.error("Error de Mercado Pago:", errorText);
      return new Response(
        JSON.stringify({
          error: "Error al crear preferencia en Mercado Pago",
          details: errorText,
        }),
        {
          status: mpResponse.status,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const preference = (await mpResponse.json()) as MercadoPagoPreference;
    console.log("Preferencia creada:", preference.id);

    // Opcional: Actualizar el enrollment con el preference_id
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey);

      const { error: updateError } = await supabase
        .from("enrollments")
        .update({
          preference_id: preference.id,
          updated_at: new Date().toISOString(),
        })
        .eq("id", enrollment_id);

      if (updateError) {
        console.warn(
          "No se pudo actualizar enrollment con preference_id:",
          updateError
        );
      }
    }

    return new Response(
      JSON.stringify({
        preference_id: preference.id,
        init_point: preference.init_point, // URL para redirigir (si no usas Wallet Brick)
        sandbox_init_point: preference.sandbox_init_point,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    console.error("Error en create-preference:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Error desconocido";
    return new Response(
      JSON.stringify({
        error: "Error interno del servidor",
        details: errorMessage,
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
