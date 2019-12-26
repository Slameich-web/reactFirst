import React from 'react'
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from "./Profileinfo/Profileinfo"
const Profile = (props) => {
      return (
          <div className={s.window}>
                         <ProfileInfo savePhoto={props.savePhoto}
                         isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         saveProfile={props.saveProfile}
                         updateStatus={props.updateStatus}/>
                <MyPostsContainer />
          </div>
      )
  }
  export default Profile;