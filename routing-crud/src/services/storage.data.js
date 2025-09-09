export const getStorageData = () => {
    return localStorage.getItem('products') || [];
}

export const setStorageData = (data) => {
    localStorage.setItem('products', JSON.stringify(data));
}