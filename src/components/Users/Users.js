import React, { useEffect } from 'react';
import { useState } from 'react';
import User from './User';


const Users = () => {

    const [users, setUsers] = useState([])
    console.log(users);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div class="my-4 mx-4 p-3 ">
            {/* <UserDetails></UserDetails> */}

            <table className="table  w-full">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>City</th>

                        <th>view</th>
                    </tr>
                </thead>

                <tbody className=''>
                    {
                        users.map((data, index) =>
                            <User
                                data={data}
                                index={index}
                                key={data.id}>
                            </User>)
                    }
                </tbody>

            </table >

        </div >
    );
};

export default Users;