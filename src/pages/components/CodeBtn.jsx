import "../../styles/components/codebtn.scss";
import "../../styles/globals.scss";
import { useNavigate } from "react-router-dom";

const CodeBtn = (props) => {
    const navigate = useNavigate();

    return (
        <>
            <a className="codeBtn" onClick={async () => navigate(props.link)}>
                <h3 className="title">{props.name}</h3>
                <div className="scale-box">
                    <img src={props.img} alt={"Project " + props.id} className={props.scroll ? "scroll" : ""}/>
                    <div className="tags">
                        {props.tags.map((tag) => {
                            // if (tag === "React") {
                            //     return <p className="lang">{tag}</p>;
                            // }
                            if (["React", "Android\nStudio", "Java", "Python"].includes(tag)) {
                                return <p className="lang">{tag}</p>;
                            } else if (["CSS", "SCSS"].includes(tag)) {
                                return <p className="web">{tag}</p>;
                            } else {
                                return <p className="db">{tag}</p>;
                            }
                            // <p className="db">test</p>
                        })}
                        {/* <p className="lang">React</p> */}
                        {/* <p className="web">CSS</p> */}
                    </div>
                </div>
                <div className="desc">
                    {props.desc}
                    {/* <h3>{props.name}</h3> */}
                </div>
                {/* <div className="tags">
                    <p className="lang">React</p>
                    <p className="web">CSS</p>
                </div> */}
            </a>
        </>
    )
}

export default CodeBtn;