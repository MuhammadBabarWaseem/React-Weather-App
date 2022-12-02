import React from "react";

export default function Result({
  weatherData,
  historyData,
  historySearchHandler,
}) {
  const historyItems = historyData.map((item, index) => {
    return (
      <li
        onClick={() => historySearchHandler(item)}
        className="text-xl cursor-pointer my-3 mx-5"
        key={index}
      >
       {item}
      </li>
    );
  });

  return (
    <div className="grid grid-cols-4 shadow mt-5 p-3">
      <div className="col-span-1 border-r">
        <span className="text-center block font-bold">Previous Search</span>
        <ul>{historyItems}</ul>
      </div>
      <div className="col-span-3">
        {weatherData.length !== 0 ? (
          <>
            <h2 className="text-4xl text-center">{weatherData.name}</h2>
            <div className="text-2xl flex justify-around my-2">
              <div>
                Max Temp: {weatherData.main.temp_max} <span>&#8451;</span>{" "}
              </div>
              <div>
                Min Temp: {weatherData.main.temp_min} <span>&#8451;</span>{" "}
              </div>
            </div>

            <div className="text-2xl flex justify-around my-2 items-center">
              <div>
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  alt=""
                  />
              </div>
              <div>{weatherData.weather[0].main}</div>
                <div className="text-2xl ">Feels Like : {weatherData.main.feels_like} <span>&#8451;</span> </div>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-4xl text-center">City Name</h2>
            <div className="text-2xl flex justify-around my-2">
              <div>
                Max Temp: deg<span>&#8451;</span>{" "}
              </div>
              <div>
                Min Temp: deg<span>&#8451;</span>{" "}
              </div>
            </div>

            <div className="text-2xl flex justify-around my-2 items-center">
              <div>Weather Icon</div>
              <div>Weather Type</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
