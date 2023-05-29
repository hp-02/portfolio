import { useState } from "react";

const Contact = () => {

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    return (
        <section id="contact">
            <h1>Contact</h1>
            <div>
                <div>
                    <div className="contact-info">
                        <img width="40" height="40" src="https://img.icons8.com/ios/50/mail.png" alt="mail" />
                        <p>harshpandey971@gmail.com</p>
                    </div>
                    <div className="contact-info">
                        <img width="40" height="40" src="https://img.icons8.com/ios/50/marker--v1.png" alt="marker" />
                        <p>Mumbai</p>
                    </div>
                    <div className="contact-info">
                        <a href="https://github.com/hp-01" target="_blank">
                            <img width="48" height="48" src="https://img.icons8.com/ios-glyphs/90/github.png" alt="github" />
                        </a>
                        <a href="https://www.linkedin.com/in/harsh-p-a35892131/" target="_blank">
                            <img width="48" height="48" src="https://img.icons8.com/color/96/linkedin.png" alt="linkedin" />
                        </a>
                    </div>
                </div>
                <div style={{ width: "100%", padding: "0 1rem" }}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input className="form-control" name="name" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" name="message" rows="3" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                    </div>
                    <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=harshpandey971@gmail.com&body=Hi Harsh, %0A%0A${message}%0A%0ARegards,%0A${name}`} target="_blank" className="btn">Submit</a>
                </div>
            </div>
        </section >
    )
}

export default Contact;