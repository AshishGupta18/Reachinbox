import React from 'react';

import { useNavigate } from 'react-router-dom';
// function SignUp() {
//   const handleGoogleSignIn = () => {
//     window.location.href = 'https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000/auth/callback';
//   };

// function SignUp() {
//   const navigate = useNavigate();
//   const handleGoogleSignIn = () => {
//     const redirectUrl = 'https://frontend.com';
//     const googleSignInUrl = `https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=${encodeURIComponent(redirectUrl)}`;
//     window.location.href = googleSignInUrl;
//   };

function SignUp() {
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    const redirectUrl = 'http://localhost:5173/dashboard';
    const googleSignInUrl = `https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=${encodeURIComponent(redirectUrl)}`;
    window.location.href = googleSignInUrl;
  };


  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <header className="absolute top-0 w-full py-4 text-center">
        <h1 className="text-4xl font-bold text-white">REACHINBOX</h1>
      </header>
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-900 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white">Create a new account</h2>
        </div>
        <div>
          <button
            type="button"
            className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            onClick={handleGoogleSignIn}
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.5 12c0-.828-.073-1.624-.209-2.4H12v4.546h5.932A5.473 5.473 0 0 1 12 17.945v3.545c3.045 0 5.585-1.01 7.445-2.727l-2.996-2.545c-1.141.772-2.5 1.27-3.956 1.27a7.499 7.499 0 0 1-7.142-5.34H2.072v-3.454H4.862a7.486 7.486 0 0 1 0-3.27H2.072V7.545h2.786A7.5 7.5 0 0 1 11.5 2.085c2.045 0 3.904.777 5.309 2.039l2.732-2.73A11.02 11.02 0 0 0 12 .5C5.577.5 0 6.077 0 12.5S5.577 24.5 12 24.5c6.065 0 11.032-4.548 11.944-10.454.032-.204.056-.41.056-.62v-1.426h-1.5z"/>
            </svg>
            Sign Up with Google
          </button>
        </div>
        <div className="relative mt-6"> . . . 
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-900 text-gray-500">OR</span>
          </div>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            {/* Additional input fields can be added here */}
          </div>
          <div>
            <button
              type="submit"
             
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              
            >
              Create an Account
            </button>
          </div>
        </div>
        <div className="text-center">
          <p className="mt-2 text-gray-500">Already have an account? <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"
          >Sign In</a></p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
