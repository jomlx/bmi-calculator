import bmi from './assets/bmi.png'
function App() {

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form className="h-1/2 m-2 p-6 flex-col bg-secondary rounded-lg"
      onSubmit={(e) => e.preventDefault()}>
        <div className="flex items-center flex-row  mb-4">
          <img src={bmi} alt="Bmi" className="w-8 h-8 mr-2"/>
          <h1 className="text-2xl font-bold underline">BMI Calculator</h1>
        </div>
        <div className="flex items-center justify-between mb-3">
          <label className="w-18">Age</label>
          <input type="text" placeholder="Enter your age"
          className="flex-1 py-1 px-2 border rounded-md bg-secondary-shaded" />
        </div>

        <div className="flex items-center justify-between mb-3">
          <label className="w-18">Gender</label>
            <div className="flex space-x-6">
              <label className="flex items-center space-x-2">
              <input type="radio" name="gender" className="accent-[var(--primary-color)]" />
              <span>Male</span>
              </label>

              <label className="flex items-center space-x-2">
              <input type="radio" name="gender" className="accent-[var(--primary-color)]" />
              <span>Female</span>
              </label>
            </div>
        </div>

        <div className="flex items-center justify-between mb-3">
          <label className="w-18">Weight</label>
          <input type="text" placeholder="Enter your weight"
          className="flex-1 py-1 px-2 border rounded-md bg-secondary-shaded" />
        </div>

        <div className="flex items-center justify-between mb-3">
          <label className="w-18">Height</label>
          <input type="text" placeholder="Enter your Height"
          className="flex-1 py-1 px-2 border rounded-md bg-secondary-shaded" />
        </div>

        <div className="flex items-center justify-between">
          <button className="w-full mr-2 py-1 px-2 border rounded-md bg-secondary-shaded">Calculate BMI</button>
          <button className="w-1/3 py-1 px-2 border rounded-md bg-secondary-shaded">Clear</button>
        </div>
      </form>

      <div className='w-8 h-1/2 relative bg-secondary rounded-lg'>
        <div className='w-full h-full flex flex-col text-xs font-semibold'>
          <div className='flex-1 flex items-center justify-center bg-blue-500'>
            <span className='-rotate-90 inline-block'>Underweight</span>
          </div>
          <div className='flex-1 flex items-center justify-center bg-green-500'>
            <span className='-rotate-90 inline-block'>Normal</span>
          </div>
          <div className='flex-1 flex items-center justify-center bg-yellow-500'>
            <span className='-rotate-90 inline-block'>Overweight</span>
          </div>
          <div className='flex-1 flex items-center justify-center bg-red-500'>
            <span className='-rotate-90 inline-block'>Obese</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
