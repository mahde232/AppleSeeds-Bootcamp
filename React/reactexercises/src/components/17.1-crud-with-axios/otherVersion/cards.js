import React from "react";
import axios from "axios";

const Card = ({ cardDetails, deleteHandlerCallback }) => {
  const deleteFunction = async () => {
    const deleteUser = await axios.delete(
      "https://6177fd169c328300175f5cdc.mockapi.io/myUsers/" + cardDetails.id
    );
    if (deleteUser.status === 200) deleteHandlerCallback(cardDetails.id);
  };

  return (
    <div className="flip-card " key={cardDetails.id}>
      <div className="flip-card-inner ">
        <div className="flip-card-front ">
          <img
            src={cardDetails.avatar}
            style={{ width: "300px", height: "300px" }}
          ></img>
        </div>
        <div class="flip-card-back">
          <h1>{cardDetails.name}</h1>
          <p>From: {cardDetails.country}</p>
          <p>{cardDetails.age} yr</p>
          <p>
            <input type="button" value="delete user" onClick={deleteFunction} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
