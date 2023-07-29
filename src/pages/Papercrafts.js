import "../styles/papercrafts.scss";
import "../styles/globals.scss";
import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { storage } from "../firebase/config";
import { ref, listAll, getDownloadURL } from "firebase/storage"



const Papercrafts = () => {
    const [files, setFiles] = useState([]);

    const fetchImages = async () => {
        const storageRef = await ref(storage, "papercrafts");
        const result = await listAll(storageRef);

        const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));

        return Promise.all(urlPromises);
    };

    const loadImages = async () => {
        const urls = await fetchImages();
        // console.log(urls);
        setFiles(urls);
    };

    loadImages();

    return <>
        <Header page="papercrafts"/>
        <div className="content">
            <div className="gallery">
                {files && Object.values(files).map((file, index) => {
                    return (
                        <div className="craft" key={index}>
                            <img src={file} alt="test"/>
                        </div>
                    );
                })}
            </div>
        </div>
        <Footer/>
    </>
}

export default Papercrafts;