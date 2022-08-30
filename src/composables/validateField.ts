interface Obj {
    email: string;
    password: string;
    passwordConfirmation?: string;
    phone?: string;
}

function validateFormLogin(obj: Obj): boolean {
    let validate = true;

    if (!obj.email) validate = false;
    if (!obj.password) validate = false;

    return validate;
}

function validateFormNewRegister(obj: Obj): boolean {
    let validate = true;

    if (!obj.email) validate = false;
    if (!obj.password) validate = false;
    if (!obj.passwordConfirmation) validate = false;
    if (!obj.phone) validate = false;

    return validate;
}

function validatePasswordIsEqual(obj: Obj): boolean {
    let validate = true;

    if (!obj.password) validate = false;
    if (!obj.passwordConfirmation) validate = false;
    if (obj.password != obj.passwordConfirmation) validate = false;

    return validate;
}

export {
    validateFormLogin,
    validateFormNewRegister,
    validatePasswordIsEqual,
}