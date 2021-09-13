import WalksContext from "./walks-context";
import { useReducer } from "react";

const defaultWalksState = {
  walks: [],
};

const walkReducer = (state, action) => {
  if (action.type === "ADD_WALK") {
    // console.log(updatedWalks)
    const existingWalkIndex = state.walks.findIndex(
      (walk) => walk.id === action.walk.id
    );
    if (
      state.walks[existingWalkIndex] &&
      state.walks[existingWalkIndex].date[0] === action.walk.date[0] &&
      state.walks[existingWalkIndex].date[1] === action.walk.date[1]
    ) {
      return {
        walks: state.walks,
      };
    } else {
      const updatedWalks = state.walks.concat(action.walk);

      return {
        walks: updatedWalks,
      };
    }

    // const existingWalk = state.walks[existingWalkIndex];

    // if (existingWalk) {
    //   console.log('existingwalk')
    //   return;
    // }
  }

  if (action.type === "REMOVE_WALK") {
    // console.log("usun walk");
    // const existingWalkIndex = state.walks.findIndex(
    //   (walk) => walk.id === action.id
    // );
    // const existingWalk = state.walks[existingWalkIndex];
    // console.log(action.id)

    const updatedWalks = state.walks.filter((walk) => {
      return walk.date !== action.date || walk.id !== action.id;
    });

    return { walks: updatedWalks };
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

  const removeWalk = (id, date) => {
    dispatchWalks({ type: "REMOVE_WALK", id: id, date: date });
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
