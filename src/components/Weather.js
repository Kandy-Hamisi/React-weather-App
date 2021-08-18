import React, {useState} from 'react'
import './weather.css';
function Weather() {

    const [form, setForm] = useState({
        city: "",
        country: ""
    })

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name == "city"){
            setForm((...form, ))
        }
    }

    
    return (
        <div className="weather">
            <h1 className="title app-title">Weather</h1>
            
            <section className="form-section">
                <form>
                    <input type="text" name="city" placeholder="city" />
                    <input type="text" name="country" placeholder="country" />
                    <button className="getweather">
                        submit
                    </button>
                </form>
            </section>
        </div>
    )
}

export default Weather
