import { useState } from "react";
import api from "../../services/api";

function InternshipForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    degree: "",
    branch: "",
    currentYear: "",
    skills: "",
    duration: "",
    reason: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.post("/applications", formData);

      alert(response.data.message);

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        college: "",
        degree: "",
        branch: "",
        currentYear: "",
        skills: "",
        duration: "",
        reason: "",
      });
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="bg-gray-100 min-h-screen py-16">
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8"
      >
        <h1 className="text-4xl font-bold text-center text-blue-700">
          Internship Application
        </h1>

        <p className="text-center text-gray-500 mt-3 mb-10">
          Fill out the form below to apply for our internship program.
        </p>
        <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium mb-2">Full Name</label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Phone Number</label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>
        <h2 className="text-2xl font-semibold mt-10 mb-6">
          Academic Information
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium mb-2">
              College / University
            </label>

            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
              placeholder="Enter your college name"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Degree</label>

            <input
              type="text"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              placeholder="B.Tech / B.Sc / BCA"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Branch</label>

            <input
              type="text"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              placeholder="Computer Science"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Current Year</label>

            <select
              name="currentYear"
              value={formData.currentYear}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option>1st Year</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>
              <option>Graduate</option>
            </select>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mt-10 mb-6">Skills</h2>

        <textarea
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          rows="5"
          placeholder="HTML, CSS, JavaScript, React..."
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <h2 className="text-2xl font-semibold mt-10 mb-6">
          Internship Duration
        </h2>

        <div className="flex gap-8">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="duration"
              type="radio"
              name="duration"
              value="1 Month"
              checked={formData.duration === "1 Month"}
              onChange={handleChange}
            />
            1 Month
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="duration"
              value="3 Months"
              checked={formData.duration === "3 Months"}
            />
            3 Months
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="duration"
              value="6 Months"
              checked={formData.duration === "6 Months"}
            />
            6 Months
          </label>
        </div>
        <h2 className="text-2xl font-semibold mt-10 mb-6">
          Why do you want to join?
        </h2>

        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          rows="5"
          placeholder="Tell us why you want to join..."
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <h2 className="text-2xl font-semibold mt-10 mb-6">Resume</h2>

        <input type="file" className="block w-full border rounded-lg p-3" />
        <div className="text-center mt-12">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-lg text-lg font-semibold transition"
          >
            {loading ? "Submitting..." : "Apply Now"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default InternshipForm;
