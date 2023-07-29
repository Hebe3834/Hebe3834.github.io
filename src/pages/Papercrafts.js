import "../styles/papercrafts.scss";
import "../styles/globals.scss";
import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { storage } from "../firebase/config";
import { ref, listAll, getDownloadURL } from "firebase/storage"



const Papercrafts = () => {
    const [files, setFiles] = useState({});

    const fetchImages = async () => {
        const storageRef = await ref(storage, "papercrafts");
        const result = await listAll(storageRef);

        const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));

        return Promise.all(urlPromises).then((urls) => {
            const nameUrls = {};
            result.items.forEach((imageRef, index) => (nameUrls[imageRef.name] = urls[index]));
            return nameUrls;
        });
    };

    const loadImages = async () => {
        const nameUrls = await fetchImages();
        // console.log(urls);
        // setFiles(urls);
        setFiles((prevfiles) => ({...prevfiles, ...nameUrls}));
    };

    loadImages();

    return <>
        <Header page="papercrafts"/>
        <div className="content">
            <div className="gallery">
                {files && Object.entries(files).map((file, index) => {
                    return (
                        <div className="craft" key={index}>
                            <img src={file[1]} alt={file[0]}/>
                            <div className="filter">
                                <div className="name">
                                    {file[0]}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
        <Footer/>
    </>
}

export default Papercrafts;