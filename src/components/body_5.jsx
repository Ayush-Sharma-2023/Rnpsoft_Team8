import style from "./body_5.module.css";
import earthImage from "../images/Earth.png";


function Body_5() {
    return (
        
        <>
        <div className={style.backgr}>
        <br />
        <br />
        <div className={style.faq}>FAQs </div>
        <br />
        <div className={style.text}>Ask us <span>anything</span></div>
        <br />
        <br />
        <div className={style.faq}>Have any questions? We're here to assist you. </div><br/><br/><br/><br/><br/><br/>
        <div className={style.question}> <input type="text" placeholder="Ask us anything" className={style.question_box}></input></div>

        <div className={style.image_container}>
          <img src={earthImage} alt="Earth" className={style.image} />
        </div>





      </div>
        
        
        
        </>

    );
}

export default Body_5;