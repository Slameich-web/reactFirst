import React from 'react'
import './Profile.css'
import MyPosts from './MyPosts/MyPosts';
import Profileinfo from "./Profileinfo/Profileinfo"
import MyPostsContainer from './MyPosts/MyPostsContainer';
const Profile = (props) => {

return <div className='content'>
      <Profileinfo/>
      <MyPostsContainer/>
      </div>
}
export default Profile;