import React from 'react';
import "./styles.css";
import Navbar from './components/navbar';

const Header = () => {
  return (
    <>
      <Navbar />
      <div className='article'>
        <img className='articlepic' src='Feedbackcrop.jpg' alt='logo' />
        <div className='section'>
          <div className='form1' style={{ color: "white" }}>
            <div className='share'>
              Share your feedback
            </div>
            <br />
            <div className='para2'>
              We would love to hear your thoughts or feedbacks on how can improve your <br />
              experience using Creat!
            </div>
          </div>
          <form className='form2'>
            <input className='input' type="text" placeholder='Your full name' />
            <br></br>
            <input className='input' type="text" placeholder='Your Email Address' />
            <br></br>
            <input className='input' type="text" placeholder='Select Subject' />
            <br></br>
            <textarea className='input1'>
              Feedback
            </textarea><br></br>
            <textarea className='input1'>
              If available, please include the Creat url that demonstrates the content or bug you're reporting
            </textarea><br></br>
            <button className='input2'>Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Header;






