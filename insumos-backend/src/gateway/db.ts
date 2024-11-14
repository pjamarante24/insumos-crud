import { MongoClient, type Db } from "mongodb";

// Connection URI
const URI = process.env.DB_CONNECTION_URI ?? "mongodb://localhost:27017";
const DATABASE = process.env.DB_DATABASE ?? "gestor_insumos";
let client: MongoClient;
let db: Db;

// Inicializa la conexión a la base de datos
export const initializeClient = async () => {
  if (!client) {
    client = new MongoClient(URI);
    await client.connect();
    db = client.db(DATABASE);

    console.log("Connected to MongoDB");
  }
  return { client, db };
};

export const closeClient = async () => {
  if (client) {
    await client.close();
    console.log("MongoDB connection closed");
  }
};

export const getDb = () => db;
