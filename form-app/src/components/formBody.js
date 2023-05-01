import React from 'react'
import '../style/formBody.css'
import image from '../images/shecodes.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'

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
          <label>First Name</label>
          <FontAwesomeIcon icon={faUser} className='icon'/>
          <input
            class="input-field"
            type="text"
            placeholder="Enter First Name"
          />
        </div>
        <div class="input-icons">
          <label>Last Name</label>
          <FontAwesomeIcon icon={faUser} className='icon' />
          <input
            class="input-field"
            type="text"
            placeholder="Enter last Name"
          />
        </div>
        <div class="input-icons">
          <label>Phone Number</label>
          <FontAwesomeIcon icon={faPhone} className='icon'/>
          <input
            class="input-field"
            type="text"
            placeholder="Enter Phone Number"
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
          <label>Password</label>
          <FontAwesomeIcon icon={faLock} className='icon'/>
          <input
            class="input-field"
            type="password"
            placeholder="Enter Password"
          />
        </div>
        <button class="btn"><a href=""></a>Sign Up</button>
      </form>
    </div>
  </div></div>
  )
}

export default FormBody