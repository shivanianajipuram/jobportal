import { useState } from "react";
import { useForm } from "react-hook-form";
const BASE_URL = import.meta.env.VITE_API_URL;

const skillsList = ["C++", "Java", "Python", "React", "Node.js", "MongoDB"];

const CreateJob = () => {
  const { register, handleSubmit, reset } = useForm();
  const [selectedSkills, setSelectedSkills] = useState([]);

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : [...prev, skill]
    );
  };

  const onSubmit = async (data) => {
    const email = localStorage.getItem("email");

    if (!email) {
      alert("Login required");
      return;
    }

    const jobData = {
      ...data,
      skills: selectedSkills,
      createdBy: email,
    };

    const res = await fetch(`${BASE_URL}/post-job`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jobData),
    });

    const result = await res.json();

    if (res.ok) {
      alert("Job posted");
      reset();
      setSelectedSkills([]);
    } else {
      alert(result.error || "Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-8">

        <h2 className="text-2xl font-bold text-center mb-8">
          Post a New Job
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* GRID INPUT SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <input
              {...register("jobTitle")}
              placeholder="Job Title"
              className="border p-3 rounded-lg w-full focus:outline-blue-500"
            />

            <input
              {...register("companyName")}
              placeholder="Company Name"
              className="border p-3 rounded-lg w-full"
            />

            <input
              {...register("companyLogo")}
              placeholder="Company Logo URL"
              className="border p-3 rounded-lg w-full"
            />

            <input
              {...register("jobLocation")}
              placeholder="Job Location"
              className="border p-3 rounded-lg w-full"
            />

            <input
              {...register("minPrice")}
              placeholder="Min Salary"
              className="border p-3 rounded-lg w-full"
            />

            <input
              {...register("maxPrice")}
              placeholder="Max Salary"
              className="border p-3 rounded-lg w-full"
            />

            <select
              {...register("salaryType")}
              className="border p-3 rounded-lg w-full"
            >
              <option value="">Salary Type</option>
              <option value="hourly">Hourly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>

            <select
              {...register("experienceLevel")}
              className="border p-3 rounded-lg w-full"
            >
              <option value="">Experience Level</option>
              <option value="fresher">Fresher</option>
              <option value="mid">Mid</option>
              <option value="senior">Senior</option>
            </select>

            <select
              {...register("employmentType")}
              className="border p-3 rounded-lg w-full"
            >
              <option value="">Employment Type</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="internship">Internship</option>
            </select>

            <input
              type="date"
              {...register("postingDate")}
              className="border p-3 rounded-lg w-full"
            />
          </div>

          {/* DESCRIPTION */}
          <textarea
            {...register("description")}
            placeholder="Job Description"
            rows={5}
            className="border p-3 rounded-lg w-full"
          />

          {/* SKILLS */}
          <div>
            <p className="font-semibold mb-3">Required Skills</p>

            <div className="flex flex-wrap gap-3">
              {skillsList.map((skill) => (
                <button
                  type="button"
                  key={skill}
                  onClick={() => toggleSkill(skill)}
                  className={`px-4 py-2 rounded-full border transition ${
                    selectedSkills.includes(skill)
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>

            <p className="text-sm text-gray-500 mt-3">
              Selected: {selectedSkills.join(", ") || "None"}
            </p>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
          >
            Submit Job
          </button>

        </form>
      </div>
    </div>
  );
};

export default CreateJob;