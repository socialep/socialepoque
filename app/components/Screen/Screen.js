import { html } from '../../lib/htm-preact.js'; // Import html from htm-preact

// Define Screen as a functional component
const Screen = ({ input, formula }) => {
  return html`
  <style>
  .screen-container {
    width: 100%;
    height: 50px; /* Adjusted height for the container */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .screen {
    height: 90px; /* Adjust height of the screen */
    background-color: white;
    width: 90%;
    border-radius: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 20px;
  }
  
  .label {
    color: #888;
    font-size: 40px; /* Adjusted font size */
    margin-top: 20px;
    margin-bottom: -10px;
  }
  
  .labelformula {
    color: #3da4ab;
    font-size: 16px; /* Adjusted font size */
    margin-right: 20px;
  }
  </style>
    <div class="screen-container">
      <div class="screen">
        <p class="label">${input}</p>
        <p class="labelformula">${formula.join('')}</p>
      </div>
    </div>
  `;
};

export default Screen;
