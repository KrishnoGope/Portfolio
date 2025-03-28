import { useState } from "react";
import FooterArea from "../FooterArea/FooterArea";
import './Contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({ email: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Email Validation
        if (name === "email") {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            setErrors({ ...errors, email: emailPattern.test(value) ? "" : "Invalid email format" });
        }
    };

    //Email connections:
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "9a058a70-3be3-4398-93c4-971914a3506f");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
          setFormData({ name: "", email: "", message: "" });
        }
    };

    return (
        <>
            <div id="contact" className="contact_form">
                <h1 className="Hading text-center mb-4 text-primary fw-bold">Connect With Us</h1>
                <div className=" d-flex justify-content-center">
                    <form onSubmit={onSubmit}
                        className=" p-4 rounded shadow-lg border border-2 border-primary bg-white"
                        style={{ maxWidth: "600px", width: "100%" }}
                    >
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Full Name:</label>
                            <input
                                type="text"
                                name="name"
                                className="form-control border-primary"
                                placeholder="Enter your name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Email:</label>
                            <input
                                type="email"
                                name="email"
                                className={`form-control border-primary ${errors.email ? "is-invalid" : ""}`}
                                placeholder="Enter your email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Message:</label>
                            <textarea
                                name="message"
                                className="form-control border-primary"
                                placeholder="Write your message"
                                required
                                rows={3}
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="SendMessage d-flex justify-content-center align-items-center mx-auto"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
            <FooterArea />
        </>
    );
};

export default Contact;