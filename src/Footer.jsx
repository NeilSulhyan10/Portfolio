import { useState } from "react";
import emailjs from "emailjs-com";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [notification, setNotification] = useState({
    show: false,
    type: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const serviceId = "service_4tmz4tl";
    const templateId = "template_z21dawf";
    const userId = "fyqS7bBTPwx6vRZPG";

    emailjs
      .send(serviceId, templateId, formData, userId)
      .then((response) => {
        setNotification({
          show: true,
          type: "success",
          message: "Message sent successfully!",
        })
        setLoading(false);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setTimeout(() => {
          setNotification({ show: false, type: "", message: "" });
        }, 5000);
      })
      .catch((error) => {
        console.log("FAILED...", error);
        setError("Failed to send message. Please try again.");
        setNotification({
          show: true,
          type: "error",
          message: "Failed to send message. Please try again.",
        });
        setLoading(false);
        setTimeout(() => {
          setNotification({ show: false, type: "", message: "" });
        }, 5000);
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
    <>
    {notification.show && (
  <div
    className={`fixed top-6 right-6 z-50 px-6 py-4 rounded shadow-lg text-white
      ${
        notification.type === "success"
          ? "bg-green-500"
          : "bg-red-500"
      }
      animate-slide-in
    `}
  >
    {notification.message}
  </div>
)}
    <footer className="text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col justify-evenly md:flex-row">
        <div className="w-1/2">
          <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-[#22D3EE]">
            Contact Me
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full p-2 bg-gray-100 border border-gray-600 rounded dark:text-black"
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
                className="w-full p-2 bg-gray-100 border border-gray-600 rounded dark:text-black"
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
                className="w-full p-2 bg-gray-100 border border-gray-600 rounded dark:text-black"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`px-4 py-2 rounded transition-all
              ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 dark:bg-[#22D3EE] dark:hover:bg-[#2296eeff]"
              }
            `}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
        <div className="mt-8 md:mt-0">
          <div className="flex flex-col space-y-3">
            <h4 className="text-lg font-bold underline text-blue-800 dark:text-[#22D3EE]">
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
            <h4 className="text-lg font-bold underline text-blue-800 mt-8 dark:text-[#22D3EE] md:mt-4">
              Follow Me
            </h4>
            <div className="flex space-evenly space-x-4">
              <a
                className="text-2xl text-black dark:text-white hover:text-red-600 dark:hover:text-red-600"
                href="https://in.pinterest.com/neilsulhyan/"
                target="_blank"
              >
                <i className="fa-brands fa-pinterest"></i>
              </a>
              <a
                className="text-2xl text-black dark:text-white hover:text-pink-600 dark:hover:text-pink-600"
                href="https://www.instagram.com/neilsulhyan10/"
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                className="text-2xl text-black dark:text-white dark:hover:text-gray-500 hover:text-gray-500"
                href="https://github.com/NeilSulhyan10"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                className="text-2xl text-black dark:text-white hover:text-indigo-600 dark:hover:text-indigo-600"
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
        <p className="text-sm text-black dark:text-white">
          © 2025 Neil Sulhyan. All rights reserved.
        </p>
      </div>
    </footer>
    </>
  );
}
