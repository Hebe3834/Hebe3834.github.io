import "../styles/designs.scss";
import "../styles/globals.scss";
import Header from "./Header";
import Footer from "./Footer";
import PERSONAL from "../assets/personal-site.png";
import RAFI from "../assets/rafi_mockup.png";
import QUESTIFY from "../assets/questify.png";
// import IRIS from "../assets/project-iris.png";

const Designs = () => {
    return (
        <>
            <Header page="designs" />
            <div className="Design">
                <div className="content">

                    <div className="designs">
                        <h2>Design Work</h2>
                        <div className="designs-grid">
                        <a className="design" href="https://github.com/Hebe3834/Hebe3834.github.io">
                            <div className="scale-box">
                            <img src={PERSONAL} alt="Design 1" />
                            </div>
                            <div className="blur"></div>
                            <p>A <span>personal website</span> for a <span>student developer</span></p>
                            <h3>Personal Website</h3>
                        </a>
                        <a className="design" href="#">
                            <div className="scale-box">
                            <img src={RAFI} alt="Design 2" />
                            </div>
                            <div className="blur"></div>
                            <p>An <span>online portfolio</span> for an <span>independent artist</span></p>
                            <h3>Rafi's Portfolio</h3>
                        </a>
                        <a className="design" href="#">
                            <div className="scale-box">
                            <img src={QUESTIFY} alt="Design 3" />
                            </div>
                            <div className="blur"></div>
                            <p>A gamified <span>workout</span> and <span>fitness interface</span></p>
                            <h3>Questify</h3>
                        </a>


                        {/* 
                        
                        pulse (HUGS hackathon project)
                        cadmus public page
                        personal website
                        pantryaide*
                        ithaca tshirts
                        questify / solo leveling *
                        rafi portfolio design
                        website builder*
                        gsa hackathon screens*
                        lettuce cook*
                        empathy bytes mobile and web
                        misc: empathy bytes avatar screen, Design Club S24 Weekly Design Challenges
                        red barn web team mockups (very bad, random parallelograms)
                        red barn mockups in procreate, more creative
                        About me v1 wireframe and mockup
                        wecracked stuff
                        sunny side up stickers


                        
                        */}
                        
                        </div>
                    </div>
                </div>
            </div>
            <Footer page="designs" />
        </>
    );
}

export default Designs;