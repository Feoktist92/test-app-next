export type addressType = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
};

export type contactType = {
    id: number;
    name: string;
    email: string;
    address: addressType;
};

export type postType = {
    id: number;
    title: string;
    body: string;
};

export type SocialType = {
    id: number;
    icon: string;
    path: string;
};
