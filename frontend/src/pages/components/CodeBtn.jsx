import "../../styles/projects.scss";
import "../../styles/components/codebtn.scss";
import "../../styles/globals.scss";

const CodeBtn = (props) => {
    return (
        <>
            <a className="codeBtn" href={props.link}>
                <h3 className="title">{props.name}</h3>
                <div className="scale-box">
                    <img src={props.img} alt={"Project " + props.id} />
                    <div className="tags">
                        <p className="lang">React</p>
                        <p className="web">CSS</p>
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