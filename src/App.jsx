import { Container, useColorModeValue } from "@chakra-ui/react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/screens/client/Welcome";

function App() {
  return (
    <div className="App">
      <Container maxW="container.sm">
        <div bg={useColorModeValue("gray.50", "gray.800")}>
          <Routes>
            <Route path="/:name" element={<Welcome />} />
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
