import bmiIcon from './assets/bmi.png'
import { useState } from 'react';

function App() {
  const [bmi, setBmi] = useState(0);
  const [cls, setCls] = useState("classification");

  const [userData, setUserData] = useState({
    age: "",
    gender: "",
    weight: "",
    height: "",
  })

  const handleChange = (field, value) => {
    setUserData((prev) => ({
      ...prev,
      [field]: field === "gender" ? value : value === "" ? "" : Number(value) || 0
    }));
  };

  const calculateBMI = () => {
    if (!userData.age || !userData.gender || !userData.weight || !userData.height) {
      alert("Please fill in all fields before calculating.");
      return;
    }
    const result = (userData.weight / ((userData.height / 100) ** 2)).toFixed(1);
    let cls = "";
    if (result < 18.5) { cls = "Underweight"; }
    else if (result < 25 ) {cls = "Normal"; }
    else if (result < 30 ) {cls = "Overweight"; }
    else {cls = "Obese"; }

    setBmi(result);
    setCls(cls);
  }

  const clear = () => {
    setBmi(0);
    setCls("classification");
    setUserData({
      age: "",
      gender: "",
      weight: "",
      height: "",
    })
  }

  const arrowPosition = () => {
    if (!bmi || bmi <= 0) return "99%"; // default bottom
    
    const minBMI = 10;
    const maxBMI = 40;
    const clampedBMI = Math.min(Math.max(bmi, minBMI), maxBMI);
    
    const percent = 99 - ((clampedBMI - minBMI) / (maxBMI - minBMI)) * 99;
    return `${percent}%`;
  };

  return (
    <div className="h-screen w-full flex justify-center items-center gap-1.5">
      <form className="h-1/2 p-6 flex-col bg-secondary rounded-lg"
        onSubmit={(e) => e.preventDefault()}>
          <div className="flex items-center flex-row  mb-4">
            <img src={bmiIcon} alt="Bmi" className="w-8 h-8 mr-2"/>
            <h1 className="text-2xl font-bold underline">BMI Calculator</h1>
          </div>
          <div className="flex items-center justify-between mb-3">
            <label className="w-18">Age</label>
            <input type="number" placeholder="Enter your age" 
            value={userData.age}
            onChange={(e) => handleChange("age", e.target.value)}
            className="flex-1 py-1 px-2 rounded-md bg-secondary-shaded" />
          </div>

          <div className="flex items-center justify-between mb-3">
            <label className="w-18">Gender</label>
              <div className="flex space-x-6">
                <label className="flex items-center space-x-2">
                <input type="radio" name="gender" 
                value="Male"
                checked={userData.gender === "Male"} onChange={(e) => handleChange("gender", e.target.value)}
                className="accent-[var(--primary-color)]" />
                <span>Male</span>
                </label>

                <label className="flex items-center space-x-2">
                <input type="radio" name="gender" 
                value="Female"
                checked={userData.gender === "Female"} onChange={(e) => handleChange("gender", e.target.value)}
                className="accent-[var(--primary-color)]" />
                <span>Female</span>
                </label>
              </div>
          </div>

          <div className="flex items-center justify-between mb-3">
            <label className="w-18">Weight</label>
            <div className='relative flex-1 items-center'>
              <input type="number" placeholder="Enter your weight"
              value={userData.weight} onChange={(e) => handleChange("weight", e.target.value)}
              className="flex-1 py-1 px-2 rounded-md bg-secondary-shaded" />
              <span className='absolute right-2 top-1/2 -translate-y-1/2'>kg</span>
            </div>
          </div>

          <div className="flex items-center justify-between mb-3">
            <label className="w-18">Height</label>
            <div className='relative flex-1 items-center'>
              <input type="number" placeholder="Enter your Height"
              value={userData.height} onChange={(e) => handleChange("height", e.target.value)}
              className="py-1 px-2 rounded-md bg-secondary-shaded" />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 ">cm</span>
            </div>  
          </div>

          <div className="flex items-center justify-between">
            <button onClick={calculateBMI}
            className="w-full mr-2 py-1 rounded-md bg-secondary-shaded hover:bg-green-500">Calculate BMI</button>
            <button onClick={clear}
            className="w-1/3 py-1 rounded-md bg-secondary-shaded hover:bg-orange-500">Clear</button>
          </div>

          <div className='flex justify-between items-center mt-4'>
            <p>Result: </p>
            <p>{bmi} - {cls}</p>
          </div>
      </form>

      <div className='w-8 h-1/2 relative bg-secondary rounded-lg'>
      <div className="absolute -right-5 transition-all duration-700 w-4 h-1.5 bg-secondary"
      style={{top: arrowPosition()}}/>

        <div className='w-full h-full flex flex-col-reverse text-xs font-semibold'>
          <div className='flex items-center justify-center bg-blue-500 rounded-b-lg'
          style={{ height: "28.3%" }}>
            <span className='-rotate-90 inline-block'>Underweight</span>
          </div>
          <div className='flex items-center justify-center bg-green-500'
          style={{ height: "21.7%" }}>
            <span className='-rotate-90 inline-block'>Normal</span>
          </div>
          <div className='flex items-center justify-center bg-yellow-500'
          style={{ height: "16.7%" }}>
            <span className='-rotate-90 inline-block'>Above</span>
          </div>
          <div className='flex items-center justify-center bg-red-500 rounded-t-lg'
          style={{ height: "33.3%" }}>
            <span className='-rotate-90 inline-block'>Obese</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
