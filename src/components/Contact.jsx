// import Navbar from "./Navbar";
// import { useState } from "react";
// import { TbGridDots } from "react-icons/tb";
// import { Switch } from "@headlessui/react";

// function Contact({ show, setShow }) {
//   const [agreed, setAgreed] = useState(false);

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     company: "",
//     email: "",
//     phoneNumber: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData({ ...formData, [id]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

  // const formFields = [
  //   { id: "firstName", label: "First name", type: "text", autoComplete: "given-name" },
  //   { id: "lastName", label: "Last name", type: "text", autoComplete: "family-name" },
  //   { id: "company", label: "Company", type: "text", autoComplete: "organization", span: 2 },
  //   { id: "email", label: "Email", type: "email", autoComplete: "email", span: 2 },
  //   {
  //     id: "phoneNumber",
  //     label: "Phone number",
  //     type: "tel",
  //     autoComplete: "tel",
  //     span: 2,
  //     customInput: (
  //       <div className="relative mt-2.5">
  //         <div className="absolute inset-y-0 left-0 flex items-center">
  //           <select
  //             id="country"
  //             name="country"
  //             className="h-full rounded-md border-0 bg-transparent py-0 pl-4 pr-2 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
  //           >
  //             <option>IND +91</option>
  //             <option>USA</option>
  //             <option>CAN</option>
  //             <option>EU</option>
  //           </select>
  //         </div>
  //         <input
  //           id="phoneNumber"
  //           name="phoneNumber"
  //           type="tel"
  //           autoComplete="tel"
  //           className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  //           onChange={handleChange}
  //         />
  //       </div>
  //     ),
  //   },
  //   {
  //     id: "message",
  //     label: "Message",
  //     type: "textarea",
  //     rows: 4,
  //     span: 2,
  //   },
  // ];

//   return (
//     <section className="page contactPage">
//       <Navbar show={show} />
  
//       <TbGridDots onClick={() => setShow(!show)} className="hamburger" />
//       <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
//         <div
//           aria-hidden="true"
//           className="absolute inset-x-0 top-[-10rem] -z-10 overflow-hidden blur-3xl sm:top-[-20rem]"
//         >
//           <div
//             className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-300 to-indigo-300 opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
//             style={{
//               clipPath:
//                 "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//             }}
//           />
//         </div>
//         <div className="mx-auto max-w-2xl text-center">
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//             CONTACT US
//           </h2>
//           <p className="mt-2 text-lg leading-8 text-gray-600">
//             Aute magna irure deserunt veniam aliqua magna enim voluptate.
//           </p>
//         </div>
//         <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
//           <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//             {formFields.map(({ id, label, type, autoComplete, span, customInput, rows }) => (
//               <div key={id} className={`sm:col-span-${span || 1}`}>
//                 <label htmlFor={id} className="block text-sm font-semibold leading-6 text-gray-900">
//                   {label}
//                 </label>
//                 <div className="mt-2.5">
//                   {customInput || (
//                     type === "textarea" ? (
//                       <textarea
//                         id={id}
//                         name={id}
//                         rows={rows}
//                         className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                         onChange={handleChange}
//                       />
//                     ) : (
//                       <input
//                         id={id}
//                         name={id}
//                         type={type}
//                         autoComplete={autoComplete}
//                         className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                         onChange={handleChange}
//                       />
//                     )
//                   )}
//                 </div>
//               </div>
//             ))}
//             <div className="flex gap-x-4 sm:col-span-2">
//               <div className="flex h-6 items-center">
//                 <Switch
//                   checked={agreed}
//                   onChange={setAgreed}
//                   className={`group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
//                     agreed ? "bg-indigo-600" : "bg-gray-200"
//                   }`}
//                 >
//                   <span className="sr-only">Agree to policies</span>
//                   <span
//                     aria-hidden="true"
//                     className={`h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out ${
//                       agreed ? "translate-x-3.5" : ""
//                     }`}
//                   />
//                 </Switch>
//               </div>
//               <label className="text-sm leading-6 text-gray-600">
//                 By selecting this, you agree to our{" "}
//                 <a href="#" className="font-semibold text-indigo-600">
//                   privacy&nbsp;policy
//                 </a>
//                 .
//               </label>
//             </div>
//           </div>
//           <div className="mt-10">
//             <button
//               type="submit"
//               className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               Let's talk
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Contact;



import React, { useState } from "react";
import Navbar from "./Navbar";
import { TbGridDots } from "react-icons/tb";
import { Switch } from "@headlessui/react";

function Contact({ show, setShow }) {
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/users/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Contact form submitted successfully!');
        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        alert('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form', error);
      alert('An error occurred while submitting the form');
    }
  };

  const formFields = [
    { id: "firstName", label: "First name", type: "text", autoComplete: "given-name" },
    { id: "lastName", label: "Last name", type: "text", autoComplete: "family-name" },
    { id: "company", label: "Company", type: "text", autoComplete: "organization", span: 2 },
    { id: "email", label: "Email", type: "email", autoComplete: "email", span: 2 },
    {
      id: "phoneNumber",
      label: "Phone number",
      type: "tel",
      autoComplete: "tel",
      span: 2,
      // customInput: (
      //   <div className="relative mt-2.5">
      //     <div className="absolute inset-y-0 left-0 flex items-center">
      //       <select
      //         id="country"
      //         name="country"
      //         className="h-full rounded-md border-0 bg-transparent py-0 pl-4 pr-2 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
      //       >
      //         <option>IND +91</option>
      //         <option>USA</option>
      //         <option>CAN</option>
      //         <option>EU</option>
      //       </select>
      //     </div>
      //     <input
      //       id="phoneNumber"
      //       name="phoneNumber"
      //       type="tel"
      //       autoComplete="tel"
      //       className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      //       onChange={handleChange}
      //     />
      //   </div>
      // ),
    },
    {
      id: "message",
      label: "Message",
      type: "textarea",
      rows: 4,
      span: 2,
    },
  ]

  return (
    <section className="page contactPage">
      <Navbar show={show} />
  
      <TbGridDots onClick={() => setShow(!show)} className="hamburger" />
      <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[-10rem] -z-10 overflow-hidden blur-3xl sm:top-[-20rem]"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-300 to-indigo-300 opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            CONTACT US
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Aute magna irure deserunt veniam aliqua magna enim voluptate.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {formFields.map(({ id, label, type, autoComplete, span, customInput, rows }) => (
              <div key={id} className={`sm:col-span-${span || 1}`}>
                <label htmlFor={id} className="block text-sm font-semibold leading-6 text-gray-900">
                  {label}
                </label>
                <div className="mt-2.5">
                  {customInput || (
                    type === "textarea" ? (
                      <textarea
                        id={id}
                        name={id}
                        rows={rows}
                        value={formData[id]}  // Bind value to formData
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleChange}
                
                      />
                    ) : (
                      <input
                        id={id}
                        name={id}
                        type={type}
                        value={formData[id]}  // Bind value to formData
                        autoComplete={autoComplete}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleChange}
                      />
                    )
                  )}
                </div>
              </div>
            ))}
            {/* <div className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className={`group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                    agreed ? "bg-indigo-600" : "bg-gray-200"
                  }`}
                >
                  <span className="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className={`h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out ${
                      agreed ? "translate-x-3.5" : ""
                    }`}
                  />
                </Switch>
              </div>
              <label className="text-sm leading-6 text-gray-600">
                By selecting this, you agree to our{" "}
                <a href="#" className="font-semibold text-indigo-600">
                  privacy&nbsp;policy
                </a>
                .
              </label>
            </div> */}
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
