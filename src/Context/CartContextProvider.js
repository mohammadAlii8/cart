import React, { useReducer } from 'react';

const init = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false
}
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quntity: 1
                })
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems]
            }
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                selectedItems: [...newSelectedItems],
            }
    }
}

const CartContextProvider = () => {
    const [state, dispatch] = useReducer(reducer, init)
    return (
        <div>

        </div>
    );
};

export default CartContextProvider;