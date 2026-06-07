import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;

  const email = localStorage.getItem("email");
useEffect(() => {
  const email = localStorage.getItem("email");

  if (!email) {
    console.log("No email found in localStorage");
    setIsLoading(false);
    return;
  }

  setIsLoading(true);

  fetch(`http://localhost:5000/my-jobs/${email}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("MY JOBS DATA:", data); // DEBUG
      setJobs(data || []);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log("ERROR:", err);
      setIsLoading(false);
    });
}, []);

  // ✔ SEARCH FILTER
  const filteredJobs = jobs.filter((job) =>
    job.jobTitle?.toLowerCase().includes(searchText.toLowerCase())
  );

  // ✔ PAGINATION FIXED
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentJobs = filteredJobs.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // ✔ NEXT PAGE
  const nextPage = () => {
    if (indexOfLastItem < filteredJobs.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // ✔ PREVIOUS PAGE
  const prePage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  // ✔ DELETE JOB
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/job/${id}`, {
      method: "DELETE",
    });

    setJobs(jobs.filter((j) => j._id !== id));
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <h1 className="text-center text-2xl font-bold my-4">
        ALL MY JOBS
      </h1>

      {/* SEARCH */}
      <div className="text-center mb-4">
        <input
          type="text"
          placeholder="Search job title..."
          className="border px-3 py-2 w-1/2"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {/* POST BUTTON */}
      <div className="flex justify-center mb-6">
        <Link to="/post-job">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Post A New Job
          </button>
        </Link>
      </div>

      {/* TABLE */}
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : currentJobs.length === 0 ? (
        <p className="text-center">No Jobs Found</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">No</th>
                <th className="p-2">Job Title</th>
                <th className="p-2">Company</th>
                <th className="p-2">Salary</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {currentJobs.map((job, index) => (
                <tr key={job._id} className="text-center border-t">
                  <td className="p-2">
                    {indexOfFirstItem + index + 1}
                  </td>

                  <td className="p-2">{job.jobTitle}</td>

                  <td className="p-2">{job.companyName}</td>

                  <td className="p-2">
                    ₹{job.minPrice} - ₹{job.maxPrice}
                  </td>

                  <td className="p-2">
                    <button
                      onClick={() => handleDelete(job._id)}
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* PAGINATION */}
      <div className="flex justify-center gap-6 mt-6">
        <button
          onClick={prePage}
          disabled={currentPage === 1}
          className="px-4 py-2 border"
        >
          Previous
        </button>

        <button
          onClick={nextPage}
          disabled={indexOfLastItem >= filteredJobs.length}
          className="px-4 py-2 border"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MyJobs;