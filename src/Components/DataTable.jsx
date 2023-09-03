import { useEffect, useState } from "react";

const DataTable = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [filterEmployeeData, setFilterEmployeeData] = useState([]);
  const [openFilterByDep, setOpenFilterByDep] = useState(false);
  const [openFilterByPos, setOpenFilterByPos] = useState(false);

  const openFilterDepDropdown = () => {
    openFilterByDep ? setOpenFilterByDep(false) : setOpenFilterByDep(true);
  };
  const openFilterPosDropdown = () => {
    openFilterByPos ? setOpenFilterByPos(false) : setOpenFilterByPos(true);
  };

  const filterData = (data) => {
    setFilterEmployeeData(
      employeeData.filter((employee) => employee.position.includes(data))
    );
  };

  const fetchUserData = () => {
    fetch("../../public/mockData.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFilterEmployeeData(data);
        setEmployeeData(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      {/* Start block */}
      <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
          {/* Start coding here */}
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg ">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-1/2">
                <form className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Search"
                      required=""
                    />
                  </div>
                </form>
              </div>
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <button className="px-3 py-1.5 rounded bg-green-900 text-white">
                  Add Employee
                </button>
                <div className="flex items-center space-x-3 w-full md:w-auto">
                  {/* filter  */}
                  <div className="flex items-center gap-5">
                    <div className="relative inline-block text-left">
                      <div>
                        <button
                          type="button"
                          className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                          id="menu-button"
                          aria-expanded="false"
                          aria-haspopup="true"
                          onClick={openFilterDepDropdown}
                        >
                          Filter by Department
                          <svg
                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>

                      {
                        <div
                          className={`${
                            openFilterByDep ? "block" : "hidden"
                          } absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 h-[250px] overflow-y-auto focus:outline-none`}
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="menu-button"
                          tabIndex={-1}
                        >
                          <div className="py-1" role="none">
                            {employeeData?.map((data) => (
                              <div
                                key={data.id}
                                className="font-medium text-gray-900 block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-0"
                                onClick={() => filterData(data.department)}
                              >
                                {data.department}
                              </div>
                            ))}
                          </div>
                        </div>
                      }
                    </div>
                    <div className="relative inline-block text-left">
                      <div>
                        <button
                          type="button"
                          className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                          id="menu-button"
                          aria-expanded="false"
                          aria-haspopup="true"
                          onClick={openFilterPosDropdown}
                        >
                          Filter by Position
                          <svg
                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>

                      {
                        <div
                          className={`${
                            openFilterByPos ? "block" : "hidden"
                          } absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 h-[250px] overflow-y-auto focus:outline-none`}
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="menu-button"
                          tabIndex={-1}
                        >
                          <div className="py-1" role="none">
                            {employeeData?.map((data) => (
                              <div
                                key={data.id}
                                className="font-medium text-gray-900 block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                                role="menuitem"
                                tabIndex={-1}
                                id="menu-item-0"
                                onClick={() => filterData(data.position)}
                              >
                                {data.position}
                              </div>
                            ))}
                          </div>
                        </div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-4">
                      ID
                    </th>
                    <th scope="col" className="px-4 py-4">
                      Name
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Age
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Position
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Department
                    </th>
                    <th scope="col" className="px-4 py-3 text-right">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filterEmployeeData?.map((data) => (
                    <tr key={data.id} className="border-b dark:border-gray-700">
                      <td className="px-5 py-3">{data.id}</td>
                      <th
                        scope="row"
                        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {data.first_name + " " + data.last_name}
                      </th>
                      <td className="px-4 py-3">{data.age}</td>
                      <td className="px-4 py-3">{data.position}</td>
                      <td className="px-4 py-3">{data.department}</td>
                      <td className="px-4 py-3 flex gap-3 items-center justify-end">
                        <button className="px-3 py-1.5 rounded bg-blue-600 text-white">
                          Edit
                        </button>
                        <button className="px-3 py-1.5 rounded bg-red-600 text-white">
                          Delete
                        </button>
                        <button className="px-3 py-1.5 rounded bg-gray-500 text-white">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <nav
              className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
              aria-label="Table navigation"
            >
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Showing
                <span className="font-semibold text-gray-900 dark:text-white ml-1">
                  1-3
                </span>
              </span>
              <ul className="inline-flex items-stretch -space-x-px">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default DataTable;