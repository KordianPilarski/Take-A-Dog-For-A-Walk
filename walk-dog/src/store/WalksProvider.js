import WalksContext from "./walks-context";
import { useReducer } from "react";

const defaultWalksState = {
  walks: [],
};

const walkReducer = (state, action) => {
  if(action.type === "ADD_WALK"){
    // console.log('add walk')
    const updatedWalks = state.walks.concat(action.walk)
    // console.log(updatedWalks)
    return {
      walks: updatedWalks
    }
  }
  
  return defaultWalksState;
};

const WalksProvider = (props) => {
  const [walksState, dispatchWalks] = useReducer(
    walkReducer,
    defaultWalksState
  );
  const addWalk = (walk) => {
    dispatchWalks({ type: "ADD_WALK", walk: walk });
  };

  const removeWalk = (id) => {
    dispatchWalks({ type: "REMOVE_WALK", id: id });
  };

  const walksContext = {
    walks: walksState.walks,
    addWalk: addWalk,
    removeWalk: removeWalk,
  };

  return (
    <WalksContext.Provider value={walksContext}>
      {props.children}
    </WalksContext.Provider>
  );
};

export default WalksProvider;
