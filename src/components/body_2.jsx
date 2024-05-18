import style from "./body_2.module.css";
import { RiNurseLine } from "react-icons/ri";
import { RiMicroscopeLine } from "react-icons/ri";
import { RiTodoLine } from "react-icons/ri";
import { MdOutlineFolderCopy } from "react-icons/md";
import { RiTwitchLine } from "react-icons/ri";
import { RiGlobalLine } from "react-icons/ri";








function Body_2() {
  return (
    <>
      <div className={style.backgr}>
        <br></br>
        <div className={style.Features}>Features</div>
        <br />
        <br />
        <br />
        <br />

        <div className={style.Features_Container}>
          <div className={style.box}>
            {/* <div className={style.logo}><RiNurseLine /></div> */}
            <div className={style.title}><RiNurseLine /> For Students</div>
            <div className={style.info}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
              libero atque rem commodi, pariatur voluptatum.
            </div>
          </div>

          <div className={style.box}>
            <div className={style.title}> <RiMicroscopeLine /> For Researchers</div>
            <div className={style.info}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
              libero atque rem commodi, pariatur voluptatum.
            </div>
          </div>

          <div className={style.box}>
            <div className={style.title}> <RiTodoLine /> For Professionals</div>
            <div className={style.info}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
              libero atque rem commodi, pariatur voluptatum.
            </div>
          </div>

          <div className={style.box}>
            <div className={style.title}> <MdOutlineFolderCopy /> Multi-File Chats</div>
            <div className={style.info}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
              libero atque rem commodi, pariatur voluptatum.
            </div>
          </div>

          <div className={style.box}>
            <div className={style.title}> <RiTwitchLine /> Cited Sources</div>
            <div className={style.info}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
              libero atque rem commodi, pariatur voluptatum.
            </div>
          </div>

          <div className={style.box}>
            <div className={style.title}><RiGlobalLine /> Any Language</div>
            <div className={style.info}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
              libero atque rem commodi, pariatur voluptatum.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body_2;
