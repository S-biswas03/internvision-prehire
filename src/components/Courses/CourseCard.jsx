import { Link } from "react-router-dom";
function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
      <img
        src={course.image}
        alt={course.title}
        className="h-52 w-full object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-bold">{course.title}</h3>

        <p className="text-gray-500 mt-2">Duration: {course.duration}</p>

        <div className="flex justify-between items-center mt-5">
          <span className="text-blue-700 font-bold">{course.price}</span>

          <Link to={`/register/${course.id}`}>
            <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
