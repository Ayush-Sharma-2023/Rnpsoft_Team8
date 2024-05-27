import style from "./multilingual.module.css";
import kalingaVideo from "../images/kalinga_ai.mp4";
function multilingual()
{
    return (
        <>
        <div className={style.backgr}>
            <div className={style.container}>
                <h1>Ms Kalinga Is Multilingual</h1>
                <p>You will be shocked to know the fact that Ms Kalinga can<br />   speak  Hindi, Odia and English pretty well.</p><br />
                <p>You will be shocked to know the fact that Ms Kalinga can<br /> speak  Hindi, Odia and English pretty well. You will be<br /> shocked to know the fact that Ms Kalinga can speak  Hindi,<br /> Odia and English pretty well.</p>
            </div>

            <br/ ><br/ ><br/ ><br/ ><br/ ><br/ ><br/ ><br/ ><br/ ><br/ >

            <div className={style.video_container}>

                <a href="https://youtu.be/ysTSjxpc8f8?feature=shared" target="blank">
                <video autoPlay loop muted controls className={style.video}>
            <source src={kalingaVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
                </a>
                <a href="https://youtu.be/ysTSjxpc8f8?feature=shared" target="blank">
                <video autoPlay loop muted controls className={style.video}>
            <source src={kalingaVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
                </a>
                <a href="https://youtu.be/ysTSjxpc8f8?feature=shared" target="blank">
                <video autoPlay loop muted controls className={style.video}>
            <source src={kalingaVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
                </a>
            


          
        </div>

            
            
        </div>


        
        </>
    )
}

export default multilingual;