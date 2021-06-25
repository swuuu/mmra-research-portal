export const specialties = ['Radiology', 'Neurology', 'Nephrology', 'Cardiology', 'Respirology', 'Intensive care', 'Obstetrics', 'Gynaecology', 'Neurology', 'General surgery', 'Pediatrics', 'Rheumatology', 'Allergy and immunology', 'Family medicine', 'Public health', 'Emergency medicine', 'Geriatrics', 'Psychiatry', 'Oncology', 'Orthopaedics', 'Dermatology', 'Ophthalmology', 'Pathology', 'Urology', 'Otolaryngology', 'Gastroenterology', 'Endocrinology', 'Cardiac surgery', 'Neurosurgery', 'Vascular surgery', 'Hematology', 'Sports medicine', 'Nuclear medicine'] as const;
export type Specialty = typeof specialties[number];

export type UUID = string;

export enum YearOfStudy {
    MS1,
    MS2,
    MS3,
    MS4,
}

export interface DatabaseItem {
    created: string;
    id: UUID;
}

export interface User extends DatabaseItem {
    email: string;
    name: string;
}

export interface Investigator extends User {
    affiliation: string;
    bio?: string;
    specialties: Specialty[];
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
    deadline: string;
    description: string;
    otherInvestigators_ids: UUID[];
    PI_id: UUID;
    specialties: Specialty[];
    tasks: string[];
    title: string;
}