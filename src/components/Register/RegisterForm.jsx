import { useParams, Link } from "react-router-dom";
import courses from "../../data/courses";
import { useState } from "react";
import { submitRegistration } from "../../services/registrationService";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses.find((c) => c.id === Number(id));

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
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

      const result = await submitRegistration({
        ...formData,
        courseId: course.id,
        courseName: course.title,
        amount: course.price,
      });

      console.log(result);

      alert("Registration Successful!");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        reason: "",
      });
      navigate("/payment", {
        state: {
          registration: result.data,
        },
      });
    } catch (error) {
      console.log(error);
      console.log(error.response);

      alert(error.response?.data?.message || error.message);
    }
  };

  return (
    <div>
      <section className="bg-gray-100 min-h-screen py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-center mb-8">
            Course Registration
          </h1>

          <div className="bg-blue-50 border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold">{course.title}</h2>

            <p className="mt-2">Duration: {course.duration}</p>

            <p className="mt-2 font-semibold text-blue-700">₹{course.price}</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium mb-2">Full Name</label>

                  <input
                    required
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
                    required
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
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
              <div>
                <label className="block font-medium mb-2">
                  Why do you want to enroll?
                </label>

                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us why you want to enroll in this course..."
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>
              <div className="flex justify-between items-center bg-gray-100 p-5 rounded-lg">
                <div>
                  <p className="text-lg font-semibold">Total Amount</p>

                  <p className="text-2xl font-bold text-blue-700">
                    ₹{course.price}
                  </p>
                </div>

                <button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition"
                >
                  {loading ? "Registering..." : "Continue to Payment"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RegisterForm;
