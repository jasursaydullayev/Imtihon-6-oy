import { db } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";

export function useCollection(c) {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
    const ref = collection(db, c)
    useEffect(() => {
      const unsup = onSnapshot(ref, (snapshot) => {
        const results = []
        snapshot.docs.forEach((doc) => {
          results.push({id: doc.id, ...doc.data()});
        })
        setDocuments(results) 
      })
      return () => unsup()
    }, [c])

  return { documents, error };
}
