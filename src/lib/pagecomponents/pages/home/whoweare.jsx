import SmallTitle from "../../custom/smalltitle";
import { TfiHeadphoneAlt } from "react-icons/tfi";
export default function () {
  return (
    <>
      <div className="grid grid-cols-12 p-2">
        <div className="col-span-12 md:col-span-8 p-2">
          <SmallTitle>About</SmallTitle>
          <h2 className="mt-0"> WHO WE ARE?</h2>
          <h3>We are your Best Interior designer.</h3>
          <p>
            Every household has its own identity. A character that reflects the
            taste and preference of fine living of the household members,
            especially the housewives. Introlink is one of the Best Manufacturer
            of modular kitchen in Kolkata. We at Introlink identify the
            lifestyle of our patrons and offer a range of Modular Kitchens and
            Storage Wardrobes which have the perfect blend of Ultimate
            Sophistication and functional values at affordable prices. Introlink
            Modular Kitchen & Storage Wardrobes, each has a different story to
            tell. Get in Touch with Us for modular kitchen price in Kolkata.
          </p>
        </div>
        {/* Right side form */}
        <div className="md:h-96 md:-translate-y-32 z-10 col-span-12 md:col-span-4 text-white">
          <div className="h-36 bg-blue-500 flex px-2 items-center justify-center">
            <span className="border-r-2 px-4 mx-4">
              <TfiHeadphoneAlt className="h-10 w-10" />
            </span>
            <div>
              <span className="block">Feel free to send us requirement.</span>
              <span className="block font-bold">
                We will get back to you within 24 hours
              </span>
            </div>
          </div>
          {/* Form */}
          <div className="px-6 py-10 bg-white drop-shadow-lg">
            <input
              class="shadow my-2 w-full  appearance-none border py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
            <input
              class="shadow my-2 w-full appearance-none border  py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />

            <select
              id="countries"
              class="bg-gray-50 border my-2 drop-shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose an option</option>
              <option value="US">Option 1</option>
              <option value="CA">Option 2</option>
              <option value="FR">Option 3</option>
              <option value="DE">Option 4</option>
            </select>
            <textarea placeholder="Message" className="shadow h-24 my-2 w-full appearance-none border  py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            <button type="submit" class="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
          </div>
        </div>
      </div>
      {/* Form */}
    </>
  );
}
