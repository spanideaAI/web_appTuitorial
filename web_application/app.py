# using flask_restful
from flask import Flask, request, render_template
import json

# creating the flask app
project_folder='/home/spanidea-168/Documents/SpanIdea_Office_work/web_app_session/web_application'
app = Flask(__name__, 
            template_folder=project_folder,
            static_folder=project_folder)

@app.route("/calculator")
def home():
    return render_template('helloName.html')

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