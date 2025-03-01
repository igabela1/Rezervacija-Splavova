import React from "react";
import SplavoviLista from "./SplavoviLista";
import RezervacijaForma from "./RezervacijaForma";
import RezervacijeLista from "./RezervacijeLista";

function App() {
  return (
    <div>
      <h1>Rezervacija splavova</h1>
      <SplavoviLista />
      <RezervacijaForma />
      <RezervacijeLista />
    </div>
  );
}

export default App;