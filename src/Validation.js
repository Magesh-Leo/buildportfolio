import * as yup from 'yup';

export const signupValidation = yup.object().shape({
    username:yup.string().required("Required"),
    email:yup.string().email("Email is invalid").required("Email is Required"),
    password:yup.string().min(6,"must be 6 characters").required("password is Required"),
    password2:yup.string().oneOf([yup.ref('password'),null],"password must match").required("Confirm password is Required"),
})

export const signinValidation = yup.object().shape({
    email:yup.string().email("Email is invalid").required("Email is Required"),
    password:yup.string().min(6,"password must be at least 6 characters").required("password is Required"),
})

export const createPortfolioValidation = yup.object().shape({
    firstname:yup.string().min(4,"Enter your name here").required("Required*"),
    email:yup.string().email("Email is Invalid").required("Email is Required*"),
    linkedin:yup.string().min(6,"name must be atleast 6 characters").required("Required*"),
    github:yup.string().min(6,"name must be atleast 6 characters").required("Required*"),
    nationality:yup.string().required("Required*"),
    city:yup.string().required("Required*"),
    zipcode:yup.number().required('Required*'),
    description:yup.string().min(50,"must be atleast 50 characters").max(350,"350 characters only allowed").required("Required*")

})

export const profileValidation = yup.object().shape({
    firstname:yup.string().min(4,"Enter your name here").required("Required*"),
    email:yup.string().email("Email is Invalid").required("Email is Required*"),
})