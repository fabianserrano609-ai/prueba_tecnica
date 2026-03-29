# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Herramientas empleadas

Se han empleado las siguientes librerias y herramientas:

1. Para la obtención de los datos se emplea la API REST ReqRes (https://reqres.in/)

2. Se ha empleado Shadcn (https://ui.shadcn.com) para ayudar en la creación de componentes de interfaz de usuario

3. Para el css se ha usado el framewok Tailwind (https://tailwindcss.com/)

4. Para los iconos se han empleado los proporcionados por Lucide (https://lucide.dev/icons/)

5. El control de rutas se ha realizado usando React Router (https://reactrouter.com/)

## Pasos de instalación y uso

1. Descargar el zip del repositorio público y descomprimir

2. Ejecutar "npm i"

3. Acceder a la API REST empleada (https://reqres.in/) empleando los datos:

- Correo: tfgpruebaenviocorreo@gmail.com
- Contraseña: PruebaLaberit123

4. Acceder a https://app.reqres.in/api-keys y copiar la "Manage Key"

5. Acceder al archivo .env y cambiar la variable VITE_API_KEY con el valor copiado en el paso anterior, eliminando la parte "x-api-key:"

6. Ejecutar el proyecto con "npm run dev"

7. Cualquier cambio realizado se puede comprobar en la seccion de "Data" dentro de la ReqRes (https://app.reqres.in/dashboard)

8. A la hora de insertar o editar un usuario, en el campo de "Avatar" se puede emplear una url como "https://i.pravatar.cc/150?img=", añadiendo un numero random a la variable "img", por ejemplo "img=16".
