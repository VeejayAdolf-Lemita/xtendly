import { useState } from 'react';
import './App.css';
import Banner from './assets/banner 1.png'


function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name)
    console.log(email)
    // We can see on the console that we are getting the value when we submit
  }

  return (
    <div className="hero-container">\
      <div className='banner-image'>
        <img src={Banner} alt="banner"/>
      </div>
      <div className="relative-parent">
        <div className='form-wrapper'>
          <div className='title-container'>
            <h2>SCHEDULE A DEMO</h2>
            <p>Learn More About FloQast</p>
          </div>
          <div className='triangle-form__container'>
            <div className="triangle"></div>
            <form onSubmit={handleSubmit}>
              <div className="form-title">
                <h2>Learn How FloQast Can <span>Improve Your Month-End</span></h2>
              </div>
              <div className='inputs'>
                <input type="text" placeholder='First Name*' value={name} onChange={e => setName(e.target.value)} required/>
                <input type="email" placeholder='Email*' value={email} onChange={e => setEmail(e.target.value)} required/>
                <button type="submit">SCHEDULE NOW</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
