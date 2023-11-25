import React from 'react';
import {useSelector} from "react-redux";

const UserListPage = () => {
    const {userList} = useSelector(state => state.usersReducer)

    return (
        <div className='d-flex justify-content-center'>
            {userList.map((user) => (
                <div key={user.id} className='w-25'>
                    <p>Name: {user.name}</p>
                    <p>UserName: {user.username}</p>
                    <p>Email: {user.email}</p>
                </div>

            ))}
        </div>
    );
};

export default UserListPage;