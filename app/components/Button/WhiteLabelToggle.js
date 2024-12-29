import { html } from '../../lib/htm-preact.js'; // Import html from htm-preact

const WhiteLabelToggle = ({ label, onClick, onLongPress }) => {

  const handleClick = (e) => {
    const currentBackgroundColor = e.currentTarget.style.backgroundColor;
    
    const backgroundColor = currentBackgroundColor === 'purple' ? 'white' : 'purple'; // Toggle background color based on current color
    const textColor = backgroundColor === 'purple' ? 'white' : 'purple'; // Set text color accordingly

    // Update styles
    e.currentTarget.style.backgroundColor = backgroundColor;
    e.currentTarget.querySelector("span").style.color = textColor;

    if (onClick) onClick(); // Call onClick callback if exists
  };

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
        backgroundColor: "purple", // Initial background color
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", // Mimicking the ripple effect styling
        cursor: "pointer",
      }}
      onClick=${handleClick}
    >
      <span
        style=${{
          color: "white", // Initial text color
          fontSize: "2rem", // Matches wp(8)
          fontWeight: "bold",
        }}
      >
        ${label}
      </span>
    </div>
  `;
};

export default WhiteLabelToggle;
