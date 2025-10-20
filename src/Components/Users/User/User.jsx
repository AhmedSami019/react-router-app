import React from 'react';

const User = ({user}) => {

    const {name, email, website, phone} = user

    return (
        <div className='border-2 m-5 rounded-2xl' >
            <h2 className='text-2xl font-bold'>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>website: {website}</p>
        </div>
    );
};

export default User;