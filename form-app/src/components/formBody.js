import React, { useState } from 'react'
import '../style/formBody.css'
import image from '../images/shecodes.jpg'
import axios from "axios"
import {nanoid} from "nanoid"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapPin, faUser } from '@fortawesome/free-solid-svg-icons'

const FormBody = () => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const handelChange = (event) => {
        setForm({
            ...form,
            [event.target.id]: event.target.value,
        });
    };

const handelSubmit = (event) => {
    const post = {
        id: nanoid(),
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message
    };
    axios.post(`https://my-json-server.typi.com/tundeojediran/contacts-api-server/inquiries`, post)
        .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        });
    setForm({
        name: '',
        email: '',
        message: ''
    })
    alert('Submission Successful!')
}

return (
    <div><div className="bodyy">
        <div className="left_body">
            <div className="left_content">
                <img src={image} alt="" />
            </div>
        </div>
        <div className="right_body">
            <h2>Contact Us</h2>
            <form onSubmit={handelSubmit} action="" className="inline">
                <div className="input-icons">
                    <label htmlFor='name'>Name</label>
                    <FontAwesomeIcon icon={faUser} className='icon' />
                    <input
                        id='name'
                        onChange={handelChange}
                        value={form.name}
                        className="input-field"
                        type="text"
                        placeholder="Enter Name"

                    />
                </div>
                <div className="input-icons">
                    <label htmlFor='email'>Email Address</label>
                    <FontAwesomeIcon icon={faEnvelope} className='icon' />
                    <input
                        id='email'
                        onChange={handelChange}
                        value={form.email}
                        className="input-field"
                        type="email"
                        placeholder="Enter Email Address"
                    />
                </div>
                <div className="input-icons">
                    <label htmlFor='subject'>Subject</label>
                    <FontAwesomeIcon icon={faMapPin} className='icon' />
                    <select id="subject" className="input-field" placeholder="Subject" onChange={handelChange} value={form.subject}>
                        <option>Select a Subject</option>
                        <option>Call Back</option>
                        <option>Discussion</option>
                        <option>Consultation</option>
                        <option>Schedule a Physical Meeting</option>
                    </select>
                </div>
                <div className="input-icons">
                    <label htmlFor='message'>Message</label>
                    <FontAwesomeIcon icon={faEnvelope} className='icon' />
                    <textarea
                        id='message'
                        onChange={handelChange}
                        value={form.message}
                        className="input-field"
                        type="text"
                        placeholder="Your Message"
                    />
                </div>

                <button type='submit' className="btn">Submit</button>
            </form>
        </div>
    </div></div>
)
};

export default FormBody;