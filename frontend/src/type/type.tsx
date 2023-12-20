export type TaskProps = {
    id: number;
    name: string;
    projectId: number;
    contractorId: string;
    consumerId: null;
    description: string;
    price: number;
    customerConfirmed: null;
    contractorConfirmed: null;
    startTimePoint: null;
    time: null;
    status: number;
}

export type ProjectProps = {
    id: string;
    name: string;
    role: string;
    tags: string;
    Name: UserProps[];
}

export type Board = {
    id: number;
    title: string;
    items:  TaskProps[];
}

export type UserProps = {
    id: string;
    name: string;
    iconSrc: string;
    role: string;
    tags: string;
}

