import React, { useState } from 'react';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


export default function Booking() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [date, setDate] = useState("")
    const [message, setMessage] = useState("");

    const history = useNavigate()

    const header = { "Access-Control-Allow-Origin": "*" };
    const handleBoking = (e) => {
        e.preventDefault();
        console.log("Clicked");
        axios.post("https://645520dbf803f345763b3578.mockapi.io/Crud-appointment",
            {
                name: name,
                email: email,
                phone: phone,
                date: date,
                message: message,
                header,
            })

            .then(() => {
                history("/view_booking")
            });
    };
    return (
        <>
            <Header />
            <section className="section-padding" id="booking">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8 col-12 mx-auto">
                            <div className="booking-form">
                                <div className='d-flex justify-content-between'>
                                    <h2 className="text-center mb-lg-3 mb-2">Book an appointment</h2>
                                    <Link to="/view_booking">
                                        <button className='btn btn-primary'>Show Data</button>
                                    </Link>
                                </div>
                                <form role="form" action="#booking" method="post">
                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <input type="text" name="name"
                                                id="name"
                                                className="form-control"
                                                placeholder="Full name"
                                                required
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>

                                        <div className="col-lg-6 col-12">
                                            <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control"
                                                placeholder="Email address"
                                                required
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>

                                        <div className="col-lg-6 col-12">
                                            <input type="telephone" name="phone" id="phone"
                                                className="form-control"
                                                placeholder="Phone: 123-456-7890"
                                                onChange={(e) => setPhone(e.target.value)}
                                            />

                                        </div>

                                        <div className="col-lg-6 col-12">
                                            {/* <input type="date" name="date" id="date" value="onChange" placeholder='Enter Date' className="form-control"
                                                onChange={(e) => setDate(e.target.value)}
                                             /> */}
                                            <input type="date" name="begin"
                                                placeholder="dd-mm-yyyy" value=""
                                                min="1997-01-01" max="2030-12-31" className='form-control' />
                                        </div>

                                        <div className="col-12">
                                            <textarea className="form-control" rows="5"
                                                id="message"
                                                name="message"
                                                placeholder="Additional Message"
                                                onChange={(e) => setMessage(e.target.value)}
                                            ></textarea>
                                        </div>


                                        <div className="col-lg-3 col-md-4 col-6 mx-auto">
                                            <button type="submit" className="form-control" id="submit-button" onClick={handleBoking}>Book Now</button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <Footer />
        </>
    )
}
