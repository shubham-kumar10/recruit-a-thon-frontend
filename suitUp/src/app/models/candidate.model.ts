import { User } from './user';

export interface Candidate {
    id: number,
    dateOfBirth: Date,
    gender: string,
    bio: string,
    country: string,
    city: string,
    profilePicture: any,
    resume: any
}