import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import FirebaseLogin from "../screens/FirebaseLogin";
import Dashboard from "../screens/Dashboard";

export default function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<HomeScreen />} />
        <Route path="/Login" element={<LoginScreen />} />
        <Route path="/SignUp" element={<SignupScreen />} />
        <Route path="/FirebaseLogin" element={<FirebaseLogin />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
