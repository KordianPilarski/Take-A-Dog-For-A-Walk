import React from 'react'

const WalksContext = React.createContext({
    walks: [],
    addWalk: (item) => {},
    removeWalk: (id, date) => {}
});

export default WalksContext;