import React from 'react'

const Navbar = () => {
  return (

    <div class="navbar" style={{ backgroundImage: "url(/galaxy.jpg)" }} >
      <img className='logo' src='Creat Logo Whte.png' alt='logo' />
      <div class="subnav">
        <button class="subnavbtn">Home <img className='arrow' src='white-down-arrow-icon-7.jpg' alt='arrow'/></button>
        <div className="subnav-content">
          <a href="#Pages">Pages</a>
          <a href="#team">Team</a>
          <a href="#careers">Careers</a>
        </div>
      </div>
      <div class="subnav">
        <button class="subnavbtn">Explore <img className='arrow' src='white-down-arrow-icon-7.jpg' alt='arrow'/></button>
        <div class="subnav-content">
          <a href="#bring">Bring</a>
          <a href="#deliver">Deliver</a>
          <a href="#package">Package</a>
          <a href="#express">Express</a>
        </div>
      </div>
      <div class="subnav">
        <button class="subnavbtn">Activity<img className='arrow' src='white-down-arrow-icon-7.jpg' alt='arrow'/></button>
        <div class="subnav-content">
          <a href="#link1">Link 1</a>
          <a href="#link2">Link 2</a>
          <a href="#link3">Link 3</a>
          <a href="#link4">Link 4</a>
        </div>
      </div>
      <div class="subnav">
        <button class="subnavbtn">Community<img className='arrow' src='white-down-arrow-icon-7.jpg' alt='arrow'/></button>
        <div class="subnav-content">
          <a href="#link1">Link 1</a>
          <a href="#link2">Link 2</a>
          <a href="#link3">Link 3</a>
          <a href="#link4">Link 4</a>
        </div>
      </div>
      <div class="subnav">
        <button class="subnavbtn">Pages<img className='arrow' src='white-down-arrow-icon-7.jpg' alt='arrow'/></button>
        <div class="subnav-content">
          <a href="#link1">Link 1</a>
          <a href="#link2">Link 2</a>
          <a href="#link3">Link 3</a>
          <a href="#link4">Link 4</a>
        </div>
      </div>
      <div class="subnav">
        <button class="subnavbtn">Contact<img className='arrow' src='white-down-arrow-icon-7.jpg' alt='arrow'/></button>
        <div class="subnav-content">
          <a href="#link1">Link 1</a>
          <a href="#link2">Link 2</a>
          <a href="#link3">Link 3</a>
          <a href="#link4">Link 4</a>
        </div>
      </div>
      <img className='bell' src='search.svg' alt='bell' />
      <button className='button'><img className='wallet' src='feedback.jpg' alt='bell' />Wallet connect</button>
      <div className='sqbtn'>
        <img className='square' src='square (1).svg' alt='bell' />
        <img className='moon' src='moon.svg' alt='bell' />
      </div>
      <div className='fb'>Feedback<br></br>Home / Pages /</div>
    </div>
  )
}
export default Navbar