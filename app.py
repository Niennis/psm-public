from flask import Flask, jsonify, render_template

app = Flask(__name__, static_folder='src/app')

@app.route('/')
def index():
    return app.send_static_file('page.jsx')  # Asegúrate de tener este archivo en la carpeta public

@app.route('/api/data')
def get_data():
    data = {"message": "Hello from Python backend!"}
    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
