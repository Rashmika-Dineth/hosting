import "./App.css";
import Navigation from "./apps/Navigation/Navigation";
import {UserContext} from "./apps/components/Context";
import NavBar from "./apps/components/NavBar";
import {useState, useEffect} from "react";
import "./apps/Services/Firebase";

function App() {
  const [user, setUser] = useState("Guest");

  useEffect(() => {
    let userValue = localStorage.getItem("userName");
    if (userValue) {
      setUser(userValue);
    } else {
      console.log("User value does not exits");
    }
    console.log("This is use Effect hook ", userValue);
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser}}>
        <NavBar />
        <Navigation />
      </UserContext.Provider>
    </div>
  );
}

export default App;
