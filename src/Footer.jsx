import { useState } from "react";
import emailjs from "emailjs-com";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_7ykr66r";
    const templateId = "template_z21dawf";
    const userId = "fyqS7bBTPwx6vRZPG";

    emailjs
      .send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSent(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log("FAILED...", error);
        setError("Failed to send message. Please try again.");
      });
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
      <div className="max-w-7xl mx-auto flex flex-col justify-evenly md:flex-row">
        <div className="w-1/2">
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-white">Contact Me</h2>
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
                required
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
                required
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
                required
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
            >
              Submit
            </button>
          </form>
          {isSent && (
            <p className="text-green-500 mt-4">Message sent successfully!</p>
          )}
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
        <div className="mt-8 md:mt-0">
          <div className="flex flex-col space-y-3">
            <h4 className="text-lg font-bold underline text-blue-800 dark:text-yellow-400">
              Contact
            </h4>
            <p className="text-black dark:text-white">
              <i className="fa-regular fa-envelope"></i> :{" "}
              <a
                href="mailto:neilsulhyan@gmail.com"
                className="hover:underline text-blue-400"
              >
                neilsulhyan@gmail.com
              </a>
            </p>
            <p className="text-black dark:text-white">
              <i className="fa-solid fa-phone"></i> :{" "}
              <a
                href="tel:+918484979855"
                className="hover:underline text-blue-400"
              >
                +91 8484979855
              </a>
            </p>
            <p className="text-black dark:text-white">
              <i className="fa-solid fa-location-dot"></i> : Sangli, India
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <h4 className="text-lg font-bold underline text-blue-800 mt-8 dark:text-yellow-400 md:mt-4">
              Follow Me
            </h4>
            <div className="flex space-evenly space-x-4">
              <a className="text-2xl text-black dark:text-white hover:text-pink-600 dark:hover:text-pink-600" href="https://www.instagram.com/neilsulhyan10/" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a className="text-2xl text-black dark:text-white dark:hover:text-gray-500 hover:text-gray-500" href="https://github.com/NeilSulhyan10" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a className="text-2xl text-black dark:text-white hover:text-indigo-600 dark:hover:text-indigo-600"
                href="https://www.linkedin.com/in/neil-sulhyan-091ba82aa/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-4 flex items-center justify-center">
        <p className="text-sm text-black dark:text-white">© 2025 Neil Sulhyan. All rights reserved.</p>
      </div>
    </footer>
  );
}
