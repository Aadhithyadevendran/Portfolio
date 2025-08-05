import React, { useState } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";

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
      .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
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
        'service_m3aq3re',
        'template_732t80o',
        templateParams,
        'ytUH_n4aXw0Ncgi7o'
      )
      .then(() => {
        setSuccessMsg(`Thank you dear ${username}, your message has been sent successfully!`);
        setErrMsg('');
        setUsername('');
        setPhoneNumber('');
        setEmail('');
        setSubject('');
        setMessage('');
      })
      .catch(() => {
        setErrMsg('Something went wrong. Please try again.');
      });
  };

  return (
<motion.section
  id="contact"
  className="w-full py-10 border-b border-b-gray-300 dark:border-b-black"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4}}
  viewport={{ once: true, amount: 0.3 }}
>      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" textSize="text-xl sm:text-2xl md:text-3xl" />
      </div>

      <div className="w-full">
        <div className="w-full flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] py-10 bg-white dark:bg-gradient-to-r dark:from-[#1e2024] dark:to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.2)] dark:shadow-[0_10px_40px_rgba(255,255,255,0.05)] text-black dark:text-white">
            <form onSubmit={handleSend} className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              {errMsg && (
                <p className="py-3 bg-orange-100 dark:bg-[#2b2b2b] text-center text-orange-500 text-base tracking-wide animate-bounce shadow-sm">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-green-100 dark:bg-[#2b2b2b] text-center text-green-600 text-base tracking-wide animate-bounce shadow-sm">
                  {successMsg}
                </p>
              )}

              {/* Name & Phone */}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">Your name</p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`w-full h-12 px-4 border border-gray-300 dark:border-gray-600 rounded-md bg-white text-black focus:outline-none focus:border-designColor transition-all duration-300 ${
                      errMsg === 'Username is required!' && 'outline-designColor'
                    }`}
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">Phone Number</p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`w-full h-12 px-4 border border-gray-300 dark:border-gray-600 rounded-md bg-white text-black focus:outline-none focus:border-designColor transition-all duration-300 ${
                      errMsg === 'Phone number is required!' && 'outline-designColor'
                    }`}
                    type="text"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">Email</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`w-full h-12 px-4 border border-gray-300 dark:border-gray-600 rounded-md bg-white text-black focus:outline-none focus:border-designColor transition-all duration-300 ${
                    errMsg === 'Please give your Email!' && 'outline-designColor'
                  }`}
                  type="email"
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">Subject</p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`w-full h-12 px-4 border border-gray-300 dark:border-gray-600 rounded-md bg-white text-black focus:outline-none focus:border-designColor transition-all duration-300 ${
                    errMsg === 'Please give your Subject!' && 'outline-designColor'
                  }`}
                  type="text"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">Message</p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white text-black resize-none focus:outline-none focus:border-designColor transition-all duration-300 ${
                    errMsg === 'Message is required!' && 'outline-designColor'
                  }`}
                  rows="8"
                />
              </div>

              {/* Submit Button */}
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full h-12 bg-black dark:bg-[#141518] rounded-lg text-base text-white tracking-wider uppercase hover:bg-designColor duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
