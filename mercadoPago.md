

---
product_landing_what_it_offers:
 - title: Qué ofrece
 - message: Combina distintas funcionalidades para garantizar la seguridad y conversión de las operaciones.
 - benefit_title: Personalización
 - benefit_bullet: Financiamiento en cuotas.
 - benefit_bullet: URL de retorno tras aprobar el pago.
 - benefit_bullet: Apariencia y estilo del botón de pago.
 - benefit_bullet: Medios de pago combinables y customizables.
 - benefit_title: Conversión
 - benefit_bullet: Cobro ágil con los medios de pago guardados en Mercado Pago.
 - benefit_bullet: Opción de pagar sin cuenta de Mercado Pago, como usuario invitado.
 - benefit_bullet: Medios de pago online y offline, como tarjetas y dinero en cuenta.
 - benefit_bullet: Recuperación de pagos rechazados.
 - benefit_title: Aprobación de pagos
 - benefit_bullet: Tecnología 3DS 2.0 para autenticación de operaciones.
 - benefit_bullet: Herramientas de prevención de fraudes y comprobación de identidad de cliente.
 - benefit_bullet: Validación de transacciones utilizando datos específicos de cada industria. 
 - benefit_title: Seguridad ante fraudes
 - benefit_bullet: Protocolos OWASP y PCI DSS.
 - benefit_bullet: Verificación de identidad de los compradores.
 - benefit_bullet: Reconocimiento facial con FaceAuth para ingresar a la cuenta de Mercado Pago.
---

---
product_landing_what_differentiates:
 - title: Qué lo diferencia
 - message: Compara nuestros checkouts y elige el que mejor se adapte a tu negocio. Consulta las .
 - highlight_text: Estás aquí
 - column_product_svg_image: checkout-pro-es
 - column_product: Checkout Pro
 - column_button_text: Cómo integrar
 - column_button_link: /developers/es/docs/checkout-pro/create-application
 - column_product_svg_image: checkout-api-es
 - column_product: 
 - column_button_text: Ir al resumen
 - column_button_link: /developers/es/docs/checkout-api-payments/overview
 - column_product_svg_image: checkout-bricks-es
 - column_product: Checkout Bricks
 - column_button_text: Ir al resumen
 - column_button_link: /developers/es/docs/checkout-bricks/landing
 - line_text: Esfuerzo de integración
 - line_type: dots
 - line_values: 2|5|3
 - line_text: Nivel de personalización
 - line_type: dots
 - line_values: 2|5|3
 - line_text: Diseño listo para configurar
 - line_type: check
 - line_values: true|false|true
 - line_text: Experiencia de cobro 
 - line_type: text
 - line_values: En Mercado Pago|En tu sitio|En tu sitio
 - line_text: Pagos recurrentes
 - line_type: check
 - line_values: false|true|true
 - line_text: Medios de pago
 - line_type: text
 - line_values: Tarjeta de crédito o débito, Transferencia SPEI, OXXO, Paycash, Citibanamex, Santander, BBVA Bancomer, Cuenta Mercado Pago y Meses sin Tarjeta|Tarjeta de crédito o débito, Transferencia SPEI, OXXO, Paycash, Citibanamex, Santander, BBVA Bancomer, Cuenta Mercado Pago y Meses sin Tarjeta|Tarjeta de crédito o débito, Transferencia SPEI, OXXO, Paycash, Citibanamex, Santander, BBVA Bancomer, Cuenta Mercado Pago y Meses sin Tarjeta
 - line_text: Disponibilidad por país
 - line_type: sites
 - line_values: all|all|all
---

---
product_landing_how_integrate:
 - title: Cómo integrar
 - sub_title: Conoce las etapas que deberás seguir para integrar esta solución.
 - requirement_title: Requisitos previos
 - requirement_table_title: Cuenta de vendedor
 - requirement_table_list: Para integrar Checkout Pro, necesitas ingresar a Mercado Pago y [crear una cuenta de vendedor](https://www.mercadopago[FAKER][URL][DOMAIN]/hub/registration/landing).
 - requirement_table_title: Certificado SSL (Secure Sockets Layer)
 - requirement_table_list: Permite la navegación segura y la protección de tus datos durante las transferencias de información.
---

|||column1|||
---
product_landing_how_integrate:
 - list_title: Proceso de integración
 - list_item: Crear una aplicación.
 - list_item: Configurar el ambiente de desarrollo.
 - list_item: Crear y configurar una preferencia de pago.
 - list_item: Configurar las URLs de retorno.
 - list_item: Agregar el SDK al frontend e inicializar el checkout.
 - list_item: Configurar las notificaciones de pago.
 - list_item: Probar la integración.
 - list_item: Salir a producción.
 - button_description: Quiero comenzar a integrar
 - button_link: /developers/es/docs/checkout-pro/create-application
---
|||column2|||
<div class="mermaid-overview">
  <pre class="mermaid">
  flowchart TD
            A["Ir a Tus integraciones"] --> B["Crear aplicación"]
            B --> C["Construir el ambiente"]
            C --> D["Crear preferencias de pago"]
            D -- Monto, medios de pago, detalles, otros --> F["Configurar las notificaciones"]
            F -- Webhooks e IPN --> E["Probar la integración"]
            E -- Pruebas exitosas --> H["Salir a producción"]
            E -- Errores detectados --> I["Corregir configuración"]
            I --> H
            H --> J["Medir calidad"]
  </pre>
</div>
|||