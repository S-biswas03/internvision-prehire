import Layout from "../../components/layouts/Layout";
import FeaturedCourses from "../../components/Courses/FeaturedCourses";

function Courses() {
  return (
    <Layout>
      <div className="py-12 bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-center mb-4">Our Courses</h1>

          <p className="text-center text-gray-600 mb-12">
            Choose the course that best matches your career goals.
          </p>

          <FeaturedCourses />
        </div>
      </div>
    </Layout>
  );
}

export default Courses;
