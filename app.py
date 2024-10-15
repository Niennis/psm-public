from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='server/app/')

# Ruta para servir el sitio estático
@app.route('/')
def serve_index():
    return send_from_directory(app.static_folder, 'index.html')

# Ruta de prueba para verificar que el sitio está corriendo
@app.route('/health')
def health_check():
    return "Health Check: OK", 200

if __name__ == '__main__':
    import os
    port = int(os.getenv('PORT', 8080))  # Lee el puerto de las variables de entorno
    app.run(host='0.0.0.0', port=port)   # Escucha en todas las interfaces
