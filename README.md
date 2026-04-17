# Zerus — Portal Público de Salud Mental UDP

Portal web público de la Dirección de Salud Mental de la **Universidad Diego Portales**, diseñado para entregar información y recursos educativos sobre salud mental a la comunidad universitaria.

> Este es uno de los dos portales del proyecto Zerus. Ver también: [Portal Privado](https://github.com/Niennis/psm-private)

## 🚀 Demo

[Ver sitio en producción](https://psm-public.vercel.app/)

## ✨ Funcionalidades

- Información pública sobre el área de salud mental de la UDP
- Recursos educativos sobre bienestar y salud mental
- Acceso al portal privado para agendar horas de atención

## 🛠️ Stack tecnológico

- **Framework:** Next.js (App Router)
- **Lenguaje:** JavaScript
- **Estilos:** CSS / Bootstrap / Material UI
- **Despliegue:** Vercel / Azure App Services

## ⚙️ Cómo correr localmente

```bash
# Clonar el repositorio
git clone https://github.com/Niennis/psm-public.git
cd psm-public

# Instalar dependencias
npm install

# Correr en modo desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

> **Nota:** Este proyecto requiere variables de entorno para conectarse al backend. Contactar al equipo para obtener acceso.

## 📁 Estructura del proyecto

```
public/           # Recursos estáticos públicos
src/
├── app/          # Páginas y rutas (App Router)
│   ├── api/      # Route handlers
│   ├── blog/
│   ├── tests/    # Tests psicológicos (ansiedad, depresión)
│   └── ...       # Resto de secciones del sitio
├── assets/       # CSS, fuentes e imágenes
├── components/   # Componentes reutilizables
├── context/      # React Context
├── mocks/        # Mocks de API con MSW (desarrollo)
├── services/     # Llamadas a la API
└── utils/        # Funciones utilitarias
```

## 🔗 Proyecto relacionado

Este portal es la cara pública del sistema Zerus. El [portal privado](https://github.com/Niennis/psm-private) permite a estudiantes y profesionales gestionar horas de atención y fichas clínicas.

## 👩‍💻 Desarrollado por

[Estefanía Osses Vera](https://github.com/Niennis) — Freelance, 2023–2025
