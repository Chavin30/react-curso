import { TYPES } from "../actions/shoppinActions";

export const shoppingInitialState = {
    products:[
        {id:1,name:'Producto 1', price:100},
        {id:2,name:'Producto 2', price:200},
        {id:3,name:'Producto 3', price:300},
        {id:4,name:'Producto 4', price:400},
        {id:5,name:'Producto 5', price:500},
        {id:6,name:'Producto 6', price:600}
    ],
    cart:[]
}

export function shoppingReducer(state,action){
    switch(action.type){
        case TYPES.ADD_TO_CART:{
            let newItem = state.products.find(product => product.id ===action.payload)
            let itemInCart = state.cart.find(item => item.id ===newItem.id)

            return itemInCart 
                ? {...state,cart:state.cart.map(item=> item.id === newItem.id ? {...item,quantity:item.quantity +1}:item)}
                : {...state,cart:[...state.cart,{...newItem,quantity:1}]} 
        }
        case TYPES.REMOVE_ONE_FROM_CART:{
            let itemInCart = state.cart.find(item => item.id ===action.payload)
             return itemInCart.quantity>1
            ? {...state,cart:state.cart.map(item=> item.id === itemInCart.id ? {...item,quantity:item.quantity -1}:item)}
            : {...state,cart:state.cart.filter(item => item.id !== itemInCart.id)}
        }
        case TYPES.REMOVE_ALL_FROM_CART:{
            let delItem = state.products.find(product => product.id ===action.payload)
            return {...state,cart:state.cart.filter(item => item.id !== delItem.id)}
        }
        case TYPES.CLEAR_CART:{
            return {...state,cart:[]}
        }
        default: return state

    }
}