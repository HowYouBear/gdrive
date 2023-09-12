import style from "./BurgerMenu.module.scss";

function BurgerMenu(){
    return(
        <div className={style.mainFrameBurgerMenu}>
            <div className={style.styleBurgerMenu}></div>
        </div>
    )
}

export default BurgerMenu;