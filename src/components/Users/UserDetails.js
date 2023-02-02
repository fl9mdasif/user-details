import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UserDetails = () => {
    const { userID } = useParams();
    const navigate = useNavigate()
    const [users, setUsers] = useState([]);

    const { id, name, email, phone, website } = users;


    console.log('details', users.name);
    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [userID])

    const navigateUsers = () => {
        navigate('/users')
    }

    return (
        <div className='m-10 bg-white p-5'>
            <p className="text-gray-700 mt-2">ID: {id}</p>

            <h1 className="text-xl font-bold mt-6">Name: {name}</h1>
            <p className="text-gray-700 mt-2">Email: {email}</p>
            <p className="text-gray-700 mt-2">Phone: {phone}</p>
            <p className="text-gray-700 mt-2">Website: {website}</p>
            {/* <p className="text-gray-700 mt-2">Company: ${users.address.city}</p> */}
            <p className="text-gray-700 mt-2">Email: {email}</p>

            <button className='btn bg-red-500 my-5 text-white'
                onClick={() => navigateUsers()}>All Users</button>
        </div>
    );
};

export default UserDetails;