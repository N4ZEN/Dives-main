import * as yup from 'yup';
    

export const PwdResetSchema = yup.object().shape({
    password: yup.string()
    .min(8, "Password must be atleast 8 characters")
    .max(16, "Password must be 16 characters or less")
    .required("Password is required"),
    confirmPassword: yup.string()
    .equals([yup.ref('password'), null], "Passwords do not match")
    .required("Confirm Password is required")
})


export const passwordRecoverySchema = yup.object().shape({
    email: yup.string().email("Email is invalid").trim()
    .required("Email is required")
})