import { useLocation, useNavigate } from "react-router-dom";
import { createPayment } from "../../services/paymentService";


function PaymentCard() {
const location = useLocation();
const navigate = useNavigate();

const registration = location.state?.registration;
if (!registration) {
  return (
    <div className="text-center mt-20">
      <h2 className="text-2xl font-bold">No registration found.</h2>
      <p>Please register for a course first.</p>
    </div>
  );
}

const handlePayment = async () => {
  try {
    await createPayment({
      registrationId: registration._id,
      fullName: registration.fullName,
      email: registration.email,
      phone: registration.phone,
      courseId: registration.courseId,
      courseName: registration.courseName,
      amount: registration.amount,
      status: "Paid",
    });

    alert("Payment Successful");

    navigate("/success");
  } catch (error) {
    console.error(error);

    alert("Payment Failed");
  }
};

  return (
    <section className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-10">
          Payment Summary
        </h1>

        <div className="space-y-5">
          <div className="flex justify-between border-b pb-3">
            <span>Course</span>
            <span className="font-semibold">{registration.courseName}</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span>Duration</span>
            <span>12 Weeks</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span>Student</span>
            <span>{registration.fullName}</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span>Email</span>
            <span>{registration.email}</span>
          </div>

          <div className="flex justify-between border-b pb-3">
            <span>Total Amount</span>

            <span className="text-2xl font-bold text-blue-700">
              ₹{registration.amount}
            </span>
          </div>
        </div>

        <div className="text-center mt-10">
          <button
            onClick={handlePayment}
            className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-lg font-semibold"
          >
            Pay Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default PaymentCard;
