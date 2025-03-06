// import React from "react";
// import Header from "./Header";
// import Footer from "./Footer";

// const Home = () => {
 
    
//   return (
//     <>
//     <Header />
//     <div className="bg-blue-50 min-h-screen flex flex-col items-center py-10">
//       {/* Main Container */}
//       <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
//         {/* Left Section */}
//         <div className="w-full md:w-1/2 mb-10 md:mb-0">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//             Incorporation of Company
//           </h1>
//           <ul className="space-y-4 text-gray-700">
//             {[
//               "Registration completed in 7-10 business days",
//               "Issuance of Company PAN and TAN",
//               "Company Name Approval",
//               "Issuance of Incorporation Certificate",
//               "Drafting of MOA & AOA",
//               "Provision of Digital Signature Certificates (DSC)",
//               "Director’s Identification Number (DIN) secured",
//               "Exclusive Partner Benefits for Vakilsearch Clients",
//             ].map((item, index) => (
//               <li key={index} className="flex items-start space-x-2">
//                 <span className="text-blue-500">✔</span>
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>

//           {/* Testimonial Section */}
//           <div className="mt-8 bg-white shadow-md rounded-lg p-4 text-center">
//             <p className="italic text-gray-600">
//               "Very prompt in service and response. Vakilsearch is a one-stop
//               solution for business & trademark registrations."
//             </p>
//             <p className="mt-4 font-bold text-gray-800">Saiteja Dasoju</p>
//             <p className="text-sm text-gray-500">Managing Director of Party Wright Events</p>
//           </div>
//         </div>

//         {/* Right Section - Registration Form */}
//         <div className="w-full md:w-1/3 bg-white shadow-md rounded-lg p-6 mb-10">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">Register Your Company Today</h2>
//           <form className="space-y-4">
//             {[
//               { label: "Name", type: "text", placeholder: "Enter your name" },
//               { label: "Email", type: "email", placeholder: "Enter your email" },
//               { label: "Mobile Number", type: "tel", placeholder: "Enter your mobile number" },
//               { label: "City/Pincode", type: "text", placeholder: "Enter city or pincode" },
//             ].map((field, index) => (
//               <div key={index}>
//                 <label className="block text-sm font-medium text-gray-700">{field.label}</label>
//                 <inputinput
//                   type={field.type}
//                   placeholder={field.placeholder}
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 />
//               </div>
//             ))}

//             {/* Language Dropdown */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Language</label>
//               <select
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 defaultValue=""
//               >
//                 <option value="" disabled>
//                   Select language
//                 </option>
//                 <option value="english">English</option>
//                 <option value="hindi">Hindi</option>
//                 {/* Add more options as needed */}
//               </select>
//             </div>

//             {/* Service Dropdown */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Service</label>
//               <select
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 defaultValue=""
//               >
//                 <option value="" disabled>
//                   Select service
//                 </option>
//                 <option value="registration">Company Registration</option>
//                 {/* Add more options as needed */}
//               </select>
//             </div>

//             {/* WhatsApp Updates */}
//             <div className="flex items-center space-x-2">
//               <inputinput
//                 type="checkbox"
//                 id="whatsapp-updates"
//                 className="h-4 w-4 text-blue-600 border-gray-300 rounded"
//               />
//               <label htmlFor="whatsapp-updates" className="text-sm text-gray-700">
//                 Get easy updates through WhatsApp
//               </label>
//             </div>

//             {/* Submit button */}
//             <buttonbutton
//               type="submit"
//               className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-md"
//             >
//               Get Started
//             </buttonbutton>
//           </form>

//           {/* Footer Text */}
//           <p className="mt-6 text-center text-sm text-gray-500">
//             India’s highest-rated legal tax and compliance platform. ⭐ 4.5/5 | 17k+ Happy Reviews
//           </p>
//         </div>
//       </div>
//       <div className="bg-gray-50 min-h-screen py-10">
//       <div className="container mx-auto px-4 space-y-10">
//         {/* Section 1: Company Law in India */}
//         <div className="text-center">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
//             Company Law in India
//           </h2>
//           <p className="text-gray-700 leading-relaxed">
//             Company law in India, governed by the Companies Act, 2013, regulates the formation, operation, and dissolution of companies. The Act is administered by the Ministry of Corporate Affairs (MCA) and establishes the business operations. It focuses on ensuring compliance with statutory obligations, maintaining transparency, and defining accountability structures within the context of legal requirements.
//           </p>
//           <p className="mt-4 text-gray-700 leading-relaxed">
//             While the Companies Act, 2013, lays the groundwork for governance from a legal perspective, sector-specific governance requirements may also fall under the purview of other regulatory bodies, such as the Securities and Exchange Board of India (SEBI) or the Reserve Bank of India (RBI). These authorities oversee specific industries, ensuring that entities operate according to their respective frameworks in addition to the broader provisions of the Companies Act.
//           </p>
//         </div>

//         {/* Section 2: What is Company Incorporation in India? */}
//         <div className="text-center">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
//             What is Company Incorporation in India?
//           </h2>
//           <p className="text-gray-700 leading-relaxed">
//             In India, incorporation of a company is the legal process of forming a corporate entity under the Companies Act, 2013. This process involves registering the company with the Ministry of Corporate Affairs (MCA), after which the company becomes a separate legal entity, distinct from its owners, and is recognized by law.
//           </p>
//           <p className="mt-4 text-gray-700 leading-relaxed">
//             Incorporation applies to entities such as Private Limited Companies (Pvt Ltd), Public Limited Companies, Limited Liability Partnerships (LLP), One Person Companies (OPC), and Section 8 Companies. It does not apply to unincorporated entities like sole proprietorships or general partnerships.
//           </p>
//         </div>
//         <div className="bg-gray-50 min-h-screen py-10">
//       {/* Header Section */}
//       <div className="text-center mb-10">
//         <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
//           Company structures in <span className="text-blue-600">India</span>
//         </h1>
//       </div>

//       {/* Tabs Section */}
//       <div className="container mx-auto px-4">
//         <div className="flex justify-center space-x-6 border-b border-gray-200 pb-2 mb-6">
//           {[
//             "Business Registration",
//             "International Business Setup",
//             "Compliance Services",
//             "Other Services",
//           ].map((tab, index) => (
//             <buttonbutton
//               key={index}
//               className={`text-sm md:text-base font-medium ${
//                 index === 0 ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
//               }`}
//             >
//               {tab}
//             </buttonbutton>
//           ))}
//         </div>

//         {/* Description */}
//         <p className="text-center text-gray-600 mb-8">
//           Start your business seamlessly with expert guidance. Whether you’re forming a private
//           limited company, LLP, or any other entity, we ensure a hassle-free process by managing
//           everything from documentation to government approvals.
//         </p>

//         {/* divs Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {[
//             {
//               title: "Private Limited Company Registration",
//               description:
//                 "Ideal for startups, offering limited liability and simplified venture capital raising. Secure investor funding effortlessly and protect your personal assets.",
//               icon: "🏢", // Replace with an actual icon if needed
//             },
//             {
//               title: "Limited Liability Partnership (LLP) Registration",
//               description:
//                 "LLP combines limited liability with operational flexibility. Perfect for small businesses and professionals seeking liability protection without the rigid corporate structure.",
//               icon: "👥", // Replace with an actual icon if needed
//             },
//             {
//               title: "One Person Company (OPC) Registration",
//               description:
//                 "OPC is the ideal choice for solo entrepreneurs, offering limited liability and a corporate structure without the need for partners.",
//               icon: "👤", // Replace with an actual icon if needed
//             },
//             {
//               title: "Sole Proprietorship Registration",
//               description:
//                 "A sole proprietorship is the simplest business structure, ideal for small businesses. Enjoy full control, minimal compliance, and easy setup.",
//               icon: "💼", // Replace with an actual icon if needed
//             },
//             {
//               title: "Nidhi Company Registration",
//               description:
//                 "Nidhi Companies are mutual benefit societies that provide loans to their members at reasonable rates.",
//               icon: "🏦", // Replace with an actual icon if needed
//             },
//             {
//               title: "Producer Company Registration",
//               description:
//                 "Producer Companies are designed for farmers and agriculturalists to promote their mutual interests and provide support in production and marketing.",
//               icon: "🌾", // Replace with an actual icon if needed
//             },
//           ].map((divdiv, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
//             >
//               <div className="flex items-center space-x-4 mb-4">
//                 <div className="text-blue-600 text-xl">{divdiv.icon}</div>
//                 <h3 className="text-lg font-semibold text-gray-800">{divdiv.title}</h3>
//               </div>
//               <p className="text-sm text-gray-600">{divdiv.description}</p>
//             </div>
//           ))}
//         </div>

//         <div className="md:py-24 py-[52px]">
//       <div className="flex max-md:flex-col md:border md:border-[#B3D8FF] max-w-[1200px] mx-auto rounded-md max-md-rounded-none md:p-10 py-6 px-4 gap-6 bg-[linear-gradient(135deg,#F9F9F9_0%,#E6F2FF_99.28%)]">
//         <div className="flex flex-col gap-2">
//           <p className="font-bold text-2xl">Register your business outside India</p>
//           <p className="font-normal text-lg text-[#606162]">Take your business global with Vakilsearch's expert guidance.</p>
//           <img
//             alt="icon"
//             loading="lazy"
//             width="494"
//             height="230"
//             decoding="async"
//             style={{ color: "transparent" }}
//             src="https://assets.vakilsearch.com/live-imgimgs/world.svg"
//           />
//         </div>
//         <div className="w-px h-[348.5px] bg-gray-300 max-md:hidden"></div>
//         <div className="grid grid-cols-2 md:gap-8 gap-3">
//           {incorporationOptions.map((option, index) => (
//             <div key={index} className="shadow-lg rounded-lg bg-white flex items-center">
//               <img
//                 alt={option.alt}
//                 loading="lazy"
//                 width="56"
//                 height="90"
//                 decoding="async"
//                 style={{ color: "transparent" }}
//                 className="max-md-w-20 max-md-h-20"
//                 src={option.src}
//               />
//               <p className="max-md:font-medium max-md:text-sm text-lg font-semibold p-4 text-start">{option.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//         <div className="bg-[#FDF9F5] md:my-[100px] mx-3 px-[20px] max-md:py-[24px] max-md:mb-[45px] md:max-w-[1200px] md:mx-auto rounded-md flex max-md:flex-col md:gap-[100px] gap-[24px] md:px-[62px] md:pt-[25px] border-[1px] border-[#FFEFDE]">
//       <img
//         alt="ttl-logo"
//         loading="lazy"
//         width="300"
//         height="121"
//         decoding="async"
//         className="md:w-[470px] md:h-[190px]"
//         style={{ color: 'transparent' }}
//         src="https://assets.vakilsearch.com/ttl.svg"
//       />
//       <div className="flex flex-col gap-[12px] md:gap-[14px]">
//         <p className="text-[20px] font-semibold md:text-[28px]">
//           Not Sure About Your Business Type?
//         </p>
//         <p className="text-[14px] font-normal md:text-[16px] text-[#606162]">
//           Feeling uncertain about the ideal business structure? Consult with our experts for guidance and support in finding the right one for you
//         </p>
//         <buttonbutton className="text-[18px] font-medium bg-[#FCD209] py-[10px] md:px-[39px] rounded mr-[8px] md:w-fit">
//           Talk to expert
//         </buttonbutton>
//       </div>
      
//     </div>
//     <div className="bg-[#FFF] px-0 lg:gap-[209px] md:py-[25px] md:mt-[40px] items-center max-md:mb-[38px] flex max-md:flex-col-reverse gap-3 bg-[#F9F9F9] px-6 pt-2 md:pt-5 rounded-lg md:gap-10 md:p-8 md:flex-row-reverse">
//       <img
//         src="https://assets.vakilsearch.com/live-imgimgs/Company-registration-note.svg"
//         alt="Register Your Company in India"
//         title="Register Your Company in India"
//         className="md:h-[390px] md:w-[390px] md:w-[278px] md:h-[250px]"
//       />
//       <div className="pb-3 flex flex-col gap-5">
//         <h2 className="max-md:text-left text-[30px] text-[#231F20] font-bold text-[24px] md:text-[30px] max-md:text-center">
//           Register Your Company in India
//         </h2>
//         <p className="text-[#606162] text-[16px] md:text-[18px]">
//           Registering a company in India is the foundational step for legally
//           establishing your business. Under the Companies Act of 2013, any
//           entity can be formed for lawful purposes by following the guidelines
//           set by the Ministry of Corporate Affairs (MCA). Company registration
//           not only provides the entity with a unique legal identity but also
//           grants various rights and protections under Indian law.
//           <br />
//           <br />
//           Choosing the correct company structure is critical, as it impacts
//           operational efficiency, compliance requirements, and the ability to
//           meet business objectives. Options include private limited companies,
//           limited liability partnerships, and sole proprietorships, each
//           offering distinct advantages. Registering a company in India enables
//           businesses to access government incentives, claim legal rights, and
//           build credibility in the market.
//           <br />
//           <br />
//           The MCA’s official portal offers a streamlined process for registering a company,
//           allowing businesses to obtain their legal identity and operate with compliance.
//         </p>
//       </div>
//     </div>
    

//     <div className="text-[#606162] text-[18px] flex flex-col gap-4 md:gap-8">
//       <h2 className="font-semibold text-[28px] md:text-[32px] text-[#231F20] text-center">
//         <span className="text-[#007AFF]">Benefits</span> of Incorporating a Company in India
//       </h2>
//       <p className="max-md:pb-6 text-center">
//         The process is governed by the Ministry of Corporate Affairs (MCA) and involves registering business with the Registrar of Companies (RoC), along with obtaining a Digital Signature Certificate (DSC) and Director Identification Number (DIN).
//       </p>
//       <div className="flex flex-wrap gap-6 md:gap-9 w-full justify-center">
//         {benefits.map((benefit, index) => (
//           <div
//             key={index}
//             className="w-[100%] md:w-[47%] lg:w-[31%] p-6 shadow-[0px_0px_24px_0px_#00000014] flex flex-col gap-4 max-md:m-2"
//           >
//             <p className="text-[#231F20] text-[18px] md:text-[20px] font-semibold text-center">
//               {benefit.title}
//             </p>
//             <p className="text-center text-[16px] md:text-[18px]">{benefit.description}</p>
//             {benefit.list && (
//               <ul>
//                 {benefit.list.map((item, idx) => (
//                   <li key={idx}>
//                     <b>{item.name}:</b> {item.detail}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//     <div className="!px-0 !py-[38px] !items-center !bg-[#FAFAFA] lg:!gap-[209px] flex max-md:flex-col-reverse gap-3 bg-[#F9F9F9] px-6 pt-2 md:pt-5 rounded-lg md:gap-10 md:p-8 md:flex-row-reverse">
//       <img
//         src="https://assets.vakilsearch.com/bluelap.svg"
//         alt="Eligibility Criteria for Company Registration"
//         title="Eligibility Criteria for Company Registration"
//         className="md:!h-[390px] md:!w-[390px] md:w-[278px] md:h-[250px]"
//       />
//       <div className="pb-3 flex flex-col gap-5">
//         <h2 className="max-md:text-left text-[30px] text-[#231F20] font-bold text-[24px] md:text-[30px] max-md:text-center">
//           <b style={{ color: "#007aff" }}>Eligibility Criteria</b> for Company Registration
//         </h2>
//         <p className="text-[#606162] text-[16px] md:text-[18px]">
//           As per the Companies Act of 2013, the eligibility criteria for every business entity type varies drastically. Here is a general outline of eligibility criteria for registering your company in MCA.
//         </p>
//         <ul>
//           <li className="md:leading-[28px] text-[#606162] text-[16px] md:text-[18px] ml-4 list-disc md:mb-[14px] mb-[12px] md:ml-7">
//             Registered company should have at least one Indian resident director
//           </li>
//           <li className="md:leading-[28px] text-[#606162] text-[16px] md:text-[18px] ml-4 list-disc md:mb-[14px] mb-[12px] md:ml-7">
//             Directors should have DSC and DIN
//           </li>
//           <li className="md:leading-[28px] text-[#606162] text-[16px] md:text-[18px] ml-4 list-disc md:mb-[14px] mb-[12px] md:ml-7">
//             Should not conduct any illegal activities as outlined by the Indian legislature
//           </li>
//           <li className="md:leading-[28px] text-[#606162] text-[16px] md:text-[18px] ml-4 list-disc md:mb-[14px] mb-[12px] md:ml-7">
//             Directors and shareholders should be legally of Age
//           </li>
//           <li className="md:leading-[28px] text-[#606162] text-[16px] md:text-[18px] ml-4 list-disc md:mb-[14px] mb-[12px] md:ml-7">
//             Address proof and the Identity proof of the directors has to be submitted
//           </li>
//           <li className="md:leading-[28px] text-[#606162] text-[16px] md:text-[18px] ml-4 list-disc md:mb-[14px] mb-[12px] md:ml-7">
//             Company should have a unique name.
//           </li>
//         </ul>
//       </div>
//     </div>
//       </div>
//       <div className=" flex  !px-0 !pb-[38px] items-center gap-4 !bg-[#FAFAFA] lg:!gap-[209px] wrc-flex max-md:wrc-flex-col-reverse wrc-gap-3 wrc-bg-[#F9F9F9] wrc-px-6 wrc-pt-2 md:wrc-pt-5 wrc-rounded-lg md:wrc-gap-10 md:p-8">
//       <img
//         src="https://assets.vakilsearch.com/displayimg.svg"
//         alt="Checklist for Company Registration"
//         title="Checklist for Company Registration"
//         className="md:!h-[390px] md:!w-[390px] md:wrc-w-[278px] md:wrc-h-[250px]"
//       />
//       <div className="wrc-pb-3 wrc-flex wrc-flex-col wrc-gap-5">
//         <h2 className="max-md:!text-left !text-[30px] wrc-text-[#231F20] wrc-font-bold wrc-text-[24px] md:wrc-text-[30px] max-md:wrc-text-center">
//           <b style={{ color: "#007aff" }}>Checklist</b> for Company Registration
//         </h2>
//         <p className="!text-[#606162] wrc-text-[#606162] wrc-text-[16px] md:wrc-text-[18px]">
//           Based on the type of company being incorporated the requirements might
//           vary. However, here is a comprehensive checklist for registering your
//           company in India:
//         </p>
//         <li className="space-y-2">
//           {[
//             "Finalise the type of company that you want to register",
//             "Select a name for the company as provided under the company incorporation rules of 2014",
//             "Have an official address for your firm",
//             "Collect all the ID and address proof of the partners",
//             "Have at least two shareholders and two directors",
//             "Make sure to have one Indian resident director",
//             "Finalise the capital required for the company",
//             "Draft the objective of the company in and memorandum of association",
//             "Apply for DSC and DIN for all the directors if required",
//             "Provide address proof and utility bills of the registered office address",
//             "Apply for GST if required",
//             "Open a current account in the company's name",
//             "Appoint an auditor, chartered accountant, and CS if applicable",
//             "Get your company TAN and PAN records",
//             "Make sure to register your intellectual property like logos and trademarks.",
//           ].map((item, index) => (
//             <li
//               key={index}
//               className="md:!leading-[28px] wrc-text-[#606162] wrc-text-[16px] md:wrc-text-[18px] wrc-ml-4 wrc-list-disc md:wrc-mb-[14px] wrc-mb-[12px] md:wrc-ml-7"
//             >
//               {item}
//             </li>
//           ))}
//         </li>
//       </div>
      
//     </div>
//         <div
//       className="bg-[#F1F7FF] md:mb-[90px] pt-[30px] p-4"
//       id="section4"
//       data-gtm-vis-first-on-screen702279_260="3521"
//       data-gtm-vis-total-visible-time702279_260="5000"
//       data-gtm-vis-first-on-screen702279_249="3782"
//       data-gtm-vis-total-visible-time702279_249="5000"
//       data-gtm-vis-has-fired702279_260="1"
//       data-gtm-vis-has-fired702279_249="1"
//     >
//       <div className="flex !px-7 !pb-[38px] items-center !bg-[#F1F7FF] wrc-flex max-md:wrc-flex-col-reverse wrc-gap-3 wrc-bg-[#F9F9F9] wrc-px-6 wrc-pt-2 md:wrc-pt-5 wrc-rounded-lg md:wrc-gap-10 md:p-8 md:wrc-flex-row-reverse">
//         <img
//           src="https://assets.vakilsearch.com/solepropdoc_required.svg"
//           alt="Required Documents for Company Registration"
//           title="Required Documents for Company Registration"
//           className="md:!h-[390px] md:!w-[420px] md:wrc-w-[278px] md:wrc-h-[250px]"
//         />
//         <div className="wrc-pb-3 wrc-flex wrc-flex-col wrc-gap-5">
//           <h2 className="wrc-text-[#231F20] wrc-font-bold wrc-text-[24px] md:wrc-text-[30px] max-md:wrc-text-center">
//             <b style={{ color: "#007aff" }}>Required Documents</b> for Company Registration
//           </h2>
//           <p className="wrc-text-[#606162] wrc-text-[16px] md:wrc-text-[18px]">
//             For company registration in India the applicant should provide director and shareholder documents along with the proof of registered office address. Here is a list of the required documents for company incorporation:
//           </p>
//           <ul>
//             {[
//               "Passport size photos of directors and shareholders",
//               "PAN divdiv of all the directors",
//               "Aadhar, driver license, passport or voter ID of the directors",
//               "Proof of residence",
//               "NOC of the registered office address",
//               "Utility bills for registered office proof",
//               "Memorandum of Association (MOA)",
//               "Articles of Association (AOA)",
//               "Director and Shareholder Details",
//               "Digital Signature Certificate (DSC)",
//               "Director Identification Number (DIN)",
//             ].map((item, index) => (
//               <li
//                 key={index}
//                 className="wrc-text-[#606162] wrc-text-[16px] md:wrc-text-[18px] wrc-ml-4 wrc-list-disc md:wrc-mb-[14px] wrc-mb-[12px] md:wrc-ml-7"
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div className="!bg-[#F1F7FF] wrc-p-4 wrc-bg-[#F9F9F9] wrc-text-center wrc-rounded-b-lg wrc-border-gray-300 text-center font-bold text-lg">
//         <div className="wrc-rounded wrc-max-w-[757px] wrc-bg-gradient-to-t wrc-from-[#F1F7FF] wrc-to-[#D4EAFE] md:wrc-mx-auto wrc-p-5">
//           Note: The documents may vary based on the type of company you are planning to register. For more detailed information get in touch with our experts today.
//         </div>
//       </div>
      
//     </div>
//     <div className="max-w-[1200px] mx-auto p-4 rounded-xl">
//       <h2 className="pb-3 md:pb-5 font-semibold text-[24px] md:text-[32px] text-black text-center">
//         Company Registration Process -{" "}
//         <span style={{ color: "#007AFF" }}>Step-by-Step</span>
//       </h2>
//       <div className="max-md:flex-col-reverse gap-3 rounded-lg md:gap-10 px-0 max-md:items-center justify-around">
//         <div className="flex flex-col gap-4">
//           {/* Step 1 */}
//           <div className="pb-3 flex flex-col gap-5">
//             <h3 className="text-[#231F20] font-bold md:text-[24px] max-md:text-left text-[20px]">
//               Step 1: Choose a Business Structure
//             </h3>
//             <p className="text-[#606162] text-[16px] md:text-[18px]">
//               The first decision is selecting the type of business entity you
//               wish to register. In India, there are six main types:
//             </p>
//             <ul className="text-[#606162] text-[16px] md:text-[18px] ml-4 list-disc mt-1 leading-8 md:ml-7">
//               <li>
//                 <b>Private Limited Company (Pvt Ltd):</b> Ideal for startups,
//                 offering limited liability protection.
//               </li>
//               <li>
//                 <b>Limited Liability Partnership (LLP):</b> Combines the
//                 flexibility of a partnership with the benefits of limited
//                 liability.
//               </li>
//               <li>
//                 <b>One Person Company (OPC):</b> Suitable for solo
//                 entrepreneurs who want limited liability.
//               </li>
//               <li>
//                 <b>Public Limited Company (PLC):</b> Designed for larger
//                 businesses aiming to raise capital from the public.
//               </li>
//               <li>
//                 <b>Sole Proprietorship:</b> Simple structure with full control
//                 but unlimited liability.
//               </li>
//               <li>
//                 <b>Partnership Firm:</b> Best for small businesses with shared
//                 responsibilities.
//               </li>
//             </ul>
//           </div>

//           {/* Step 2 */}
//           <div className="pb-3 flex flex-col gap-5">
//             <h3 className="text-[#231F20] font-bold md:text-[24px] max-md:text-left text-[20px]">
//               Step 2: Obtain Director Identification Number (DIN)
//             </h3>
//             <p className="text-[#606162] text-[16px] md:text-[18px]">
//               The Director Identification Number (DIN) is mandatory for anyone
//               who wishes to be a director in the company.
//               <br />
//               <br />
//               <b>How to Apply:</b>
//             </p>
//             <ul className="text-[#606162] text-[16px] md:text-[18px] ml-4 list-disc mt-1 leading-8 md:ml-7">
//               <li>
//                 Apply for DIN online via the Ministry of Corporate Affairs (MCA)
//                 portal.
//               </li>
//               <li>
//                 Use the SPICe+ form (Simplified Proforma for Incorporating a
//                 Company Electronically) during the company registration process.
//               </li>
//             </ul>
//           </div>

//           {/* Step 3 */}
//           <div className="pb-3 flex flex-col gap-5">
//             <h3 className="text-[#231F20] font-bold md:text-[24px] max-md:text-left text-[20px]">
//               Step 3: Obtain Digital Signature Certificate (DSC)
//             </h3>
//             <p className="text-[#606162] text-[16px] md:text-[18px]">
//               A Digital Signature Certificate (DSC) is required to sign forms
//               electronically on the MCA portal.
//             </p>
//             <ul className="text-[#606162] text-[16px] md:text-[18px] ml-4 list-disc mt-1 leading-8 md:ml-7">
//               <li>
//                 <b>How to Obtain:</b> Get a DSC from government-approved
//                 Certifying Authorities (e.g., eMudhra, Sify, Ncode).
//               </li>
//               <li>
//                 <b>Documents Required:</b> PAN divdiv, Address proof, and a
//                 passport-size photo.
//               </li>
//             </ul>
//           </div>
//           {/* Step 4 */}
//           <div className="pb-3 flex flex-col gap-5">
//             <h3 className="text-[#231F20] font-bold md:text-[24px] max-md:text-left text-[20px]">
//             Step 4: Choose a Unique Company Name
//             </h3>
//             <p className="text-[#606162] text-[16px] md:text-[18px]">
//             Select a name that aligns with your brand and complies with MCA guidelines.
//             </p>
//             <ul className="text-[#606162] text-[16px] md:text-[18px] ml-4 list-disc mt-1 leading-8 md:ml-7">
//               <li>
//                 <b>Ensure the name:</b> Is unique and not similar to existing company names.
//               </li>
//               <li>
//               Does not infringe on trademarks.
//               </li>
//               <li>
//               Complies with the Companies (Incorporation) Rules, 2014.
//               </li>
//             </ul>
//           </div>
//           {/* Step 5 */}
//           <div className="pb-3 flex flex-col gap-5">
//             <h3 className="text-[#231F20] font-bold md:text-[24px] max-md:text-left text-[20px]">
//             Step 5: Apply for Name Approval
//             </h3>
//             <p className="text-[#606162] text-[16px] md:text-[18px]">
//             Once you have selected a name, you need to reserve it.


//             </p>
//             <ul className="text-[#606162] text-[16px] md:text-[18px] ml-4 list-disc mt-1 leading-8 md:ml-7">
//               <li>
//               Use the RUN (Reserve Unique Name) service on the MCA portal.
//               </li>
//               <li>
//               Have a few alternatives ready in case your first choice is unavailable.
//               </li>
//               <li>
//               Approved names are valid for 20 days.
//               </li>
//             </ul>
//           </div>
//           {/* Step 6 */}
//           <div className="pb-3 flex flex-col gap-5">
//             <h3 className="text-[#231F20] font-bold md:text-[24px] max-md:text-left text-[20px]">
//             Step 6: Prepare Memorandum and Articles of Association (MOA & AOA)
//             </h3>
//             <p className="text-[#606162] text-[16px] md:text-[18px]">
//             These legal documents define your company's purpose, structure, and operating rules.


//             </p>
//             <ul className="text-[#606162] text-[16px] md:text-[18px] ml-4 list-disc mt-1 leading-8 md:ml-7">
//               <li>
//                 <b>Memorandum of Association (MOA):</b> Specifies the company’s objectives and activities.
//               </li>
//               <li>
//                   <b>Articles of Association (AOA):</b>Defines the company’s internal rules and regulations.
//               </li>
//               <li>
//               These documents must be signed by directors and shareholders.
//               </li>
//             </ul>
//           </div>
//           {/* step 7 */}
//           <div className="pb-3 flex flex-col gap-5">
//             <h3 className="text-[#231F20] font-bold md:text-[24px] max-md:text-left text-[20px]">
//             Step 7: Obtain Consent and Declarations
//             </h3>
//             <p className="text-[#606162] text-[16px] md:text-[18px]">
//             Before filing for incorporation:




//             </p>
//             <ul className="text-[#606162] text-[16px] md:text-[18px] ml-4 list-disc mt-1 leading-8 md:ml-7">
//               <li>
//               Directors and shareholders must provide their consent to act in their roles.
//               </li>
//               <li>
//               Obtain declarations regarding compliance with legal requirements.
//               <li>Form INC-9 for directors' declarations. </li>
//               <li>Consent forms like DIR-2. </li>
//               </li>
//             </ul>
//           </div>
//           {/* step 8 */}
//           <div className="pb-3 flex flex-col gap-5">
//             <h3 className="text-[#231F20] font-bold md:text-[24px] max-md:text-left text-[20px]">
//             Step 8: File Incorporation Documents
//             </h3>
//             <p className="text-[#606162] text-[16px] md:text-[18px]">
//             This is the most crucial step where all necessary documents are submitted online via the SPICe+ form on the MCA portal.
//             </p>
//             <ul className="text-[#606162] text-[16px] md:text-[18px] ml-4 list-disc mt-1 leading-8 md:ml-7">
              
//                 <b>Documents to Attach:</b> 
              
//               <li>
//               MOA & AOA.
//               </li>
//               <li>
//               DIN & DSC for directors.
//               </li>
//               <li>
//               Address proof for the registered office.
//               </li>
//               <li>
//               Identity and address proofs for directors and shareholders.
//               </li>
              
//                 <b>Additional Forms::</b> 
              
//               <li>
//               MOA & AOA.
//               </li>
//               <li>
//               Form INC-9 for directors' declarations.
//               </li>
//               <li>
//               Consent forms like DIR-2.
//               </li>
//              <b>AGILE-PRO-S:</b><li>For registration of GST, EPFO, and ESIC.</li>
//             </ul>
//           </div>
//           {/* step 9 */}
//           <div className="pb-3 flex flex-col gap-5">
//             <h3 className="text-[#231F20] font-bold md:text-[24px] max-md:text-left text-[20px]">
//             Step 9: Pay Registration Fees
//             </h3>
      
//             <ul className="text-[#606162] text-[16px] md:text-[18px] ml-4 list-disc mt-1 leading-8 md:ml-7">
//               <li>
//               Fees are based on the authorized capital of the company.
//               </li>
//               <li>
//               Payment can be made online on the MCA portal.
//               </li>
//               <li>
//               The fee structure varies depending on the type of company and capital.
//               </li>
//             </ul>
//           </div>
//           {/* step 10 */}
//           <div className="pb-3 flex flex-col gap-5">
//             <h3 className="text-[#231F20] font-bold md:text-[24px] max-md:text-left text-[20px]">
//             Step 10: Receive the Certificate of Incorporation
//             </h3>
//             <p className="text-[#606162] text-[16px] md:text-[18px]">
//             Upon successful verification of all submitted documents and payment:


//             </p>
//             <ul className="text-[#606162] text-[16px] md:text-[18px] ml-4 list-disc mt-1 leading-8 md:ml-7">
//               <li>
//               The Registrar of Companies (ROC) issues the Certificate of Incorporation.
//               </li>
//               <li>
//               The certificate includes a Corporate Identification Number (CIN).
//               </li>
//               <li>
//               Approved names are valid for 20 days.
//               </li>
//             </ul>
//           </div>
          

//           {/* Add other steps similarly */}
//         </div>
//       </div>
//       <div className="flex max-md:flex-col-reverse gap-3 rounded-lg md:gap-10 px-0 max-md:items-center justify-around md:flex-row-reverse">
//       <img
//         alt="Company Registration Certificate"
//         title="Company Registration Certificate"
//         loading="lazy"
//         width="220"
//         height="220"
//         decoding="async"
//         className="undefined"
//         style={{ color: "transparent", paddingTop: "0px", width: "250px", height: "250px" }}
//         src="https://assets.vakilsearch.com/live-imgimgs/CompRegCertificate.svg"
//       />
//       <div className="flex flex-col gap-4">
//         <div className="pb-3 flex flex-col gap-5">
//           <h2 className="text-[#231F20] font-bold md:text-[30px] max-md:text-left text-[24px]">
//             Company Registration Certificate
//           </h2>
//           <p className="text-[#606162] text-[16px] md:text-[18px]">
//             A Company Registration Certificate serves as the official document proving your business's legal existence. Issued by the Registrar of Companies (RoC) under the Ministry of Corporate Affairs (MCA), this certificate not only confirms the incorporation of your company but also grants you the legal authority to operate in full compliance with Indian corporate laws.
//           </p>
//         </div>
//       </div>
      
//     </div>
//     <div className="px-4">
//       <h2 className="font-bold md:text-[32px] md:leading-[42px] text-center text-[24px] leading-[34px] mb-4 mx-auto md:mb-[32px] text-[#231F20]">
//         Types of Company Registration
//       </h2>
//       <p className="leading-[24px] text-[#606162] text-center text-[16px] md:text-[18px] md:pb-[54px] pb-6">
//         Under the Companies Act of 2013 different types of business entities can be registered. Each and every business entity has its own set of benefits and drawbacks. Here is a complete outline of different business entities and their corresponding information.
//       </p>
//       <div className="block max-md:overflow-x-scroll">
//         <div className="flex flex-col gap-10">
//           <div className="!bg-blue-300 !p-0 text-[#231F20] !pb-4 wrc-p-2 md:wrc-p-8 wrc-pb-4 md:wrc-pt-4 wrc-rounded-[8px] wrc-w-fit">
//             <div className="wrc-max-md:overflow-x-scroll wrc-border-none z-[999] ">
//               <table>
//                 <thead>
//                   <tr className="shadow-[0px_4px_14px_0px_#00000017] text-left wrc-bg-[#EDF6FF]">
//                     <th className="!p-5 wrc-text-[16px] md:wrc-text-[20px] wrc-font-semibold wrc-p-3 wrc-px-5 wrc-text-left md:wrc-px-10 wrc-sticky md:wrc-static wrc-left-[-1px] wrc-top-0 wrc-z-[999] wrc-bg-[#EDF6FF]">
//                       <p></p>
//                     </th>
//                     {[
//                       { name: "Pvt. Limited Company", link: "https://vakilsearch.com/company-registration/private-limited" },
//                       { name: "One Person Company", link: "https://vakilsearch.com/company-registration/opc-registration" },
//                       { name: "Limited Liability Partnership", link: "https://vakilsearch.com/company-registration/llp-registration" },
//                       { name: "Partnership Firm", link: "https://vakilsearch.com/company-registration/partnership-firm" },
//                       { name: "Proprietorship Firm", link: "https://vakilsearch.com/company-registration/sole-proprietorship" },
//                     ].map((header, index) => (
//                       <th key={index} className="!p-5 wrc-text-[16px] md:wrc-text-[20px] wrc-font-semibold wrc-p-3 wrc-px-5 wrc-text-left md:wrc-px-10 false">
//                         <a to={header.link} target="_blank" rel="noopener noreferrer" className="wrc-underline wrc-text-[#007AFF]">
//                           {header.name}
//                         </a>
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>
//                 <tbody className="wrc-text-[14px] wrc-p-3">
//                   {[
//                     {
//                       category: "Compliance Requirement",
//                       values: ["Companies Act, 2013", "Companies Act, 2013", "Limited Liability Partnership Act, 2008", "Indian Partnership Act,1932", "No specified Act"],
//                     },
//                     {
//                       category: "Registration",
//                       values: ["Mandatory", "Mandatory", "Mandatory", "Optional", "No"],
//                     },
//                     {
//                       category: "Number of Owners",
//                       values: ["2 -200", "Only 1", "2 - Unlimited", "2 -50", "Only 1"],
//                     },
//                     {
//                       category: "Separate Legal Entity",
//                       values: ["Yes", "Yes", "Yes", "No", "No"],
//                     },
//                     {
//                       category: "Liability Protection",
//                       values: ["Limited", "Limited", "Limited", "Unlimited", "Unlimited"],
//                     },
//                     {
//                       category: "Statutory Audit",
//                       values: ["Mandatory", "Mandatory", "As Applicable", "Not Mandatory", "Not Mandatory"],
//                     },
//                     {
//                       category: "Ownership Transfer",
//                       values: ["Yes", "Yes (Restricted)", "Yes", "Yes (Restricted)", "No"],
//                     },
//                     {
//                       category: "Perpetual Existence",
//                       values: ["Yes", "Yes", "Yes", "No", "No"],
//                     },
//                     {
//                       category: "Foreign Ownership",
//                       values: ["Allowed", "Not Allowed", "Allowed", "Allowed", "Not Allowed"],
//                     },
//                     {
//                       category: "Taxation Liability",
//                       values: ["Moderate", "Moderate", "High", "High", "Low"],
//                     },
//                   ].map((row, index) => (
//                     <tr key={index} className={`wrc-bg-${index % 2 === 0 ? "[#F5FAFF]" : "[#EDF6FF]"}`}>
//                       <td className="wrc-sticky md:wrc-static wrc-left-[-1px] wrc-top-0 wrc-z-[999] wrc-bg-[#F5FAFF] wrc-border-r-2 wrc-px-2 !align-top text-[#606162] wrc-p-1 md:wrc-p-3 md:wrc-text-left wrc-text-center md:wrc-max-w-[500px] md:wrc-text-[18px] md:wrc-px-10">
//                         <span>{row.category}</span>
//                       </td>
//                       {row.values.map((value, i) => (
//                         <td key={i} className={`false ${i !== row.values.length - 1 ? 'wrc-border-r-2' : ''} wrc-px-2 !align-top text-[#606162] wrc-p-1 md:wrc-p-3 md:wrc-text-left wrc-text-center md:wrc-max-w-[500px] md:wrc-text-[18px] md:wrc-px-10`}>
//                           <span>{value}</span>
//                         </td>
//                       ))}
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//     <div className="bg-[#FFF] px-0 lg:gap-[209px] md:py-[25px] md:mt-[40px] items-center max-md:mb-[38px] flex max-md:flex-col-reverse gap-3 bg-[#F9F9F9] px-6 pt-2 md:pt-5 rounded-lg md:gap-10 md:p-8 md:flex-row-reverse">
//       <img
//         src="https://assets.vakilsearch.com/live-imgimgs/company+registration+business+structure.svg"
//         alt="Choosing the Right Business Structure"
//         title="Choosing the Right Business Structure"
//         className="md:h-[390px] md:w-[390px] md:w-[278px] md:h-[250px]"
//       />
//       <div className="pb-3 flex flex-col gap-5">
//         <h2 className="max-md:text-left text-[30px] text-[#231F20] font-bold text-[24px] md:text-[30px] max-md:text-center">
//           Choosing the Right Business Structure
//         </h2>
//         <p className="text-[#606162] text-[16px] md:text-[18px]">
//           It is crucial to select a proper business structure to avail multiple
//           benefits from incorporation. Based on the type of business structure,
//           compliances vary greatly. For instance, a sole proprietorship company
//           is required to file only the income tax return; a private limited
//           company has to file annual returns and income tax returns with the
//           ROC.&nbsp;You can choose the structure of your company based on the
//           total number of partners or owners involved. Also, the initial
//           investment or initial payment made to start your business also plays
//           a crucial role. You can register your company as a sole proprietorship
//           partnership, LLP, OPC, Section 8 or a private limited company.
//         </p>
//       </div>
//     </div>
    
//     </div>
//     <div className="flex !bg-[#FFF] !px-0 lg:!gap-[209px] md:!py-[25px] md:mt-[40px] !items-center max-md:!mb-[38px] wrc-flex max-md:wrc-flex-col-reverse wrc-gap-3 wrc-bg-[#F9F9F9] wrc-px-6 wrc-pt-2 md:wrc-pt-5 wrc-rounded-lg md:wrc-gap-10 md:p-8">
//       <img
//         src="https://assets.vakilsearch.com/live-imgimgs/cost+of+company+registration.svg"
//         alt="Cost of Company Registration"
//         title="Cost of Company Registration"
//         className="md:!h-[390px] md:!w-[390px] md:wrc-w-[278px] md:wrc-h-[250px]"
//       />
//       <div className="wrc-pb-3 wrc-flex wrc-flex-col wrc-gap-5">
//         <h2 className="max-md:!text-left !text-[30px] wrc-text-[#231F20] wrc-font-bold wrc-text-[24px] md:wrc-text-[30px] max-md:wrc-text-center">
//           Cost of Company Registration
//         </h2>
//         <p className="!text-[#606162] wrc-text-[#606162] wrc-text-[16px] md:wrc-text-[18px]">
//           The overall cost of registering a company in India includes government fees, professional fees, DSC cost, and stamp duty. The cost may vary from one type of company to another. Get in touch with our incorporation experts to know how much it will cost you to incorporate your company.
//         </p>
//         <ul></ul>
//       </div>
//     </div>
//     <div className="flex !bg-[#FFF] !px-0 lg:!gap-[209px] md:!py-[25px] md:mt-[40px] !items-center max-md:!mb-[38px] wrc-flex max-md:wrc-flex-col-reverse wrc-gap-3 wrc-bg-[#F9F9F9] wrc-px-6 wrc-pt-2 md:wrc-pt-5 wrc-rounded-lg md:wrc-gap-10 md:p-8 md:wrc-flex-row-reverse">
//       <img
//         src="https://assets.vakilsearch.com/live-imgimgs/companyStructures/company_img_01.svg"
//         alt="Post-Registration Compliance"
//         title="Post-Registration Compliance"
//         className="md:!h-[390px] md:!w-[390px] md:wrc-w-[278px] md:wrc-h-[250px]"
//       />
//       <div className="wrc-pb-3 wrc-flex wrc-flex-col wrc-gap-5">
//         <h2 className="max-md:!text-left !text-[30px] wrc-text-[#231F20] wrc-font-bold wrc-text-[24px] md:wrc-text-[30px] max-md:wrc-text-center">
//           Post-Registration Compliance&nbsp;
//         </h2>
//         <p className="!text-[#606162] wrc-text-[#606162] wrc-text-[16px] md:wrc-text-[18px]">
//           After registering your company in India, it is crucial to follow all
//           the post-registration company compliances. Based on the type of
//           company with which you have registered, the compliances vary.
//           However, performing a statutory audit, filing annual returns, staying
//           abreast of ROC compliance, maintaining statutory registers, and
//           filing your GST returns are some of the post-registration compliances
//           that you should not miss.
//         </p>
//       </div>
//     </div>
//     <div className="flex !bg-[#FFF] !px-0 lg:!gap-[209px] md:!py-[25px] md:mt-[40px] !items-center max-md:!mb-[38px] wrc-flex max-md:wrc-flex-col-reverse wrc-gap-3 wrc-bg-[#F9F9F9] wrc-px-6 wrc-pt-2 md:wrc-pt-5 wrc-rounded-lg md:wrc-gap-10 md:p-8">
//       <img
//         src="https://assets.vakilsearch.com/live-imgimgs/secure+company+name.svg"
//         alt="Secure Your Company Name"
//         title="Secure Your Company Name"
//         className="md:!h-[390px] md:!w-[390px] md:wrc-w-[278px] md:wrc-h-[250px]"
//       />
//       <div className="wrc-pb-3 wrc-flex wrc-flex-col wrc-gap-5">
//         <h2 className="max-md:!text-left !text-[30px] wrc-text-[#231F20] wrc-font-bold wrc-text-[24px] md:wrc-text-[30px] max-md:wrc-text-center">
//           How to Secure Your Company Name?
//         </h2>
//         <p className="!text-[#606162] wrc-text-[#606162] wrc-text-[16px] md:wrc-text-[18px]">
//           Selecting the right company name makes a major difference in business strategy. As per law, the company name should reflect the principle activity of the business. At any cost, the company name should not contain words prohibited under the names and emblems act. The company name should be unique and not similar or identical to the names of the existing registered companies. The company name should be registered using the Spice + application on the MCA portal. A maximum of at least two names can be applied to the spice + form. The ROC will approve the company name after verifying the application. Note that the proved name will be reserved for 20 days from the approval date. Within those 20 days, the applicant should file Spice + Form b. If the Spice Plus form part B is not filed within the provided time frame, the application will be rejected, and the process has to be initiated from the beginning.
//         </p>
//       </div>
//     </div>
//     <div className="flex max-md:flex-col p-4 justify-evenly bg-[#FBFBFB]">
//       <div className="md:w-[600px]">
//         <p className="text-[#231F20] font-bold text-[32px]">
//           How Vakilsearch Helps in Simplifying Company Registration Process?
//         </p>
//         <p>
//           Vakilsearch stands out for simplifying the company registration process by offering expert guidance, a user-friendly online platform, and personalized solutions. Businesses benefit from our expert assistance in document preparation, transparent pricing, and timely updates on registration progress. Vakilsearch's commitment to legal compliance ensures that businesses navigate complexities seamlessly, receiving post-registration support for ongoing compliance requirements. With a focus on accessibility and technology, we empower businesses to complete the registration process efficiently, allowing them to concentrate on their core operations with confidence in their legal standing.
//         </p>
//       </div>
//       <img
//         alt="icon"
//         loading="lazy"
//         width="433"
//         height="252"
//         decoding="async"
//         style={{ color: "transparent" }}
//         src="https://assets.vakilsearch.com/live-imgimgs/simplify+company+registration+process.svg"
//       />
//     </div>
//     <div className="flex flex-col gap-[16px] md:m-auto md:max-w-[90%] lg:max-w-[80%] xl:max-w-[80%]">
//       <p className="text-[24px] md:text-[32px] font-bold text-center">
//         Exclusive <span className="text-[#007AFF]">Partner Benefits</span> for Vakilsearch Clients
//       </p>
//       <p className="text-[14px] font-normal text-center text-[#606162]">
//         Benefits worth up to 4 lakhs when you Incorporate with us!
//       </p>
//       <div className="max-md:flex max-md:flex-col max-md:p-4 max-md:gap-3 overflow-auto md:pt-[30px] md:grid md:grid-cols-3 md:gap-[30px]">
//         {benefits2.map((benefit, index) => (
//           <div
//             key={index}
//             className="max-md:p-4 md:py-[32px] md:pl-[24px] md:pr-[50px] border-[1px] border-[#E9EDF4] flex flex-col gap-[16px] rounded-md max-md:min-w-[320px]"
//           >
//             <img
//               alt="partner"
//               loading="lazy"
//               width="285"
//               height="94"
//               decoding="async"
//               style={{ color: "transparent" }}
//               src={benefit.imgSrc}
//             />
//             <p className="text-[16px] text-[#007AFF] font-bold">{benefit.title}</p>
//             {benefit.features.map((feature, idx) => (
//               <div key={idx} className="flex md:gap-[10px] items-start">
//                 <img
//                   alt="tick"
//                   loading="lazy"
//                   width="16"
//                   height="16"
//                   decoding="async"
//                   style={{ color: "transparent" }}
//                   src="https://assets.vakilsearch.com/live-imgimgs/blue-white-tick-b2b.svg"
//                 />
//                 <p className="text-[14px] font-normal">{feature}</p>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//     <div className="flex items-center justify-center px-60 mb-10 bg-blue-200 rounded-xl ">
//       <div className="wrc-flex wrc-flex-col wrc-gap-3 wrc-p-4 wrc-bg-[#E6F2FF] wrc-rounded-2xl wrc-w-full md:wrc-w-[60rem]">
//         <p className="wrc-font-semibold font-bold">Authors</p>
//         <p>Written by Nithya, Reviewed by Mithra Menon. Last updated on Nov 08 2024, 11:00 AM</p>
//         <div>
//           <div className="wrc-flex wrc-flex-col wrc-gap-3">
//             <p>
//               <a
//                 className="wrc-underline wrc-decoration-[#007bff] wrc-text-[#007bff] wrc-inline wrc-pr-2"
//                 to="https://vakilsearch.com/authors/mithra-menon"
//               >
//                 Mithra Menon
//               </a>
//               <span>
//                 {" "}
//                 excels in Corporate Law Matters and Debt and Money Recovery. She
//                 offers assistance in company incorporation both domestically and
//                 internationally, along with partnership firm registration.
//                 Additionally, she provides advisory services on compliance and LLP
//                 registration in India.
//               </span>
//             </p>
//             <p>
//               <a
//                 className="wrc-underline wrc-decoration-[#007bff] wrc-text-[#007bff] wrc-inline wrc-pr-2"
//                 to="https://vakilsearch.com/blog/author/nithya-ramanivakilsearch-com/"
//               >
//                 Nithya Ramani Iyer,
//               </a>
//               <span>
//                 {" "}
//                 a criminologist and writer, serves as the SME and manages
//                 communications at Vakilsearch. Drawing from her experience at
//                 Seasearch Intelligence and Legal domains, she enriches our content
//                 with insightful perspectives.
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
        
//     </div>
//     </div>
//     </div>
//     <Footer />
//     </>
//   );
// };

// export default Home;

import { useRef, useState } from "react"
import { Link } from 'react-router-dom';
import Header from "../component/Header";
import Footer from "../component/Footer";
import Group from '../image/Group.svg';
import imges from '../image/login.png';
import logo2 from '../image/logo2.png';
import { Bookmark, Search, Star } from "lucide-react"
import './Home.css'
import LogoSlider from "./LogoSlider";
import { FaBookmark } from "react-icons/fa6";
import { AiOutlineSearch } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"


const Home = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const jobs = [
   
    // Duplicate job for demo
    {
      title: "Product Designer",
      company: "Google",
      location: "Mountain View, CA",
      salary: "$240/hr",
      tags: ["Full time", "On-site", "Senior"],
      postedTime: "2 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
    },
    {
      title: "UI Engineer",
      company: "Microsoft",
      location: "Seattle, WA",
      salary: "$220/hr",
      tags: ["Contract", "Hybrid", "Senior"],
      postedTime: "3 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
    },
    {
      title: "UX Researcher",
      company: "Apple",
      location: "Cupertino, CA",
      salary: "$200/hr",
      tags: ["Full time", "Remote", "Senior"],
      postedTime: "4 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
    },
    {
      title: "UI Engineer",
      company: "Microsoft",
      location: "Seattle, WA",
      salary: "$220/hr",
      tags: ["Contract", "Hybrid", "Senior"],
      postedTime: "3 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
    },
    {
      title: "Product Designer",
      company: "Google",
      location: "Mountain View, CA",
      salary: "$240/hr",
      tags: ["Full time", "On-site", "Senior"],
      postedTime: "2 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
    },
  ]
  

    return (
      <>
        <main className=" bg-gradient-to-br">
          <HeroSection />
          <div className="w-[100%] mx-auto mt-4">
            <JobListingsSection />
            <div className="w-[87%] mx-auto">
            <LogoSlider />
            </div>
            <JobListingsAndSidebar />
            <ResumeFeatureSection />
            <EmailSignupSection />
          </div>

        </main>
        <Footer/>
      </>
    );
  };
  
 
 function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  return (
    <>
      <header className="py-4 w-full relative overflow-hidden bg-gradient-to-r from-purple-100 via-white to-purple-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group-y8VIQbQhSCi7xcFqUiFvxXXwZtkvps.svg"
            alt="Background Pattern"
            className="w-full h-full object-cover opacity-30"
            width={1440}
            height={1024}
            priority
          />
        </div>

        {/* SVG Patterns */}
        <div className="absolute inset-0 w-full h-full">
          {/* First SVG Pattern */}
          <svg
            width="804"
            height="636"
            className="absolute left-0 top-0"
            viewBox="0 0 804 636"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-192.5 -238C-192.5 -238 -76.5 -191 -76.5 -95.5C-76.5 0 -192.5 47 -192.5 142.5C-192.5 238 -76.5 285 -76.5 380.5C-76.5 476 -192.5 523 -192.5 618.5C-192.5 714 -76.5 761 -76.5 856.5"
              stroke="#E4E2FF"
              strokeWidth="3"
            />
            {/* Other paths remain the same */}
          </svg>

          {/* Second SVG Pattern (mirrored on the right) */}
          <svg
            width="804"
            height="636"
            className="absolute right-0 top-0 transform scale-x-[-1]"
            viewBox="0 0 804 636"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-192.5 -238C-192.5 -238 -76.5 -191 -76.5 -95.5C-76.5 0 -192.5 47 -192.5 142.5C-192.5 238 -76.5 285 -76.5 380.5C-76.5 476 -192.5 523 -192.5 618.5C-192.5 714 -76.5 761 -76.5 856.5"
              stroke="#E4E2FF"
              strokeWidth="3"
            />
            {/* Other paths remain the same */}
          </svg>
        </div>

        {/* Header Content */}
        <div className="container mx-auto px-4 py-3 flex justify-between items-center relative z-10">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">
              <div className="flex items-center">
              <Link to="/"><img src={logo2} alt="JobJod" /></Link>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex ml-10 space-x-6">
            <Link to="/JobListingPage" className="text-gray-800 hover:text-black">
              Find Jobs
            </Link>
            <Link to="/companies" className="text-gray-800 hover:text-black">
              Browse Company
            </Link>
         
          </nav>

          <div className="hidden md:block">
          <Link to="/JobListingPage" className="text-black font-semibold">
            Hire Now <span className="text-gray-400 pr-4">|</span>
            </Link>
        
            <Link
              to="/LoginPage"
              className="bg-black text-white font-medium py-2 px-6 rounded-full hover:bg-gray-800 transition-colors"
            >
              Login / Signup
            </Link>
          </div>

          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="2" rx="1" fill="currentColor" />
              <rect y="8" width="24" height="2" rx="1" fill="currentColor" />
              <rect y="16" width="24" height="2" rx="1" fill="currentColor" />
            </svg>
          </button>
        </div>
      </header>

      <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-purple-100 via-white to-purple-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group-y8VIQbQhSCi7xcFqUiFvxXXwZtkvps.svg"
            alt="Background Pattern"
            className="w-full h-full object-cover opacity-30"
            width={1440}
            height={1024}
            priority
          />
        </div>

        {/* Content */}
        <div className="relative w-full container mx-auto px-6 py-20 text-center z-10">
          {/* New Feature Badge */}
          <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-600 mb-6">
            <span className="font-medium">New</span>
            <span className="ml-2 text-blue-500">278+ Jobs Fulfilled 🎉</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Unlock <span className="text-amber-500">Your</span> Potential
          </h1>
          <p className="text-lg mb-8">Let us help you find your dream job here.</p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto p-4">
            <div className="flex flex-col md:flex-row gap-2 p-2 bg-white rounded-3xl shadow-md border-4 border-gray-800 md:rounded-full">
              <SearchInput placeholder="Job title or Keyword" />
              <SearchInput placeholder="City, state or zip" isLocation />
              <Link
                to="/JobListingPage"
                className="bg-purple-500 text-white font-medium py-3 px-12 rounded-full hover:bg-purple-600 transition-colors duration-200 shadow-sm relative"
                style={{
                  boxShadow: `0 0 5px rgba(255, 255, 255, 0.5),
                    0 0 10px rgba(255, 255, 255, 0.3),
                    0 0 20px rgba(255, 255, 255, 0.2),
                    0 0 0 4px rgba(0, 0, 0, 0.1)`,
                }}
              >
                Find Jobs
              </Link>
            </div>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent pointer-events-none" />
      </section>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[4rem] left-0 right-0 bg-white py-4 shadow-md z-50 animate-slideDown">
          <nav className="flex flex-col space-y-4 px-4">
            <Link to="/JobListingPage" className="text-gray-800 hover:text-black py-2">
              Find Jobs
            </Link>
            <Link to="/companies" className="text-gray-800 hover:text-black py-2">
              Browse Company
            </Link>
            <Link to="/hire" className="text-gray-800 hover:text-black py-2">
              Hire Now
            </Link>
            <Link to="/LoginPage" className="bg-black text-white font-medium py-2 px-6 rounded-full text-center">
              Login / Signup
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
  
  const SearchInput = ({ icon, placeholder, isLocation = false }) => (
    <div className={`flex-1 flex items-center gap-2 px-4 py-2 ${isLocation ? "md:border-l md:border-gray-200" : ""}`}>
      <AiOutlineSearch className="text-gray-400 h-5 w-5 text-gray-400" />
      <input type="text" placeholder={placeholder} className="border-0 focus:ring-0 w-full outline-none" />
    </div>
  )
  
  const SearchInput2 = ({ icon, placeholder, isLocation = false }) => (
    <div className={`flex-1 flex items-center gap-2 px-4 py-2 ${isLocation ? "md:border-l md:border-gray-200" : ""}`}>
     <FiMapPin className="text-gray-400 h-5 w-5 text-gray-400" />
      <input type="text" placeholder={placeholder} className="border-0 focus:ring-0 w-full outline-none" />
    </div>
  )
  // const NewFeatureBadge = () => (
  //   <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100 p-3 mb-8">
  //     <span className="flex items-center justify-center rounded-full bg-black text-white px-2 py-0.5 text-xs font-medium">
  //       New
  //     </span>
  //     <span className="text-blue-600 text-sm font-medium">
  //       278+ Jobs Fulfilled 🎉
  //     </span>
  //   </div>
  // );
  
  // const SearchBar = () => (
  //   <div className="max-w-3xl mx-auto p-4">
  //     <div className="flex flex-col gap-2 p-2 bg-white rounded-3xl shadow-md border-4 border-gray-800 md:rounded-full md:flex-row">
  //       <Searchinputinput icon="🔍" placeholder="Job title or Keyword" />
  //       <Searchinputinput icon="📍" placeholder="City, state or zip" isLocation />
  //       <buttonbutton className="w-full md:w-auto rounded-full bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 shadow-md transition duration-300">
         
  //         <Link to="/JobListingPage" > Find Jobs</Link>
          
  //       </buttonbutton>
  //     </div>
  //   </div>
  // )
  
  // const Searchinputinput = ({ icon, placeholder, isLocation = false }) => (
  //   <div className={`flex-1 flex items-center gap-2 px-4 py-2 ${isLocation ? "md:border-l md:border-gray-200" : ""}`}>
  //     <span className="h-5 w-5 text-gray-400">{icon}</span>
  //     <inputinput type="text" placeholder={placeholder} className="border-0 focus:ring-0 w-full outline-none" />
  //   </div>
  // )
  
  const JobListingsAndSidebar = () => (
    <div className="container mx-auto flex flex-col md:flex-row gap-8 px-4 py-10 bg-white w-full dark:bg-gray-900 rounded-[24px] p-5 border border-gray-200 
            dark:border-gray-800 ">
      <Sidebar />
      <JobListingsSectionNew />
    </div>
  );

  
export function JobListingsSectionNew() {
  const jobs = [
   
    // Duplicate job for demo
    {
      title: "Product Designer",
      company: "Google",
      location: "Mountain View, CA",
      salary: "$240/hr",
      tags: ["Full time", "On-site", "Senior"],
      postedTime: "2 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      isNew: true,
   
    },
    {
      title: "UI Engineer",
      company: "Microsoft",
      location: "Seattle, WA",
      salary: "$220/hr",
      tags: ["Contract", "Hybrid", "Senior"],
      postedTime: "3 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      featured: true,
    },
    {
      title: "UX Researcher",
      company: "Apple",
      location: "Cupertino, CA",
      salary: "$200/hr",
      tags: ["Full time", "Remote", "Senior"],
      postedTime: "4 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      isNew: true,
    },
    {
      title: "UI Engineer",
      company: "Microsoft",
      location: "Seattle, WA",
      salary: "$220/hr",
      tags: ["Contract", "Hybrid", "Senior"],
      postedTime: "3 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      isNew: true,
    },
    {
      title: "Product Designer",
      company: "Google",
      location: "Mountain View, CA",
      salary: "$240/hr",
      tags: ["Full time", "On-site", "Senior"],
      postedTime: "2 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      featured: true,
    },
    
    {
      title: "UX Researcher",
      company: "Apple",
      location: "Cupertino, CA",
      salary: "$200/hr",
      tags: ["Full time", "Remote", "Senior"],
      postedTime: "4 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      isNew: true,
    },
    {
      title: "UI Engineer",
      company: "Microsoft",
      location: "Seattle, WA",
      salary: "$220/hr",
      tags: ["Contract", "Hybrid", "Senior"],
      postedTime: "3 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      isNew: true,
      featured: true,
    },
    {
      title: "UX Researcher",
      company: "Apple",
      location: "Cupertino, CA",
      salary: "$200/hr",
      tags: ["Full time", "Remote", "Senior"],
      postedTime: "4 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      isNew: true,
    },
    {
      title: "UI Engineer",
      company: "Microsoft",
      location: "Seattle, WA",
      salary: "$220/hr",
      tags: ["Contract", "Hybrid", "Senior"],
      postedTime: "3 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      isNew: true,
    },
  ]
  return (
    <div className="w-full space-y-6 pt-[70px]">
      <div className="flex flex-wrap gap-4">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="w-full sm:w-[calc(50%-0.5rem)] xl:w-[calc(33.33%-1rem)] 
            relative bg-white dark:bg-gray-900 rounded-[24px] p-5 border border-gray-200 
            dark:border-gray-800 hover:bg-[#e3dafb] dark:hover:bg-purple-900/20 
            transition-all duration-300 group"
          >
            <header className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">{job.postedTime}</span>
                {job.isNew && (
                  <span className="px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-700 opacity-0 group-hover:opacity-100 transition-opacity">
                    New
                  </span>
                )}
                {job.featured && (
                  <span className="px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-700 opacity-0 group-hover:opacity-100 transition-opacity ml-2">
                    Featured
                  </span>
                )}
              </div>
              <button className="p-2 rounded-full">
                <Bookmark className="h-4 w-4 text-[#4B5563]" />
              </button>
            </header>
            <div className="space-y-4 mt-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src={job.logo || "/placeholder.svg"}
                    alt={`${job.company} logo`}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{job.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{job.company}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm border border-gray-200 dark:border-gray-700
                             bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 
                             group-hover:bg-white/50 dark:group-hover:bg-gray-800/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <footer className="flex items-center justify-between mt-4 bg-white dark:bg-gray-900 rounded-b-[24px] -mx-5 -mb-5 p-5">
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">{job.salary}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{job.location}</div>
              </div>
              <button
                className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 
                         bg-white dark:bg-gray-900"
              >
                View Details
              </button>
            </footer>
          </div>
        ))}
      </div>
    </div>
  )
}

  


export function Sidebar() {
  const categories = [
    "Software Development",
    "Data Science",
    "Product Design",
    "Digital Marketing",
    "Customer Service",
    "Sales & Business",
    "Healthcare & Medical",
    "Finance & Banking",
    "Education & Teaching",
    "Engineering",
    "Human Resources",
    "Project Management"
  ]
  return (
    <aside className="w-full lg:w-[561px] md:w-[334px] p-6 bg-white rounded-2xl ">
 
    
    <div className="relative mb-6">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
      <input
        type="text"
        placeholder="Search your preferred industry"
        className="w-full h-12 pl-11 pr-4 rounded-2xl border border-gray-200 text-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      />
    </div>

    <div className="space-y-3">
      {categories.map((category, i) => (
        <button
          key={i}
          className={`w-full py-4 px-6 rounded-2xl text-center text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
            i % 3 === 0
              ? "bg-[#F3E8FF] text-purple-700"
              : i % 3 === 1
              ? "bg-[#FEF3C7] text-amber-700"
              : "bg-[#E0F2FE] text-sky-700"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  </aside>
  )
}
  
  const JobListingsSection = () =>  {
    const scrollContainerRef = useRef(null)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)
  
    const handleMouseDown = (e) => {
      setIsDragging(true)
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
      setScrollLeft(scrollContainerRef.current.scrollLeft)
    }
  
    const handleMouseMove = (e) => {
      if (!isDragging) return
      e.preventDefault()
  
      const x = e.pageX - scrollContainerRef.current.offsetLeft
      const walk = (x - startX) * 2
      scrollContainerRef.current.scrollLeft = scrollLeft - walk
    }
  
    const handleMouseUp = () => {
      setIsDragging(false)
    }
  
    const handleMouseLeave = () => {
      setIsDragging(false)
    }
  
    const handleTouchStart = (e) => {
      setIsDragging(true)
      setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft)
      setScrollLeft(scrollContainerRef.current.scrollLeft)
    }
  
    const handleTouchMove = (e) => {
      if (!isDragging) return
  
      const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft
      const walk = (x - startX) * 2
      scrollContainerRef.current.scrollLeft = scrollLeft - walk
    }
  
    const handleTouchEnd = () => {
      setIsDragging(false)
    }
  
    const jobs = [
   
    // Duplicate job for demo
    {
      title: "Product Designer",
      company: "Google",
      location: "Mountain View, CA",
      salary: "$240/hr",
      tags: ["Full time", "On-site", "Senior"],
      postedTime: "2 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      isNew: true,
   
    },
    {
      title: "UI Engineer",
      company: "Microsoft",
      location: "Seattle, WA",
      salary: "$220/hr",
      tags: ["Contract", "Hybrid", "Senior"],
      postedTime: "3 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      featured: true,
    },
    {
      title: "UX Researcher",
      company: "Apple",
      location: "Cupertino, CA",
      salary: "$200/hr",
      tags: ["Full time", "Remote", "Senior"],
      postedTime: "4 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      isNew: true,
    },
    {
      title: "UI Engineer",
      company: "Microsoft",
      location: "Seattle, WA",
      salary: "$220/hr",
      tags: ["Contract", "Hybrid", "Senior"],
      postedTime: "3 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      isNew: true,
    },
    {
      title: "Product Designer",
      company: "Google",
      location: "Mountain View, CA",
      salary: "$240/hr",
      tags: ["Full time", "On-site", "Senior"],
      postedTime: "2 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      featured: true,
    },
    
    {
      title: "UX Researcher",
      company: "Apple",
      location: "Cupertino, CA",
      salary: "$200/hr",
      tags: ["Full time", "Remote", "Senior"],
      postedTime: "4 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      isNew: true,
    },
    {
      title: "UI Engineer",
      company: "Microsoft",
      location: "Seattle, WA",
      salary: "$220/hr",
      tags: ["Contract", "Hybrid", "Senior"],
      postedTime: "3 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      isNew: true,
      featured: true,
    },
    {
      title: "UX Researcher",
      company: "Apple",
      location: "Cupertino, CA",
      salary: "$200/hr",
      tags: ["Full time", "Remote", "Senior"],
      postedTime: "4 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      isNew: true,
    },
    {
      title: "UI Engineer",
      company: "Microsoft",
      location: "Seattle, WA",
      salary: "$220/hr",
      tags: ["Contract", "Hybrid", "Senior"],
      postedTime: "3 days ago",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p1j1Qxzz9kF8bgfElLEsKdkaIRBLk0.png",
      isNew: true,
    },
    ]
  
    return (
  // <Swiper
  //       modules={[Autoplay, Navigation]}
  //       spaceBetween={20}
  //       slidesPerView={1}
  //       navigation={true}
  //       autoplay={{
  //         delay: 3000,
  //         disableOnInteraction: false,
  //       }}
  //       breakpoints={{
  //         640: {
  //           slidesPerView: 2,
  //         },
  //         1024: {
  //           slidesPerView: 3,
  //         },
  //       }}
  //       className="job-swiper"
  //     >
  //       {jobs.map((job, index) => (
  //         <SwiperSlide key={index}>
  //           <div
  //             className="h-full w-full relative bg-white dark:bg-gray-900 rounded-[24px] p-5 border border-gray-200 
  //             dark:border-gray-800 hover:bg-[#e3dafb] dark:hover:bg-purple-900/20 
  //             transition-all duration-300 group"
  //           >
  //             <header className="flex flex-row items-center justify-between">
  //               <div className="flex items-center gap-2">
  //                 <span className="text-sm text-gray-500 dark:text-gray-400">{job.postedTime}</span>
  //                 {job.isNew && (
  //                   <span className="px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-700 opacity-0 group-hover:opacity-100 transition-opacity">
  //                     New
  //                   </span>
  //                 )}
  //                 {job.featured && (
  //                   <span className="px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-700 opacity-0 group-hover:opacity-100 transition-opacity ml-2">
  //                     Featured
  //                   </span>
  //                 )}
  //               </div>
  //               <button className="p-2 rounded-full">
  //                 <Bookmark className="h-4 w-4 text-[#4B5563]" />
  //               </button>
  //             </header>
  //             <div className="space-y-4 mt-4">
  //               <div className="flex items-start gap-3">
  //                 <div className="h-10 w-10 rounded-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden">
  //                   <img
  //                     src={job.logo || "/placeholder.svg"}
  //                     alt={`${job.company} logo`}
  //                     className="w-6 h-6 object-contain"
  //                   />
  //                 </div>
  //                 <div>
  //                   <h3 className="font-semibold text-gray-900 dark:text-white">{job.title}</h3>
  //                   <p className="text-sm text-gray-500 dark:text-gray-400">{job.company}</p>
  //                 </div>
  //               </div>
  //               <div className="flex flex-wrap gap-2">
  //                 {job.tags.map((tag) => (
  //                   <span
  //                     key={tag}
  //                     className="px-3 py-1 rounded-full text-sm border border-gray-200 dark:border-gray-700
  //                              bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 
  //                              group-hover:bg-white/50 dark:group-hover:bg-gray-800/50"
  //                   >
  //                     {tag}
  //                   </span>
  //                 ))}
  //               </div>
  //             </div>
  //             <footer className="flex items-center justify-between mt-4 bg-white dark:bg-gray-900 rounded-b-[24px] -mx-5 -mb-5 p-5">
  //               <div>
  //                 <div className="font-semibold text-gray-900 dark:text-white">{job.salary}</div>
  //                 <div className="text-sm text-gray-500 dark:text-gray-400">{job.location}</div>
  //               </div>
  //               <button
  //                 className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 
  //                          bg-white dark:bg-gray-900"
  //               >
  //                 View Details
  //               </button>
  //             </footer>
  //           </div>
  //         </SwiperSlide>
  //       ))}
  //     </Swiper>
  <Swiper
  modules={[Autoplay, Navigation]}
  spaceBetween={20}
  slidesPerView="auto"
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  loop={true}
  speed={800}
  grabCursor={true}
  className="job-swiper !overflow-visible"
>
  {jobs.map((job, index) => (
    <SwiperSlide
      key={index}
      className="!w-[calc(100%-20px)] sm:!w-[calc(50%-20px)] md:!w-[calc(33.333%-20px)] lg:!w-[calc(25%-20px)]"
    >
      <div
        className="h-full w-full relative bg-white dark:bg-gray-900 rounded-[24px] p-5 border border-gray-200 
        dark:border-gray-800 hover:bg-[#e3dafb] dark:hover:bg-purple-900/20 
        transition-all duration-300 group"
      >
        <header className="flex flex-row items-center justify-between">
          <div className="flex flex-wrap items-center gap-1 sm:gap-2">
            <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{job.postedTime}</span>
            {job.isNew && (
              <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm bg-purple-100 text-purple-700 opacity-0 group-hover:opacity-100 transition-opacity">
                New
              </span>
            )}
            {job.featured && (
              <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm bg-orange-100 text-orange-700 opacity-0 group-hover:opacity-100 transition-opacity ml-1 sm:ml-2">
                Featured
              </span>
            )}
          </div>
          <button
            className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Bookmark job"
          >
            <Bookmark className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-400" />
          </button>
        </header>
        <div className="space-y-4 mt-4">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-full bg-white border border-gray-200 dark:border-gray-700 flex items-center justify-center overflow-hidden">
              <img
                src={job.logo || "/placeholder.svg?height=24&width=24"}
                alt={`${job.company} logo`}
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{job.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{job.company}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {job.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 sm:px-3 text-xs sm:text-sm rounded-full border border-gray-200 dark:border-gray-700
                         bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 
                         group-hover:bg-white/50 dark:group-hover:bg-gray-800/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <footer className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-4 bg-white dark:bg-gray-900 rounded-b-[24px] -mx-5 -mb-5 p-5 border-t border-gray-100 dark:border-gray-800">
          <div>
            <div className="font-semibold text-gray-900 dark:text-white">{job.salary}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{job.location}</div>
          </div>
          <button
            className="w-full sm:w-auto px-3 py-1.5 sm:px-4 sm:py-2 text-sm rounded-full border border-gray-200 dark:border-gray-700 
                     bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            View Details
          </button>
        </footer>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
    )
  }
  
  // const Jobdiv = ({ index }) => (
  //   <div
  //     className={`p-6 w-full border border-gray-300 rounded-lg shadow-sm bg-white ${
  //       index % 2 === 0 ? "bg-purple-50" : ""
  //     }`}
  //   >
  //     <JobdivHeader />
  //     <JobdivBody />
  //     <JobTags />
  //     <JobdivFooter />
  //   </div>
  // );
  
  // const JobdivHeader = () => (
  //   <div className="flex justify-between items-start mb-4">
  //     <span className="text-sm text-gray-500">1 day ago</span>
  //     <button className="text-gray-400 hover:text-gray-600">⭐</button>
  //   </div>
  // );
  
  // const JobdivBody = () => (
  //   <div className="flex items-start gap-3 mb-4">
  //     <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center">
  //       <img
  //         src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgimg-SQEqmRbwyTPSYMKjILQNjsZmQ9UvaW.png"
  //         alt="Amazon"
  //         className="h-6 w-6"
  //       />
  //     </div>
  //     <div>
  //       <h3 className="font-semibold">Sr. UX Designer</h3>
  //       <p className="text-sm text-gray-500">Amazon</p>
  //     </div>
  //   </div>
  // );
  
  // const JobTags = () => (
  //   <div className="flex flex-wrap gap-2 mb-4">
  //     {["Full time", "Remote", "Intermediate", "Project Work"].map((tag) => (
  //       <span
  //         key={tag}
  //         className="px-2 py-1 border rounded-full text-xs font-normal text-gray-600"
  //       >
  //         {tag}
  //       </span>
  //     ))}
  //   </div>
  // );
  
  // const JobdivFooter = () => (
  //   <div className="flex items-center justify-between mt-4">
  //     <div>
  //       <div className="font-semibold">$260/hr</div>
  //       <div className="text-sm text-gray-500">Davis, CA, USA</div>
  //     </div>
  //     <buttonbutton className="rounded-full border border-black px-4 py-1 text-sm hover:bg-gray-200 transition">
  //       View Details
  //     </buttonbutton>
  //   </div>
  // );
  
  const ResumeFeatureSection = () => (
    <div className="flex ms-auto me-auto z-1  flex-col w-[70%] items-center justify-center bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-10 py-10 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
    <div className="text-center w-full max-w-xl p-6  ">
      {/* Header Section */}
      <ResumeFeatureHeader />

      {/* Image Container */}
      <ResumeFeatureimgContainer />

      {/* Resume Builder Section */}
      <ResumeBuilderSection />

      {/* Button */}
      <button className="mt-6 ms-auto me-auto px-8 py-4 bg-black text-white text-sm font-medium rounded-full border border-gray-400 hover:bg-gray-800 transition-colors duration-200 shadow-md flex items-center justify-center gap-2">
        Get Started <span className="ml-1">&gt;</span>
      </button>
    </div>
  </div>
  );
  
  
  const ResumeFeatureHeader = () => (
    <div className="text-center ">
      <p className="text-sm text-gray-500 font-semibold uppercase">New feature</p>
      <h1 className="text-3xl font-bold mt-2">Resume leveled up</h1>
      <p className="text-gray-600 mt-2">Showcase your skills the better way</p>
    </div>
  );
  const ResumeFeatureimgContainer = () => (
    <div className="relative mt-10 mb-10 flex flex-col items-center justify-center gap-4 lg:flex-row lg:items-start ">
   <img
        src={imges}
        alt="SideImage 1"
        className="w-[120px] lg:w-[150px] h-[70px] lg:h-[80px] rounded-2xl shadow-md border border-gray-200 
            mt-4 lg:mt-0 md:absolute md:left-[-135px] md:bottom-[-55px] lg:block"
      />

      {/* Main Preview Image */}
      <img
        src={imges}
        alt="Main Preview"
        className="w-[300px] lg:w-[425px] h-[150px] lg:h-[225px] rounded-2xl shadow-lg border border-gray-200 "
      />
  
      {/* Side Image 1 (positioned at bottom-left on medium and larger screens) */}
   
  
      {/* Side Image 2 (Stacked below Image 1 on small screens, positioned at top-right on medium and larger screens) */}
      <img
        src={imges}
        alt="SideImage "
        className="w-[120px] lg:w-[150px] h-[70px] lg:h-[80px] rounded-2xl shadow-md border border-gray-200 
            mt-4 lg:mt-0 md:absolute md:right-[-135px] md:top-[-55px] lg:block"
      />
    </div>
  );
  const ResumeBuilderSection = () => (
    <div className="text-center mt-10">
      <h2 className="text-2xl font-semibold">Resume Builder</h2>
      <p className="text-gray-600 mt-2">
        Standard format for users to build their resume with industry standard
      </p>
    </div>
  );
  
  const EmailSignupSection = () => (
    <div className="flex flex-col items-center justify-center w-full py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 flex ms-auto me-auto  flex-col p-2 z-2  mb-6  items-center justify-center bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-10 py-10 rounded-lg shadow-md border border-gray-200 dark:border-gray-800">
    <h2 className="text-3xl font-semibold text-gray-900 dark:text-white text-center">Signup for new Job alerts</h2>
    <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm text-center">We will only send you 1 email / day</p>

    <div className="w-full max-w-xl">
      <form  className="relative">
        <input
          type="email"
          placeholder="Enter your email here..."
      
          className="w-full h-[50px] pl-6 pr-36 py-3 rounded-full bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-400 text-base"
          required
        />
        <button
          type="submit"
          className="absolute right-[3px] top-[6px] bottom-[6px] px-5 py-2 bg-purple-500 text-white font-medium rounded-full hover:bg-purple-600 transition flex items-center justify-center"
          style={{ minWidth: "140px" }}
        >
          <span className="whitespace-nowrap">Get Started &gt;</span>
        </button>
      </form>
    </div>
  </div>
  
  

    
  );
  
  export default Home;
  

