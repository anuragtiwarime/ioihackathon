import { AlertCircle } from 'lucide-react';
const Register = () => {
  return (
    <>
    <div className="register-container flex flex-col items-center gap-4 bg-white p-8 rounded-lg shadow-lg">
      <p>Ready to participate? Register your team now!</p>
      <a href="https://pw.jotform.com/243520281632045" className="register-button bg-purple-600 text-white px-4 py-2 rounded-lg" target='_blank'>Register Now</a>
      <div className="flex items-center gap-2 text-amber-600 bg-amber-50 p-4 rounded-lg">
        <AlertCircle className="h-5 w-5" />
        <p className="text-sm">
        Registration deadline: December 23rd, 2024
        </p>
      </div>
    </div>
    </>
  )
}

export default Register