import style from "./navbar.module.css"

function Navbar(){

    return(<>
    <div className={style.navbar}>
        <div className={style.rnp_logo}></div>
        <div className={style.contact_info}>
            <div className={style.contact_info_content}>Products</div>
            <div className={style.contact_info_content}>Our Services</div>
            <div className={style.contact_info_content}>Events</div>
            <div className={style.contact_info_content}>Our Teams</div>
            <div className={style.contact_info_content}>Careers</div>
            <button className={style.contact_info_button}>Contact us</button>
        </div>
    </div>
    </>)
}

export default Navbar;