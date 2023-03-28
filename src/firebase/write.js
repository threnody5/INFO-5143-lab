import { collection, addDoc } from 'firebase/firestore';
import { db } from './config';

export async function save(data) {
  // Add a new document with a generated id.
  const docRef = await addDoc(collection(db, 'tasks'), data);
  console.log('Document written with ID: ', docRef.id);
}
