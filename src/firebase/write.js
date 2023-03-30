import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
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

/**
 * Changes the status of the task on the Firebase database.
 * @param {string} id
 * Receives the ID provided from the Firebase database.
 * @param {string} selectedTaskStatus
 * Receives the updated task of the status from the Task component.
 */
export async function update(id, selectedTaskStatus) {
  try {
    const updatedTask = doc(db, 'tasks', id);
    await updateDoc(updatedTask, {
      status: selectedTaskStatus,
    });
  } catch {
    throw new Error('Unable to update the selected task.');
  }
}
