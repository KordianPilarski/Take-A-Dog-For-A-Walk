import { useState } from "react";
import Header from "./Layout/Header";
import Dogs from "./Dogs/Dogs";
import YourWalks from "./Your walks/YourWalks";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showWalksHandler = (e) => {
    setCartIsShown(true);
  };
  const hideWalksHandler = (e) => {
    setCartIsShown(false);
  };
  return (
    <>
      {cartIsShown && <YourWalks onHideWalks={hideWalksHandler} />}
      <Header onShowWalks={showWalksHandler} />
      <main>
        <Dogs />
      </main>
    </>
  );
}

export default App;
