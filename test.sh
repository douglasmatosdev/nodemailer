curl -X POST -H "Content-Type: application/json" -d '{"to": "your.email.here@mail.com", "subject": "Assunto do Email", "text": "Corpo do Email"}' http://localhost:3000/send-email