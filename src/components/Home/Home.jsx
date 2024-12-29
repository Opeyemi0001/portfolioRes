// Import necessary React and Tailwind components
import "./Home.css";

function Home() {

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 text-gray-800 text-center">
      <div className="max-w-2xl">
        <h1 className="relative text-4xl md:text-6xl font-bold mb-4">
          <span className="absolute inset-0 left-6 right-2 bg-gray-400 opacity-30 blur-sm h-3/4 top-2/4"></span>
          <span className="relative">Hello!, I'm Opeyemi. 👋</span>
        </h1>
        <p className="text-lg md:text-2xl mt-8 text-gray-600">
          I am a passionate software <span className='text-grey-700 font-extrabold'>Developer</span> dedicated to building impactful and efficient solutions.
        </p>
      </div>
    </div>
  );
}

export default Home;

// Replace [Your Name] with your actual name. The page is fully responsive and centers the content on all screen sizes.
