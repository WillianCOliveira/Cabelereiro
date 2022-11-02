import React from "react";
import logo from "./logo.svg";
import Form from "./components/form";
import "./App.css";
import { AuthProvider } from "./providers/auth";
import MyRoutes from "./routes";

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <MyRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
