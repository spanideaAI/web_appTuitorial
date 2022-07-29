# using flask_restful
from flask import Flask, request
import json

# creating the flask app
app = Flask(__name__)

@app.route('/hello-world',methods=['GET'])
def client():
    return '<h1> Hello World!! </h1>' 

@app.route('/addition', methods=['POST'])
def addition():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        json_dict = request.json
        number1=json_dict['number1']
        number2=json_dict['number2']
        sum=int(number1)+int(number2)
        response_dict={"result":sum}
    return json.dumps(response_dict)
