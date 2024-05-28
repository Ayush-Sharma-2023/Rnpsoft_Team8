import style from "./navbar.module.css"

function Navbar({ onContactClick }){ // { onContactClick } remove if 

    return(<>
    <div className={style.navbar}>
        <div className={style.rnp_logo}></div>
        <div className={style.contact_info}>
            <div className={style.contact_info_content}><p><a href="#Home">Home</a></p></div>
            <div className={style.contact_info_content}><p><a href="#whyAI">WhyAI</a></p></div>
            <div className={style.contact_info_content}><p><a href="#Demo">Demo</a></p></div>
            {/* <div className={style.contact_info_content}><p>Our Teams</p></div> */}
            <div className={style.contact_info_content}><p><a href="#Features">Features</a></p></div>
            <button className={style.contact_info_button} onClick={onContactClick} >Contact us</button> 
            {/* onClick={onContactClick} */}
        </div>
        <button className={style.dropDown}><i class="fa-solid fa-bars"></i></button>
    </div>
    </>)
}

export default Navbar;