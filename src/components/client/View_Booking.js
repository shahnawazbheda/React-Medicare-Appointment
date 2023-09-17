import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const View_Booking = () => {

    const [data, setData] = useState([])
    function getData() {
        axios.get('https://645520dbf803f345763b3578.mockapi.io/Crud-appointment')
            .then((res) => {
                console.log(res.data);
                setData(res.data)

            });
    }

    function handleDelete(id) {
        axios.delete(`https://645520dbf803f345763b3578.mockapi.io/Crud-appointment/${id}`
        ).then(() => {
            getData();
        })
    }

    const setToLocalStorage = (id, name, email, phone, date, message) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("phone", phone);
        localStorage.setItem("date", date);
        localStorage.setItem("message", message);

    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <>

            <div className="container m-5">
                <div className='d-flex justify-content-between m-5' >
                    <h2 className="text-center mb-lg-3 mb-2">View Appointment</h2>
                    
                    <Link to="/booking">
                        <button className='btn btn-secondary'>Add Appointment</button>
                    </Link>
                </div>

                <table class="table m-5">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Date</th>
                            <th scope="col">Message</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    {
                        data.map((eachData) => {

                            return (
                                <>
                                    <tbody>
                                        <tr>
                                            <th scope="row">{eachData.id}</th>
                                            <td>{eachData.name}</td>
                                            <td>{eachData.email}</td>
                                            <td>{eachData.phone}</td>
                                            <td>{eachData.date}</td>
                                            <td>{eachData.message}</td>
                                            <Link to="/update">
                                                <td><button className='btn btn-success' onClick={() => setToLocalStorage
                                                    (eachData.id,
                                                        eachData.name,
                                                        eachData.email,
                                                        eachData.phone,
                                                        eachData.date,
                                                        eachData.message)}>Edit</button></td>
                                            </Link>

                                            <td><button className='btn btn-danger' onClick={() => handleDelete(eachData.id)}>Delete</button></td>


                                        </tr>

                                    </tbody>

                                </>
                            )

                        })

                    }
                </table>
            </div>
        </>
    )
}

export default View_Booking