import Tervehdys from "./Tervehdys";
import OpiskelijaTiedot from "./OpiskelijaTiedot";

function App() {
  const opiskelija = {
    nimi: "Matti Meikäläinen",
    ika: 16,
    kurssi: "Reactin perusteet",
  };

  return (
    <div>
      <Tervehdys nimi="Renato" />
      <OpiskelijaTiedot opiskelija={opiskelija} />
    </div>
  );
}

export default App;
