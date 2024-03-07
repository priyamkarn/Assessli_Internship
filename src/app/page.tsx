"use client";
import React, { useState } from "react";
import axios from "axios";
import { error } from "console";
interface FormData {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}
export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [mounted, setmounted] = useState(false);
  const [errors, setErrors] = useState({});
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    // Update errors on each change
  };

  const validate = (data: FormData) => {
    var newErrors: FormData = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
    if (!data.name) {
      newErrors.name = "Name is required";
    }
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (data.phone && !/^\d+$/.test(data.phone)) {
      newErrors.phone = "Phone number must only contain digits";
    }
    if (!data.message) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);

    const newErrors = validate(formData);
    console.log(newErrors);
    setErrors(newErrors);
    fetch("https://api.apispreadsheets.com/data/1GZvBmOxgS32PYx7/", {
      method: "POST",
      body: JSON.stringify({
        data: { name: formData.name, email: formData.email, phone: formData.phone, message: formData.message },
      }),
    }).then((res) => {
      if (res.status === 201) {
        console.log(res);}
    })
    .catch((error)=>{
      console.log(error)
    });

    if (Object.keys(newErrors).length === 0) {
      // Perform form submission logic here (e.g., send data to server)
      // console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
    // else{
    //   toast.error('This is an error!');
    // }
  };
  React.useEffect(() => {
    setmounted(true);
    console.log("heellloooo");
  }, []);
  return (
    <main className="p-8 rounded-md shadow-md w-1/2">
      {/* <Toaster/> */}
      <div className="text-2xl font-semibold mb-4 ">Contact Us</div>
      <form onSubmit={handleSubmit} className="text-black">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone Number (optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
