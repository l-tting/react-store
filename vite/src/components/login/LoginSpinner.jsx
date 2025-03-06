const LoginSpinner = () => (
    <div className="flex justify-center items-center space-x-2">
      <div className="w-6 h-6 border-4 border-t-4 border-indigo-600 rounded-full animate-spin"></div>
      <span className="text-gray-500">Logging in...</span>
    </div>
);
  
export default LoginSpinner;
  