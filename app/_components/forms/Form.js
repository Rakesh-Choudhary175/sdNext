"use client";

import { useState } from "react";
import Spinner from "../Spinner";
import SpinnerForm from "../SpinnerForm";

// below is the sheet code

// const sheets = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1uLNouKLBKYLQv3v2ILKKPD7NxvqD1KT48UIfoYhWpzY/edit?gid=0#gid=0");
// //if you have changed your sheet name then replace the below Sheet1 with your sheet name
// const sheet = sheets.getSheetByName("Sheet1");
// function doPost(e){
//  let data = e.parameter;
//  sheet.appendRow([data.name,data.email,data.phone,data.message]);
//  return ContentService.createTextOutput("Your message was successfully sent to the Googlesheet database!");
// }

function Form() {
  //state for form element handler
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
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
  function handleMessage(event) {
    setMessage(event.target.value);
  }

  function handleSubmit(stat) {
    setSubmiting(stat);
    console.log(stat);
  }

  //onSumit handler
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
      formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY);

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
    console.log("endde");

    //based on check show success or falure
  }

  return (
    <form id="contactForm" className="space-y-6" onSubmit={onSubmit}>
      <div>
        <label className="block text-white mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-3 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          required=""
          value={name}
          onChange={handleName}
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
          value={email}
          onChange={handleEmail}
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
          value={phone}
          onChange={handlePhone}
        />
      </div>
      <div>
        <label className="block text-white mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="w-full px-4 py-3 bg-neutral-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          required=""
          value={message}
          onChange={handleMessage}
        ></textarea>
      </div>

      {submiting ? (
        <SpinnerForm />
      ) : (
        <button
          type="submit"
          className="w-full py-4 bg-[#D4AF37] text-white rounded-lg hover:bg-white hover:text-[#D4AF37] transition-colors duration-300"
        >
          Send Message
        </button>
      )}
    </form>
  );
}

export default Form;
