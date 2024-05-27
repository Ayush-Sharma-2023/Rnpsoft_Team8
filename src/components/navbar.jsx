import style from "./navbar.module.css"

function Navbar(){

    return(<>
    <div className={style.navbar}>
        <div className={style.rnp_logo}></div>
        <div className={style.contact_info}>
            <div className={style.contact_info_content}><p>Home</p></div>
            <div className={style.contact_info_content}><p>WhyAI</p></div>
            <div className={style.contact_info_content}><p>Demo</p></div>
            {/* <div className={style.contact_info_content}><p>Our Teams</p></div> */}
            <div className={style.contact_info_content}><p>Features</p></div>
            <button className={style.contact_info_button}>Contact us</button>
        </div>
        <button className={style.dropDown}><i class="fa-solid fa-bars"></i></button>
    </div>
    </>)
}

export default Navbar;