import style from "./MainFrame.module.scss"
import SideContent from "./SideContent/SideContent";

function MainFrame(){
    return(
        <>
        <div className={style.mainFrame}>
            <div className={style.sideContent}>
                <SideContent/>
            </div>
            <div className={style.mainContentn}>

            </div>
        </div>
        </>
    )
}

export default MainFrame;