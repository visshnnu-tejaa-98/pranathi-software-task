import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { columns } from "../utils/tableColumns";
import { Table } from "antd";
import { userLogout } from "../redux/reducers/employeeSlice";

const UserTable = () => {
  const { users, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const dataSource = users;
  return (
    <div className="max-w-[80vw] mx-auto overflow-auto">
      <div>
        <div className="flex justify-between items-center my-7">
          <h2 className="text-4xl font-semibold">List of Employees</h2>
          <div>
            <Link to={"/addEntry"}>
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-4 dark:bg-blue-600 focus:outline-none"
              >
                Add Entry +
              </button>
            </Link>
            <Link to={"/"}>
              <button
                type="button"
                class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                onClick={() => dispatch(userLogout())}
              >
                Logout
              </button>
            </Link>
          </div>
        </div>
        {loading && <div>Loading...</div>}
        {!loading && error ? <div>Error: {error}</div> : null}
        {!loading && users.length ? (
          <div>
            <div className="text-right"></div>

            <Table
              columns={columns}
              dataSource={dataSource}
              scroll={{
                x: 1500,
                y: 500,
              }}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default UserTable;
