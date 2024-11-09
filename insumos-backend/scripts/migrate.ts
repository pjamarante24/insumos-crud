import { initializeClient } from "../src/gateway/db.ts";
import { InsumosCollection } from "../src/entity/insumos.ts";
import { ClasificacionBienesServiciosCollection } from "../src/entity/clasificacion_bienes_servicios.ts";
import { ClasificacionGastosCollection } from "../src/entity/clasificacion_gastos.ts";

// Script para crear las colecciones de la base de datos
const migrate = async () => {
  const { db, client } = await initializeClient();

  await db.createCollection(ClasificacionBienesServiciosCollection, {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        title: "ClasificacionBienesServicios Object Validation",
        required: ["_id", "denominacion"],
        properties: {
          _id: {
            bsonType: "string",
            description: "'id' debe ser un string y es requerido",
          },
          denominacion: {
            bsonType: "string",
            description: "'denominacion' debe ser un string y es requerido",
          },
        },
      },
    },
  });

  console.log("ClasificacionBienesServicios collection created");

  await db.createCollection(ClasificacionGastosCollection, {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        title: "ClasificacionGastos Object Validation",
        required: ["_id", "denominacion"],
        properties: {
          _id: {
            bsonType: "string",
            description: "'id' debe ser un string y es requerido",
          },
          denominacion: {
            bsonType: "string",
            description: "'denominacion' debe ser un string y es requerido",
          },
        },
      },
    },
  });

  console.log("ClasificacionGastos collection created");

  await db.createCollection(InsumosCollection, {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        title: "Insumo Object Validation",
        required: ["nombre"],
        properties: {
          nombre: {
            bsonType: "string",
            description: "'nombre' debe ser un string y es requerido",
          },
        },
      },
    },
  });

  console.log("Insumos collection created");

  client.close();
};

migrate();
