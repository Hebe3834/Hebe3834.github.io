import "../styles/papercrafts.scss";
import "../styles/globals.scss";
import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";
// import useFirestore from '../useFirestore';

// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/compat/firestore'
// import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";
import { ref, listAll, getDownloadURL } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz3dv1JWsr21utpWVe66Av6zT06lgFXSo",
  authDomain: "hebe-3834.firebaseapp.com",
  projectId: "hebe-3834",
  storageBucket: "hebe-3834.appspot.com",
  messagingSenderId: "388588557820",
  appId: "1:388588557820:web:96d7c53090fbf112bb4e79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

const fetchImages = async () => {
  const storageRef = await ref(storage, "papercrafts");
  const result = await listAll(storageRef);

  const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));

  return Promise.all(urlPromises);
};

const loadImages = async () => {
  const urls = await fetchImages();
//   console.log(urls);
  console.log(typeof urls);
  return urls;
//   setFiles(urls);
};

const urls = loadImages();
console.log(urls);



const Papercrafts = () => {
    // const { docs } = useFirestore('papercrafts');
    const [data, setData] = useState([]);

    return <>
        <Header page="papercrafts"/>
        <div className="gallery">
            {urls && Object.values(urls).map((url, index) => {
                return (
                    <div className="craft" key={index}>
                        <img src={url} alt="test"/>
                    </div>
                );
            })}
            <div className="craft">
                <img src={"https://firebasestorage.googleapis.com/v0/b/hebe-3834.appspot.com/o/papercrafts%2Fdog.jpg?alt=media&token=87a18917-1908-4d1c-be01-f16c282ecf95"} alt="test"/>
            </div>
            <div className="craft">
                <img src={"https://firebasestorage.googleapis.com/v0/b/hebe-3834.appspot.com/o/papercrafts%2Fhalloween_ghost.jpg?alt=media&token=089fab71-7ba8-4aad-9241-b4ea83e3432f"} alt="test"/>
            </div>
            <div className="craft">
                <img src={"https://firebasestorage.googleapis.com/v0/b/hebe-3834.appspot.com/o/papercrafts%2Frabbit.png?alt=media&token=73836d83-fcd5-45e2-ae51-c007336e1dea"} alt="test"/>
            </div>
        </div>
        <Footer/>
    </>
}

export default Papercrafts;