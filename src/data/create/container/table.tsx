import { Field, FieldArray } from "formik";
import React from "react";
function EducationRow(values,err,isSubmitting) {
    const emptyEducation = {
        qualification:'',
        yearofpassing:'',
        institute:'',
        percentage:''
      }
    return ( 
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
    );
}

export default EducationRow;