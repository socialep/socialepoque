import { html } from '../../lib/htm-preact.js'; // Import html from htm-preact

const WhiteLabel = ({ label, onClick, onLongPress }) => {
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
        backgroundColor: "purple",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", // Mimicking the ripple effect styling
        cursor: "pointer",
      }}
      onClick=${onClick}
                  onMouseEnter=${(e) => {
        e.currentTarget.style.backgroundColor = "white"; // Change to desired hover background color
        e.currentTarget.querySelector("span").style.color = "purple"; // Change to desired hover text color
      }}
      onMouseLeave=${(e) => {
        e.currentTarget.style.backgroundColor = "purple"; // Revert to original background color
        e.currentTarget.querySelector("span").style.color = "white"; // Revert to original text color
      }}
    >
        <span
          style=${{
            color: "white",
            fontSize: "2rem", // Matches wp(8)
            fontWeight: "bold",
          }}
        >
          ${label}
        </span>
    </div>
  `;
};

export default WhiteLabel;
