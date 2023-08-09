import { createContext, useReducer } from "react";
const DummyItem = [
    {
      id: "e1",
      url: "https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg?w=1060&t=st=1691574082~exp=1691574682~hmac=8b9f004245c99ff90502cca0b571428bf697c22e58c6c5c8b34ae6c8c5080bdf",
      title: "coffee",
      likes: 5,
      address: "noida",
    },
    {
      id: "e2",
      url: "https://img.freepik.com/premium-photo/tea-cup-tea-plantation-generative-ai_74760-811.jpg?w=740",
      title: "Tea",
      likes: 6,
      address: "delhi",
    },
    {
      id: "e3",
      url: "https://img.freepik.com/free-photo/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon_2829-5398.jpg?w=740&t=st=1691574465~exp=1691575065~hmac=7a6ce53b29f8cbb0310248747cc81de8257e40fdae749be4b5ee515ddb21d953",
      title: "Burger",
      likes: 7,
      address: "mumbai",
    },
    {
      id: "e4",
      url: "https://img.freepik.com/free-photo/freshly-italian-pizza-with-mozzarella-cheese-slice-generative-ai_188544-12347.jpg?w=1060&t=st=1691574515~exp=1691575115~hmac=d1cd6afa2486c55eaa7e5f9a67cef1dcd99c805a79275700998bfc80baca2228",
      title: "Pizza",
      likes: 8,
      address: "kolkata",
    },
    {
      id: "e5",
      url: "https://img.freepik.com/free-photo/khinkali-served-with-greens-sauce_141793-773.jpg?w=740&t=st=1691574557~exp=1691575157~hmac=0caaf2834d9e56e4d715c9538f3d26eee6ce7127b62489c255cee2a7c2bc7eca",
      title: "Momo",
      likes: 5,
      address: "delhi",
    },
    {
      id: "e6",
      url: "https://img.freepik.com/free-photo/side-view-cocktail-shots-with-slice-lemon-kiwi-slice-candles-bar_176474-3056.jpg?w=740&t=st=1691574607~exp=1691575207~hmac=58d5655166e9221bdc39b73150bca7a7e2e44b1168de18d7e50eb05de46e87c1",
      title: "drinks",
      likes: 8,
      address: "goa",
    },
    {
      id: "e7",
      url: "https://img.freepik.com/free-photo/side-view-cocktail-shots-with-slice-lemon-kiwi-slice-candles-bar_176474-3056.jpg?w=740&t=st=1691574607~exp=1691575207~hmac=58d5655166e9221bdc39b73150bca7a7e2e44b1168de18d7e50eb05de46e87c1",
      title: "drinks",
      likes: 8,
      address: "goa",
    },
    {
      id: "e8",
      url: "https://img.freepik.com/free-photo/side-view-cocktail-shots-with-slice-lemon-kiwi-slice-candles-bar_176474-3056.jpg?w=740&t=st=1691574607~exp=1691575207~hmac=58d5655166e9221bdc39b73150bca7a7e2e44b1168de18d7e50eb05de46e87c1",
      title: "drinks",
      likes: 8,
      address: "goa",
    },
  ];

 export const ItemContext=createContext({
    items:[],
    addItem:({url,title,likes,address})=>{},
    deleteItem:(id)=>{},
    updateItem:(id,{url,title,likes,address})=>{}
 })
const itemReducer=(state,action)=>{
    switch(action.type){
        case 'ADD':
            const id=new Date().toString()+Math.random().toString()
            return [{...action.payload,id:id},...state]
        case 'DELETE':
            return state.filter((item)=>item.id!==action.payload)
        case 'UPDATE':
            const updatableItemIndex = state.findIndex(
                (item) => item.id === action.payload.id
              );
              const updatableItem = state[updatableItemIndex];
              const updatedItem = { ...updatableItem, ...action.payload.data };
              const updatedItems = [...state];
              updatedItems[updatableItemIndex] = updatedItem;
              return updatedItems;
        default:
            return state
    }
}

const ItemContextProvider=({children})=>{
    const [itemState,dispatch]=useReducer(itemReducer,DummyItem)
    const addItem=(itemData)=>{
        dispatch({type:'ADD',payload:itemData})
    }
    const deleteItem=(id)=>{
        dispatch({type:'DELETE',payload:id})
    }
    const updateItem=(id,itemData)=>{
        dispatch({type:'UPDATE',payload:{id:id,data:itemData}})
    }
    const value={
        items:itemState,
        addItem:addItem,
        deleteItem:deleteItem,
        updateItem:updateItem
    }

    return(
        <ItemContext.Provider value={value}>{children}</ItemContext.Provider>
    )
}
export default ItemContextProvider;