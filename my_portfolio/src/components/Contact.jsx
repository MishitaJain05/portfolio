import { useState } from "react";
import contactImg from "../assets/images/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch(
      "https://mjportfolio-efy0.onrender.com/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      }
    );
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: "Message sent successfully" });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <section
      className="py-20 bg-[#0a0a0a] rounded-[48px] mt-[80px]"
      id="contact"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <TrackVisibility>
            {({ isVisible }) => (
              <img
                className={isVisible ? "animate__animated animate__zoomIn" : ""}
                src={contactImg}
                alt="Contact Us"
                style={{ maxWidth: "350px" }}
              />
            )}
          </TrackVisibility>
        </div>
        <div className="w-full md:w-1/2">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__fadeIn" : ""}
              >
                <h2 className="text-3xl font-bold text-white mb-6">
                  Get In Touch
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                      }
                      className="bg-[#151515] text-white px-4 py-3 rounded-lg w-full focus:outline-none"
                    />
                    <input
                      type="text"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                      className="bg-[#151515] text-white px-4 py-3 rounded-lg w-full focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email Address"
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                      className="bg-[#151515] text-white px-4 py-3 rounded-lg w-full focus:outline-none"
                    />
                    <input
                      type="tel"
                      value={formDetails.phone}
                      placeholder="Phone No."
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                      className="bg-[#151515] text-white px-4 py-3 rounded-lg w-full focus:outline-none"
                    />
                  </div>
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                    className="bg-[#151515] text-white px-4 py-3 rounded-lg w-full focus:outline-none resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:from-indigo-600 hover:to-purple-600"
                  >
                    <span>{buttonText}</span>
                  </button>
                  {status.message && (
                    <p
                      className={`mt-4 text-sm ${
                        status.success === false
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {status.message}
                    </p>
                  )}
                </form>
              </div>
            )}
          </TrackVisibility>
        </div>
      </div>
    </section>
  );
};
