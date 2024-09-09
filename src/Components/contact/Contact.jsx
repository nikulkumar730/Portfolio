import { useState } from "react";
import "./contact.scss";

const Contact = () => {
  let [result, setResult] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    setIsSuccess(null);
    const formData = new FormData(event.target);

    formData.append("access_key", "210976ac-882e-4ac7-b0b6-7479bc33bfeb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setIsSuccess(true);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      setIsSuccess(false);
    }
  };
  return (
    <div className="contact container">
      <div className="row d-flex align-items-center">
        <div className="col-md-6 col-12 col-12 textContainer ">
          <h1 className="text-center contactHeading">Let's work together</h1>
          <div className="text-center itemsText">
            {" "}
            <div className="item text-start d-flex flex-column justify-content-center   align-self-center">
              <h2>Mail</h2> <span>nikulkumar730@gmail.com</span>
            </div>
            <div className="item text-start d-flex flex-column justify-content-center   align-self-center">
              <h2>Address</h2>{" "}
              <span>
                {" "}
                D-501 shayona aagman , <br />
                vandematram,gota,
                <br />
                Ahmedabad ,382481
              </span>
            </div>
            <div className="item text-start d-flex flex-column justify-content-center   align-self-center">
              <h2>Contact</h2> <span>+91 7300340014</span>
            </div>
          </div>
          <h1></h1>
        </div>
        <div className="col-md-6 col-12 col-12">
          <div className=" allFormElement">
            <form onSubmit={onSubmit} className="form">
              <div className="formElememt">
                <label for="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Enter your name"
                />
              </div>
              <div className="formElememt">
                <label for="email">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  required
                />
              </div>
              <div className="formElememt">
                <label for="message">Message</label>
                <textarea
                  name="message"
                  placeholder="Message"
                  id="message"
                  rows={3}
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button className="submit" type="submit">
                  Submit{" "}
                </button>
              </div>
            </form>
            <div className="text-center">
              <span
                className={
                  isSuccess === null
                    ? ""
                    : isSuccess
                    ? "text-success text-center"
                    : "text-danger text-center"
                }
              >
                {result}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
