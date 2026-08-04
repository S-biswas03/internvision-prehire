function Hero() {
  return (
    <section className="bg-linear-to-r from-blue-700 to-indigo-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-bold leading-tight">
            Learn. Build. Get Hired.
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Join InternVision Tech to gain industry-ready skills through
            professional courses and internships designed for students.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Explore Courses
            </button>

            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition">
              Apply Internship
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center mt-12 lg:mt-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Students"
            className="rounded-xl shadow-2xl w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
