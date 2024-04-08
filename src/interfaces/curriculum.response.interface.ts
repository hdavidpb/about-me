export interface CurriculumResponse {
    _id:        string;
    experience: Education[];
    education:  Education[];
    abilities:  any[];
    languages:  string[];
    skills:     string[];
    __v:        number;
}

export interface Education {
    title:       string;
    subtitle:    string;
    place:       string;
    date:        string;
    description: string;
    _id:         string;
}