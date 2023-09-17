import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Update = () => {

    const [id, setID] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        setID(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
        setPhone(localStorage.getItem("phone"));
        setDate(localStorage.getItem("date"));
        setMessage(localStorage.getItem("message"));
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://645520dbf803f345763b3578.mockapi.io/Crud-appointment/${id}`,
            {
                name: name,
                email: email,
                phone: phone,
                date: date,
                message: message,

            }
        ).then(() => {

            navigate("/view_booking");
        })


    };


    return (
        <>
            <div className="container">
                <div className="row">

                    <div className="col-lg-8 col-12 mx-auto">
                        <div className="booking-form">

                            <h2 className="text-center mb-lg-3 mb-2">Update an appointment</h2>

                            <form role="form" action="#booking" method="post">
                                <div className="row">
                                    <div className="col-lg-6 col-12">
                                        <input type="text" name="name"
                                            id="name"
                                            value={name}
                                            className="form-control m-3"
                                            placeholder="Full name"
                                            required
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>

                                    <div className="col-lg-6 col-12">
                                        <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control m-3"
                                            placeholder="Email address"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>

                                    <div className="col-lg-6 col-12">
                                        <input type="telephone" name="phone" id="phone"
                                            className="form-control m-3"
                                            placeholder="Phone: 123-456-7890"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />

                                    </div>

                                    <div className="col-lg-6 col-12">
                                        <input type="date" name="date" id="date" value={date} className="form-control m-3"

                                            onChange={(e) => setDate(e.target.value)}
                                        />

                                    </div>

                                    <div className="col-12">
                                        <textarea className="form-control m-3" rows="5"
                                            id="message"
                                            name="message"
                                            placeholder="Additional Message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                        ></textarea>
                                    </div>


                                    <div className="col-lg-3 col-md-4 col-6 mx-auto">
                                        <button type="submit" className="form-control btn btn-dark m-3" id="submit-button"
                                            onClick={handleUpdate}
                                        >Update</button>
                                    </div>

                                    <div className="col-lg-3 col-md-4 col-6 mx-auto">
                                        <Link to="/view_Booking"> 
                                            <button className='btn btn-info form-control m-3'>Back</button>
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Update