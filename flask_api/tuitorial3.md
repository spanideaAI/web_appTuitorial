## Tuitorial-2 : Understanding GET and POST APIs of Flask

### Step-1: Run Flask application:

Stay in papent directory i.e, inside web_appTuitorial in terminal 

./run_flask.sh

### Step-2: Execute GET request:

Go to: http://127.0.0.1:8000/hello-world

### Step-3: Execute POST request:

To run POST api execute following on another terminal: 

curl -X POST -H "Content-type: application/json" -d "{\"number1\" : \"7\",\"number2\":\"10\"}" "localhost:8000/addition"
