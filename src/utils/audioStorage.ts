/**
 * Utility for persisting custom MP3 audio files in IndexedDB
 * and audio preferences in localStorage.
 */

const DB_NAME = "WeddingAudioDB";
const DB_VERSION = 1;
const STORE_NAME = "custom_audio";
const AUDIO_KEY = "uploaded_wedding_mp3";

export const saveAudioBlobToIndexedDB = (file: File | Blob): Promise<void> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = () => {
      const db = request.result;
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      const putReq = store.put(file, AUDIO_KEY);

      putReq.onsuccess = () => resolve();
      putReq.onerror = () => reject(putReq.error);
    };

    request.onerror = () => reject(request.error);
  });
};

export const getAudioBlobFromIndexedDB = (): Promise<Blob | null> => {
  return new Promise((resolve) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = () => {
      const db = request.result;
      try {
        const tx = db.transaction(STORE_NAME, "readonly");
        const store = tx.objectStore(STORE_NAME);
        const getReq = store.get(AUDIO_KEY);

        getReq.onsuccess = () => {
          if (getReq.result instanceof Blob) {
            resolve(getReq.result);
          } else {
            resolve(null);
          }
        };

        getReq.onerror = () => resolve(null);
      } catch {
        resolve(null);
      }
    };

    request.onerror = () => resolve(null);
  });
};

export const removeAudioBlobFromIndexedDB = (): Promise<void> => {
  return new Promise((resolve) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onsuccess = () => {
      const db = request.result;
      try {
        const tx = db.transaction(STORE_NAME, "readwrite");
        const store = tx.objectStore(STORE_NAME);
        const delReq = store.delete(AUDIO_KEY);
        delReq.onsuccess = () => resolve();
        delReq.onerror = () => resolve();
      } catch {
        resolve();
      }
    };

    request.onerror = () => resolve();
  });
};
