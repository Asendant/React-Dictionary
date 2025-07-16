// React
import { useState } from "react";

// Components
import { ToggleSlider } from "react-toggle-slider";

// Images
import logo from "../../Assets/images/logo.svg";
import arrowDown from "../../Assets/images/icon-arrow-down.svg";

// Interface
interface Props {
  fontFamily: string;
  updateFontFamily: (font: string) => void;
}

const NavigationBar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFontSelection = (font: string) => {
    props.updateFontFamily(font);
    setIsOpen(false);
  };

  return (
    <div>
      {/* Left Side of Navigation Bar */}
      <img src={logo} alt="logo" />
      <div>
        {" "}
        {/* Right Side of Navigation Bar */}
        {/* Dropdown Menu */}
        <div>
          <h2>{props.fontFamily}</h2>
          <img src={arrowDown} alt="dropdown" />
        </div>
        {/* Toggle Button */}
        <div>
          <ToggleSlider
            barBackgroundColor="#757575"
            barBackgroundColorActive="#A445ED"
            handleBackgroundColor="#ffffff"
            handleBackgroundColorActive="#ffffff"
          />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
