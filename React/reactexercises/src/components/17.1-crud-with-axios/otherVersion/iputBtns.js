import React from "react";

export default function InputButtons({
  inputHandlerCallback,
  clickHandlerCallback,
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Write name"
        data-whatToAdd={"name"}
        onChange={(e) => inputHandlerCallback(e)}
      />
      <input
        type="text"
        placeholder="Enter age"
        data-whatToAdd={"age"}
        onChange={(e) => inputHandlerCallback(e)}
      />
      <input
        type="text"
        placeholder="Write country"
        data-whatToAdd={"country"}
        onChange={(e) => inputHandlerCallback(e)}
      />
      <input
        type="button"
        value="add person"
        onClick={() => clickHandlerCallback()}
      />
    </div>
  );
}
