import "../../styles/components/designbtn.scss"
import "../../styles/globals.scss";
import { useNavigate } from "react-router-dom";

const DesignBtn = (props) => {
    const navigate = useNavigate();

    return (
        <>
            <a className="design-btn" onClick={async () => navigate(props.link)}>
                <div className="scale-box">
                    <img src={props.img} alt={"Design " + props.id} className={props.scroll ? "scroll" : ""}/>
                </div>
                <div className="blur"></div>
                {props.desc}
                <h3>{props.name}</h3>
            </a>
        </>
    )
}

export default DesignBtn;