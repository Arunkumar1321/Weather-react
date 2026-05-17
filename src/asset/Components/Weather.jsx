import axios from "axios";
import { useState } from "react";
import Lottie from "lottie-react";
import Search from "../images/Search.png"
import Humidityicon from "../images/Humidity icon.png"
import Windicon from "../images/wind icon.png"
import RainIcon from "../animation/Raining.json"
import ClearIcon from "../animation/Clear.json"
import SnowIcon from "../animation/Snow.json"
import ThunderIcon from "../animation/Thunder.json"
import FogIcon from "../animation/Fog.json"
import Drizzleicon from "../animation/Drizzle.json"
import CloudIcon from "../animation/Clouds.json"
import defaulticon from "../animation/default.json"
import brokenicon from "../animation/Broken clouds.json"



const Weather = () => {
    const [city, setcity] = useState("-")
    const [temp, settemp] = useState(0)
    const [icon, seticon] = useState(defaulticon)
    const [country, setcountry] = useState("-")
    const [lat, setlat] = useState(0)
    const [log, setlog] = useState(0)
    const [wind, setwind] = useState(0)
    const [humidity, sethumidity] = useState(0)
    const [text, settext] = useState("")
    const [citynotfound, setcitynotfound] = useState(false)
    const [loading, setLoading] = useState(false)
  
    const weathericonmap = {
        "01d": ClearIcon,
        "01n": ClearIcon,
        "02d": defaulticon,
        "02n": defaulticon,
        "03d": brokenicon,
        "03n": brokenicon,
        "04d": CloudIcon,
        "04n": CloudIcon,
        "09d": Drizzleicon,
        "09n": Drizzleicon,
        "10d": RainIcon,
        "10n": RainIcon,
        "11d": ThunderIcon,
        "11n": ThunderIcon,
        "30d": SnowIcon,
        "30n": SnowIcon,
        "50d": FogIcon,
        "50n": FogIcon,
    }
    const handleCity = (eve) => {
        settext(eve.target.value)
    }
    const addCity = () => {
     

        setLoading(true)

        const weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=15b34215fec74e27a6f732311903d43a&units=Metric`)
        weatherdata.then(function (msg) {
            console.log(msg.data)
            const weathercode = msg.data.weather[0].icon
            settemp(Math.floor(msg.data.main.temp))
            sethumidity(msg.data.main.humidity)
            setwind(msg.data.wind.speed)
            setlat(msg.data.coord.lat)
            setlog(msg.data.coord.lon)
            setcity(msg.data.name)
            setcountry(msg.data.sys.country)
            seticon(weathericonmap[weathercode] || icon)
            setcitynotfound(false)
                })
        .catch(function () {
            console.log("couldnt fetch the value")
            console.error("City Not found")
            setcitynotfound(true)
            alert("Check the spell once again 😕")
        })
        .finally(function () {
            setLoading(false)
            settext("")
        })
    }

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            addCity()
        }
    }
  
   
    return (
        <div className="bg-[#fff] w-96 p-5 rounded-2xl shadow-2xl">
            <div className="flex items-center w-full border-2 border-[#70e6f3] rounded-md overflow-hidden">
                <input onKeyDown={handleEnter} value={text} onChange={handleCity} placeholder="Search city" className="flex-grow outline-none p-3 h-10 text-lg" disabled={loading}></input>
                <img src={Search} onClick={() => { if (!loading) addCity() }} alt="Search" className="h-12 p-3 cursor-pointer"></img>
            </div>

            {loading && <p className="text-center text-lg text-[#333] my-2">Loading...</p>}

            {citynotfound===false || text.length >0? "":<p className=" text-3xl p-2 text-center text-[#888]">City Not Found !!!</p>}
            <div className="flex justify-center m-2">
                <Lottie animationData={icon} loop={true} style={{ width: "150px", height: "150px" }}></Lottie>
            </div>
            <div className="m-2 font-bold text-3xl uppercase text-[#333] justify-center items-center px-4 flex">

                {temp}°C

            </div>
            <div className="m-2 uppercase text-4xl text-[#ffbc00] text-center">{city}</div>
            <div className="m-2 uppercase text-lg text-[#888] text-center font-bold">{country}</div>
            <div className="flex justify-center items-center m-2 gap-10">
                <div className="flex flex-col text-center p-3">
                    <span className="text-lg text-[#666]">Latitude</span>
                    <span className="text-xl m-2 font-bold">{lat}</span>
                </div>
                <div className="flex flex-col text-center p-2">
                    <span className="text-lg text-[#666]">Longitude</span>
                    <span className="text-xl m-2 font-bold">{log}</span>
                </div>
            </div>
            <div className="flex justify-between items-center my-5">
                <div className="text-center">
                    <img src={Humidityicon} alt="Humidity" className="object-cover w-12 mx-2"></img>
                    <div>
                        <div className="text-xl m-2 font-bold">{humidity}%</div>
                        <div className="text-[#888]">Humidity</div>
                    </div>
                </div>
                <div className="text-center">
                    <img src={Windicon} alt="Wind Speed" className="object-cover w-12 mx-5"></img>
                    <div>
                        <div className="text-xl m-2 font-bold ">{wind} km/h</div>
                        <div className="text-[#888]">Wind Speed</div>
                    </div>
                </div>

            </div>


        </div>)

}

export default Weather