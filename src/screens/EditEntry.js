import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { editUser } from "../redux/reducers/employeeSlice";

const EditEntry = () => {
  const { users, loading, error } = useSelector((state) => state.user);
  const [user, setUser] = useState(null);
  const { pathname } = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const requiredUserIndex = pathname.split("/")[2];
    const requiedUser = users.filter((user) => user.id == requiredUserIndex);
    setUser(requiedUser[0]);
  }, []);
  if (loading) {
    return <div>Loading</div>;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUser(user));
    navigate("/table");
  };
  return (
    <div className="w-[80vw] mx-auto my-[3rem]">
      {user?.id && (
        <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 class="mb-7 text-3xl text-center font-bold text-gray-900">
            Add a Edit Entry
          </h5>
          <form class="max-w-full mx-auto" onSubmit={handleSubmit}>
            <div class="mb-5 mx-3">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Name"
                required
                autocomplete="off"
                value={user.name}
                onChange={(e) =>
                  setUser((prev) => {
                    return { ...prev, name: e.target.value };
                  })
                }
              />
            </div>
            <div className="grid grid-cols-2">
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
                  for="city"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your City
                </label>
                <input
                  type="text"
                  id="city"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your City"
                  autocomplete="off"
                  required
                  value={user.city}
                  onChange={(e) =>
                    setUser((prev) => {
                      return { ...prev, city: e.target.value };
                    })
                  }
                />
              </div>
              <div class="mb-5 mx-3">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Phone"
                  autocomplete="off"
                  required
                  value={user.phone}
                  onChange={(e) =>
                    setUser((prev) => {
                      return { ...prev, phone: e.target.value };
                    })
                  }
                />
              </div>
              <div class="mb-5 mx-3">
                <label
                  for="salary"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Salary
                </label>
                <input
                  type="number"
                  id="salary"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Salary"
                  autocomplete="off"
                  required
                  value={user.salary}
                  onChange={(e) =>
                    setUser((prev) => {
                      return { ...prev, salary: e.target.value };
                    })
                  }
                />
              </div>
              <div class="mb-5 mx-3">
                <label
                  for="company"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Company Name"
                  autocomplete="off"
                  required
                  value={user.company}
                  onChange={(e) =>
                    setUser((prev) => {
                      return { ...prev, company: e.target.value };
                    })
                  }
                />
              </div>
              <div class="mb-5 mx-3">
                <label
                  for="website"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Website
                </label>
                <input
                  type="text"
                  id="website"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Website"
                  autocomplete="off"
                  required
                  value={user.website}
                  onChange={(e) =>
                    setUser((prev) => {
                      return { ...prev, website: e.target.value };
                    })
                  }
                />
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditEntry;
