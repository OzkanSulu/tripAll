import React from 'react'
import "./MailList.css"

export default function MailList() {
  return (
    <div className='mail'>
        <h1>
            Save time, save money!
        </h1>
        <h3>
            Sign up and we will send the best details to you!
        </h3>
        <form>
            <div className='mailText'>
            <input type="text" placeholder='Your email' />
            <button>Subscribe</button>
            </div>
            <div className='check'>
                <input type="checkbox"></input>
                <span>Send me a link to get FREE TRIPALL app</span>
            </div>
            
        </form>
        
        </div>
  )
}
