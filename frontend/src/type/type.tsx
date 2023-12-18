export type TaskProps = {
    id: string;
    title: string;
    description: string;
    deadline: string;
    price: number;
}

export type ProjectProps = {
    id: string;
    name: string;
    role: string;
    tags: string;
    Name: UserProps[];
}

export type UserProps = {
    id: string;
    name: string;
    iconSrc: string;
    role: string;
    tags: string;
}

