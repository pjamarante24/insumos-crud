# insumos-backend

Backend para la gestion de insumos. Este contiene endpoints para la administracion de los insumos y sus componentes.

### Estructura

#### src/controllers

Los controladores contienen la logica que interactua con la base de datos.

Este folder contiene los controladores divididos por scope src/controllers/{scope}/{metodo}. Ejemplo, src/controllers/insumos/create_insumo.ts contiene el metodo para crear insumos.

#### src/entity

Las entidades definen las estructuras de las colleciones de la base de datos.

Este folder contiene las entidades de cada coleccion src/entity/{coleccion}.ts.

#### src/gateway

Los gateway contienen logica para conectarse con entidades externas. Ejemplo, src/gateway/db.ts contiene la logica para conectarse con la base de datos.

#### src/routes

Este folder contiene los endpoints del API src/routes/handlers/{endpoint}.ts.

En `src/routes/index.ts` estan definidos todos los endpoints.

#### src/server.ts

Este archivo initializa el servidor.

### Development

Prerequisitos: Instalar node y mongodb.

```bash
nvm use v22.11.0
npm install
npm run migrate # crea la base de datos, colecciones y validaciones
npm run dev
```
