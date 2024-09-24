#!/bin/bash

# Iniciar servidor Flask en el fondo
echo "Starting Flask server..."
python app.py &

# Iniciar servidor de desarrollo de React
echo "Starting React app..."
npm start
