#/bin/bash
BODY='{"to": "your.email.here@mail.com", "subject": "Assunto do Email", "text": "Corpo do Email"}'
URL=http://localhost:3000/send-email
curl -X POST -H "Content-Type: application/json" -d "${BODY}" "${URL}"
