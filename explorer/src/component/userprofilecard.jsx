import React from 'react';
import './UserProfileCard.css';

function UserProfileCard({ name, email, profilePicture, phone, address, company, website }) {
    return (
        <div className="user-profile-card">
            <img className="profile-picture" src={profilePicture} alt={`${name}'s profile`} />
            <h3 className="user-name">{name}</h3>
            <p className="user-address">{address}</p>
            <p className="user-phone">{phone}</p>
            <p className="user-email">{email}</p>
            <p className="user-company">{company}</p>
            <p className="user-website"><a href={website} target="_blank" rel="noopener noreferrer">{website}</a></p>
        </div>
    );
}

export default UserProfileCard;
