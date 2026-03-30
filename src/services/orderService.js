import { db } from "../firebase";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

const ORDERS_COLLECTION = "pedidos";

export async function crearPedido(datos) {
  const codigo = "LAV-" + Math.floor(100000 + Math.random() * 900000);
  const pedido = {
    codigo,
    ...datos,
    estado: 0, // 0: recibido, 1: preparacion, 2: en camino, 3: completado
    creadoEn: serverTimestamp(),
  };

  await addDoc(collection(db, ORDERS_COLLECTION), pedido);
  return codigo;
}

export async function buscarPedido(codigo) {
  const q = query(
    collection(db, ORDERS_COLLECTION),
    where("codigo", "==", codigo.toUpperCase())
  );
  const snapshot = await getDocs(q);

  if (snapshot.empty) return null;

  const docSnap = snapshot.docs[0];
  return { id: docSnap.id, ...docSnap.data() };
}

export async function actualizarEstado(pedidoId, nuevoEstado) {
  const ref = doc(db, ORDERS_COLLECTION, pedidoId);
  await updateDoc(ref, { estado: nuevoEstado });
}
