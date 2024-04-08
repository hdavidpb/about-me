export interface AboutMeResponse {
    _id:          string;
    name:         string;
    profetion:    string;
    description:  string;
    profileImage: string;
    links:        LinkData[];
    footerLinks:  LinkData[];
    __v:          number;
}

export interface LinkData {
    url:     string;
    urlType: string;
    _id:     string;
}