import { useState } from "react";
import TakeOrders from "./components/Orders";
import Imagery from "./pages/Imagery";
import InProgress from "./pages/InProgress";
import NowServing from "./pages/NowServing";

function App() {


  return (
    <div className="border-2 border-black m-0">
      <div className="grid grid-cols-3">
        <InProgress />
        <NowServing />
        <Imagery />
      </div>
      <div>
        <TakeOrders />
      </div>
    </div>
  );
}

export default App;
