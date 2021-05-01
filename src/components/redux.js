import { createContext, useReducer, useContext, useEffect } from "react";

const initialData = {
  winX:window.innerWidth, 
  winY:window.innerHeight,
  rawResults:{}
};

const reducer = (state, action) => {
  switch (action.do) {
  case "resize":
    return {...state, winX:window.innerWidth, winY:window.innerHeight};
  case "saveResults":
    return {...state, rawResults:action.data};
  default:
    throw new Error(`Invalid action type: ${action.do}`);
  }
}

const StoreContext = createContext();

const StoreProvider = function(props){
  const [state, dispatch] = useReducer( reducer, initialData );

  useEffect(() => {
    // add listeners for window resize
    function handleResize() { dispatch({do:"resize"}) };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  })
  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {props.children}
    </StoreContext.Provider>
  )
}

const useStoreContext = function(){ return useContext(StoreContext) };

export { StoreProvider, useStoreContext }