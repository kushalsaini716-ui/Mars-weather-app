
import { useState } from 'react';
import city from "./db.json";
import './App.css';

function App() {

  const [allCities, setAllCities] = useState(city)
  const [display, setDisplay] = useState(0)
  const [showForm, setShowForm] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const [newCity, setNewCity] = useState("")
  const [newRegion, setNewRegion] = useState("")
  const [newTemp, setNewTemp] = useState("")
  const [newDust, setNewDust] = useState("")
  const [newAdvisory, setNewAdvisory] = useState("")



  return (
    <>
      <div className="allcontent">

        <div className="select-menu">

          <div className="header-nox" style={{
            color: allCities[display].theme
          }} >
            <span>Mars Cities  </span>
    
          </div>


          <div className="allcity">
            <button
              className="add-city-btn"
              onClick={() => setShowForm(!showForm)}
            >
              <span> Add City</span> <span><svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="white"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg></span>
            </button>

            {allCities.map((s, i) => (

              <span
                key={i}
                className={`city ${display === i ? "active-city" : ""}`}
                onClick={() => {
                  setDisplay(i)
                }}
              >
                {s.name}
              </span>

            ))}




          </div>

        </div>

        <div className="display-menu">

          {/* <h1>{selectedCity}</h1> */}

          <div
            className="city-card"
          >
            <div className="citycontent" style={{
              color: allCities[display].theme
            }}>
              {allCities[display].region}
            </div>

            <div className="citycontent city-name">
              {allCities[display].name}
            </div>


            <div className="dust-temp" style={{
              borderColor: allCities[display].theme,

            }}>


              <div className="citycontent city-temp" style={{
                color: allCities[display].theme
              }} >
                {allCities[display].temp}
              </div>

              <div className="citycontent  city-dust">
                Dust Level: {allCities[display].dustLevel}
              </div>
            </div>

            <div className="citycontent "
            >
              <div className="city-advisory" style={{
                background: allCities[display].theme
              }}>
                <p> Life support adivsory:</p>
                <span>{allCities[display].advisory}</span></div>
            </div>

            {showForm && (
              <div className="add-city" >
                <input type="text" placeholder='City name' onChange={(e) => setNewCity(e.target.value)} />
                <input type="text" placeholder='Region' onChange={(e) => setNewRegion(e.target.value)} />
                <input type="text" placeholder=' Temperature' onChange={(e) => setNewTemp(e.target.value)} />
                <input type="text" placeholder='Dust level' onChange={(e) => setNewDust(e.target.value)} />
                <input type="text" placeholder='Advisory' onChange={(e) => setNewAdvisory(e.target.value)} />

                <button className='submit-btn'
                  onClick={() => {

                    const newCityObject = {
                      id: newCity.toLowerCase(),
                      name: newCity,
                      region: newRegion,
                      temp: newTemp,
                      dustLevel: newDust,
                      advisory: newAdvisory,
                      theme: "#ff6b35"
                    }

                    setAllCities([...allCities, newCityObject])

                  }}
                >
                  Add City
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </>
  )
}

export default App;