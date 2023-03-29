import { db } from './index';
import { collection, getDocs } from 'firebase/firestore';

/**
 * Loads all documents from the tasks collection.
 *
 * @returns
 * Array with the tasks.
 */
export async function load() {
  try {
    const querySnapshot = await getDocs(collection(db, 'tasks'));

    return processQuerySnapshot(querySnapshot);
  } catch {
    throw new Error('An error occurred while loading');
  }
}

/**
 * Converts a Firebase query snapshot into an array.
 *
 * @param {object} querySnapshot
 * The query snapshot returned by Firebase.
 * @returns
 * Array with the data.
 */
function processQuerySnapshot(querySnapshot) {
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({
      ...doc.data(),
      id: doc.id,
    });
  });

  return data;
}
