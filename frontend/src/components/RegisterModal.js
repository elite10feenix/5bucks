import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getCountries, getCountryCallingCode } from 'libphonenumber-js';

import { XMarkIcon } from '@heroicons/react/24/outline';
import logoimg from '../assets/logo2.png';
import registerbutton from '../assets/auth/registerbutton.png';
import userplusimg from '../assets/auth/userplus.png';
import googlebutton from '../assets/auth/googlebutton2.png';
import applebutton from '../assets/auth/applebutton2.png';
import resetbutton from '../assets/auth/reset.png';

const RegisterModal = ({ closeModal, handleLogin }) => {
  const [formValues, setFormValues] = useState({
    username: '',
    fullname: '',
    cardNumber: '',
    expiryDate: '',
    cardName: '',
    cvv: '',
    country: '',
    city: '',
    postCode: '',
    street: '',
    phoneCode: '',
    mobileNumber: '',
    imbg: '',
    dobDay: '',
    dobMonth: '',
    dobYear: '',
    email: '',
    password: '',
    confirmPassword: '',
    captchaCode: '',
    agreeToNotifications: false,
    agreeToTerms: false,
  });

  const [error, setError] = useState(''); // To display error messages
  const [phoneCodes, setPhoneCodes] = useState([]);
  const [captchaCode, setCaptchaCode] = useState('');

  useEffect(() => {
    const codes = getCountries().map(country => ({
      country: country,
      code: `+${getCountryCallingCode(country)}`
    }));
    setPhoneCodes(codes);
  }, []);

  useEffect(() => {
    handleRefreshCaptcha();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormValues({ ...formValues, [name]: checked });
  };

  const getRandomUppercaseLetter = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  const getRandomDigit = () => Math.floor(Math.random() * 10);
  
  const handleRefreshCaptcha = () => {
    const newCaptchaCode = `${getRandomUppercaseLetter()}${getRandomUppercaseLetter()}${getRandomDigit()}${getRandomUppercaseLetter()}${getRandomDigit()}${getRandomDigit()}`;
    setCaptchaCode(newCaptchaCode);
  };

  const validateForm = () => {
    const requiredFields = [
      'username', 'fullname', 'cardNumber', 'expiryDate', 'cardName', 'cvv',
      'country', 'city', 'postCode', 'street', 'phoneCode', 'mobileNumber',
      'imbg', 'dobDay', 'dobMonth', 'dobYear', 'email', 'password', 'confirmPassword',
      'captchaCode'
    ];

    for (let field of requiredFields) {
      if (!formValues[field] || formValues[field].trim() === '') {
        return `Please fill out the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}.`;
      }
    }

    if (formValues.password !== formValues.confirmPassword) {
      return 'Passwords do not match.';
    }

    if (formValues.captchaCode !== captchaCode) {
      return 'Incorrect CAPTCHA code.';
    }

    if (!formValues.agreeToTerms) {
      return 'You must agree to the terms and conditions.';
    }

    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMsg = validateForm();

    if (errorMsg) {
      setError(errorMsg);
      handleRefreshCaptcha();
      return;
    }

    try {
      const response = await axios.post('/api/register', formValues);
      const token = response.data.token;
      handleLogin(token, formValues.username); // Call handleLogin with the token and username
    } catch (error) {
      setError('Registration failed. Please try again.'); // Set error message
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-lg w-full relative max-h-[72vh] overflow-y-auto">
        {/* Close Button */}
        <button 
          onClick={closeModal} 
          className="absolute top-3 right-3 p-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
          aria-label="Close Modal"
        >
          <XMarkIcon className="h-6 w-6 text-gray-600" />
        </button>

        {/* Logo and Registration Header */}
        <div className="flex justify-center items-center mb-6">
          <img src={logoimg} className="w-half h-auto" />
        </div>

        <div className="flex justify-center items-center mb-6">
          <img src={userplusimg} className="h-8 w-8 mr-2" />
          <h1 className="text-2xl font-semibold">Registration</h1>
        </div>

        {/* Google and Apple Login Buttons */}
        <div className="flex justify-around mb-4 space-x-4">
          <button type="button" className="rounded-full hover:bg-gray-100 transition-colors">
            <img src={googlebutton} alt="Google" className="w-half h-8" />
          </button>
          <button type="button" className="rounded-full hover:bg-gray-100 transition-colors">
            <img src={applebutton} alt="Apple" className="w-half h-8" />
          </button>
        </div>

        {/* OR Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-t border-custom-black"/>
          <span className="mx-4 text-custom-black">or</span>
          <hr className="flex-grow border-t border-custom-black"/>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit}>

          {/* Username and Full Name */}
          <div className="flex justify-start mb-4">
            <input 
              type="text" 
              name="username" 
              value={formValues.username} 
              onChange={handleInputChange} 
              placeholder="Username" 
              className="w-1/2 p-2 border border-custom-black rounded mr-2" 
            />
            <input 
              type="text" 
              name="fullname" 
              value={formValues.fullname} 
              onChange={handleInputChange} 
              placeholder="Full Name" 
              className="w-1/2 p-2 border border-custom-black rounded" 
            />
          </div>

          {/* Card Number, Expiry Date */}
          <div className="flex justify-start mb-4">
            <input 
              type="text" 
              name="cardNumber" 
              value={formValues.cardNumber} 
              onChange={handleInputChange} 
              placeholder="Card Number" 
              className="w-1/2 p-2 border border-custom-black rounded mr-2" 
            />
            <div className="w-1/2">
              <input 
                type="text" 
                name="expiryDate" 
                value={formValues.expiryDate} 
                onChange={handleInputChange} 
                placeholder="MM/YY" 
                className="w-full p-2 border border-custom-black rounded" 
              />
            </div>
          </div>

          {/* Card Name, CVV */}
          <div className="flex justify-between mb-4">
            <input 
              type="text" 
              name="cardName" 
              value={formValues.cardName} 
              onChange={handleInputChange} 
              placeholder="Card Name" 
              className="w-1/2 p-2 border border-custom-black rounded mr-2" 
            />
            <div className="w-1/2">
              <input 
                type="text" 
                name="cvv" 
                value={formValues.cvv} 
                onChange={handleInputChange} 
                placeholder="CVV/CVC" 
                className="w-full p-2 border border-custom-black rounded" 
              />
            </div>
          </div>

          {/* Country, City, Postal Code */}
          <div className="flex justify-start mb-4">
            <input 
              type="text" 
              name="country" 
              value={formValues.country} 
              onChange={handleInputChange} 
              placeholder="Country" 
              className="w-1/2 p-2 border border-custom-black rounded mr-2" 
            />
            <div className="w-1/2 flex justify-between space-x-2">
              <input 
                type="text" 
                name="city" 
                value={formValues.city} 
                onChange={handleInputChange} 
                placeholder="City" 
                className="w-3/5 p-2 border border-custom-black rounded" 
              />
              <input 
                type="text" 
                name="postCode" 
                value={formValues.postCode} 
                onChange={handleInputChange} 
                placeholder="P.Code" 
                className="w-2/5 p-2 border border-custom-black rounded" 
              />
            </div>
          </div>

          {/* Street Address, Phone Code, Mobile Number */}
          <div className="flex justify-start mb-4">
            <input 
              type="text" 
              name="street" 
              value={formValues.street} 
              onChange={handleInputChange} 
              placeholder="Street Address" 
              className="w-1/2 p-2 border border-custom-black rounded mr-2" 
            />
            <div className="w-1/2 flex justify-between space-x-2">
              <select 
                className="w-1/3 p-2 border border-custom-black rounded" 
                value={formValues.phoneCode} 
                name="phoneCode" 
                onChange={handleInputChange} 
              >
                <option value="" disabled>Select phone code</option>
                {phoneCodes.map((item) => (
                  <option value={item.code}>
                    {item.country} ({item.code})
                  </option>
                ))}
              </select>
              <input 
                type="text" 
                name="mobileNumber" 
                value={formValues.mobileNumber} 
                onChange={handleInputChange} 
                placeholder="Mobile Number" 
                className="w-2/3 p-2 border border-custom-black rounded" 
              />
            </div>
          </div>

          {/* IMBG & Date of Birth (Day, Month, Year) */}
          <div className="flex justify-start mb-4">
            <input 
              type="text" 
              name="imbg" 
              value={formValues.imbg} 
              onChange={handleInputChange} 
              placeholder="IMBG" 
              className="w-1/2 p-2 border border-custom-black rounded mr-2" 
            />
            <div className="w-1/2 flex justify-between space-x-2">
              <input 
                type="text" 
                name="dobDay" 
                value={formValues.dobDay} 
                onChange={handleInputChange} 
                placeholder="DD" 
                className="w-1/3 p-2 border border-custom-black rounded" 
              />
              <input 
                type="text" 
                name="dobMonth" 
                value={formValues.dobMonth} 
                onChange={handleInputChange} 
                placeholder="MM" 
                className="w-1/3 p-2 border border-custom-black rounded" 
              />
              <input 
                type="text" 
                name="dobYear" 
                value={formValues.dobYear} 
                onChange={handleInputChange} 
                placeholder="YYYY" 
                className="w-1/3 p-2 border border-custom-black rounded" 
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="mb-4">
            <input 
              type="email" 
              name="email" 
              value={formValues.email} 
              onChange={handleInputChange} 
              placeholder="Email Address" 
              className="w-full p-2 border border-custom-black rounded" 
            />
          </div>

          {/* Password, Confirm Password */}
          <div className="flex justify-between mb-4 space-x-2">
            <input 
              type="password" 
              name="password" 
              value={formValues.password} 
              onChange={handleInputChange} 
              placeholder="Password" 
              className="w-1/2 p-2 border border-custom-black rounded" 
            />
            <input 
              type="password" 
              name="confirmPassword" 
              value={formValues.confirmPassword} 
              onChange={handleInputChange} 
              placeholder="Repeat Password" 
              className="w-1/2 p-2 border border-custom-black rounded" 
            />
          </div>

          {/* Captcha */}
          <div className="flex flex-col mb-4">
            <div className="flex items-center mb-2">
              <span className="mr-2">Enter the code:</span>
              <span className="font-bold">{captchaCode}</span>
            </div>
            <div className="flex items-center">
              <input 
                type="text" 
                name="captchaCode" 
                value={formValues.captchaCode} 
                onChange={handleInputChange}
                placeholder="CODE" 
                className="flex-grow p-2 border border-custom-black rounded-l border-r-0" 
              />
              <button 
                type="button" 
                onClick={handleRefreshCaptcha} 
                className="flex items-center p-2 border border-custom-black border-l-0 rounded-r hover:bg-gray-300 transition-colors"
              >
                <span className="mr-2">Reset code</span>
                <img src={resetbutton} alt="Refresh Captcha" className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Checkbox Section */}
          <div className="flex flex-col space-y-2 mb-4 text-sm">
            <div className="flex items-start space-x-2">
              <input 
                type="checkbox" 
                name="agreeToNotifications" 
                checked={formValues.agreeToNotifications} 
                onChange={handleCheckboxChange} 
                className="form-checkbox w-6 h-6 border-2 border-custom-black accent-custom-black" 
              />
              <span className="flex-1">I agree to receive notifications about news, promotions, and offers.</span>
            </div>
            
            <div className="flex items-start space-x-2">
              <input 
                type="checkbox" 
                name="agreeToTerms" 
                checked={formValues.agreeToTerms} 
                onChange={handleCheckboxChange} 
                className="form-checkbox w-6 h-6 border-2 border-custom-black accent-custom-black" 
              />
              <span className="flex-1">*I am over 18 years old, I have read and agree with the general terms of participation and the Privacy.</span>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-500 mb-4">
              {error}
            </div>
          )}

          {/* Register Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/2 py-2 px-4 rounded flex items-center justify-center"
            >
              <img src={registerbutton} className="w-full h-auto" alt="Register Button" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
