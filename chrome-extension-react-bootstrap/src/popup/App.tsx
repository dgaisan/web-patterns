import React, { useEffect, useState } from "react";
import "./App.css";
import { IS_LOGGED_IN, TOGGLE_SIDEBAR_ACTION } from "../constants";

// chrome object is a global context that's available during runtime
declare const chrome: any;

const App: React.FC = () => {
  const [isLoggedIn, setIsLogedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    chrome.storage.local.get([IS_LOGGED_IN], (result: any) => {
      setIsLogedIn(result.isLoggedIn || false);
    });
  }, []);

  const togglePanel = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs: any[]) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: TOGGLE_SIDEBAR_ACTION });
    });
  };

  const handleSignOut = () => {
    setIsLogedIn(false);
    chrome.storage.local.set({ [IS_LOGGED_IN]: false });
  };

  const handleSignIn = () => {
    if (username != "" && password != "") {
      setIsLogedIn(true);
      chrome.storage.local.set({ [IS_LOGGED_IN]: true });
    } else {
      console.log("Username and password fields can't be empty");
    }
  };

  return (
    <div className="App">
      <h3>React Chrome Extension Popup</h3>
      {isLoggedIn ? (
        <>
          <button onClick={togglePanel}>Toggle Panel</button>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignIn}>Sign In</button>
        </div>
      )}
    </div>
  );
};

export default App;
