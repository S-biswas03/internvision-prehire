import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          InternVision
        </Link>

        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/internship">Internship</Link>
          <Link to="/admin/login">Admin</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
