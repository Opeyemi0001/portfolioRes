// Import necessary React and Tailwind components
import "./AboutUs.css";

function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-6">
      <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg md:text-xl leading-relaxed">
          I am a dedicated and enthusiastic software engineer with a passion for creating elegant solutions to complex problems. My journey in the tech world started with a curiosity for how things work, and it has evolved into a fulfilling career where I get to build impactful applications. 
          <br/><br/>
          When I’m not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community. My goal is to continuously grow, learn, and contribute to meaningful projects that make a difference.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src="https://via.placeholder.com/300" 
          alt="Your Portrait" 
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
    </div>
  );
}

export default AboutMe;

// Replace the placeholder image URL with the actual URL of your photo. The component is responsive and adjusts well for various screen sizes.
