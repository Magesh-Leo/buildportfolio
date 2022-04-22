import React, { isValidElement, useContext, useState } from "react";
import { createPortfolioValidation } from "../../../src/Validation";
import Navbar from "../../core/layout";
import { Formik, Form, useFormik, Field, FieldArray } from "formik";
import { AreaField, TextField } from "../../../src/TextField";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import Link from "next/link";
import Select from "react-select";
import EducationForm from "../../../src/data/create/container/table"
import EducationRow from "../../../src/data/create/container/table";

const Edit = () => {
  const router = useRouter();
  const emptyEducation = {
    qualification:'',
    yearofpassing:'',
    institute:'',
    percentage:''
  }

  interface CreatePortfolioValues {
    firstname: string;
    lastname: string;
    gender: string;
    maritalstatus: string;
    email: string;
    linkedin: string;
    github: string;
    nationality: string;
    state: string;
    city: string;
    zipcode: string;
    education:any;
    description: string;
    profileimg: string;
  }

//   const [maritalstatus, setMaritalstatus] = useState("married");
//   const [gender, setGender] = useState("male");
//   const [state, setState] = useState("Tamilnadu");
  const [uploadfile, setUploadfile] = useState("");

//   const [educationData, setEducationdata] = useState([]);

  const portfolioId = router.query.porfolioId
    ? (router.query.porfolioId as string)
    : '';

//   console.log('Portfoloio Edit id',portfolioId)

  const Portfolio = async (id:string) => {
    const { data: response } = await axios.get(
      `https://625d371895cd5855d61d3b1e.mockapi.io/portfolios/${id}`,
    );
    console.log(`portfolio data for id ${portfolioId}`, response);
    return response;
  };

  const { data: portfolio, isLoading } = useQuery(
    'Portfolio',
    () => Portfolio(portfolioId),
    {
      enabled: router.isReady,
    }
  );

  const initialValues: CreatePortfolioValues = {
    firstname: portfolio?.firstname || '',
    lastname: portfolio?.lastname || '',
    gender: portfolio?.gender || '',
    maritalstatus: portfolio?.maritalstatus || '',
    email: portfolio?.email || '',
    linkedin: portfolio?.linkedin || '',
    github: portfolio?.github || '',
    nationality: portfolio?.nationality || '',
    state: portfolio?.state || '',
    city: portfolio?.city || '',
    zipcode: portfolio?.zipcode || '',
    education:portfolio?.education || [],
    description: portfolio?.description || '',
    profileimg: portfolio?.profileimg || ''
  };

  const updatePortfolio = async(data: CreatePortfolioValues)=>{
    await axios.put(`https://625d371895cd5855d61d3b1e.mockapi.io/portfolios/${portfolioId}`,data)
    .then(res=>{
        console.log("Updating from api",res.data)
    }).catch(err=>console.log(err))
  }
//   console.log("Initial values",initialValues);
  
//   const tableRows = educationData.map((info) => {
//     //   console.log('tablerow',info)
//     return (      
//         <tr className="text-center" key={info.id}>
//             <td className="border px-4 py-2">{info.qualification}</td>
//             <td className="border px-4 py-2">{info.yearofpassing}</td>
//             <td className="border px-4 py-2">{info.institute}</td>
//             <td className="border px-4 py-2">{info.percentage}</td>
//             <td className="flex flex-auto border justify-center items-center py-2">
//                 <button className="border bg-slate-800 text-white rounded-2xl px-5 py-2">
//                 Edit
//                 </button>
//                 <button className="border bg-slate-800 text-white rounded-2xl px-5 py-2 hover:bg-red-600 hover:text-black">
//                 Delete
//                 </button>
//             </td>
//         </tr>

//     );
//   });

  const EditRow = (values,err,isSubmitting)=>{
      return(
        <FieldArray name="education">
        {({push,remove,})=>(
          <React.Fragment>
            {values.education.map((_,index)=>(
              <div className="flex flex-auto justify-around text-lg mt-3" key={index}>
              <Field
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name={`education.${index}.qualification`}
                type="text"
                placeholder="Qualification"
              />
              <Field
                className="appearance-none block w-full ml-2 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name={`education[${index}].yearofpassing`}
                type="text"
                placeholder="Year of Passing"
              />
              <Field
                className="appearance-none block w-full ml-2 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name={`education[${index}].institute`}
                type="text"
                placeholder="Institute"
              />
              <Field
                className="appearance-none block w-full ml-2 bg-gray-200 mr-1 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name={`education[${index}].percentage`}
                type="text"
                placeholder="Percentage"
              />
              <button
                type="submit"
                onClick={()=>{
                  // console.log('index',index)
                  if(index>0){
                    remove(index)
                  }
                }}
                className="border border-1 bg-blue-500 font-semibold text-white rounded-md items-end p-2 text-lg"
              >Remove
              </button>
              <div>
              
              
              </div>
              </div>
            
            ))}
            <div className="flex flex-auto items-center justify-center mt-2">
            <button
                type="submit"
                onClick={()=>push(emptyEducation)}
                className="border border-1 py-2 px-24  bg-blue-500 font-semibold text-white rounded-md text-lg"
              >
                {isSubmitting ? 'Adding' : 'Add'}
                </button>
            </div>
            
          </React.Fragment>
        )}
      </FieldArray>
      )
  }

//   const addRows = (data) => {
//     const totalStudents = educationData.length;
//     data.id = totalStudents + 1;
//     const updatedStudentData = [...educationData];
//     updatedStudentData.push(data);
//     setEducationdata(updatedStudentData);
//   };
//   console.log('Educationdata',educationData);
  
  return (
    <>
      <Navbar />
      {isLoading ? (
    <>
        <h1 className="text-2xl text-center justify-center items-center text-indigo-800">
        Please wait...
        </h1>
    </>
    ) : (
      <div className="w-full justify-center items-center">
        <div className="ml-10 mr-10 mt-5">
          <div className="mb-6 mt-10 font-semibold text-2xl">
            <h4>Personal Info</h4>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={createPortfolioValidation}
            enableReinitialize={true}
            onSubmit={(values) => {
              console.log('Edited Values',values);
              {
                updatePortfolio(values)
              }
            //   return new Promise(res=>setTimeout(res,2500));
            }}
          >
            {({values,errors, isSubmitting}) => (
              <Form className="w-full form">
                <div className="flex flex-auto -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="firstname"
                    >
                      First Name
                    </label>
                    <TextField
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      name="firstname"
                      type="text"
                      placeholder="john"
                    />
                    {/*
                    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    */}
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="lastname"
                    >
                      Last Name
                    </label>
                    <TextField
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      name="lastname"
                      type="text"
                      placeholder="Doe"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="gender"
                    >
                      Gender
                    </label>
                    <Field
                      as='select'
                      name="gender"
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Transgender">Transgender</option>
                    </Field>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    {/*
                    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    */}
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="maritalstatus"
                    >
                      Marital Status
                    </label>
                    <Field
                      as='select'
                      name="maritalstatus"
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    >
                      <option value="married">Married</option>
                      <option value="unmarried">Unmarried</option>
                    </Field>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                  </div>
                </div>
                <div className="flex flex-auto -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <TextField
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      name="email"
                      type="email"
                      placeholder="Example@gmail.com"
                    />
                    {/*
                    <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    */}
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="linkedin"
                    >
                      LinkedIn
                    </label>
                    <TextField
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      name="linkedin"
                      type="text"
                      placeholder="linkedIn"
                    />
                    {/*
                    <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    */}
                  </div>
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="github"
                    >
                      Github
                    </label>
                    <TextField
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      name="github"
                      type="text"
                      placeholder="Github"
                    />
                    {/*
                    <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                    */}
                  </div>
                </div>
                <div className="pt-10 font-semibold text-2xl mb-6">
                  <h4>Address Info</h4>
                </div>
                <div className="flex flex-auto -mx-3 mb-2">
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="nationality"
                    >
                      Nationality
                    </label>
                    <TextField
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      name="nationality"
                      type="text"
                      placeholder="India"
                    />
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="state"
                    >
                      State
                    </label>
                    <div className="relative">
                      <Field
                        as="select"
                        name="state"
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      >
                        <option value="Tamilnadu">Tamil Nadu</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Andrapradhesh">Andra pradesh</option>
                        <option value="karnataka">Karnataka</option>
                      </Field>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="city"
                    >
                      City/Village
                    </label>
                    <TextField
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      name="city"
                      type="text"
                      placeholder="city/village"
                    />
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="zip"
                    >
                      Zip
                    </label>
                    <TextField
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      name="zipcode"
                      type="text"
                      placeholder="90210"
                    />
                  </div>
                </div>
                <div className="flex flex-auto pt-10 justify-start font-semibold text-2xl">
                  <h4 className="pt-10 font-semibold justify text-2xl mb-6">
                    Education Details
                  </h4>
                </div>

                {EditRow(values,errors,isSubmitting)}

                <div className="flex flex-auto pt-10 justify-around font-semibold text-2xl">
                  <h4 className="pt-10 font-semibold justify text-2xl mb-6">
                    Description
                  </h4>
                  <h4 className="pt-10 font-semibold justify text-2xl mb-6">
                    picture upload
                  </h4>
                </div>
                <div className="flex justify-around">
                  <div className="mb-3 xl:w-96">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Example textarea
                    </label>
                    <AreaField
                      className="form-control block w-full px-3 py-1.5 text-base font-normaltext-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                      name="description"
                      rows="3"
                      placeholder="Your message"
                    />
                  </div>
                  <div className="mb-3 w-96">
                    <label
                      htmlFor="formFileMultiple"
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Able to Upload Multiple files
                    </label>
                    <input
                      className="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      type="file"
                      name="profileimg"
                      id="formFile"
                      onChange={(e) => {
                        // console.log(e.target.files);
                        // console.log(e.target.files[0]);
                        setUploadfile(e.target.files[0].name);
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-auto pt-10 justify-center font-semibold text-2xl">
                  <h4 className="pt-10 font-semibold justify text-2xl mb-6">
                    Click here to Download Your Portfolio
                  </h4>
                </div>
                <div className="flex flex-auto pt-10 justify-center font-semibold text-2xl">
                  <button
                    type="submit"
                    // disabled={isLoading}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  >
                    Download PDF
                  </button>
                </div>
                <div className="flex flex-auto pt-10 justify-center font-semibold text-2xl"></div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    )}
    </>
  );
};

export default Edit;