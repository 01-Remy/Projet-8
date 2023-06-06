import React from "react";

function Form({ inputList, classname, id }) {
  return (
    <form className={classname} id={id}>
      {inputList.map((input, index) => (
        <label key={index}>
          {input.content}
          {input.type === "textarea" ? (
            <textarea name={input.name} placeholder={input.content}></textarea>
          ) : (
            <input type={input.type} name={input.name} placeholder={input.content}></input>
          )}
        </label>
      ))}
    </form>
  );
}

export default Form;
