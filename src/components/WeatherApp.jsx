import React, { useState } from "react";

function WeatherApp({ setBackground }) {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const cityImages = {
    lahore:
      "https://images.unsplash.com/photo-1684439061252-cb6632acb8ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TGFob3JlfGVufDB8fDB8fHww",
    london:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80",
    paris:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80",
  };

  const checkWeather = async () => {
    if (!city.trim()) return;
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://p2pclouds.up.railway.app/v1/learn/weather?city=${city.trim()}`,
      );
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();

      setWeatherData(data);

      const cityNameLower = city.trim().toLowerCase();
      if (cityImages[cityNameLower]) {
        setBackground(cityImages[cityNameLower]);
      }
    } catch (err) {
      setError(err.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") checkWeather();
  };

  return (
    <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-8 shadow-2xl transition-all duration-500">
      <div className="flex flex-col gap-4 mb-8">
        <input
          type="text"
          placeholder="Search (e.g. Lahore, London, Paris)"
          className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          onClick={checkWeather}
          disabled={loading}
          className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl"
        >
          {loading ? "FETCHING..." : "GET WEATHER"}
        </button>
      </div>

      <div className="min-h-40 flex items-center justify-center">
        {error && (
          <p className="text-red-300 font-medium bg-red-500/10 px-4 py-2 rounded-lg border border-red-500/20">
            {error}
          </p>
        )}

        {weatherData && (
          <div className="text-center animate-in fade-in zoom-in duration-700">
            <h3 className="text-4xl font-bold text-white mb-2 drop-shadow-md">
              {city.toUpperCase()}
            </h3>
            <p className="text-8xl font-black text-white tracking-tighter mb-4">
              {Math.round(weatherData.current?.temp_c)}°
            </p>
            <span className="px-6 py-2 bg-black/30 rounded-full text-white text-sm font-semibold tracking-widest uppercase border border-white/10">
              {weatherData.current?.condition?.text}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherApp;
