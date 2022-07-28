Tuitorial-2 : Understanding GET and POST APIs of Flask

Run Flask application: \
./run_flask.sh

To run GET api: \
Go to: http://127.0.0.1:8000/hello-world

To run POST api execute following on terminal: \
curl -X POST -H "Content-type: application/json" -d "{\"number1\" : \"7\",\"number2\":\"10\"}" "localhost:8000/addition"
