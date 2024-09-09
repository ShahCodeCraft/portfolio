// export const steps = [
//   // Greeting and Asking for Name
//   {
//     id: "greet",
//     message: "How can I help you?",
//     trigger: "askName",
//   },
//   {
//     id: "askName",
//     message: "Please enter your name.",
//     trigger: "waitingForName",
//   },
//   {
//     id: "waitingForName",
//     user: true,
//     trigger: "displayName",
//   },
//   {
//     id: "displayName",
//     message: "Hi {previousValue}, what do you want to know about CodePrism?",
//     trigger: "mainOptions",
//   },

//   // Main Options
//   {
//     id: "mainOptions",
//     options: [
//       {
//         value: "CodePrism Technologies",
//         label: "About CodePrism",
//         trigger: "aboutCodePrism",
//       },
//       {
//         value: "Founder and CEO",
//         label: "Founder & CEO",
//         trigger: "founderOptions",
//       },
//       {
//         value: "Contact Us",
//         label: "Contact Us",
//         trigger: "contactOptions",
//       },
//     ],
//   },

//   // About CodePrism
//   {
//     id: "aboutCodePrism",
//     message:
//       "Codeprism Technologies Private Limited is a Private incorporated on 27 March 2019. It is classified as Non-govt company and is registered at Registrar of Companies, Hyderabad. Its authorized share capital is Rs. 1,000,000 and its paid-up capital is Rs. 100,000. It is involved in Business activities n.e.c.",
//     trigger: "end",
//   },

//   // Founder Options
//   {
//     id: "founderOptions",
//     options: [
//       {
//         value: "Anupam Gupta",
//         label: "Anupam Gupta",
//         trigger: "anupamDetails",
//       },
//       {
//         value: "Godwin Carole",
//         label: "Godwin Carole",
//         trigger: "godwinDetails",
//       },
//     ],
//   },
//   {
//     id: "anupamDetails",
//     message:
//       "Anupam is a senior program manager with experience in customer-facing delivery of solutions and managing complex projects in embedded software technologies. He is currently delivering scalable web applications with the latest web technologies. He would love to meet interesting people from the tech field.",
//     trigger: "end",
//   },
//   {
//     id: "godwinDetails",
//     message:
//       "Godwin Vinny Carole Kati is registered with the Ministry of Corporate Affairs as a Director in Indian Companies. The DIN (Director Identification Number) of Godwin Vinny Carole Kati is 08401398. Currently, he/she serves as a director in 1 company in India. The company he/she is associated with is from Business Services.",
//     trigger: "end",
//   },

//   // Contact Options
//   {
//     id: "contactOptions",
//     options: [
//       {
//         value: "INDIA",
//         label: "INDIA",
//         trigger: "indiaContact",
//       },
//       {
//         value: "USA",
//         label: "USA",
//         trigger: "usaContact",
//       },
//     ],
//   },
//   {
//     id: "indiaContact",
//     message:
//       "Mobile: +91 8919366435, Email: anupam.gupta@codeprism.in, Address: 3rd floor, Jubilee Square building, Jubilee Hills, Rd No 36, Hyderabad, Website: codeprism.in",
//     trigger: "end",
//   },
//   {
//     id: "usaContact",
//     message:
//       "Mobile: +1 307 275 9436, Email: anupam.gupta@codeprism.in, Address: 1309, Coffeen Avenue STE 1200 Sheridan, Wyoming 82801, Website: codeprismtechnologies.com",
//     trigger: "end",
//   },

//   // End of the conversation
//   {
//     id: "end",
//     message: "Is there anything else you'd like to know?",
//     trigger: "finalOptions",
//   },
//   {
//     id: "finalOptions",
//     options: [
//       {
//         value: "Yes",
//         label: "Yes",
//         trigger: "mainOptions",
//       },
//       {
//         value: "No",
//         label: "No",
//         trigger: "goodbye",
//       },
//     ],
//   },
//   {
//     id: "goodbye",
//     message: "Thank you! Have a great day!",
//     end: true,
//   },
// ];


export const steps = [
  // Greeting and Asking for Name
  {
    id: "greet",
    message: "How can I help you?",
    trigger: "askName",
  },
  {
    id: "askName",
    message: "Please enter your name.",
    trigger: "waitingForName",
  },
  {
    id: "waitingForName",
    user: true,
    trigger: "displayName",
  },
  {
    id: "displayName",
    message: "Hi {previousValue}, what do you want to know about Me?",
    trigger: "mainOptions",
  },

  // Main Options
  {
    id: "mainOptions",
    options: [
      {
        value: "Personal Information",
        label: "Personal Info",
        trigger: "personalInfo",
      },
      {
        value: "Education Qualification",
        label: "Education",
        trigger: "education",
      },
      {
        value: "Experience",
        label: "Experience",
        trigger: "experience",
      },
    ],
  },

  // Personal Information
  {
    id: "personalInfo",
    options: [
      {
        value: "Name",
        label: "Name",
        trigger: "name",
      },
      {
        value: "Date Of Birth",
        label: "Date Of Birth",
        trigger: "dob",
      },
      {
        value: "Father's Name",
        label: "Father's Name",
        trigger: "fathersname",
      },
      {
        value: "Address",
        label: "Address",
        trigger: "address",
      },
    ],
  },
  {
    id: "name",
    message:
      "Shanawaz Alam",
    trigger: "end",
  },
  {
    id: "dob",
    message:
      "04-March-1996",
    trigger: "end",
  },
  {
    id: "fathersname",
    message:
      "Mohammad Iliyas",
    trigger: "end",
  },
  {
    id: "address",
    message:
      "Vill :- Baijnath Beshi, Post+P.S :-Aurai, Dist :- Muzaffarpur (Bihar), Pin-Code :- 843312",
    trigger: "end",
  },
  // Founder Options
  {
    id: "education",
    options: [
      {
        value: "Matriculation (10th)",
        label: "Matric-(10th)",
        trigger: "matric",
      },
      {
        value: "Intermediate (12th)",
        label: "Inter-(12th)",
        trigger: "inter",
      },
      {
        value: "Graduation(B.Tech)",
        label: "Graduation-(B.Tech)",
        trigger: "btech",
      },
    ],
  },
  {
    id: "matric",
    message:
      "I completed my matriculation from R.J High School, Aurai, Muzaffarpur, achieving a solid 60% in my 10th grade. This milestone marks my foundation in education, where I developed essential skills and a passion for learning.",
    trigger: "end",
  },
  {
    id: "inter",
    message:
      "I completed my Intermediate education in Muzaffarpur, Bihar, with a 64% score. This phase of my academic journey was transformative, where I not only strengthened my knowledge but also gained valuable life skills that shaped my future.",
    trigger: "end",
  },
  {
    id: "btech",
    message:
      "I graduated with a B.Tech in Computer Science from IES Institute of Technology, under RGPV University, Bhopal. My academic journey was marked by hands-on projects, in-depth learning, and a deep specialization in computer science. This experience equipped me with technical expertise, problem-solving skills, and a strong foundation for my career in technology.",
    trigger: "end",
  },

  // Contact Options
  {
    id: "experience",
    options: [
      {
        value: "NareshIT",
        label: "Naresh-iT",
        trigger: "nareshit",
      },
      {
        value: "CodePrism Technology",
        label: "CodePrism Tech",
        trigger: "codeprism",
      },
    ],
  },
  {
    id: "nareshit",
    message:
      "Mobile: +91 8919366435, Email: anupam.gupta@codeprism.in, Address: 3rd floor, Jubilee Square building, Jubilee Hills, Rd No 36, Hyderabad, Website: codeprism.in",
    trigger: "end",
  },
  {
    id: "codeprism",
    message:
      "Mobile: +1 307 275 9436, Email: anupam.gupta@codeprism.in, Address: 1309, Coffeen Avenue STE 1200 Sheridan, Wyoming 82801, Website: codeprismtechnologies.com",
    trigger: "end",
  },

  // End of the conversation
  {
    id: "end",
    message: "Is there anything else you'd like to know?",
    trigger: "finalOptions",
  },
  {
    id: "finalOptions",
    options: [
      {
        value: "Yes",
        label: "Yes",
        trigger: "mainOptions",
      },
      {
        value: "No",
        label: "No",
        trigger: "goodbye",
      },
    ],
  },
  {
    id: "goodbye",
    message: "Thank you for your valuable time and support! Have a great day!",
    end: true,
  },
];





// export const steps = [
//   {
//     id: "greet",
//     message:
//       "How can I help you",
//       trigger: "query",
//   },

//   {
//     id: "query",
//     options: [
//       {
//         value: "How can I get started with Codeprism Technologies?",
//         label: "How can I get started with Codeprism Technologies?",
//         trigger: "CodePrism",
//       },
//       {
//         value: "Does Codepriam assist me with Software Development?",
//         label: " Does Codepriam assist me with Software Development?",
//         trigger: "Founder",
//       },
//       { 
//         value: "How can I apply for a Job at Codeprism Technologies?",
//         label: "How can I apply for a Job at Codeprism Technologies?", 
//         trigger: "Contact US"
//       },
//     ],
//   },

//   {
//     id: "CodePrism",
//     message:
//       "Getting started is easy! Simply reach out to us through our contact page or give us a call to 8919366435 Our team will be happy to discuss your specific requirements, provide a customized solution, and guide you through the onboarding process.",
//     // trigger: "query",
//   },
//   {
//     id: "Founder",
//     message:
//       " Absolutely! Our team of experienced software developers can help you       with custom software development, mobile app development, web application development, and software integration to meet your business goals.For more information please mail us at anupam.gupta@codeprism.in",
//     // trigger: "query",
//   },

//   {
//     id: "Contact US",
//     message: " To apply for a job at our company please visit our careers page. You Can find detailed instructions on how to apply and submit your application including uploading resume and other required information",
//     // trigger: "query",
//   },

// //   {
// //     id: "query1",
// //     options: [
// //       {
// //         value: "Anupam Gupta",
// //         label: "Anupam Gupta",
// //         trigger: "Anupam Gupta",
// //       },
// //       {
// //         value: "Godwin Carole",
// //         label: "Godwin Carole",
// //         trigger: "Godwin Carole",
// //       },
// //       { value: "Back", label: "Back", trigger: "Back" },
// //     ],
// //   },
// //   {
// //     id: "Anupam Gupta",
// //     message:
// //       "Anupam is a senior program manager with experience in customer-facing delivery of solutions and managing complex projects in embedded software technologies. He is currently delivering scalable web applications with the latest web technologies. He will love to meet interesting people form the tech field.",
// //     trigger: "query1",
// //   },
// //   {
// //     id: "Godwin Carole",
// //     message:
// //       "Godwin Vinny Carole Kati is registered with the Ministry of Corporate Affairs as a Director in Indian Companies. The DIN (Director Identification Number) of Godwin Vinny Carole Kati is 08401398. Currently, he/she serves as a director in 1 company in india. The company he/she is associated with is from Business Services.",
// //     trigger: "query1",
// //   },

// //   {
// //     id: "Back",
// //     message: "How can I help you...!",
// //     trigger: "query",
// //   },

// //   {
// //     id: "query2",
// //     options: [
// //       { value: "Services", label: "Services", trigger: "Services" },
// //       { value: "Products", label: "Products", trigger: "Products" },
// //       { value: "Back", label: "Back", trigger: "Back" },
// //     ],
// //   },
// //   {
// //     id: "Services",
// //     message:
// //       "Services : 1.Mobile Apps  2.Web Development 3.Server Development   4. Blockchain - Turning your ideas into solutions. Lets make your app glow on the internet. ",
// //     trigger: "query2",
// //   },
// //   {
// //     id: "Products",
// //     message:
// //       "Our Products : 1.Health Journal (iOS & Android),  2.PrismLMS - We are proud to work with truly innovative clients. Here are just a few of the companies we’ve had the privilege to work with.",
// //     trigger: "query2",
// //   },

// //   {
// //     id: "Back",
// //     message: "How can I help you...!",
// //     trigger: "query",
// //   },

// //   {
// //     id: "query3",
// //     options: [
// //       { value: "INDIA", label: "INDIA", trigger: "INDIA" },
// //       { value: "USA", label: "USA", trigger: "USA" },
// //       { value: "Back", label: "Back", trigger: "Back" },
// //     ],
// //   },

// //   {
// //     id: "INDIA",
// //     message:
// //       "Mobile : +91 8919366435, Email : anupam.gupta@codeprism.in  , Address : 3rd floor, Jubilee Square building, Jubilee Hills, Rd No 36, Hyderabad, Website : codeprism.in",
// //     trigger: "query3",
// //   },
// //   {
// //     id: "USA",
// //     message:
// //       "Mobile : +1 307 275 9436, Email : anupam.gupta@codeprism.in , Addrress : 1309, Coffeen Avenue STE 1200 Sheridan, Wyoming 82801, Website : codeprismtechnologies.com ",
// //     trigger: "query3",
// //   },

//   // {
//   //   id: "Back",
//   //   message: "How can I help you...!",
//   //   trigger: "query",
//   // },
// ];