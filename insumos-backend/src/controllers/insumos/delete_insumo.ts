import { getDb } from "../../gateway/db.ts";
import { InsumosCollection, type Insumo } from "../../entity/insumos.ts";
import { ObjectId } from "mongodb";

// Elimina un insumo
export const deleteInsumo = async (id: string) => {
  const db = getDb();
  const insumos = db.collection<Insumo>(InsumosCollection);

  const { deletedCount } = await insumos.deleteOne({ _id: new ObjectId(id) });

  if (!deletedCount) {
    return { message: "Insumo no encontrado" };
  }
};
