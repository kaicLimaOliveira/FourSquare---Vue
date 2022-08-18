interface Obj {
    email: string;
    password: string;
    passwordTwo?: string;
    telephone?: string;
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
    if (!obj.passwordTwo) validate = false;
    if (!obj.telephone) validate = false;

    return validate;
}

function validatePasswordIsEqual(obj: Obj): boolean {
    let validate = true;

    if (!obj.password) validate = false;
    if (!obj.passwordTwo) validate = false;
    if (obj.password != obj.passwordTwo) validate = false;

    return validate;
}

export {
    validateFormLogin,
    validateFormNewRegister,
    validatePasswordIsEqual,
}