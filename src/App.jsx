import { useState } from "react";
import WeatherApp from "./components/WeatherApp";
import './index.css';

function App() {
  // Default background image
  const [background, setBackground] = useState("https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1200&q=80");

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out relative"
      style={{ backgroundImage: `url('${background}')` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="relative z-10 flex flex-col items-center w-full">
        <h1 className="text-4xl font-bold text-white mb-8 drop-shadow-2xl tracking-tight">
          Weather App
        </h1>
        <WeatherApp setBackground={setBackground} />
      </div>
    </div>
  );
}

export default App;