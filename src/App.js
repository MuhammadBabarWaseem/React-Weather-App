import Search from './Component/Search';
import Result from './Component/Result';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([])
  const [history, setHistory] = useState([])

  const changeSearch = (value) => {
    setSearch(value);
  }

  const searchWeatherHandler = () => {
    if (search !== "") {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=5df6caedbd75b237f47fd95a897cca40&units=metric`)
        .then(
          (response) => {
            if (history.indexOf(search) === -1) {
              setHistory(
                [
                  ...history,
                  search
                ]
              )
            }
            console.log(response.data);
            setWeather(response.data)
          }
        ).catch(
          (error) => {
            console.log(error);
          }
        )
    }
  }

  const historySearchHandler = (data) => {
    setSearch(data)
    searchWeatherHandler()
  }

  return (
    <div className="max-w-[1240px] mx-auto mt-2 p-3">
      <Search searchData={search} eventHandler={changeSearch} searchWeather={searchWeatherHandler} />
      <Result weatherData={weather} historyData={history} historySearchHandler={historySearchHandler} />
    </div>
  );
}

export default App;
