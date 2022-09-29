import React, { useState } from 'react';
import './style.css';

export default function SignUp() {
  return (
    <div className="container">
      <h1>SignUp Form</h1>
      <label>FirstName</label>
      <input type="text" placeholder="First Name..." />
      <label>LastName</label>
      <input type="text" placeholder="Last Name..." />
      <label>PhoneNumber</label>
      <input type="text" placeholder="Phone Number..." />
      <label>Email</label>
      <input type="text" placeholder="Email..." />
      <label>Password</label>
      <input type="text" placeholder="Password ..." />
      <label>Confirm Password</label>
      <input type="text" placeholder="Confirm Password..." />
      <button>SignUp</button>
    </div>
  );
}
