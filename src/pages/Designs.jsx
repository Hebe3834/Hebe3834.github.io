import "../styles/projects.scss";
import "../styles/globals.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DesignBtn from "./components/DesignBtn";
import PERSONAL from "../assets/personal-site.png";
import CADMUS from "../assets/cadmus.png";
import RAFI from "../assets/rafi_mockup.png";
import QUESTIFY from "../assets/questify.png";
import BITES from "../assets/bites.png";

const Designs = () => {
    return (
        <>
            <Header page="designs" />
            <div className="Projects Designs">
                <div className="content">

                    <h1>Design Work</h1>
                    <div className="projects-grid">

                        <DesignBtn
                            id="1" 
                            name="Cadmus"
                            link="/designs/cadmus"
                            img={CADMUS}
                            scroll={true}
                            desc={<p>A <span>public facing site</span> to represent an <span>EMS services startup</span></p>}
                            />

                        <DesignBtn
                            id="2" 
                            name="Personal Site"
                            link="/designs/personal"
                            img={PERSONAL}
                            scroll={true}
                            desc={<p>A <span>personal website</span> for a <span>student developer</span></p>}
                            />

                        <DesignBtn
                            id="3" 
                            name="Bites"
                            link="/designs/bites"
                            img={BITES}
                            scroll={false}
                            desc={<p>A <span>financial literacy app</span> for <span>college students</span></p>}
                        />

                        <DesignBtn
                            id="4" 
                            name="Miscellaneous"
                            link="/designs/misc"
                            img={QUESTIFY}
                            scroll={false}
                            desc={<p>Smaller projects such as stickers, flyers, and hackathon projects</p>}
                        />
                    
                    </div>
                </div>
            </div>
            <Footer page="designs" />
        </>
    );
}

export default Designs;