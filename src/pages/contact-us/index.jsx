import { about } from "@/lib/Layout/Footer/Footer";
import SmallTitle from "@/lib/pagecomponents/custom/smalltitle";
import { useState } from "react";

export default function ContactUs(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      // handle form submission logic here
    };
    return <div className="max-w-7xl mx-auto bg-white p-2 md:p-0 ">
        <SmallTitle>Contact Us</SmallTitle>
        <ul className="p-2 pl-8 sm:pl-0 max-w-3xl mx-auto not-prose">
         {about.map((value, index) => {
              return (
                <li key={"AboutUs" + index} className="flex flex-wrap gap-4">
                    <span className=" flex items-center justify-center">

                  <value.icon className="h-8 w-8   text-purple-600" />
                    </span>
                  <p className="my-4 mx-2">
                    {value.description}
                  </p>
                </li>
              );
            })}
            </ul>
            <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="mt-1 block w-full rounded-md form-input border-blue-600 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md form-input border-blue-600 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write something here.."
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 block w-full rounded-md form-textarea border-blue-600 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          />
        </div>
        <div>
          <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
}