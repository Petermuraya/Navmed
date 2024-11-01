import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl text-primaryPink font-bold text-center mb-4">Contact Us</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border rounded"/>
        <input type="email" placeholder="Email" className="w-full p-2 border rounded"/>
        <textarea placeholder="Message" className="w-full p-2 border rounded h-32"></textarea>
        <button className="bg-primaryPink text-white w-full p-3 rounded">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
