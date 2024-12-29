import { html, Component } from '../../lib/htm-preact.js'; // Import html and Component from Preact


class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAlertVisible: false,
    };
    this.historyList = null;
  }

  toggleAlert = () => {
    this.setState((prevState) => ({
      isAlertVisible: !prevState.isAlertVisible,
    }));
  };

  render() {
    const { history, onClearHistory } = this.props;
    const { isAlertVisible } = this.state;

    return html`
      <div>
        ${isAlertVisible &&
        html`
        <style>
        /* Make overlay cover entire viewport */
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* Ensure it's above all other content */
  }

  .historicbutton {
       display: "flex",
        justify-content: "center", // Horizontal alignment
        align-items: "center", // Vertical alignment
        margin-top: "-0.5rem",
        border-radius: "10%",
        width: "8rem",
        height: "5rem",
        background-color: "purple",
        box-shadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", // Mimicking the ripple effect styling
        cursor: "pointer",
  }
  
  /* Alert box styling */
  .custom-alert {
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 90%;
    max-width: 400px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  /* Alert header styling */
  .alert-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
  }
  
  /* Close button styling */
  .close-btn {
    background: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .btn-warning:hover {
    background-color: white; /* Desired hover background color */
  }

  /* Alert body styling */
  .alert-body {
    margin: 20px 0;
  }
  
  /* Alert footer styling */
  .alert-footer {
    display: flex;
    justify-content: space-between;
  }
        </style>
          <!-- Overlay -->
          <div class="overlay">
            <!-- Custom Alert -->
            <div class="custom-alert">
              <div class="alert-header">
                <span
                  style=${{
                    color: "purple",
                    fontSize: "1.5rem", // Adjust size as needed
                    fontWeight: "bold",
                  }}
                >
                  Histórico 🕑
                </span>
                <button class="close-btn" style="width: 80px; height: 40px; margin-top: 25px; border-radius: 5px; background-color: purple; color: white; font-weight: bold;" onClick=${this.toggleAlert}>×</button>
              </div>
              <div class="alert-body">
                <div
                  ref=${(el) => (this.historyList = el)}
                  style="max-height: 300px; overflow-y: auto;"
                >
                  ${history.map(
                    (item, index) => html`
                      <div key=${index} class="d-flex justify-content-between mb-2">
                        <span class="text-secondary" style="color: purple; font-weight: bold;">${item.formula.join('')}</span>
                        <span class="text-success" style="color: purple; font-weight: bold;">=${item.result}</span>
                      </div>
                    `
                  )}
                </div>
              </div>
              <div class="alert-footer">
                <button class="btn btn-danger" style="width: 80px; height: 40px; margin-top: 25px; border-radius: 5px; background-color: purple;" onClick=${onClearHistory}>          <span
            style=${{
              color: "white",
              fontSize: "1.5rem", // Adjust size as needed
              fontWeight: "bold",
            }}
          >
            Limpar
          </span></button>
              </div>
            </div>
          </div>
        `}
        
        <!-- Open Alert Button -->
        <button
          onClick=${this.toggleAlert}  
                  onMouseEnter=${(e) => {
        e.currentTarget.style.backgroundColor = "white"; // Change to desired hover background color
        e.currentTarget.querySelector("span").style.color = "purple"; // Change to desired hover text color
      }}
      onMouseLeave=${(e) => {
        e.currentTarget.style.backgroundColor = "purple"; // Revert to original background color
        e.currentTarget.querySelector("span").style.color = "white"; // Revert to original text color
      }} 
          style="width: 5rem; height: 5rem; margin-top: 1.5rem; colorborder-radius: 5px; background-color: purple; cursor: "pointer";"
        >
          <span
            style=${{
              color: "white",
              fontSize: "1.5rem", // Adjust size as needed
              fontWeight: "bold",
            }}
          >
            🕑
          </span>
        </button>
      </div>
    `;
  }
}

export default History;
