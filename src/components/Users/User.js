import React from 'react';
import { useNavigate } from 'react-router-dom';

const User = ({ data, index }) => {
    const { name, email, phone } = data;
    const navigate = useNavigate();
    console.log();

    const navigateUserDetails = (id) => {
        navigate(`/userDetails/${id}`);
    }

    return (
        <>
            <tr className=' bg-red-400 important'>

                <td className='mx-2 my-5 py-2 bg-red-4' >{index + 1}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{data.address.city}</td>

                <td>
                    <button className='btn btn-md bg-green-400 font-bolt hover:bg-purple-700 border-none text-black'
                        onClick={() => navigateUserDetails(data.id)}>See details</button>
                </td>

            </tr>
        </>
    );
};

export default User;