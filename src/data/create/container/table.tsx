import React, { useState } from 'react';
import { TextField } from '../../../TextField';

function EducationForm(props) {
const [qualification, setQualification] = useState('');
const [yearofpassing, setYearofpassing] = useState('');
const [institute, setInstitute] = useState('');
const [percentage, setPercentage] = useState('');

const changeQualification = (event) => {
	setQualification(event.target.value);
};

const changeYearofpassing = (event) => {
	setYearofpassing(event.target.value);
};

const changeInstitute = (event) => {
	setInstitute(event.target.value);
};

const changePercentage = (event) => {
	setPercentage(event.target.value);
};

const transferValue = (event) => {
	event.preventDefault();
	const val = {
	qualification,
	yearofpassing,
  institute,
  percentage
	};
  console.log('transfervalue',val)
	props.func(val);
	clearState();
};

const clearState = () => {
	setQualification('');
	setYearofpassing('');
  setInstitute('');
	setPercentage('');
};

return (
    <div className="flex flex-auto justify-around text-lg">
          <TextField
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="addqualification"
            type="text"
            value={qualification}
            placeholder="Qualification"
            onChange={changeQualification}
          />
          <TextField
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="addyearofpassing"
            value={yearofpassing}
            type="text"
            placeholder="Year Of Passing"
            onChange={changeYearofpassing}
          />
          <TextField
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="addinstitute"
            value={institute}
            type="text"
            placeholder="Institute/University name"
            onChange={changeInstitute}
          />
          <TextField
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="addpercentage"
            value={percentage}
            type="text"
            placeholder="Percentage"
            onChange={changePercentage}
          />
          <button
            type="submit"
            onClick={transferValue}
            className="border border-1 bg-blue-500 font-semibold text-white rounded-md items-end p-2 text-lg mb-4"
          >
            Add Row
          </button>
        </div>
);
}

export default EducationForm;
