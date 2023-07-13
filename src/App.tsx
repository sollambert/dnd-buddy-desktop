import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";

import FourOFour from "./Views/404/404";
import Nav from "./Components/Nav/Nav";
import Home from "./Views/Home/Home"
import GPTHome from "./Views/GPT/GPTHome"
import Characters from "./Views/Characters/Characters"
import Resources from "./Views/Resources/Resources"
import Campaigns from "./Views/Campaigns/Campaigns"
import CampaignDetails from "./Views/Campaigns/CampaignDetails"
import Encounters from "./Views/Encounters/Encounters"
import CharacterDetails from "./Views/Characters/CharacterDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          {/* Redirect to home if at base url */}
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>

          {/* Home Route */}
          <Route path="/home" exact>
            <Nav />
            <Home />
          </Route>

          {/* GPT Route */}
          <Route path="/gpt" exact>
            <Nav />
            <GPTHome />
          </Route>

          {/* Campaign Routes */}
          <Route path="/campaigns" exact>
            <Nav />
            <Campaigns />
          </Route>
          <Route path="/campaigns/:id" exact>
            <Nav />
            <CampaignDetails />
          </Route>

          {/* Encounter Routes */}
          <Route path="/encounters" exact>
            <Nav />
            <Encounters />
          </Route>

          {/* Character Routes */}
          <Route path="/characters" exact>
            <Nav />
            <Characters />
          </Route>
          <Route path="/characters/:id" exact>
            <Nav />
            <CharacterDetails />
          </Route>

          {/* Resources Routes for DnD API */}
          <Route path="/resources" exact>
            <Nav />
            <Resources />
          </Route>
          <Route path="/resources/:endpoint" exact>
            <Nav />
            <Resources />
          </Route>
          <Route path="/resources/:endpoint/:index" exact>
            <Nav />
            <Resources />
          </Route>
          <Route path="/resources/:endpoint/:index/:subindex" exact>
            <Nav />
            <Resources />
          </Route>

          {/* 404 Route */}
          <Route>
            <Nav />
            <FourOFour />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
// function App() {
//   const [greetMsg, setGreetMsg] = useState("");
//   const [name, setName] = useState("");

//   async function greet() {
//     // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
//     setGreetMsg(await invoke("greet", { name }));
//   }

//   return (
//     <div className="container">
//       <h1>Welcome to Tauri!</h1>

//       <div className="row">
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo vite" alt="Vite logo" />
//         </a>
//         <a href="https://tauri.app" target="_blank">
//           <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>

//       <p>Click on the Tauri, Vite, and React logos to learn more.</p>

//       <form
//         className="row"
//         onSubmit={(e) => {
//           e.preventDefault();
//           greet();
//         }}
//       >
//         <input
//           id="greet-input"
//           onChange={(e) => setName(e.currentTarget.value)}
//           placeholder="Enter a name..."
//         />
//         <button type="submit">Greet</button>
//       </form>

//       <p>{greetMsg}</p>
//     </div>
//   );
// }

export default App;
