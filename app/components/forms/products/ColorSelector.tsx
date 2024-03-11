import React, { useState } from "react";
import CardInput from "../CardInput";
import { HexColorPicker } from "react-colorful";


function ColorSelector({value}) {

  const [color, setColor] = useState(value ? value : "#ffffff");
  const [display, setDisplay] = useState("color-selector_viewer_close");

  const handleChange = (event) => {
    setColor(event.target.value);
  }

  const handleShow = () => {
      if (display == "color-selector_viewer_close") {
          setDisplay("color-selector_viewer_open");
          document.getElementById("color-selector_data").style.borderBottomColor = "white";
      } else {
          setDisplay("color-selector_viewer_close");
          document.getElementById("color-selector_data").style.borderBottomColor = "black";
      }
  }

  return (
              <div id="color-selector">
                <div id="color-selector_data">
                  <div id="color-selector_data_color" style={{backgroundColor: color}} onClick={handleShow}></div>
                      <CardInput type="color" name="color" value={color} handle={handleChange}/>
                  </div>
                <HexColorPicker className={display} color={color} onChange={setColor}/>
              </div>
          );
}

export default ColorSelector;