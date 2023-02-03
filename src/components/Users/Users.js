import React, { useEffect } from 'react';
import { useState } from 'react';
import User from './User';


const Users = () => {


    // pagination
    // const userCount = users.length;
    // console.log(userCount)
    const [users, setUsers] = useState([])

    const [count, setCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1);
    const [userPerPage, setUserPerPage] = useState(3);

    const pages = Math.ceil(count / userPerPage);
    console.log(pages);

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(data => {
                setCount(data.length)
                setUsers(data)
            })
    }, [])

    //Get current userData
    const indexOfLastPost = currentPage * userPerPage;
    const indexOfFirstPost = indexOfLastPost - userPerPage;
    const currentUser = users.slice(indexOfFirstPost, indexOfLastPost)

    // const currentUser = users.skip(currentPage * userPerPage).limit(userPerPage).toArray()


    return (
        <div class="my-4 mx-4 p-3 ">
            {/* <UserDetails></UserDetails> */}

            <table className="table  w-full">
                <thead>
                    <tr className='bg'>
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
                        // users.map((data, index) =>
                        currentUser.map((data, index) =>
                            <User
                                data={data}
                                index={index}
                                key={data.id}>
                            </User>)
                    }
                </tbody>

            </table >

            {/* pagination */}
            <div className="pagination flex justify-center">
                {/* <p>Current selected page: {currentPage} </p> */}
                {
                    [...Array(pages).keys()].map(num =>
                        // console.log(num);
                        <button
                            onClick={() => setCurrentPage(num + 1)}
                            className={currentPage === num ? 'bg-yellow-500 btn border-none ml-3 px-6 text-black' : "btn ml-2 hover:none bg-green-500 text-black border-none font-bold"}
                            key={num}

                        >
                            {num + 1}
                        </button>
                    )
                }
                <select
                    className=' text-black border-none font-bold'
                    onChange={event => setUserPerPage(event.target.value)}
                >
                    <option value="3" selected>3</option>
                    <option value="6">6</option>
                    <option value="10">10</option>
                    {/* <option value="5">20</option> */}
                </select>
            </div>

        </div >
    );
};

export default Users;