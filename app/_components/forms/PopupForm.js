import { useState } from "react";
import Spinner from "../Spinner";
import SpinnerForm from "../SpinnerForm";

function PopupForm({ handleQuote }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submiting, setSubmiting] = useState(false);

  //onchange handler
  function handleName(event) {
    setName(event.target.value);
  }
  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handlePhone(event) {
    setPhone(event.target.value);
  }

  function handleSubmit(stat) {
    setSubmiting(stat);
    console.log(stat);
  }

  async function onSubmit(event) {
    event.preventDefault();

    //URL need to be stored on env file
    const url =
      "https://script.google.com/macros/s/AKfycbwfQeKtqUufeeJiAaUxcOWlOv-LOLB0OIKwWltnYV9qAL25iyuKDrZHuOLtw1XwI2Mm/exec";

    //getting form data
    const formData = new FormData(event.target);

    //placeholder for starting loading
    console.log("submission start");
    handleSubmit(true);

    //sending data to excel
    let check = false;
    await fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((data) => {
        console.log(data);
        check = true;
      })
      .catch((error) => {
        //need to throw error
        console.log(error);
        check = false;
      });

    //if succesfully send to sheet then send mail for new entry
    if (check == true) {
      formData.append("access_key", "756c2034-2ef9-4066-9aea-fdb3fe162d3c");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());
    }
    handleSubmit(false);
    //stop loading
    handleQuote();
    console.log("endde");

    //based on check show success or falure
  }

  return (
    <div id="myModal" className="modal">
      <div className="modal-content ">
        <span className="close" onClick={handleQuote}>
          &times;
        </span>
        <h2 style={{ textAlign: "center", fontSize: 20 }}>
          Schedule Your Appointment Today!
        </h2>
        <form id="contactForm" className="space-y-6 " onSubmit={onSubmit}>
          <div>
            <label className="block text-white mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              required=""
              onChange={handleName}
              value={name}
            />
          </div>
          <div>
            <label className="block text-white mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              required=""
              onChange={handleEmail}
              value={email}
            />
          </div>
          <div>
            <label className="block text-white mb-2">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-3 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              required=""
              onChange={handlePhone}
              value={phone}
            />
          </div>
          {submiting ? (
            <SpinnerForm />
          ) : (
            <button
              type="submit"
              className="w-full py-4 bg-[#D4AF37] text-white rounded-lg hover:bg-white hover:text-[#D4AF37] transition-colors duration-300"
              disabled={submiting}
            >
              Send Message
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default PopupForm;
