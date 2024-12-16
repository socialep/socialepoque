
const BackgroundDiv = ({ imageUrl, children, additionalStyles = '' }) => html`
    <div
        style="
            background-image: url('${imageUrl}');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            width: 100%;
            height: 100vh; /* Full screen height */
            ${additionalStyles} /* Add more styles if passed as props */
        "
    >
        ${children}
    </div>
`;