import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

import toast from 'react-hot-toast';



export default function Contact() {
  let form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wn2q9lg', 'template_dixx92l', form.current, {
        publicKey: 'gHoNHPfpW8hIvsAID',
      })
      .then(
        () => {
          console.log('send')
          toast.success('Message is sent ')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };
  return (
    <section id="Contact">
      
      <div className="container py-5 d-flex justify-content-center align-items-center flex-column">
        <h2 className=' text-center py-5'>Contact</h2>
        <div className="items w-75">
      
          <form ref={form} onSubmit={sendEmail}>
          <input name='user-name' type="text" placeholder='Enter Your Name' className=' form-control my-2 p-2' />
          <input name='user-email' type="text" placeholder='Enter Your Email' className=' form-control my-2 p-2' />
          <textarea name="message" id=""className=' form-control' placeholder='Enter Your Message'></textarea>
         <div className="btn d-flex justify-content-center align-items-center my-2">
          <button type=' submit' className=' btn btn-success'>Send Message</button>
         </div>


          </form>
      
        </div>
      </div>
    </section>

      

  )
}
