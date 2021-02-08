export const REGISTRATION_ERROR = 'REGISTRATION_ERROR';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRING_DATA = 'REGISTRING_DATA';
interface RegistrationSuccessAction {
    type: typeof REGISTRATION_SUCCESS;
}

interface RegistrationErrorAction {
    type: typeof REGISTRATION_ERROR;
    payload: string;
}
interface RegistringAction {
    type: typeof REGISTRING_DATA;
    payload: boolean;
}

export type RegistrationAction = RegistrationSuccessAction | RegistrationErrorAction | RegistringAction;
