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
      onContextMenu=${(e) => {
        e.preventDefault(); // Prevent default context menu
        if (onLongPress) onLongPress(); // Trigger long press if provided
      }}
    >
      <div
        style=${{
          backgroundColor: "purple",
          borderRadius: "1rem", // Matches wp(5)
          width: "5rem", // Matches wp(17)
          height: "5rem", // Matches wp(17)
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
    </div>
  `;
};

export default WhiteLabel;
