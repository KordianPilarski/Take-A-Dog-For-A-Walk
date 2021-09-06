import React from 'react'

const WalksContext = React.createContext({
    walks: [],
    addWalk: (item) => {},
    removeWalk: (id) => {}
});

export default WalksContext;