import React from 'react';
import PropTypes from 'prop-types';
import './UserProfileCard.css';

function UserProfileCard({ name, email, profilePicture, phone, address, company }) {
    return (
        <div className="user-profile-card">
            <img className="profile-picture" src={profilePicture} alt={`${name}'s profile`} />
            <h3 className="user-name">{name}</h3>
            <p className="user-address">{address}</p>
            <p className="user-phone">{phone}</p>
            <p className="user-email">{email}</p>
            <p className="user-company">{company}</p>
        </div>
    );
}

UserProfileCard.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    profilePicture: PropTypes.string.isRequired,
    phone: PropTypes.string,
    address: PropTypes.string,
    company: PropTypes.string,
};

UserProfileCard.defaultProps = {
    phone: 'N/A',
    address: 'N/A',
    company: 'N/A',
};

export default UserProfileCard;
