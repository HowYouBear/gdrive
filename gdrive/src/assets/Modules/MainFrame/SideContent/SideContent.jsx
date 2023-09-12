import style from "./SideContent.module.scss"

function SideContent(){
    return(
        <div className={style.sideContentFrame}>
            <button>Upload New File</button>
            <nav>
                <div>
                    <i class="fa-regular fa-compass"></i>
                    My drive
                </div>
                <div>
                    <i class="fa-solid fa-display"></i>
                    Computer
                </div>
                <div>
                    <i class="fa-solid fa-users-line"></i>
                    Shared with me
                </div>
                <div>
                    <i class="fa-regular fa-clock"></i>
                    Recent
                </div>
                <div>
                     <i class="fa-solid fa-star"></i>
                    Starred
                </div>
                <div>
                    <i class="fa-solid fa-trash"></i>
                    Trash
                </div>
                <div>
                    <i class="fa-solid fa-arrow-rotate-left"></i>
                    Backups
                </div>

            </nav>
        </div>
    )
}

export default SideContent;