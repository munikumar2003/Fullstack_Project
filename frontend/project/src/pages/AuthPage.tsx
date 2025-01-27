import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { FiUser, FiMail, FiPhone, FiLock } from 'react-icons/fi';

const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const { setUser } = useStore();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [emailOTP, setEmailOTP] = useState('');
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [phone, setPhone] = useState('');
  const [phoneOTP, setPhoneOTP] = useState('');
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otpSentPhone, setOtpSentForPhone] = useState(false); // State to track if OTP is sent
  const [otpSentEmail, setOtpSentForEmail] = useState(false);
  const [otpRecievedForEmail, setOtpRecievedForEmail] = useState("");
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    emailOTP: '',
    phoneOTP: '',
  });
  const validateFields = (): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      emailOTP: '',
      phoneOTP: '',
    };

    if (!isLoginMode) {
      if (!isEmailVerified) {
        newErrors.email = 'Please verify your email.';
      }
      if (!isPhoneVerified) {
        newErrors.phone = 'Please verify your phone number.';
      }
      if (firstName.length < 2) {
        newErrors.firstName = 'First name should be at least 2 characters long.';
      }
      if (lastName.length < 2) {
        newErrors.lastName = 'Last name should be at least 2 characters long.';
      }
      if(!phone || !/^\d*$/.test(phone) || phone.length!=10){
        newErrors.phone= "Please enter valid mobile number.";
      }
    }

    if (!email || !emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!password || !strongPasswordRegex.test(password)) {
      newErrors.password =
        'Password must be at least 8 characters, include a capital letter, a small letter, a special character, and a number.';
    }
    if (!isLoginMode && password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === '');
  };

  const sendOTP = async (field: 'email' | 'phone') => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const newErrors = { ...errors };

    if (field === 'email') {
      if (!email || !emailRegex.test(email)) {
        newErrors.email = 'Please enter a valid email address.';
        setErrors(newErrors);
        return; // Stop execution if validation fails
      }
      newErrors.email = ''; // Clear the error if validation passes
      setErrors(newErrors);
      try {
        // Simulate sending Email OTP
        setOtpSentForEmail(true);
        console.log('Email OTP sent successfully!');
      } catch (error) {
        console.error(error);
        alert('Failed to send OTP. Please try again.');
      }
    //   try {
    //   const emailRequest={
    //     email
    //   }
    //   const url = 'http://localhost:8081/users/email/otp'
    //   const response = await fetch(url, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(emailRequest),
    //   });
    //   if (!response.ok) {
    //     throw new Error('Sending Otp failed');
    //   }
    //   const otp=await response.text();
    //   setOtpRecievedForEmail(otp);
    //   console.log('otp verified successful!');
  
    //   //navigate(-1);
    //   setOtpSentForEmail(true);
    // } catch (error) {
    //   console.error(error);
    //   alert('Failed to send OTP. Please try again.');
    // }
    } else if (field === 'phone') {
      if (!phone || !phoneRegex.test(phone)) {
        newErrors.phone = 'Please enter a valid 10-digit phone number.';
        setErrors(newErrors);
        return; // Stop execution if validation fails
      }
      newErrors.phone = ''; // Clear the error if validation passes
      setErrors(newErrors);
      try {
        // Simulate sending phone OTP
        setOtpSentForPhone(true);
        console.log('Phone OTP sent successfully!');
      } catch (error) {
        console.error(error);
        alert('Failed to send OTP. Please try again.');
      }
    }
  };

  const verifyOTP = (field: 'email' | 'phone') => {

   // if (field === 'email' && otpRecievedForEmail!=='' && emailOTP === otpRecievedForEmail) {
    if(field==='email' && emailOTP==='1234'){
      setIsEmailVerified(true);
      //alert('Email verified successfully!');
    } else if (field === 'phone' && phoneOTP === '5678') {
      setIsPhoneVerified(true);
      //alert('Phone number verified successfully!');
    } else {
      //alert(otpRecievedForEmail);
      alert('Invalid OTP. Please try again.');
    }
  };
  const redirectToHome = () => {
    navigate("/");
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateFields()) return;
    
    const userDetails = {
      firstName,
      lastName,
      email,
      phone,
      password,
    };

    try {
      const url = isLoginMode
        ? 'http://localhost:8081/users/login'
        : 'http://localhost:8081/users/signup';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(isLoginMode ? { email, password } : userDetails),
      });
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      setUser({
        id: data.id,
        email: data.email,
        name: `${data.firstName} ${data.lastName}`,
        addresses: [],
      });
      console.log('Login/Signup successful!');
      navigate(-1);
    } catch (error) {
      console.error(error);
      alert('Failed to login or sign up. Please try again.');
    }
  };
return (
  <div
    className="min-h-screen flex items-center justify-center bg-gradient-to-r to-indigo-600"
    style={{ paddingTop: '80px', paddingBottom: '10px' }}
  >
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-2xl flex">
      <div
        className="bg-cover bg-center hidden w-1/2 md:block"
        style={{ width:'400px'}}
      ><img src='/login.png' style={{width:'400px', height:'622px'}}></img></div>
      <div className="p-8 w-full">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          {isLoginMode ? 'Welcome Back!' : 'Create Your Account'}
          <button className="close-btn" style={{paddingLeft:'50px'}} onClick={redirectToHome}>&#x2715;</button>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-2">
          {!isLoginMode && (
            <>
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  {otpSentPhone ? (
                    // Show a fixed, readonly div after OTP is sent
                    <div className="px-4 py-2 bg-gray-200 text-gray-600 rounded-r">Sent</div>
                  ) : (
                    // Show the button initially
                    <button
                      type="button"
                      onClick={() => sendOTP('phone')}
                      className="px-4 py-2 bg-blue-500 text-white rounded-r"
                    >
                      Send
                    </button>
                  )}
                </div>
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                {isPhoneVerified || !otpSentPhone || (
                  <div className="flex items-center mt-2">
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      value={phoneOTP}
                      onChange={(e) => setPhoneOTP(e.target.value)}
                      className="w-full px-3 py-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => verifyOTP('phone')}
                      className="px-4 py-2 bg-green-500 text-white rounded-r"
                    >
                      Verify
                    </button>
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <div className="flex items-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {otpSentEmail ? (
                    // Show a fixed, readonly div after OTP is sent
                    <div className="px-4 py-2 bg-gray-200 text-gray-600 rounded-r">Sent</div>
                  ) : (
                    // Show the button initially
                    <button
                      type="button"
                      onClick={() => sendOTP('email')}
                      className="px-4 py-2 bg-blue-500 text-white rounded-r"
                    >
                      Send
                    </button>
                  )}
                </div>
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                {isEmailVerified || !otpSentEmail || (
                  <div className="flex items-center mt-2">
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      value={emailOTP}
                      onChange={(e) => setEmailOTP(e.target.value)}
                      className="w-full px-3 py-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => verifyOTP('email')}
                      className="px-4 py-2 bg-green-500 text-white rounded-r"
                    >
                      Verify
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
          {isLoginMode && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          {!isLoginMode && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>
          )}
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded"
            >
              {isLoginMode ? 'Login' : 'Sign Up'}
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <button
            onClick={() => setIsLoginMode(!isLoginMode)}
            className="text-blue-500 underline"
          >
            {isLoginMode
              ? "Don't have an account? Sign Up"
              : 'Already have an account? Login'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
              
export default AuthPage;
