#!/bin/bash

#set FLASK_APP as path of file that has all apis written
export FLASK_APP=flask_api/app.py

#set FLASK_ENV
export FLASK_ENV=development

#set the port where we want to run the app
export FLASK_RUN_PORT=8000

flask run