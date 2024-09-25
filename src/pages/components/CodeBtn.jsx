import "../../styles/components/codebtn.scss";
import "../../styles/globals.scss";
import CADMUS from "../../assets/cadmus.png";


const CodeBtn = () => {
    return (
        <>
            <a className="codeBtn" href="https://www.cadmusanalytics.com/">
                <div className="scale-box">
                    <img src={CADMUS} alt="Project 3" />
                </div>
                <div className="overlayer">
                    <div className="tags">
                        <p className="lang">React</p>
                        <p className="web">CSS</p>
                    </div>
                </div>
                <div className="desc">
                    <p>A <span>public facing site</span> that introduces an <span>EMS services</span> startup</p>
                    <h3>Cadmus</h3>
                </div>
            </a>
        </>
    )
}

export default CodeBtn;