import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, userLogin } from "../redux/reducers/employeeSlice";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState({ email: null, password: null });
  const { loading, error } = useSelector((state) => state.user);

  const demoEmail = "demo@gmail.com";
  const demoPassword = "demo@123";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleLogin = useCallback(
    (e) => {
      e.preventDefault();
      if (!user.email) {
        alert("Please provide your email ID");
        return;
      }
      if (!user.password) {
        alert("Please provide your Password");
        return;
      }
      if (user.email !== demoEmail) {
        alert("Please provide Valid Email");
        return;
      }
      if (user.password !== demoPassword) {
        alert("Please provide Valid Password");
        return;
      }
      dispatch(userLogin({ email: user.email, password: user.password }));
      navigate("/table");
    },
    [user]
  );

  return (
    <div>
      {/* <Link to="/table">{<button>Check Entries</button>}</Link> */}
      <div className="w-[80vw] mx-auto my-[3rem]">
        <div class="w-[700px] mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 class="mb-7 text-3xl text-center font-bold text-gray-900">
            Login / SignUp
          </h5>
          <form class="max-w-lg mx-auto" onSubmit={handleLogin}>
            <div class="mb-5 mx-3">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Email"
                autocomplete="off"
                required
                value={user.email}
                onChange={(e) =>
                  setUser((prev) => {
                    return { ...prev, email: e.target.value };
                  })
                }
              />
            </div>
            <div class="mb-5 mx-3">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Your Password
              </label>
              <input
                type="password"
                id="city"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Password"
                autocomplete="off"
                required
                value={user.password}
                onChange={(e) =>
                  setUser((prev) => {
                    return { ...prev, password: e.target.value };
                  })
                }
              />
            </div>
            <div className="mx-3 my-3 text-xs">
              <p>Use Demo Email: {demoEmail}</p>
              <p>Use Demo Password: {demoPassword}</p>
            </div>
            <div className="text-center">
              <button
                disabled={loading || error}
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
