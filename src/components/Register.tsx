import { AlertCircle } from 'lucide-react';

const Register = () => {
  return (
    <>
      <div className="register-container flex flex-col items-center gap-6 bg-gradient-to-r from-purple-500 to-indigo-500 p-8 rounded-xl shadow-2xl text-white max-w-lg mx-auto">
        <h1 className="text-2xl font-bold mb-2">🎉 Join the Hackathon!</h1>
        <p className="text-lg text-center">
          Ready to showcase your skills? Gather your team and register now for an unforgettable experience!
        </p>
        <a
          href="https://pw.jotform.com/243520281632045"
          className="register-button bg-yellow-400 hover:bg-yellow-500 text-purple-800 px-6 py-3 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          🚀 Register Now
        </a>
        <div className="flex items-center gap-3 text-amber-800 bg-amber-100 p-4 rounded-lg w-full shadow-md">
          <AlertCircle className="h-6 w-6 text-amber-600" />
          <p className="text-sm font-medium">
            Registration deadline: <span className="font-bold">December 24th, 2024</span>
          </p>
        </div>
        <p className="text-sm italic mt-4 text-gray-200">
          Don’t miss the chance to compete and win exciting prizes!
        </p>
      </div>
    </>
  );
};

export default Register;
