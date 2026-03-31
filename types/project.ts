
export interface ProjectType {
    slug?: string;
    title?: string;
    category?: string;
    client?: string;
    owner?: string;
    starting_date?: string;
    ending_date?: string;
    created_at?: string;
    website?: string;
    content?: string;
    image?: string;
    before_image?: string;
    after_image?: string;
}

export interface ProjectDataType {
    data: ProjectType;
}

