import { useState } from "react";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <footer className="text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col space-y-8">
        <div className="w-1/2 ml-[25%]">
          <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                className="w-full p-2 bg-gray-800 border border-gray-600 rounded"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold mb-4">Follow Me</h2>
          <div className="flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-pink-600"
            >
              <i className="fab fa-instagram text-3xl"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-blue-600"
            >
              <i className="fab fa-linkedin text-3xl"></i>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-gray-500"
            >
              <i className="fab fa-github text-3xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
