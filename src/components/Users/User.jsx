import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
       <div className={styles.main}>
                <span>
                    <div>
                       <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={styles.userPhoto}/>
                       </NavLink>
                    </div>
                    <div>
                    {user.followed
                            ? <div className={styles.unfollow}><button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => { unfollow(user.id) }}>
                                Unfollow</button></div>
                            : <div className={styles.follow}><button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => { follow(user.id) }}>
                                      Follow</button></div>}

                    </div>
                </span>
                <span className={styles.status}>
                    <div>Name: {user.name}</div>
                    <div>Status: {user.status}</div>
                </span>
            </div>)
}

export default User; 