import React from 'react';
import { Link, useLoaderData } from 'react-router';

const UserDetails = () => {

    const user = useLoaderData()
    const {name, username, email, address, phone, website} = user
    console.log(user);

    return (
        <div>
            <h1>{name}</h1>
            <p>people call {username}</p>
            <p>Email : {email}</p>
            <p>Phone: {phone} </p>
            <p>Website {website}</p>
            <p>Address : {address.street}/{address.suite}/{address.city}</p>
            <Link to={"/users"}>
                <button className='m-5'>go back</button>
            </Link>
        </div>
    );
};

export default UserDetails;