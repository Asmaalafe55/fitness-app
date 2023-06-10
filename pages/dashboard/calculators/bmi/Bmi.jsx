import React, { useState } from 'react'
import style from './Bmi.module.scss'

const Bmi = () => {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('male')
  const [bmi, setBMI] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const calculatedBMI = weight / (height / 100) ** 2
    setBMI(calculatedBMI.toFixed(2))
  }
  return (
    <div className={style.bmi_container}>
      <div className="title">BMI Calculator</div>
      <p>
        Overrideds on hanging fruits to identify ball park value added activity
        to beta overrided the digitals divided with additionals clickthroughs
        from line.
      </p>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="weight">Weigh/kg</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />

          <label htmlFor="height">Height/cm</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />

          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />

          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <button type="submit">Calculate BMI</button>
        </form>
      </div>
    </div>
  )
}

export default Bmi
