import { ArrowRightCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6">
      {/* Header Section */}
      <div className="flex items-center space-x-4 mb-6">
        <ArrowRightCircle className="w-12 h-12 text-blue-600 animate-pulse" />
        <h1 className="text-4xl font-extrabold text-gray-800 drop-shadow-md animate-fade-in">
          Welcome to <span className="text-purple-600">Notion AI+</span>
        </h1>
      </div>

      {/* Subheading */}
      <p className="text-lg text-gray-700 text-center max-w-2xl mb-10 animate-slide-in">
        Experience the power of AI-assisted documentation. Simplify your
        workflow and let your ideas flow seamlessly. Click the button Top Left
        to get started with a new document.
      </p>

      {/* Call-to-Action Button */}
      {/* <button className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-lg font-semibold hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 transition duration-300 animate-grow">
        Create New Document
      </button> */}

      {/* Floating Bubbles Animation */}
      {/* <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-20 w-20 h-20 bg-blue-400 opacity-30 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500 opacity-30 rounded-full animate-float-reverse"></div>
        <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-pink-400 opacity-30 rounded-full animate-float-slow"></div>
      </div> */}
    </main>
  );
}

// import { ArrowLeftCircle } from "lucide-react";

// export default function Home() {
//   return (
//     <main className="flex space-x-2 items-center ">
//       <ArrowLeftCircle className="w-6 h-12 animate-pulse" />
//       <h1 className="font-bold">Get started with creating a New Document</h1>
//     </main>
//   );
// }
