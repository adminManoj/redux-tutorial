const ADD_PRODUCT = 'ADD_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const addProduct = (name) => ({
    type:ADD_PRODUCT,
    name:name,
    id: Math.random()
});

export const deleteProduct = (id) => ({
    type:DELETE_PRODUCT,
    id:id
});