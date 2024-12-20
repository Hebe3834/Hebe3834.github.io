import "../styles/crafts.scss";
import "../styles/globals.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz3dv1JWsr21utpWVe66Av6zT06lgFXSo",
  authDomain: "hebe-3834.firebaseapp.com",
  projectId: "hebe-3834",
  storageBucket: "hebe-3834.appspot.com",
  messagingSenderId: "388588557820",
  appId: "1:388588557820:web:96d7c53090fbf112bb4e79",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// initialize services
const db = getFirestore();

const Crafts = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  
  const [crafts, setCrafts] = useState([]);
  const [loading, setLoading] = useState(true);

  // get collection data
  useEffect(() => {
    const fetchImages = async () => {
      const colRef = collection(db, "papercrafts");
      setLoading(true);
      let updatedCrafts = [];
      await getDocs(colRef) //promise
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            updatedCrafts.push({ ...doc.data(), id: doc.id });
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
      setCrafts(updatedCrafts);
      setLoading(false);
    };
    fetchImages();
  }, []);

  return (
    <>
      <Header page="crafts" />
      <div className="Crafts">
        <div className="content">
          <div className="cells">
            <h1>Papercrafts</h1>
            {/* <p>
              I take 2d printed templates and assemble them into 3d models
              <br />
              Materials: X-Acto knife, cutting board, toothpick, liquid glue,
              tweezers
            </p> */}
          </div>
          {/* <div className="tags">
            <button>All</button>
            <button>Animals</button>
            <button>Games</button>
            <button>Other</button>
          </div> */}
          <div className="gallery">
            { (loading) ? 
              <h2>Loading...</h2>
             :             
              (crafts &&
                crafts.map((craft, index) => {
                  return (
                    <div className="craft" key={index}>
                      <img src={craft.compress_url} alt={craft.name} />
                      <div className="filter">
                        <div className="name">{craft.name}</div>
                      </div>
                    </div>
                  );
                })
              )
            }
          </div>
        </div>
      </div>
      <Footer page="crafts" />
    </>
  );
};

export default Crafts;
