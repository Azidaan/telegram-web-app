import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (tg) {
      tg.expand();
      setUser(tg.initDataUnsafe?.user);
    }
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Здравствуй путник! {user?.first_name || "гость"}!</h1>
      <p>Добро пожаловать в Telegram Web App 🚀</p>
    </div>
  );
}

export default App;
