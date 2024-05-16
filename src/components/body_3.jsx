import style from "./body_3.module.css"
import kalingaVideo from '../images/kalinga_ai.mp4';


function Body_3() {
    return (
        <>
            <div className={style.backgr}>
            <br/><br/>
            <div className={style.Demo}>Watch a demo</div>
            <br/>
            <div className={style.info}>
                At RnPsoft, we pride ourselves on our innovative solutions ,<br />
                bfehhirier, erhehrereuryeuoy ehoahoo hoiwri  iuierierrer
            </div>
            <br/><br/>

            <video autoPlay loop muted className="video">
        <source src={kalingaVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
            
            
                
                
            </div>
        </>
    )
}

export default Body_3;