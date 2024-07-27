import css from "./Profile.module.css";

const Profile = ({
    name,
    tag,
    location,
    image,
    stats,
}) => {
    return (
        <div className={css.outline_Profile}>
            <div>
                <img
                    src={image}
                    alt="User avatar"
                />
                <p>{name}</p>
                <p>{tag}</p>
                <p>{location}</p>
            </div>

            <ul>
                <li>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>{stats.view}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div >
    );
};

export default Profile;
