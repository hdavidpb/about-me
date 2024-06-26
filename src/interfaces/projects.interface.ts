export interface ProjectsResponse {
    _id:         string;
    projectList: ProjectList[];
    __v:         number;
}

export interface ProjectList {
    title:       string;
    subtitle:    string;
    description: string;
    image:       string;
    linkUrl:     string;
    _id:         string;
}
