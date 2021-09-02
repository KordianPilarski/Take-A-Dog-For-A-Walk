import { useState } from "react";
import Header from "./components/Layout/Header";
import Dogs from "./components/Dogs/Dogs";
import YourWalks from "./components/Your walks/YourWalks";
import WalksProvider from "./store/WalksProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showWalksHandler = (e) => {
    setCartIsShown(true);
  };
  const hideWalksHandler = (e) => {
    setCartIsShown(false);
  };
  return (
    <WalksProvider>
      {cartIsShown && <YourWalks onHideWalks={hideWalksHandler} />}
      <Header onShowWalks={showWalksHandler} />
      <main>
        <Dogs />
      </main>
    </WalksProvider>
  );
}

export default App;
