# n8n Workflow Blueprints

Copia el contenido JSON de cada workflow e impórtalo en tu instancia de n8n.

## Workflow 1: Chatbot (Recepción de Datos)
Este workflow recibe el Webhook del ChatWidget y envía el mensaje a tu WhatsApp o guarda el lead.

```json
{
  "name": "Chatbot Landing Page",
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "chat-init",
        "options": {}
      },
      "name": "Webhook",
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 1,
      "position": [
        460,
        300
      ]
    },
    {
      "parameters": {
        "values": {
          "string": [
            {
              "name": "message",
              "value": "={{$json.body.name}} quiere chatear. Tel: {{$json.body.phone}}"
            }
          ]
        },
        "options": {}
      },
      "name": "Format Message",
      "type": "n8n-nodes-base.set",
      "typeVersion": 1,
      "position": [
        680,
        300
      ]
    }
  ],
  "connections": {
    "Webhook": {
      "main": [
        [
          {
            "node": "Format Message",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  }
}
```

## Workflow 2: Confirmación de Pago (Mercado Pago)
Este workflow recibe la notificación de pago y envía el link del curso.

```json
{
  "name": "Mercado Pago Payment Success",
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "mp-notification",
        "options": {}
      },
      "name": "MP Webhook",
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 1,
      "position": [
        460,
        460
      ]
    },
    {
      "parameters": {
        "operation": "executeQuery",
        "query": "UPDATE enrollments SET status = 'paid' WHERE email = $1",
        "additionalFields": {
          "queryParams": "={{$json.body.payer.email}}"
        }
      },
      "name": "Update Supabase",
      "type": "n8n-nodes-base.postgres",
      "typeVersion": 1,
      "position": [
        680,
        460
      ],
      "credentials": {
        "postgres": {
          "id": "YOUR_POSTGRES_CREDENTIALS_ID",
          "name": "Supabase Connection"
        }
      }
    }
  ],
  "connections": {
    "MP Webhook": {
      "main": [
        [
          {
            "node": "Update Supabase",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  }
}
```

### Instrucciones Finales
1.  **Importar**: En n8n, ve a `Workflows > Import from File/JSON` y pega los bloques de arriba.
2.  **Configurar**:
    *   En el Workflow 2, necesitarás conectar tu cuenta de **Postgres** (usando los datos de conexión de Supabase) para que funcione el nodo "Update Supabase".
    *   Si deseas enviar WhatsApps reales, agrega el nodo de **Meta WhatsApp Business** o **Twilio** al final de cada cadena.
