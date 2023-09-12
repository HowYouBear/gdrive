import style from "./Header.module.scss";

import logo from "../../../Images/logo.svg"
import UserIconDefault from "../UserIconDefault/UserIconDefault";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header (){
    return(
        <>
        <div className={style.headerMainFrame}>
            <div>
                <img src={logo} alt="Gdrive logo" className={style.logo}/>
                <p className={style.headerTitle}>Google Drive</p>
            </div>
            <div className={style.headerInputField}>
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" name="" id="" placeholder="Search Drive ..."/>
            </div>
            <div className={style.headerButtons}>
                <div className={style.notificationArea}>
                    <p className={style.notificationValue}>12</p>
                    <i class="fa-regular fa-bell"></i>
                </div>
                <div className={style.iQuestionMark}>
                    <i class="fa-solid fa-question"></i>
                </div>
                <i class="fa-solid fa-gear"></i>
            </div>
            <div className={style.headerUser}>
                <p>Sebastien</p>
                <UserIconDefault color="blue" letter="s"/>
            </div>
            <BurgerMenu/>
        </div>
        </>
    )
}

export default Header;