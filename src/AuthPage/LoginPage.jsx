// // src/AuthPage/LoginPage.jsx
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './LoginPage.css';
// import googleLogo from '../assets/google.png';
// import appleLogo from '../assets/apple-logo.png';
// import driftyLogo from '../assets/drifty-logo.png';
// import audiCar from '../assets/audi-car.png'; // Assuming it's in src/assets

// function Login({ onLoginSuccess }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const navigate = useNavigate();

//   const validateEmail = (email) => {
//     if (!email.includes('@')) {
//       return 'Please include an "@" in the email address.';
//     }
//     return '';
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setEmailError('');
//     setPasswordError('');
//     let isValid = true;

//     const emailErrorMessage = validateEmail(email);
//     if (emailErrorMessage) {
//       setEmailError(emailErrorMessage);
//       isValid = false;
//     }

//     if (!password) {
//       setPasswordError('Password is required.');
//       isValid = false;
//     }

//     if (isValid) {
//       console.log('Login submitted:', { email, password });
//       // Simulate successful login - In a real app, you'd check credentials here
//       // For demonstration, we'll just check if the email and password are not empty
//       if (email && password) {
//         alert('Login Successful! Navigating to verification...');
//         onLoginSuccess(); // Call the callback to update isLoggedIn in App
//         navigate("/verification");
//       } else {
//         // In a real scenario, you would have logic to verify against a backend
//         alert('Invalid email or password.');
//         setEmailError('Invalid email or password.');
//         setPasswordError('Invalid email or password.');
//       }
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <div className="logo-container">
//           <div className="logo">
//             <img src={driftyLogo} alt="Drifty Logo" />
//           </div>
//         </div>
//         <h2>Welcome Back</h2>
//         <p>Enter your credentials to access your account</p>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Email address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           {emailError && <p className="error-message">{emailError}</p>}
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {passwordError && <p className="error-message">{passwordError}</p>}
//           <div className="login-options">
//             <a href="/forgot-password" className="forgot-password">
//               Forgot password?
//             </a>
//             <label className="remember-me">
//               <input type="checkbox" /> Remember for 30 days
//             </label>
//           </div>
//           <button type="submit" className="login-button">
//             Login
//           </button>
//         </form>
//         <div className="social-login">
//           <button className="google-login">
//             <img src={googleLogo} alt="Google Logo" />
//             Sign in with Google
//           </button>
//           <button className="apple-login">
//             <img src={appleLogo} alt="Apple Logo" />
//             Sign in with Apple
//           </button>
//         </div>
//         <p className="signup-link">
//           Don't have an account? <Link to="/signup">Sign up</Link>
//         </p>
//       </div>
//       <div className="login-image">
//         <img src={audiCar} alt="Car" />
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import googleLogo from "../assets/google.png";
import appleLogo from "../assets/apple-logo.png";
import driftyLogo from "../assets/drifty-logo.png";
import audiCar from "../assets/audi-car.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors
    setLoading(true); // Start loading indicator

    try {
      // API call to backend for login
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Send user credentials to backend
      });

      const data = await response.json();

      if (!response.ok) {
        // If the response is not OK, throw an error
        throw new Error(data.message || "Failed to login");
      }

      // Store the JWT token and user data in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect to the dashboard or main page
      alert(`Login successful! Welcome back, ${data.user.name}!`);
      navigate("/dashboard"); // Redirect to the dashboard or verification page

      // Optionally clear the form fields
      setEmail("");
      setPassword("");
    } catch (error) {
      // Handle any error that occurs during login
      console.error("Login error:", error);
      setError(error.message || "An error occurred during login");
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="logo-container">
          <div className="logo">
            <img src={driftyLogo} alt="Drifty Logo" />
          </div>
        </div>
        <h2>Welcome Back</h2>
        <p>Enter your credentials to access your account</p>

        {/* Display error message if any */}
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="login-options">
            <a href="/forgot-password" className="forgot-password">
              Forgot password?
            </a>
            <label className="remember-me">
              <input type="checkbox" /> Remember for 30 days
            </label>
          </div>

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="social-login">
          <button className="google-login">
            <img src={googleLogo} alt="Google Logo" />
            Sign in with Google
          </button>
          <button className="apple-login">
            <img src={appleLogo} alt="Apple Logo" />
            Sign in with Apple
          </button>
        </div>

        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>

      <div className="signup-image">
        <img src={audiCar} alt="Car" />
      </div>
    </div>
  );
}

export default Login;
