import React from 'react';
import userStack from '../hooks/Userstack';

const ManageUser = () => {
    const [cart] = userStack()
    return (
        <div>
            {cart.length}
        </div>
    );
};

export default ManageUser;