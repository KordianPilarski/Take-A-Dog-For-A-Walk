import WalksContext from "./walks-context";

const WalksProvider = (props) => {
  const addWalk = (props) => {};

  const removeWalk = (props) => {};

  const walksContext = {
    walks: [],
    amount: 0,
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
