import Layout from "../../components/layouts/Layout";
import Hero from "../../components/Hero/Hero"
import FeaturedCourses from "../../components/Courses/FeaturedCourses";
import InternshipSection from "../../components/Internship/InternshipSection";
function Home() {
  return (
    <Layout>
      <Hero />
      <FeaturedCourses />
      <InternshipSection />
    </Layout>
  );
}

export default Home;
