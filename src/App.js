import "./App.css";
import Profile from "./profile/Profile";
import img from "./nid.png";
function App() {
  const handleName = (fullName) => alert(fullName);
  return (
    <div
      className="App"
      style={{
        backgroundColor: "aquamarine",
      }}
    >
      <Profile
        fullName="Mhamdi Nidhal"
        bio="Développeur web avec des compétences 
        solides en résolution de problèmes et une 
        expérience reconnue dans la création et la
         conception de logiciel dans un environnement 
         d'essai."
        profession="FullStack Deelopper"
        handleName={handleName}
      >
        <img src={img} alt="" />
      </Profile>
    </div>
  );
}

export default App;
