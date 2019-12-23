import React from 'react'
import './Profileinfo.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
      return <Preloader />
  }
  return <div className='content'>
        <div>
          <img src="https://avatars.mds.yandex.net/get-pdb/199965/2c352263-f04b-46fc-a2f6-6e4f1ec2cc82/s1200"></img>
        </div>
        <div className="descriptionBlock">
        <img src={props.profile.photos.large} />
          ava + description
        </div>
        </div>
  }
  export default ProfileInfo;