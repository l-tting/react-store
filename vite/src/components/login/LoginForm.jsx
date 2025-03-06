import { useNavigate } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import logback from "../../assets/images/logindark.jpg";

export const LoginForm = () => {
  const { credentials, handleInputChange, error, loading, handleLogin } = useLogin();
  const navigate = useNavigate();

  return (
    <main
      className="w-full min-h-screen flex items-center justify-start px-4 bg-cover bg-center lg:ml-[32%] py-28"
      style={{ backgroundImage: `url(${logback})` }} // Added background image
    >
      <div className="max-w-sm w-full text-gray-600 space-y-4 sm:ml-2 relative z-10">
        <div className="text-center pb-4">
          <div className="mt-2">
            <h3 className="text-white text-2xl font-bold sm:text-3xl">
              Log in to OneShop
            </h3>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          className="space-y-8"
        >
          <div>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
              disabled={loading} // Disable input during loading
              className="w-full mt-2 px-3 py-3 font-bold text-white bg-transparent outline-none border-2 border-white shadow-sm rounded-lg disabled:opacity-50"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
              disabled={loading} // Disable input during loading
              className="w-full mt-2 px-3 py-3 font-bold text-white bg-transparent border-2 border-white outline-none focus:border-[#F5C77E] shadow-sm rounded-lg disabled:opacity-50"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-x-3">
              <input
                type="checkbox"
                id="remember-me-checkbox"
                className="checkbox-item peer hidden"
                disabled={loading} // Disable checkbox during loading
              />
              <label
                htmlFor="remember-me-checkbox"
                className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45 disabled:opacity-50"
              ></label>
              <span className="font-bold text-[#F5C77E]">Remember me</span>
            </div>
            <a
              href="javascript:void(0)"
              className="text-center text-[#020035] hover:text-[#f5c77e] font-bold"
              onClick={() => !loading && navigate("/pass_reset")} // Disable navigation during loading
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 text-[#f5c77e] font-bold bg-[#1E293B] hover:bg-gray-100 active:bg-indigo-600 rounded-lg duration-150 cursor-pointer disabled:bg-[#1E293B] disabled:opacity-70"
          >
            {loading ? "Logging in..." : "Sign in"}
          </button>
          {error && (
            <div className="text-red-500 text-center mt-2">{error}</div>
          )}
        </form>
      </div>
    </main>
  );
};

export default LoginForm;