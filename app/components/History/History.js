import { html, Component } from '../../lib/htm-preact.js'; // Import html and Component from Preact
const { useState, useRef } = window.PreactHooks;
// No need to import react-bootstrap via npm, as it is globally available via CDN
// Access the global ReactBootstrap object
const { Modal, Button } = window.ReactBootstrap;

const { FaClock } = window.ReactIcons.fa;

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
    this.historyList = null;
  }

  toggleModal = () => {
    this.setState(prevState => ({
      isModalVisible: !prevState.isModalVisible,
    }));
  };

  render() {
    const { history, onClearHistory } = this.props;
    const { isModalVisible } = this.state;

    return html`
      <div>
        <!-- Modal -->
        <${Modal} show=${isModalVisible} onHide=${this.toggleModal} centered>
          <${Modal.Header} closeButton>
            <${Modal.Title}>
              <${FaClock} class="text-primary me-2" /> Histórico
            </${Modal.Title}>
          </${Modal.Header}>
          <${Modal.Body}>
            <div ref=${el => (this.historyList = el)} style="max-height: 300px; overflow-y: auto;">
              ${history.map(
                (item, index) => html`
                  <div key=${index} class="d-flex justify-content-between mb-2">
                    <span class="text-secondary">${item.formula.join('')}</span>
                    <span class="text-success">=${item.result}</span>
                  </div>
                `
              )}
            </div>
          </${Modal.Body}>
          <${Modal.Footer}>
            <${Button} variant="danger" onClick=${onClearHistory}>
              Limpar
            </${Button}>
            <${Button} variant="secondary" onClick=${this.toggleModal}>
              Voltar
            </${Button}>
          </${Modal.Footer}>
        </${Modal}>

        <!-- Open Modal Button -->
        <button
          class="btn btn-warning d-flex align-items-center"
          onClick=${this.toggleModal}
          style="width: 50px; height: 40px; border-radius: 5px;"
        >
          <${FaClock} class="m-auto text-white" />
        </button>
      </div>
    `;
  }
}

export default History;
