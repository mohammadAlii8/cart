import React, { useReducer, createContext } from 'react';

const init = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false
}
const reducer = (state, action) => {
    console.log(state);
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
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
        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return {
                ...state,
            }
        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            return {
                ...state,
            }
        case "CHECKOUT":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: true
            }
        case "CLEAR":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: false
            }
        default:
            return state;
    }
}
export const cartContext = createContext()

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, init)
    return (
        <div>
            <cartContext.Provider value={{ state, dispatch }}>
                {children}
            </cartContext.Provider>
        </div>
    );
};

export default CartContextProvider;