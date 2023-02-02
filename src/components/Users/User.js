import React from 'react';
import { useNavigate } from 'react-router-dom';

const User = ({ data, index }) => {
    const { name, email, phone } = data;
    const navigate = useNavigate();
    console.log();

    const navigateUserDetails = (id) => {
        navigate(`/userDetails/${id}`);
        // navigate('/userDetails')
    }
    return (
        <>
            <tr className='mx-2 my-5 py-2'>

                <td>{index + 1}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{data.address.city}</td>

                <td>
                    <button className='btn bg-green-300 text-black'
                        onClick={() => navigateUserDetails(data.id)}>See details</button>
                </td>

            </tr>
        </>
    );
};

export default User;