## Tuitorial-1 : Understanding differenece between we and application server

### Step-1: Run web server

cd web_vs_app_server 

python3 -m http.server 8000 

Go to http://0.0.0.0:8000/ and open a .js file , it would not execute. 

or 

Go to http://0.0.0.0:8000/public/script.js , it would not execute.

### Step-2: Run application server i.e, node 

node server.js 

http://0.0.0.0:8000/public/script.js , now it will execute the programme. 