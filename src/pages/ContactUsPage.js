import React from 'react';
import "../styles/styles.css";


const ContactUsPage = () => {
 
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form
        action="https://getform.io/f/5375b9de-f060-4863-8ebd-795c95998635"
        method="post"
        className="flex flex-col w-full md:w-2/6 h-3/4"
      >
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className=" border-gray-400 text-sm bg-transparent border-2 rounded-md text-center align:center  focus:outline-none"
        />
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          className="border-gray-400 text-sm bg-transparent border-2 rounded-md text-center align:center text-gray-700 focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Enter your message"
          rows="7"
          className="border-gray-400 p-2 text-sm bg-transparent border-2 rounded-md text-center align:center text-gray-700 focus:outline-none"
        ></textarea>
        <button className="text-white bg-cyan-500 px-4  my-2 mx-auto flex items-center rounded-md hover:scale-110   hover:bg-sky-800 duration-300">
          Submit
        </button>
      </form>
      
    </div>
  );
}

export default ContactUsPage;
