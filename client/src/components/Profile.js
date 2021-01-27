import React from 'react';
import UserImg from '../user.png';
import InfoCard from './Card';

function Profile() {
    return (
        <div className="user-profile">
            <div className="row-1">
                <img className="profile-pic" src={UserImg} alt="random text about pic"/>
            </div>
            <div className="row-2" id="name-box">
                Name
            </div>
            <div className="row-3" id="profile-bio">
                <p>Location</p>
                <p>About me, including type of rental gear</p>
            </div>
            <div className="row-4" id="item-box">
                <InfoCard />
                <InfoCard />
            </div>
        </div>
    )
}

export default Profile;