// Cookie helper
export const encodeCookie = (data: any) => window.btoa(JSON.stringify(data));

export const decodeCookie = (data: any) => JSON.parse(window.atob(data));
