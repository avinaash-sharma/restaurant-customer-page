import { Container, useColorModeValue } from "@chakra-ui/react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/commonComponents/Navbar.jsx";
import Welcome from "./components/screens/client/Welcome";
import Menu from "./components/screens/client/Menu";
import Cart from "./components/screens/client/Cart";

function App() {
  return (
    <div className="App">
    <Navbar />
      <Container maxW="container.sm">
        <div bg={useColorModeValue("gray.50", "gray.800")}>
          <Routes>
            <Route path="welcome/:name" element={<Welcome />} />
            <Route path="menu/:name" element={<Menu />} />
            <Route path="cart/:name" element={<Cart />} />

            {/* <Route path="/uub-dashboard" element={<Dashboard />}>
        <Route path="use-case" element={<UseCase />} />
        <Route path="domain" element={<Domain />} />
        <Route path="transcript" element={<Transcript />} />
        <Route path="entities" element={<Entities />} />
        <Route path="intents" element={<Intent />} />
  </Route>*/}
          </Routes>
        </div>
      </Container>
    </div>
  );
}

export default App;
