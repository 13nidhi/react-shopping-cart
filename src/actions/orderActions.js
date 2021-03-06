import { CLEAR_CART, CLEAR_ORDER, CREATE_ORDER, FETCH_ORDERS } from '../types';

export const createOrder = (order) => async (dispatch) => {
    const res = await fetch("/api/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(order)
    });
    const data = await res.json();
    dispatch({ type: CREATE_ORDER, payload: data });
    localStorage.clear("cartItems");
    dispatch({ type: CLEAR_CART }); 

};

export const clearOrder = () => (dispatch) => {
    dispatch({type: CLEAR_ORDER});
};

export const fetchOrders = () => async (dispatch) => {
    const res = await fetch("/api/orders");
    const data = await res.json();
    dispatch({ type: FETCH_ORDERS, payload: data });
};
