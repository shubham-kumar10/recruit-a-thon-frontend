export interface User {
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    contactNumber: string;
}

export interface LoggedInUser {
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    token: string;
}
