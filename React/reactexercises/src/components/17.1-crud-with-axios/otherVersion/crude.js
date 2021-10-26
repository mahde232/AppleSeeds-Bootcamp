import React from "react";
import axios from "axios";
import Card from "./cards";
import InputButtons from "./iputBtns";
import "./myStyle.css";

const Crud = () => {
  const [state, setState] = React.useState([]);
  const [name, setNames] = React.useState("");
  const [age, setAge] = React.useState("");
  const [country, setCountry] = React.useState("");

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get("https://6177fd169c328300175f5cdc.mockapi.io/myUsers")
      .then((res) => {
        let data = res.data;
        setState(data);
        console.log(data);
      });
  };

  const inputHandler = (e) => {
    if (e.target.getAttribute("data-whatToAdd") === "name")
      setNames(e.target.value);
    if (e.target.getAttribute("data-whatToAdd") === "age")
      setAge(e.target.value);
    if (e.target.getAttribute("data-whatToAdd") === "country")
      setCountry(e.target.value);
  };
  const clickHandler = async () => {
    if (
      name.trim().length !== 0 &&
      age.trim().length !== 0 &&
      country.trim().length !== 0
    ) {
      let data = {
        name: name,
        age: age,
        country: country,
      };
      const res = await axios.post(
        "https://6177fd169c328300175f5cdc.mockapi.io/myUsers",
        data
      );
      console.log("status=", res.status);
      if (res.status === 201) {
        let newData = res.data;
        const nameList = [...state];
        nameList.push(newData);
        setState(nameList);
        setNames("");
        setAge("");
        setCountry("");
      }
    }
  };

  const deleteHandler = (id) => {
    const newList = [...state];
    let nonDeleted = newList.filter((ele) => {
      return ele.id !== id;
    });
    setState(nonDeleted);
  };

  return (
    <div id="box">
      <h2>control users</h2>

      <InputButtons
        inputHandlerCallback={inputHandler}
        clickHandlerCallback={clickHandler}
      />
      <div className=" grid-container">
        {state.map((ele) => {
          return (
            <Card cardDetails={ele} deleteHandlerCallback={deleteHandler} />
          );
        })}
      </div>
    </div>
  );
};

export default Crud;
