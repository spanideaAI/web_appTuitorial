#!/bin/bash

#set FLASK_APP as path of file that has all apis written
export FLASK_APP=web_application/app.py

#set FLASK_ENV
export FLASK_ENV=development

#set the port where we want to run the app
export FLASK_RUN_PORT=8000

#display message
echo "###############################################################################################"
echo ""
echo "#########################               Visit Calculator  at          #########################"
echo "#########################         http://localhost:8000/calculator    #########################"
echo ""
echo "###############################################################################################"

flask run
