import { useEffect, useState } from "react";
import { getDashboardData } from "../../services/dashboardService";
import { exportExcel } from "../../services/exportService";

function AdminDashboardPage() {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const data = await getDashboardData();
        setDashboard(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDashboard();
  }, []);
  if (!dashboard) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

const handleExport = async () => {
  try {
    const blob = await exportExcel();

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "InternVision_Report.xlsx";

    document.body.appendChild(link);

    link.click();

    link.remove();

    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.log(error);
    alert("Failed to export Excel");
  }
};

  return (
    <section className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-10">Admin Dashboard</h1>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg text-gray-500">Internship Applications</h3>

            <p className="text-5xl font-bold mt-3">
              {dashboard.stats.applications}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg text-gray-500">Course Registrations</h3>

            <p className="text-5xl font-bold mt-3">
              {dashboard.stats.registrations}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg text-gray-500">Total Revenue</h3>

            <p className="text-5xl font-bold mt-3 text-blue-700">
              ₹{dashboard.stats.revenue}
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg mt-12 p-6">
          <h2 className="text-2xl font-bold mb-6">
            Recent Internship Applications
          </h2>

          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Name</th>

                <th>Email</th>

                <th>Duration</th>

                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {dashboard.applications.map((application) => (
                <tr key={application._id} className="border-b">
                  <td className="py-4">{application.fullName}</td>
                  <td>{application.email}</td>
                  <td>{application.duration}</td>
                  <td>{application.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white rounded-xl shadow-lg mt-12 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Payments</h2>

            <button
              onClick={handleExport}
              className="bg-green-600 text-white px-5 py-2 rounded-lg"
            >
              Export Excel
            </button>
          </div>

          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Student</th>

                <th>Course</th>

                <th>Amount</th>

                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {dashboard.registrations.map((registration) => (
                <tr key={registration._id} className="border-b">
                  <td className="py-4">{registration.fullName}</td>
                  <td>{registration.courseName}</td>
                  <td>₹{registration.amount}</td>
                  <td>{registration.paymentStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default AdminDashboardPage;
