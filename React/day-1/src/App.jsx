import Aryan, { Ab } from "./Aryan";

function App() {
  let a = 11;
  console.log(a);

  return (
    <div>
      {console.log("pop")}
      <h1>bye - {a}</h1>
      <p>knsd - {a}</p>
      <Aryan />
      <Ab />
    </div>
  );
}

export default App;
