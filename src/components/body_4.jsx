import style from "./body_4.module.css";
import skillsImage from "../images/Skills.png";

function Body_4() {
  return (
    <>
      <div className={style.backgr}>
        <br />
        <br />
        <div className={style.title}>How it works? </div>
        <br />
        <div className={style.info}>
          First Artificial Intelligence News Anchor In Kalinga TV Digital,First
          Artificial Intelligence News Anchor In Kalinga TV Digital<br />
          First Artificial Intelligence News Anchor In Kalinga TV Digital,First
          Artificial Intelligence News Anchor In Kalinga TV Digital
        </div>
        <br />
        <br />

        <div className={style.image_container}>
          <img src={skillsImage} alt="Skills" className={style.image} />
        </div>


        <div className={style.button_c}>
        <button className={style.button}> Learn more</button>
      </div>
        


      </div>
    
    </>
  );
}

export default Body_4;
