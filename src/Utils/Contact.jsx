import React from 'react'
import "../Style/Contact.css"
import SeparatorLine from "../Components/SepratorLine"
import { Social } from '../Components/Social'
const Contact = () => {
  return (
    <div className='contact'>
      <SeparatorLine />
      <label className='section_title'>Contact</label>
      <div className='contact_container' >
        <div className='contact_left'>
          <p>Want to get in touch? Contact me on any of the platfrom.</p>
          <Social />
        </div>
        <div className='contact_right'>
          <a download href={require("../assets/Ajay_chawariya_Resume.pdf")}>
            <i class='fi-rr-cloud-download download_icon' />
            Download Resume</a>
        </div>
      </div>
    </div>

  )
}

export default Contact