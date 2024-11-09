# insumos-web

Gestor de insumos para el control de los insumos. Esta aplicacion muestra un listado de todos los insumos y permite crear, modificar y eliminar los insumos.

### Estructura

#### src/components

Este folder contiene los componentes de la aplicacion dividos por scope src/{scope}/component.tsx, ejemplo: src/insumos/\*.tsx contiene todos los relacionado con la pagina de insumos.

#### src/constants

Este folder contiene las variables constantes.

#### src/fetch

Este folder contiene las funciones que llaman al backend u otras APIs externas.

#### src/routes

Este folder contiene el component principal de las rutas. Cada ruta utiliza los componentes compartido del folder de componentes y debe definir sus loaders y acciones en el mismo archivo.

#### src/utils

Este folder contiene las utilidades.

#### src/main.tsx

Este archivo contiene la funcion principal para renderizar la aplicacion y las rutas de la aplicacion.

### Development

Prerequisitos: Instalar node.

```bash
nvm use v22.11.0
npm install
npm run dev
```
