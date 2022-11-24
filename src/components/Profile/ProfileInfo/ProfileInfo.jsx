import React from 'react';
import s from './ProfileInfo.module.css';
import Loader from "../../../Loader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Loader/>
    }
    return (
        <div>
            <div className={s.avatar}>
                <img src={props.profile.photos.large}/>
                    </div>
            <div className={s.descriptionBlock}>
                {props.profile.fullName}
            </div>
            <div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;