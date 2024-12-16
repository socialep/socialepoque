import { html } from '../../lib/htm-preact.js'; // Import html from htm-preact

const SButton = ({ label, onClick }) => {
  return html`
    <div
      class="d-flex justify-content-center align-items-center"
      style=${{
        display: "flex",
        justifyContent: "center", // Horizontal alignment
        alignItems: "center", // Vertical alignment
        marginTop: "0.5rem",
        borderRadius: "50%",
        width: "5rem", // Matches widthPercentageToDP (14.3%)
        height: "5rem", // Matches widthPercentageToDP (14.3%)
        backgroundColor: "#b36200",
        cursor: "pointer",
      }}
      onClick=${onClick}
    >
      <span
        style=${{
          color: "white",
          fontSize: "1.25rem", // Matches widthPercentageToDP (5%)
          fontWeight: "bold",
        }}
      >
        ${label}
      </span>
    </div>
  `;
};

export default SButton;
