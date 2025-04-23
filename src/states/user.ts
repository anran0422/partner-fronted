import {UserType} from "../models/user";

let currentUser: UserType;

const setCurrentUserState = (User:UserType) => {
    currentUser = User;
}

const getCurrentUserState = (): UserType => {
    return currentUser;
}

export {
    setCurrentUserState,
    getCurrentUserState,
}