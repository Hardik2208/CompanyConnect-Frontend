import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="bg-white w-[400px] rounded-xl shadow-lg p-7 relative">
        {/* Close button */}
        <button className="absolute top-4 right-5 text-gray-400 hover:text-gray-600 text-xl font-bold">
          &times;
        </button>

        {/* Heading */}
        <h2 className="text-center text-2xl font-bold text-gray-700 mb-2">
          Create a Glassdoor account or <br /> sign in to get started
        </h2>
        <p className="text-sm text-center text-gray-500 mb-4">
          By continuing, you agree to our{" "}
          <a href="#" className="text-green-600 underline">Terms of Use</a> and{" "}
          <a href="#" className="text-green-600 underline">Privacy Policy</a>.
        </p>
        
        {/* Google login */}
        <button className="flex items-center justify-center w-full bg-green-400 text-gray-800 font-medium rounded-lg px-4 py-2 mb-3 hover:bg-green-500 transition">
          <span className="mr-2">
            {/* Place your Google icon here or use an SVG */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-6 h-6" />
          </span>
          Continue with Google
        </button>

        {/* Apple login */}
        <button className="flex items-center justify-center w-full border font-medium rounded-lg px-4 py-2 mb-3 hover:bg-gray-100 transition">
          <span className="mr-2">
            {/* Place your Apple icon here or use an SVG */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16.365 1.43c0 1.14-.837 2.064-1.683 2.065-.085-1.006.835-2.064 1.683-2.065zm-.442 2.247c.927 0 2.215.601 3.161 1.744-.102.08-1.463.799-1.455 2.373.013 2.185 2.31 2.885 2.331 2.892-.02.061-.364 1.27-1.191 2.52-.773 1.172-1.577 2.344-2.834 2.344-1.197 0-1.575-.75-2.876-.75-1.254 0-1.589.767-2.857.767-1.271 0-2.158-1.114-2.868-2.215-.803-1.235-1.518-3.208-1.256-5.057.01-.079.112-1.604 1.37-2.664.995-.841 2.382-.917 3.2-.917.971 0 1.875.676 2.882.676 1.002 0 1.556-.676 2.929-.676zm-2.498 11.482c.088.216.17.432.243.65.152.494.608 1.35 1.604 1.334.965-.016 1.617-.817 1.761-1.08-.276-.187-.89-.482-1.76-.505-.824-.022-1.483.303-1.848.401zm-2.763 13.006c-.125 1.171 1.028 2.348 1.882 2.355.751.005 1.11-.692 2.243-1.073.754-.256 1.63-.364 2.59-.364.86 0 1.734.112 2.484.372 1.129.384 1.484 1.069 2.241 1.073.855-.007 1.999-1.186 1.876-2.357-.097-1.086-.528-2.179-1.336-3.217-.899-1.136-2.289-2.57-3.969-2.49-1.582 0-2.644 1.019-3.924 2.491-.804 1.047-1.238 2.135-1.187 3.145z"/></svg>
          </span>
          Continue with Apple
        </button>

        {/* Divider */}
        <div className="flex items-center my-5">
          <hr className="flex-1 border-gray-300"/>
          <span className="mx-3 text-gray-400 text-sm">or</span>
          <hr className="flex-1 border-gray-300"/>
        </div>

        {/* Email Entry */}
        <label htmlFor="email" className="text-sm text-gray-600 mb-1 block">
          Enter email
        </label>
        <input
          id="email"
          type="email"
          className="w-full border rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-300"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <button
          className="w-full border rounded-lg px-4 py-2 mb-2 font-bold bg-white text-gray-800 hover:bg-gray-100 transition"
        >
          Continue with email
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
