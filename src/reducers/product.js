const initialState = {
    data: []
}

const Product = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return {
                ...state,
                data: [
                    ...state.data,
                    {
                        name: action.name,
                        id: action.id
                    }
                ]
            };
        case "DELETE_PRODUCT":
            const products = state.data.filter(product => product.id !== action.id);
            return {
                ...state, data: products
            };
        default:
            return {
                ...state
            }
    }
}

export default Product;