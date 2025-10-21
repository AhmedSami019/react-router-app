import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {

    const {id, name, email, website, phone} = user

    return (
        <div className='border-2 m-5 rounded-2xl p-5' >
            <h2 className='text-2xl font-bold'>{name}</h2>
            <p>this is user number {id}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>website: {website}</p>
            <Link to={`/users/${id}`}>
                <button className='m-3'>show details</button>
            </Link>
        </div>
    );
};

export default User;