import { collection, addDoc } from 'firebase/firestore';
import { db } from './config';

/**
 * Saves the task to the database that the user provides.
 * @param {object} data
 * @returns
 * A reference of the task object used for the database id.
 */
export async function save(data) {
  // Add a new document with a generated id.
  const docRef = await addDoc(collection(db, 'tasks'), data);
  return docRef;
}
