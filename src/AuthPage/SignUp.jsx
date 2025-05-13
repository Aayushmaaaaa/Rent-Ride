// // src/AuthPage/SignUp.jsx
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./SignUp.css";
// import googleLogo from "../assets/google.png";
// import appleLogo from "../assets/apple-logo.png";
// import audiCar from "../assets/audi-car.png";
// import driftyLogo from "../assets/drifty-logo.png";

// function SignUp({ onSignupSuccess }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [agreeTerms, setAgreeTerms] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const validateForm = () => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!name) {
//       setError("Please enter your name.");
//       return false;
//     }
//     if (!emailRegex.test(email)) {
//       setError("Please enter a valid email address.");
//       return false;
//     }
//     if (password.length < 6) {
//       setError("Password must be at least 6 characters.");
//       return false;
//     }
//     if (!agreeTerms) {
//       setError("Please agree to the terms & policy.");
//       return false;
//     }
//     setError("");
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     try {
//       const response = await fetch("http://localhost:5000/api/auth/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, email, password }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         setError(data.message || "Signup failed");
//         return;
//       }

//       localStorage.setItem("token", data.token);
//       alert("Signup successful!");
//       onSignupSuccess();
//       navigate("/verification");
//     } catch (err) {
//       setError("An error occurred. Please try again.");
//       console.error(err);
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-form">
//         <div className="logo-container">
//           <div className="logo">
//             <img src={driftyLogo} alt="Drifty Logo" />
//           </div>
//         </div>
//         <h2>Get Started Now</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input
//             type="email"
//             placeholder="Email address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <label>
//             <input
//               type="checkbox"
//               checked={agreeTerms}
//               onChange={(e) => setAgreeTerms(e.target.checked)}
//             />
//             Agree to the terms & policy
//           </label>
//           {error && <div className="error-message">{error}</div>}
//           <button type="submit" className="signup-button">
//             Signup
//           </button>
//         </form>
//         <div className="or-divider">or</div>
//         <div className="social-signup">
//           <button className="google-signup">
//             <img src={googleLogo} alt="Google Logo" /> Sign in with Google
//           </button>
//           <button className="apple-signup">
//             <img src={appleLogo} alt="Apple Logo" /> Sign in with Apple
//           </button>
//         </div>
//         <p className="login-link">
//           Have an account? <Link to="/login/user">Log in</Link>
//         </p>
//       </div>
//       <div className="signup-image">
//         <img src={audiCar} alt="Car" />
//       </div>
//     </div>
//   );
// }

// export default SignUp;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import googleLogo from "../assets/google.png";
import appleLogo from "../assets/apple-logo.png";
import audiCar from "../assets/audi-car.png";
import driftyLogo from "../assets/drifty-logo.png";

function SignUp({ onSignupSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // New state for show password
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name) {
      setError("Please enter your name.");
      return false;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }
    if (!agreeTerms) {
      setError("Please agree to the terms & policy.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Signup failed");
        return;
      }

      // Store token and email for use in verification
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", email);

      alert("Signup successful! Please verify your email.");
      onSignupSuccess(); // Update app state if needed
      navigate("/verification");
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <div className="logo-container">
          <div className="logo">
            <img src={driftyLogo} alt="Drifty Logo" />
          </div>
        </div>
        <h2>Get Started Now</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type={showPassword ? "text" : "password"} // Toggle between text and password
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="show-password-label">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={(e) => setShowPassword(e.target.checked)}
            />
            Show Password
          </label>
          <label>
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
            />
            Agree to the terms & policy
          </label>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="signup-button">
            Signup
          </button>
        </form>
        <div className="or-divider">or</div>
        <div className="social-signup">
          <button className="google-signup">
            <img src={googleLogo} alt="Google Logo" /> Sign in with Google
          </button>
          <button className="apple-signup">
            <img src={appleLogo} alt="Apple Logo" /> Sign in with Apple
          </button>
        </div>
        <p className="login-link">
          Have an account? <Link to="/login/user">Log in</Link>
        </p>
      </div>
      <div className="signup-image">
        <img src={audiCar} alt="Car" />
      </div>
    </div>
  );
}

export default SignUp;
