import style from "./msAiAnchor.module.css";
import kalingaVideo from "../images/kalinga_ai.mp4";


function msAiAnchor() {
  return (

    <>
    
      <div className={style.backgr}>
        <br />
        <br />
        <div className={style.Demo}>Meet Ms. Kalinga : Your  AI News Anchor</div>
        <br />
        <div className={style.info}>
          
"Experience the future of news delivery with Ms. Kalinga, our state-of-the-art AI news anchor. From real-<br/>
time updates to multilingual reporting, Ms. Kalinga brings cutting-edge technology to your newsroom,<br/> providing accurate and engaging news coverage tailored to your audience. Explore her dynamic<br/> features and see how she can revolutionize the way you broadcast."

          
        </div>
        <br />
        <br />

        <div className={style.video_container}>
          <video autoPlay loop muted controls className={style.video}>
            <source src={kalingaVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
        </div>

        
      </div>
    </>
  );
}

export default msAiAnchor;
