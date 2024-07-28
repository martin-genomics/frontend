import validator from "validator";





export const isPasswordValid = (password: string) =>  validator.isStrongPassword(password, {
    minLength: 8,
    minUppercase: 1,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    returnScore: false,
});
