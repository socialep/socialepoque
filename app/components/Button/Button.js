import { html } from '../../lib/htm-preact.js'; // Import html from htm-preact

const Button = ({ label, onClick }) => {
  return html`
    <div
      class="d-flex justify-content-center align-items-center"
      style=${{
        display: "flex",
        justifyContent: "center", // Horizontal alignment
        alignItems: "center", // Vertical alignment
        marginTop: "1rem",
        borderRadius: "50%",
        width: "5rem",
        height: "5rem",
        backgroundColor: "white",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", // Mimicking the ripple effect styling
        cursor: "pointer",
      }}
      onClick=${onClick}
            onMouseEnter=${(e) => {
        e.currentTarget.style.backgroundColor = "grey"; // Change to desired hover background color
        e.currentTarget.querySelector("span").style.color = "white"; // Change to desired hover text color
      }}
      onMouseLeave=${(e) => {
        e.currentTarget.style.backgroundColor = "white"; // Revert to original background color
        e.currentTarget.querySelector("span").style.color = "gray"; // Revert to original text color
      }}
    >
      <span
        style=${{
          color: "gray",
          fontSize: "1.5rem", // Adjust size as needed
          fontWeight: "bold",
        }}
      >
        ${label}
      </span>
    </div>
  `;
};

export default Button;
