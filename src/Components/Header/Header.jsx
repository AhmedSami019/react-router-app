import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <h3>This header section</h3>
            <div className='gap-10'>
                <NavLink className="mx-2" to="/">Home</NavLink>
                <NavLink className="mx-2" to="/mobiles">Mobile</NavLink>
                <NavLink className="mx-2" to="/laptops">Laptop</NavLink>
                <NavLink className="mx-2" to="/users">Users</NavLink>
            </div>
        </div>
    );
};

export default Header;