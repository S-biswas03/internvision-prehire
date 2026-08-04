import { Link } from "react-router-dom";

function InternshipSection() {
  const durations = [
    {
      title: "1 Month",
      description: "Perfect for beginners who want to gain practical exposure.",
    },
    {
      title: "3 Months",
      description:
        "Work on multiple projects and improve your development skills.",
    },
    {
      title: "6 Months",
      description:
        "Industry-level internship with real-world experience and mentorship.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">Internship Programs</h2>

          <p className="text-gray-600 mt-4">
            Choose the internship duration that suits your learning goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {durations.map((item, index) => (
            <div
              key={index}
              className="border rounded-xl p-8 shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold text-blue-700">{item.title}</h3>

              <p className="text-gray-600 mt-4">{item.description}</p>

              <Link to="/internship">
                <button className="mt-8 bg-blue-700 text-white px-5 py-3 rounded-lg hover:bg-blue-800">
                  Apply Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InternshipSection;
