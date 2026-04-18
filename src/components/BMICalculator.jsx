import { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  function calculateBMI(e) {
    e.preventDefault();

    if (weight <= 0 || height <= 0) {
      alert("Please enter valid values greater than 0");
      return;
    }

    const finalBMI = weight / (height * height);
    setBmi(finalBMI);
  }

  return (
    <div>
      <h2>BMI Calculator</h2>
      <div>
        <form onSubmit={calculateBMI}>
          <input
            type="number"
            step="any"
            required
            name="weight"
            id="weight"
            placeholder="Enter Your Weight (in Kgs)"
            onChange={(e) => {
              setWeight(Number(e.target.value));
            }}
          />

          <br />

          <input
            type="number"
            step="any"
            required
            name="height"
            id="height"
            placeholder="Enter Your Weight (in meters)"
            onChange={(e) => {
              setHeight(Number(e.target.value));
            }}
          />

          <br />

          <button type="submit">Calculate BMI</button>
        </form>
      </div>

      <br />

      <div>
        <h3>Your BMI is {bmi}</h3>
      </div>
    </div>
  );
};
export default BMICalculator;
