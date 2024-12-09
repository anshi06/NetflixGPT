export const checkValidateData = (email, password) => {
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) return "Email ID is not valid";
    if(!isValidPassword) return "Password is not valid";

    return null;
}

export const checkValidateName = (name) => {
    const isNameValid = name != "";
    if(!isNameValid) return "Name is not valid";

    return null;
}