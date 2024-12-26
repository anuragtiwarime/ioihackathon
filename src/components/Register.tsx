import { AlertCircle } from 'lucide-react';

const Register = () => {
  return (
    <>
      <div className="register-container flex flex-col items-center gap-6 bg-gradient-to-r from-purple-500 to-indigo-500 p-8 rounded-xl shadow-2xl text-white max-w-lg mx-auto">
        <h1 className="text-2xl font-bold mb-2">⏳ Registration Closed!</h1>
        <p className="text-lg text-center">
          Thank you for your interest in the hackathon. Unfortunately, the registration deadline has passed. 
          Stay tuned for updates on upcoming events!
        </p>
        <div className="flex items-center gap-3 text-red-800 bg-red-100 p-4 rounded-lg w-full shadow-md">
          <AlertCircle className="h-6 w-6 text-red-600" />
          <p className="text-sm font-medium">
            Registration closed on: <span className="font-bold">December 24th, 2024</span>
          </p>
        </div>
        <p className="text-sm italic mt-4 text-gray-200">
          We hope to see you in our future hackathons!
        </p>
      </div>
    </>
  );
};

export default Register;
