import "../../styles/components/designbtn.scss"
import "../../styles/globals.scss";

const DesignBtn = (props) => {
    return (
        <>
            <a className="design-btn" href={props.link}>
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