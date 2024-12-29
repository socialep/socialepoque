import { html } from '../../lib/htm-preact.js'; // Import htm-preact

const RedButton = (props) => {
  return html`
    <div
      class="d-flex justify-content-center align-items-center"
      style=${{
        display: "flex",
        justifyContent: "center", // Horizontal alignment
        alignItems: "center", // Vertical alignment
        marginTop: "1rem",
        borderRadius: "10%",
        width: "5rem",
        height: "5rem",
        backgroundColor: "red",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", // Mimicking the ripple effect styling
        cursor: "pointer",
      }}
      onClick=${props.onClick}
                  onMouseEnter=${(e) => {
        e.currentTarget.style.backgroundColor = "white"; // Change to desired hover background color
        e.currentTarget.querySelector("span").style.color = "red"; // Change to desired hover text color
      }}
      onMouseLeave=${(e) => {
        e.currentTarget.style.backgroundColor = "red"; // Revert to original background color
        e.currentTarget.querySelector("span").style.color = "white"; // Revert to original text color
      }}
    >
      <span
        style=${{
          color: "white",
          fontSize: "1.5rem", // Adjust size as needed
          fontWeight: "bold",
        }}
      >
        ${props.label}
      </span>
    </div>
  `;
};

export default RedButton;
