import style from "./UserIconDefault.module.scss";

function UserIconDefault(data){
    return(
        <div className={data.color + " " + style.backgroundUser}>
            {data.letter}
        </div>
    )    
    }

export default UserIconDefault;