import header from "./header.js";

const style = document.createElement('link');
style.rel = 'stylesheet';
style.href = '../../styles/home.css';
document.head.appendChild(style);


const container = 
`
${header}
`
export default container;