import style from "./navbar.module.css"

function Navbar(){

    return(<>
    <div className={style.navbar}>
        <div className={style.rnp_logo}></div>
        <div className={style.contact_info}>
            <div className={style.contact_info_content}><p>Products</p></div>
            <div className={style.contact_info_content}><p>Our Services</p></div>
            <div className={style.contact_info_content}><p>Events</p></div>
            <div className={style.contact_info_content}><p>Our Teams</p></div>
            <div className={style.contact_info_content}><p>Careers</p></div>
            <button className={style.contact_info_button}>Contact us</button>
        </div>
    </div>
    </>)
}

export default Navbar;