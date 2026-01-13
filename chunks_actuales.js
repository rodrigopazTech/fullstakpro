{
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "mercadopago-webhook",
        "responseMode": "responseNode",
        "options": {}
      },
      "id": "7631f5e9-3e82-4098-926f-e093a2e9b20c",
      "name": "Webhook MP",
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 2,
      "position": [
        3024,
        1232
      ],
      "webhookId": "mercadopago-payments"
    },
    {
      "parameters": {
        "respondWith": "json",
        "responseBody": "={ \"received\": true }",
        "options": {
          "responseCode": 200
        }
      },
      "id": "bdc7b301-163b-4861-982a-f0c33a763448",
      "name": "Responder 200 OK",
      "type": "n8n-nodes-base.respondToWebhook",
      "typeVersion": 1.1,
      "position": [
        3232,
        1440
      ]
    },
    {
      "parameters": {
        "conditions": {
          "options": {
            "caseSensitive": true,
            "leftValue": "",
            "typeValidation": "strict",
            "version": 2
          },
          "conditions": [
            {
              "id": "condition-payment-type",
              "leftValue": "={{ $json.body.type }}",
              "rightValue": "payment",
              "operator": {
                "type": "string",
                "operation": "equals"
              }
            }
          ],
          "combinator": "and"
        },
        "options": {}
      },
      "id": "f3465018-f0a5-420c-91cb-1eea8b36f661",
      "name": "¿Es tipo payment?",
      "type": "n8n-nodes-base.filter",
      "typeVersion": 2.2,
      "position": [
        3232,
        1232
      ]
    },
    {
      "parameters": {
        "url": "=https://api.mercadopago.com/v1/payments/{{ $json.body.data.id }}",
        "authentication": "genericCredentialType",
        "genericAuthType": "httpHeaderAuth",
        "sendHeaders": true,
        "headerParameters": {
          "parameters": [
            {
              "name": "Authorization",
              "value": "Bearer APP_USR-6406661833643129-123014-559a4ac43d37b84a565e916c1c890131-709785790"
            }
          ]
        },
        "options": {}
      },
      "id": "88304358-9ced-4230-838d-82299e0d0f51",
      "name": "GET Payment Details",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4.2,
      "position": [
        3424,
        1232
      ],
      "credentials": {
        "httpHeaderAuth": {
          "id": "DBnP7lVKINppBvkY",
          "name": "Mercado Pago"
        }
      }
    },
    {
      "parameters": {
        "conditions": {
          "options": {
            "caseSensitive": true,
            "leftValue": "",
            "typeValidation": "strict"
          },
          "conditions": [
            {
              "id": "condition-approved",
              "leftValue": "={{ $json.status }}",
              "rightValue": "approved",
              "operator": {
                "type": "string",
                "operation": "equals"
              }
            }
          ],
          "combinator": "and"
        },
        "options": {}
      },
      "id": "407b7142-1ce1-419c-8dfa-aafd9f6a498c",
      "name": "¿Pago aprobado?",
      "type": "n8n-nodes-base.filter",
      "typeVersion": 2.2,
      "position": [
        3632,
        1232
      ]
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "payment-id",
              "name": "payment_id",
              "value": "={{ $json.id }}",
              "type": "string"
            },
            {
              "id": "enrollment-id",
              "name": "enrollment_id",
              "value": "={{ $json.external_reference }}",
              "type": "string"
            },
            {
              "id": "amount",
              "name": "amount",
              "value": "={{ $json.transaction_amount }}",
              "type": "number"
            },
            {
              "id": "payment-date",
              "name": "payment_date",
              "value": "={{ $json.date_approved }}",
              "type": "string"
            },
            {
              "id": "payer-email",
              "name": "payer_email",
              "value": "={{ $json.payer.email }}",
              "type": "string"
            },
            {
              "id": "payer-phone",
              "name": "payer_phone",
              "value": "={{ $json.payer.phone?.number || '' }}",
              "type": "string"
            }
          ]
        },
        "options": {}
      },
      "id": "500af686-6e2d-42e5-8019-0bf336e1eb4d",
      "name": "Extraer Datos Pago",
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        3824,
        1232
      ]
    },
    {
      "parameters": {
        "url": "=https://iuuyvsrwncdslmsryazz.supabase.co/rest/v1/enrollments?id=eq.{{ $json.enrollment_id }}&select=*",
        "sendHeaders": true,
        "headerParameters": {
          "parameters": [
            {
              "name": "apikey",
              "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1dXl2c3J3bmNkc2xtc3J5YXp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcxMjMwMDgsImV4cCI6MjA4MjY5OTAwOH0.VgnotJhXG3t1pzHYVgaK1d1lt07gj5ptqj-443ZhExA"
            },
            {
              "name": "Authorization",
              "value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1dXl2c3J3bmNkc2xtc3J5YXp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcxMjMwMDgsImV4cCI6MjA4MjY5OTAwOH0.VgnotJhXG3t1pzHYVgaK1d1lt07gj5ptqj-443ZhExA"
            }
          ]
        },
        "options": {}
      },
      "id": "6817fa82-f36f-4f92-b0f9-9012bf2b26ac",
      "name": "GET Enrollment Data",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4.2,
      "position": [
        4032,
        1232
      ]
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "student-name",
              "name": "student_name",
              "value": "={{ $json[0].full_name }}",
              "type": "string"
            },
            {
              "id": "student-email",
              "name": "student_email",
              "value": "={{ $json[0].email }}",
              "type": "string"
            },
            {
              "id": "student-phone",
              "name": "student_phone",
              "value": "={{ $json[0].phone }}",
              "type": "string"
            },
            {
              "id": "enrollment-id",
              "name": "enrollment_id",
              "value": "={{ $json[0].id }}",
              "type": "string"
            },
            {
              "id": "payment-id",
              "name": "payment_id",
              "value": "={{ $('Extraer Datos Pago').item.json.payment_id }}",
              "type": "string"
            },
            {
              "id": "amount",
              "name": "amount",
              "value": "={{ $('Extraer Datos Pago').item.json.amount }}",
              "type": "number"
            }
          ]
        },
        "options": {}
      },
      "id": "faae5f88-8239-44ba-b635-3bc483e2be7f",
      "name": "Combinar Datos",
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        4224,
        1232
      ]
    },
    {
      "parameters": {
        "method": "PATCH",
        "url": "=https://iuuyvsrwncdslmsryazz.supabase.co/rest/v1/enrollments?id=eq.{{ $json.enrollment_id }}",
        "sendHeaders": true,
        "headerParameters": {
          "parameters": [
            {
              "name": "apikey",
              "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1dXl2c3J3bmNkc2xtc3J5YXp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcxMjMwMDgsImV4cCI6MjA4MjY5OTAwOH0.VgnotJhXG3t1pzHYVgaK1d1lt07gj5ptqj-443ZhExA"
            },
            {
              "name": "Authorization",
              "value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1dXl2c3J3bmNkc2xtc3J5YXp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcxMjMwMDgsImV4cCI6MjA4MjY5OTAwOH0.VgnotJhXG3t1pzHYVgaK1d1lt07gj5ptqj-443ZhExA"
            },
            {
              "name": "Content-Type",
              "value": "application/json"
            },
            {
              "name": "Prefer",
              "value": "return=minimal"
            }
          ]
        },
        "sendBody": true,
        "specifyBody": "json",
        "jsonBody": "={\n  \"payment_status\": \"approved\",\n  \"payment_id\": \"{{ $json.payment_id }}\",\n  \"status\": \"paid\",\n  \"updated_at\": \"{{ $now.toISO() }}\"\n}",
        "options": {}
      },
      "id": "35865ac8-be1d-40d7-9291-abf41873c84b",
      "name": "Update Supabase",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4.2,
      "position": [
        4432,
        1232
      ]
    },
    {
      "parameters": {
        "method": "POST",
        "url": "https://evolution.rodrigopaz.space/message/sendText/RodrigoPazTech",
        "authentication": "genericCredentialType",
        "genericAuthType": "httpHeaderAuth",
        "sendHeaders": true,
        "headerParameters": {
          "parameters": [
            {
              "name": "apikey",
              "value": "4960104cb9470197be95a7ee15728ced334ab29c8fe43d14"
            },
            {
              "name": "Content-Type",
              "value": "application/json"
            }
          ]
        },
        "sendBody": true,
        "specifyBody": "json",
        "jsonBody": "={\n  \"number\": \"{{ $('Combinar Datos').item.json.student_phone }}\",\n  \"text\": \"🎉 *¡Pago Confirmado!*\\n\\nHola {{ $('Combinar Datos').item.json.student_name }},\\n\\nTu pago ha sido procesado exitosamente.\\n\\n📋 *Detalles:*\\n• Monto: ${{ $('Combinar Datos').item.json.amount }} MXN\\n• ID de Pago: {{ $('Combinar Datos').item.json.payment_id }}\\n\\n🚀 *Próximos pasos:*\\n1. Recibirás un email con acceso al material\\n2. Te agregaré al grupo de WhatsApp del curso\\n3. Masterclass de Inicio: Sábado 24 de Enero 2026 (9am-12:30pm)\\n\\n¿Tienes alguna duda? Responde este mensaje.\\n\\n¡Gracias por confiar en FullStack Pro! 🙌\"\n}",
        "options": {}
      },
      "id": "ba3deb97-d6b7-4f94-b195-b9ef5d6e11ae",
      "name": "Enviar WhatsApp",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4.2,
      "position": [
        4624,
        1232
      ],
      "credentials": {
        "httpHeaderAuth": {
          "id": "8sfMthwLqBUOpZw6",
          "name": "Evolution API"
        }
      }
    },
    {
      "parameters": {
        "method": "POST",
        "url": "https://evolution.rodrigopaz.space/message/sendText/RodrigoPazTech",
        "authentication": "genericCredentialType",
        "genericAuthType": "httpHeaderAuth",
        "sendHeaders": true,
        "headerParameters": {
          "parameters": [
            {
              "name": "apikey",
              "value": "4960104cb9470197be95a7ee15728ced334ab29c8fe43d14"
            },
            {
              "name": "Content-Type",
              "value": "application/json"
            }
          ]
        },
        "sendBody": true,
        "specifyBody": "json",
        "jsonBody": "={\n  \"number\": \"525622293752\",\n  \"text\": \"💰 *Nueva Venta - FullStack Pro*\\n\\n👤 *Alumno:* {{ $('Combinar Datos').item.json.student_name }}\\n📧 *Email:* {{ $('Combinar Datos').item.json.student_email }}\\n📱 *Teléfono:* {{ $('Combinar Datos').item.json.student_phone }}\\n\\n💵 *Monto:* ${{ $('Combinar Datos').item.json.amount }} MXN\\n🆔 *Payment ID:* {{ $('Combinar Datos').item.json.payment_id }}\\n\\n✅ Pago confirmado y procesado.\"\n}",
        "options": {}
      },
      "id": "b906d550-4cc4-4fd1-afd8-d3cb922728ad",
      "name": "Notificar Admin",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4.2,
      "position": [
        4624,
        1440
      ],
      "credentials": {
        "httpHeaderAuth": {
          "id": "8sfMthwLqBUOpZw6",
          "name": "Evolution API"
        }
      }
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "result-status",
              "name": "status",
              "value": "success",
              "type": "string"
            },
            {
              "id": "result-message",
              "name": "message",
              "value": "Pago procesado y notificaciones enviadas",
              "type": "string"
            }
          ]
        },
        "options": {}
      },
      "id": "4a26e721-1e37-47a0-aa44-d6a89641ffee",
      "name": "Resultado Final",
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        5136,
        1328
      ]
    },
    {
      "parameters": {
        "method": "POST",
        "url": "https://graph.facebook.com/v18.0/858676670091463/events",
        "sendQuery": true,
        "queryParameters": {
          "parameters": [
            {
              "name": "access_token",
              "value": "EAATZABl60dBwBQU50L6yYDs5NgQWVPbYGIW9T7YZBlcFzhJ1MrYfgrKAYWbiYcGITPGD6Ei1vGFZC0d15cGDEdRQ4jcUYT8y5KGTxXMZBTvHGIivEUfj01jEgqN3bn4DvJygKSkGEuru2MeedC8DZCEEWamCn5zyLy5WZCDeEZC3YIsZCSr1QQgsZAEoBMYBnl5ZBvBgZDZD"
            }
          ]
        },
        "sendHeaders": true,
        "headerParameters": {
          "parameters": [
            {
              "name": "Content-Type",
              "value": "application/json"
            }
          ]
        },
        "sendBody": true,
        "specifyBody": "json",
        "jsonBody": "={\n  \"data\": [\n    {\n      \"event_name\": \"Purchase\",\n      \"event_time\": {{ $json.event_time }},\n      \"action_source\": \"website\",\n      \"event_source_url\": \"https://rodrigopaz.space/pago-exitoso\",\n      \"user_data\": {\n        \"em\": \"{{ $json.email_hash }}\",\n        \"ph\": \"{{ $json.phone_hash }}\"\n      },\n      \"custom_data\": {\n        \"currency\": \"MXN\",\n        \"value\": {{ $json.amount }},\n        \"content_name\": \"{{ $json.content_name }}\",\n        \"content_type\": \"product\",\n        \"order_id\": \"{{ $json.payment_id }}\"\n      }\n    }\n  ]\n}",
        "options": {}
      },
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4.3,
      "position": [
        4944,
        1040
      ],
      "id": "f14cb2d2-cbec-4c61-baec-495443aaa44f",
      "name": "FB Conversion API - Purchase"
    },
    {
      "parameters": {
        "jsCode": "const crypto = require('crypto');\n\nconst email = $('Combinar Datos').item.json.student_email || '';\nconst phone = $('Combinar Datos').item.json.student_phone || '';\nconst amount = $('Combinar Datos').item.json.amount || 0;\nconst paymentId = $('Combinar Datos').item.json.payment_id || '';\n\n// Hash email (lowercase, trimmed)\nconst emailHash = email \n  ? crypto.createHash('sha256').update(email.toLowerCase().trim()).digest('hex')\n  : '';\n\n// Hash phone (only digits)\nconst phoneClean = phone.replace(/[^0-9]/g, '');\nconst phoneHash = phoneClean\n  ? crypto.createHash('sha256').update(phoneClean).digest('hex')\n  : '';\n\nreturn {\n  json: {\n    event_time: Math.floor(Date.now() / 1000),\n    email_hash: emailHash,\n    phone_hash: phoneHash,\n    amount: amount,\n    payment_id: paymentId,\n    content_name: 'Curso Full Stack'\n  }\n};"
      },
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [
        4736,
        1040
      ],
      "id": "517c8e37-b0c0-4f63-9568-e2a82b07b451",
      "name": "Preparar Datos Facebook"
    }
  ],
  "connections": {
    "Webhook MP": {
      "main": [
        [
          {
            "node": "Responder 200 OK",
            "type": "main",
            "index": 0
          },
          {
            "node": "¿Es tipo payment?",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "¿Es tipo payment?": {
      "main": [
        [
          {
            "node": "GET Payment Details",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "GET Payment Details": {
      "main": [
        [
          {
            "node": "¿Pago aprobado?",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "¿Pago aprobado?": {
      "main": [
        [
          {
            "node": "Extraer Datos Pago",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Extraer Datos Pago": {
      "main": [
        [
          {
            "node": "GET Enrollment Data",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "GET Enrollment Data": {
      "main": [
        [
          {
            "node": "Combinar Datos",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Combinar Datos": {
      "main": [
        [
          {
            "node": "Update Supabase",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Update Supabase": {
      "main": [
        [
          {
            "node": "Enviar WhatsApp",
            "type": "main",
            "index": 0
          },
          {
            "node": "Notificar Admin",
            "type": "main",
            "index": 0
          },
          {
            "node": "Preparar Datos Facebook",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Enviar WhatsApp": {
      "main": [
        [
          {
            "node": "Resultado Final",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Notificar Admin": {
      "main": [
        [
          {
            "node": "Resultado Final",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Preparar Datos Facebook": {
      "main": [
        [
          {
            "node": "FB Conversion API - Purchase",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "pinData": {},
  "meta": {
    "templateCredsSetupCompleted": true,
    "instanceId": "dc6c45a99a424e37644c05564d036aa514a46e5d9b40bdb1cd7e6cb21b6fbe9a"
  }
}