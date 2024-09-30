import React, { useState } from 'react';

function Contact() {
  // State to track form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State to track error messages and success message
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields');
      return;
    }

    // If valid, clear error, set success message, and reset the form
    setError('');

    // Simulate form submission (actual submission handled by form action)
    setTimeout(() => {
      // Reset form fields after submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Clear success message after a few seconds
      setSuccess('');
    }, 2000); // 2 seconds delay to simulate form processing

    e.target.submit(); // This will submit the form to the specified action URL
  };

  return (
    <div name='contact' className='bg-gradient-to-b from-black to-gray-800 w-full pt-20 text-white'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full'>
        <div className='pb-8'>
          <h1 className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</h1>
          <h3 className='py-6'>Submit the form below to get in touch with me</h3>
        </div>

        <div className='flex justify-center items-center'>
          <form
            action="https://getform.io/f/azylvzwb"
            method='POST'
            onSubmit={handleSubmit}
            className='flex flex-col w-full md:w-1/2'
          >
            <input
              type="text"
              name='name'
              placeholder='Enter your name'
              value={formData.name}
              onChange={handleInputChange}
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />
            <input
              type="email"
              name='email'
              placeholder='Enter your email'
              value={formData.email}
              onChange={handleInputChange}
              className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />
            <textarea
              name="message"
              rows={10}
              placeholder='Enter your message'
              value={formData.message}
              onChange={handleInputChange}
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            ></textarea>

            {/* Display error message */}
            {error && <p className='text-red-500'>{error}</p>}

            <button
              type="submit"
              className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-5 py-2 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'
            >
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
