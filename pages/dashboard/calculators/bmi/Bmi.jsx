import React, { useState } from 'react'
import style from './Bmi.module.scss'

const Bmi = () => {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
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

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="number"
            id="height"
            placeholder="Hight / cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />

          <input
            type="number"
            id="weight"
            placeholder="Weight / kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="number"
            id="age"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />

          <select
            className={style.custom_select}
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option disabled selected value="">
              Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <button className={style.bmi_button} type="submit">
          Submit Now
        </button>
      </form>
    </div>
  )
}

export default Bmi
