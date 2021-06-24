export const specialties = ['Radiology', 'Neurology', 'Nephrology', 'Cardiology', 'Respirology', 'Intensive care', 'Obstetrics', 'Gynaecology', 'Neurology', 'General surgery', 'Pediatrics', 'Rheumatology', 'Allergy and immunology', 'Family medicine', 'Public health', 'Emergency medicine', 'Geriatrics', 'Psychiatry', 'Oncology', 'Orthopaedics', 'Dermatology', 'Ophthalmology', 'Pathology', 'Urology', 'Otolaryngology', 'Gastroenterology', 'Endocrinology', 'Cardiac surgery', 'Neurosurgery', 'Vascular surgery', 'Hematology', 'Sports medicine', 'Nuclear medicine'];
export type Specialty = keyof typeof specialties;

export type UUID = string;

export enum YearOfStudy {
    MS1,
    MS2,
    MS3,
    MS4,
}

interface DatabaseItem {
    id: UUID;
}

export interface User extends DatabaseItem {
    email: string;
    name: string;
    title: string;
}

export interface Investigator extends User {
    affiliation: string;
    bio?: string;
    profession: Specialty[];
    website?: string;
}

export interface Participant extends User {
    acceptedTo_ids: UUID[];
    appliedTo_ids: UUID[];
    interests: Specialty[];
    likedProjects_ids: UUID[];
    year: YearOfStudy;
}

export interface Project extends DatabaseItem {
    commitment: {
        hoursPerWeek: number;
        weeks: number;
    };
    contact: {
        email: string;
        name: string;
    };
    deadline: Date;
    description: string;
    name: string;
    otherInvestigators_ids: UUID[];
    PI_id: UUID;
    specialties: Specialty[];
    tasks: string[];
}