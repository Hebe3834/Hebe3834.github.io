import { useState, useEffect } from "react";
import { db } from "./firebase/config";
import { getFirestore, collection, query, getDocs } from 'firebase/firestore/lite';

const useFireStore = (collection) => {
    const [docs, setDocs] = useState([]);

    // useEffect(() => {
    //     const unsub = db.collection(collection)
    //     // .orderBy('createdAt', "desc")
    //     .onSnapshot((snap) => {
    //         let documents = [];
    //         snap.forEach(doc => {
    //             documents.push({...doc.data(), id: doc.id})
    //         })
    //         setDocs(documents);
    //     })
    //     return () => unsub();
    // }, [collection])

    // const q = query(collection(db, "cities"), where("capital", "==", true));

    // const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    // // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    // });

    // try {
    //     const docSnap = await getDoc(docRef);
    //     if(docSnap.exists()) {
    //         console.log(docSnap.data());
    //     } else {
    //         console.log("Document does not exist")
    //     }
    
    // } catch(error) {
    //     console.log(error)
    // }


    // return docSnap.data();
    return docs;
}

export default useFireStore;