import style from "./multilingual.module.css";
import kalingaVideo from "../images/kalinga_ai.mp4";
import Marquee from "react-fast-marquee"
function multilingual() {
  return (
    <>
      <div className={style.backgr}>

        <div className={style.up_container}>

          <div className={style.solar}>
            <div className={style.vector}>

            </div>

            <div className={style.orbit}>
                <div className={style.logo}
                ></div>

            </div>

            
            <div className={style.orbit2}>
                <div className={style.logo2}
                ></div>

            </div>
            <div className={style.orbit3}>
                <div className={style.logo3}
                ></div>

            </div>
            <div className={style.orbit4}>
                <div className={style.logo4}
                ></div>

            </div>
            <div className={style.orbit5}>
                <div className={style.logo5}
                ></div>

            </div>
          </div>
          
          <div className={style.container}>7
            <h1>Features</h1>

            <p>
              You will be shocked to know the fact that Ms Kalinga can
              <br /> speak Hindi, Odia and English pretty well.
            </p>

            <br />

            <p>
              You will be shocked to know the fact that Ms Kalinga can
              <br /> speak Hindi, Odia and English pretty well. You will be
              <br /> shocked to know the fact that Ms Kalinga can speak Hindi,
              <br /> Odia and English pretty well.
            </p>

          </div>

          <br /><br /><br /><br /><br /><br /><br /><br />
        </div>

        {/* <div className="marquee"> */}

          <Marquee play speed={300}>
          

          
          <div className={style.featuresContainer}>

            <div className={style.feature}>
              <div className={style.text}>Feature 1</div>
            </div>

            <div className={style.feature}>
              <div className={style.text}>Feature 2</div>
            </div>
            
            <div className={style.feature}>
              <div className={style.text}>Feature 3</div>
            </div>

            <div className={style.feature}>
              <div className={style.text}>Feature 4</div>
            </div>
       


          </div>

          </Marquee>



        {/* </div> */}

      </div>
    </>
  );
}

export default multilingual;
