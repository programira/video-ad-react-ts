export type AppProps = {
    sections: Section[];
    videoLink: string;
};

export type Section = {
    title: string;
    description?: string;
    blocks: Block[];
}

export type Block = {
    title: string;
    description?: string;
}