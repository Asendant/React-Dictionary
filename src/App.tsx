// React
import { useState } from "react";

// Components
import NavigationBar from "./Components/NavigationBar/NavigationBar";

function App() {
  const [currentFont, setCurrentFont] = useState("Sans Serif");

  const HandleFontSwitch = (font: string) => {
    setCurrentFont(font);
  };

  return (
    <div>
      <NavigationBar
        fontFamily={currentFont}
        updateFontFamily={HandleFontSwitch}
      />
    </div>
  );
}

export default App;
