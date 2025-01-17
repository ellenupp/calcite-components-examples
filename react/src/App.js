import React, { useState } from 'react';
import { CalciteButton, CalciteIcon, CalciteSlider } from '@esri/calcite-components-react';
import '@esri/calcite-components/dist/calcite/calcite.css';
import './App.css';

function App() {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div className="App">
      <h1>Hello, React</h1>
      <CalciteButton>Test</CalciteButton>
      <CalciteIcon icon="banana" />
      <CalciteSlider
        min="1"
        max="100"
        value={sliderValue}
        step="1"
        onCalciteSliderUpdate={(e) => setSliderValue(e.target.value)} />
      <p>The slider currently has a value of {sliderValue}</p>
    </div>
  );
}

export default App;
