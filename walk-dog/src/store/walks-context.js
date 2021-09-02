import React from 'react'

const WalksContext = React.createContext({
    walks: [],
    amount: 0,
    addWalk: (item) => {},
    removeWalk: (id) => {}
});

export default WalksContext;