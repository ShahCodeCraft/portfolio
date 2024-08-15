
import React, { useState } from "react";
import Navbar from "./Navbar";
import { TbGridDots } from "react-icons/tb";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import CustomReCaptcha from './CustomReCaptcha';
import { FitScreen } from "@mui/icons-material";

const LineGradient = ({ width = "w-full" }) => {
  return <div className={`h-0.5 ${width} bg-gradient-to-r from-blue-400 to-blue-600`} />;
};


function Contact({ show, setShow }) {
  const [agreed, setAgreed] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phoneNumber: "",
    countryCode: "IND +91",
    message: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required").max(15).min(4),
    lastName: Yup.string().required("Last name is required").max(15).min(3),
    company: Yup.string().required("Company name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch('http://localhost:3000/users/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert('Contact form submitted successfully!');
        resetForm();
      } else {
        alert('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form', error);
      alert('An error occurred while submitting the form');
    }
  };

  return (
    <section className="page contactPage">
      <Navbar show={show} />
      <TbGridDots onClick={() => setShow(!show)} className="hamburger" />
      <div className="relative isolate bg-[#2D384A] sm:px-6 lg:py-10 sm:py-10 lg:px-8">
        {/* <div
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
        </div> */}


        <div className="sm:flex justify-center md:justify-end w-full sm:p-3 lg:p-5">
        <div>
          <p className="font-playfair font-semibold text-4xl ">
            <span className="text-yellow-500">CONTACT ME</span><span className="text-gray-100">&nbsp;  TO GET STARTED</span>
          </p>
      
          <div className="flex justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
          <p className="mt-2 text-lg leading-8 text-gray-200">
            Aute magna irure deserunt veniam aliqua magna enim voluptate.
          </p>
        </div>
      </div>


      <div className="md:flex md:justify-between gap-10">
        <div className="basis-1/2 flex justify-center items-center h-full mt-[-45px]">
          {/* <img src="./bg-contact.jpg" alt="Not Found" className="object-cover rounded-lg" /> */}
          <img
    src="./bg-contact.jpg"
    alt="Not Found"
    className="object-cover rounded-lg lg:hidden"
  />
  <img
    src="./bg-contact3.jpg"
    alt="Not Found"
    className="object-cover rounded-lg hidden lg:block h-full w-full max-h-full mt-[-100px]"
  />
      </div>

      <div className="basis-1/2">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleSubmit, errors, touched }) => (
            <Form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 ">
                <div className="sm:col-span-1">
                  <label htmlFor="firstName" className="text-gray-100 block text-sm font-semibold leading-6">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <Field
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="Enter First Name"
                      value={values.firstName}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {touched.firstName && errors.firstName ? (
                      <div className="text-red-600 text-sm">{errors.firstName}</div>
                    ) : null}
                  </div>
                </div>
                
                <div className="sm:col-span-1">
                  <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-100">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <Field
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Enter Last Name"
                      value={values.lastName}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {touched.lastName && errors.lastName ? (
                      <div className="text-red-600 text-sm">{errors.lastName}</div>
                    ) : null}
                  </div>
                </div>
                
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-100">
                    Company
                  </label>
                  <div className="mt-2.5">
                    <Field
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Enter Company name"
                      value={values.company}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                    />
                    {touched.company && errors.company ? (
                      <div className="text-red-600 text-sm">{errors.company}</div>
                    ) : null}
                  </div>
                </div>
                
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-100">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter Email / Gmail"
                      value={values.email}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {touched.email && errors.email ? (
                      <div className="text-red-600 text-sm">{errors.email}</div>
                    ) : null}
                  </div>
                </div>
                


                <div className="sm:col-span-2">
                  <label htmlFor="phoneNumber" className="block text-sm font-semibold leading-6 text-gray-100">
                    Phone Number
                  </label>
                  <div className="relative mt-2.5">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <Field
                        as="select"
                        id="countryCode"
                        name="countryCode"
                        className="h-full rounded-md border-0 bg-transparent py-0 pl-4 pr-2 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                        onChange={(e) => {
                          handleChange(e);
                          setCountryCode(e.target.value); // Update local state if needed
                        }}
                      >
                        <option value="+91">IND +91</option>
                        <option value="+1">USA +1</option>
                        <option value="+1">CAN +1</option>
                        <option value="+44">EU +44</option>
                      </Field>
                    </div>
                    <Field
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      placeholder="Enter Phone Number"
                      value={values.phoneNumber}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 pl-28 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {touched.phoneNumber && errors.phoneNumber ? (
                      <div className="text-red-600 text-sm">{errors.phoneNumber}</div>
                    ) : null}
                  </div>
                </div>




                
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-100">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <Field
                      id="message"
                      name="message"
                      as="textarea"
                      placeholder="Enter you queries..."
                      rows="4"
                      value={values.message}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {touched.message && errors.message ? (
                      <div className="text-red-600 text-sm">{errors.message}</div>
                    ) : null}
                  </div>
                </div>

                {/* Custom reCaptcha integration */}
                <div className="sm:col-span-2">
                  <CustomReCaptcha onVerify={(isVerified) => setAgreed(isVerified)} />
                  
                </div>
               
                {/* React Captcha */}
                 {/* <div className="sm:col-span-2 ">
                  <ReactCaptcha onVerify={(isVerified) => setAgreed(isVerified)} />

                </div> */}

              </div>
              
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
                  disabled={!agreed}
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>

        </div>
      </div>  
    
      </div>
    </section>
  );
}

export default Contact;


