import React, { useState } from 'react';
import './style.css';

export default function SignUp() {
  return (
    <div className="container">
      <h1>SignUp Form</h1>
      <label>FirstName</label>
      <input type="text" placeholder="First Name..." />
      <label>LastName</label>
      <input type="text" placeholder="First Name..." />
    </div>
  );
}
