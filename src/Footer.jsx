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

    emailjs.send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSent(true); 
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log('FAILED...', error);
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
          {isSent && <p className="text-green-500 mt-4">Message sent successfully!</p>}
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>
    </footer>
  );
}
