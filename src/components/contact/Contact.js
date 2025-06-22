import React, { useState } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();

    // Validation
    if (username === '') return setErrMsg('Username is required!');
    if (phoneNumber === '') return setErrMsg('Phone number is required!');
    if (email === '') return setErrMsg('Please give your Email!');
    if (!emailValidation(email)) return setErrMsg('Give a valid Email!');
    if (subject === '') return setErrMsg('Please give your Subject!');
    if (message === '') return setErrMsg('Message is required!');

    const templateParams = {
      name: username,
      email: email,
      phone: phoneNumber,
      title: subject,
      message: message,
    };

    emailjs
      .send(
        'service_m3aq3re', // Replace with your actual service ID
        'template_732t80o', // Replace with your actual template ID
        templateParams,
        'ytUH_n4aXw0Ncgi7o' // Replace with your actual public key
      )
      .then((response) => {
        setSuccessMsg(
          `Thank you dear ${username}, your message has been sent successfully!`
        );
        setErrMsg('');
        setUsername('');
        setPhoneNumber('');
        setEmail('');
        setSubject('');
        setMessage('');
      })
      .catch((error) => {
        console.error(error);
        setErrMsg('Something went wrong. Please try again.');
      });
  };

  return (
    <section
      id="contact"
      className="w-full py-10 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
  <Title title="CONTACT" des="Contact With Me" textSize="text-xl sm:text-2xl md:text-3xl" />
</div>

      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form onSubmit={handleSend} className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}

              {/* Name & Phone */}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Your name
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`${
                      errMsg === 'Username is required!' && 'outline-designColor'
                    } contactInput`}
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${
                      errMsg === 'Phone number is required!' && 'outline-designColor'
                    } contactInput`}
                    type="text"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
                    errMsg === 'Please give your Email!' && 'outline-designColor'
                  } contactInput`}
                  type="email"
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${
                    errMsg === 'Please give your Subject!' && 'outline-designColor'
                  } contactInput`}
                  type="text"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${
                    errMsg === 'Message is required!' && 'outline-designColor'
                  } contactTextArea`}
                  rows="8"
                />
              </div>

              {/* Submit Button */}
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>

              {/* Final Message */}
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
