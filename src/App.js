import "./App.css";
import { useState } from "react";

function App() {
  const [word, setword] = useState("");

  const ones = [
    " zero ",
    " one ",
    " two ",
    " three ",
    " four ",
    " five ",
    " six ",
    " seven ",
    " eight ",
    " nine ",
    " ten ",
    " eleven ",
    " twelve ",
    " thirteen ",
    " fourteen ",
    " fifteen ",
    " sixteen ",
    " seventeen ",
    " eightteen ",
    " nineteen ",
  ];

  const tens = [
    "twenty",
    "thirty",
    "fourty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  const moreThanTens = [" hundred ", "thousand ", " lakh ", " crore"];

  // Function on input value change
  const changeHandler = (e) => {
    let value = e.target.value;
    let count = 0;
    let space = "";

    for (let i = value.length - 1; i > -1; i--) {
      // If value is of length 3
      if (count === 3) {
        space += ",";
      }
      if (count % 2 === 1 && count > 3) {
        space += ",";
      }
      count++;
      space += value[i];
    }
    space = space.split(",");
    let result = "";

    for (let i = 0; i < space.length; i++) {
      let temp = space[i].split("");
      temp = temp.reverse();
      temp = temp.toString().replace(",", "");
      if (i === 0) {
        temp = temp.split(",").toString().replace(",", "");

        if (Number(temp) < 99) {
          result += getResultUpto100(temp);
        } else {
          result +=
            ones[Number(temp[0])] +
            moreThanTens[0] +
            getResultUpto100(temp[1] + temp[2]);
        }
      } else {
        if (Number(temp) !== 0) {
          result = getResultUpto100(temp) + moreThanTens[i] + result;
        }
      }
    }
    setword(result);
  };

  // Get result upto 99
  const getResultUpto100 = (temp1) => {
    let temp = temp1;
    if (temp[0] === "0") {
      temp = temp1.substring(1);
    }
    if (Number(temp) === 0) {
      return "";
    } else {
      if (Number(temp) < 20) return ones[Number(temp)];
      else if (temp[1] === "0") return tens[Number(temp[0]) - 2];
      else return tens[Number(temp[0]) - 2] + ones[Number(temp[1])];
    }
  };

  return (
    <div className="App">
    <h1>Number to Word</h1>
      <h5>Please Enter Number</h5>
      <p>
        <input onChange={changeHandler} type="number"></input>{" "}
      </p>
      <p>{word}</p>
    </div>
  );
}

export default App;
