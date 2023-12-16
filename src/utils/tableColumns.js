import { Link } from "react-router-dom";
import { handleDeleteUser } from "./utilities";

export const columns = [
  {
    title: "Id",
    dataIndex: "id",
    width: 100,
    key: "id",
    fixed: "left",
  },
  {
    title: "Name",
    dataIndex: "name",
    width: 100,
    key: "name",
    fixed: "left",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Company",
    dataIndex: "company",
    key: "company",
  },
  {
    title: "Salary",
    dataIndex: "salary",
    key: "salary",
  },
  {
    title: "Website",
    dataIndex: "website",
    key: "website",
    render: (text) => (
      <a
        href={`https://${text}`}
        target="_blank"
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        {text}
      </a>
    ),
  },
  {
    title: "Edit",
    fixed: "right",
    dataIndex: "id",
    render: (id) => (
      <div>
        <Link to={`/editEntry/${id}`}>
          <button
            type="button"
            class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Edit
          </button>
        </Link>
      </div>
    ),
  },
  {
    title: "Actions",
    fixed: "right",
    dataIndex: "id",
    render: (id) => (
      <div>
        <button
          type="button"
          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={() => handleDeleteUser(id)}
        >
          Delete
        </button>
      </div>
    ),
  },
];
