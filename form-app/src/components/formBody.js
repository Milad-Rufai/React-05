import React from 'react'
import '../style/formBody.css'
import image from '../images/shecodes.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faMapPin, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'

const FormBody = () => {
    return (
        <div><div class="bodyy">
            <div class="left_body">
                <div class="left_content">
                    <img src={image} alt="" />
                </div>
            </div>
            <div class="right_body">
                <h2>Create Account</h2>
                <form action="" class="inline">
                    <div class="input-icons">
                        <label>Name</label>
                        <FontAwesomeIcon icon={faUser} className='icon' />
                        <input
                            class="input-field"
                            type="text"
                            placeholder="Enter Name"
                        />
                    </div>
                    <div class="input-icons">
                        <label>Email Address</label>
                        <FontAwesomeIcon icon={faEnvelope} className='icon' />
                        <input
                            class="input-field"
                            type="email"
                            placeholder="Enter Email Address"
                        />
                    </div>
                    <div class="input-icons">
                        <label>Subject</label>
                        <FontAwesomeIcon icon={faMapPin} className='icon' />
                        <select id="" className="input-field" placeholder="Subject">
                            <option value="volvo">Call Back</option>
                            <option value="saab">Discussion</option>
                            <option value="fiat">Consultation</option>
                            <option value="audi">Schedule a Physical Meeting</option>
                        </select>
                    </div>
                    <div class="input-icons">
                        <label>Message</label>
                        <FontAwesomeIcon icon={faEnvelope} className='icon' />
                        <textarea
                            class="input-field"
                            type="text"
                            placeholder="Your Message"
                        />
                    </div>

                    <button class="btn"><a href=""></a>Sign Up</button>
                </form>
            </div>
        </div></div>
    )
}

export default FormBody