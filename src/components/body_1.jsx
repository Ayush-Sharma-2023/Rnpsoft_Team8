import style from "./body_1.module.css"
import { PiArrowArcLeftThin} from "react-icons/pi";

function Body_1() {
    return (
        <>
            <div className={style.backgr}>
                <div className={style.glow_circle}></div>
                <div className={style.glow_circle_effect}></div>
                <div className={style.anchor}></div>
                <div className={style.arrow}></div>
                <div className={style.anchor_text}>Hello! I Am <span>Ms Kalinga AI</span></div>
                <div className={style.anchor_info1}>Meet <span>Ms Kalinga</span> AI</div>
                <div className={style.anchor_info2}>First Artificial Intelligence News Anchor In Kalinga TV Digital</div>
                <div className={style.rnp_info}>At RnPsoft, we pride ourselves on our innovative solutions
                    tailored to your unique requirements. Our team of expert
                    developers and engineers are committed to turning your vision
                    into reality. Whether you need robust software to streamline
                    your business processes or intuitive applications to engage. </div>
                    {/* <a id="Home"></a> */}
            </div>
            
        </>
    )
}

export default Body_1;