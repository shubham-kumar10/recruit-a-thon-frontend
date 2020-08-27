export interface Job {
    jobId: number,
    companyName: string,
    postedOn: Date,
    description: string,
    location: string,
    pointOfContact: string,
    compensation: number,
    travelRequired: boolean,
    travelPercent: number,
    vacancies: number,
    process: Process
}

export interface Process {
    processId: number,
    description: string,
    location: string,
    duration: string,
    rounds: Rounds[]
}

export interface Rounds {
    roundId: number,
    location: string,
    duration: string,
    pointOfContact: string,
    description: string
}
