import React from 'react'

const MailList = () => {
  return (
    <div className="mail text-center ml-84 bg-cyan-700 p-4 mt-20 h-max">
        <h1 className="mailTitle font-bold text-4xl mt-7 text-white">Save Time, Save Money!</h1>
        <h1 className="mailDesc mt-4 text-lg text-white">Sign Up! We'll send the best deals to you</h1>
        <div className="mailInputContainer"></div>
        <input className="px-3 py-1.5 mt-6 h-9 w-60 rounded-sm border-double border-4 border-neutral-300" type="text" placeholder="Your Email" />
        <button className="buttonSub text-lg ml-4 border-2 mb-8 border-neutral-300 px-2 rounded-sm mx-2 my-1 text-white bg-blue-950 hover:bg-blue-600">Subscribe</button>
    </div>
  )
}

export default MailList