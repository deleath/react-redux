import React from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash);

  const inputCashValue = () => Number(prompt("Введите сумму пополнения: "));

  const addCash = () => {
    const value = 5;
    dispatch({ action: "ADD_CASH", payload: value });
  };

  const getCash = () => {
    const value = inputCashValue();
    dispatch({ action: "GET_CASH", payload: value });
  };

  return (
    <div className="container">
      <h1 className="text-center">Cash: {cash}</h1>
      <div className="row text-center mt-5">
        <div className="col-12">
          <button onClick={addCash} className="btn btn-primary mx-5">
            Пополнить
          </button>
          <button onClick={getCash} className="btn btn-primary mx-5">
            Снять
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
