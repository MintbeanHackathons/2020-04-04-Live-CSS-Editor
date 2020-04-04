import React, { Component } from "react";

 function InputsBox(props)  {
  
   
    return (
      <div className="">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.onSubmit()
          }}
        >
          <p>Enter background color</p>
          <input
            type="text"
            name="backGroundColor"
            value={props.backGroundColor}
            onChange={props.onChange}
          />
          <p>Enter header title</p>
          <input
            type="text"
            name="headerTitle"
            value={props.headerTitle}
            onChange={props.onChange}
          />
          <p>Enter header color</p>
          <input
            type="text"
            name="headerColor"
            value={props.headerColor}
            onChange={props.onChange}
          />
          <p>Enter body color</p>
          <input
            type="text"
            name="mainColor"
            value={props.mainColor}
            onChange={props.onChange}
          />
          <p>Enter body text</p>
          <input
            type="text"
            name="mainText"
            value={props.mainText}
            onChange={props.onChange}
          />
          <button type="submit" value='submit'>submit</button>
        </form>
      </div>
    );
  
}

export default InputsBox