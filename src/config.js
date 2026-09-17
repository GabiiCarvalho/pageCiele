export const BASE_URL = import.meta.env.BASE_URL;

export const asset = (path) => `${BASE_URL}${path.replace(/^\//, "")}`;
