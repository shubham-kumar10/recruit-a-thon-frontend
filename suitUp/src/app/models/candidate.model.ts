export interface Candidate {
    id: number;
    dateOfBirth: Date;
    gender: string;
    bio: string;
    country: string;
    city: string;
    profilePicture: any;
    resume: any;
}

export interface Education {
    id: number;
    institution: string;
    startDate: Date;
    endDate: string;
    degree: string;
    description: string;
    percentage: string;
}

export interface Education {
    id: number;
    institution: string;
    startDate: Date;
    endDate: string;
    degree: string;
    description: string;
    percentage: string;
}

export interface Experience {
    id: number;
    organization: string;
    startDate: Date;
    endDate: Date;
    designation: string;
    type: string;
    location: string;
    current: boolean;
}

export interface Project {
    id: number;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    ongoing: boolean;
}

export interface Skill{
    id: number;
    name: string;
    rating: number;
}
