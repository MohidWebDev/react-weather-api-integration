import { useState } from "react";

const AreaCalculator = () => {
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [area, setArea] = useState(0);

  function calculateArea(e) {
    e.preventDefault();

    const finalArea = length * width;
    setArea(finalArea);
  }

  return (
    <div>
      <h2>Area of Rectangle</h2>
      <div>
        <form onSubmit={calculateArea}>
          <input
            type="number"
            name="length"
            id="length"
            placeholder="Enter Length"
            onChange={(e) => {
              setLength(Number(e.target.value));
            }}
          />

          <br />

          <input
            type="number"
            name="width"
            id="width"
            placeholder="Enter Width"
            onChange={(e) => {
              setWidth(Number(e.target.value));
            }}
          />

          <br />
          <button type="submit">Calculate Area</button>
        </form>
      </div>

      <br />

      <div>
        <h3>Area is {area}</h3>
      </div>
    </div>
  );
};

export default AreaCalculator;
