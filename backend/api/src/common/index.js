export const folderCloudinary = (folder) => {
    switch (folder) {
        case 'search':
            return IMAGE_SEARCH;
        case 'movie':
            return IMAGE_MOVIE;
        case 'category':
            return IMAGE_CATEGORY;
        case 'training':
            return IMAGE_TRAINING;
        default:
            return '';
    }
};

export class ErrorApp extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}

export const createSlug = (text) =>
    text
        .toString()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-');

export function generateRandomString(length) {
    let result = '';
    const characters = 'abcdef0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}
