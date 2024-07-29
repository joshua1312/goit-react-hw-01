import css from "./FriendList.module.css"
import clsx from "clsx";
const FriendListItem = ({
    avatar, name, isOnline
}) => {
    return (
        <div>
            <img src={avatar} alt="Avatar" width="48" />
            <p>{name} </p>
            <p className={clsx(css.status, {
                [css.online]: isOnline === true,
                [css.offline]: isOnline === false
            })}>{isOnline === true ? "Online" : "Offline"}</p>
        </div >
    );
};

export default FriendListItem;