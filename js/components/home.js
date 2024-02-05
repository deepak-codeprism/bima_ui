const style = document.createElement('link');
style.rel = 'stylesheet';
style.href = '../../styles/home.css';
document.head.appendChild(style);

const container = 
`
<h2 class='new-container'>Hello Home Container</h2> 
<a href='#/home/nestedRoute'>Home Nested Route</a> 
<div id='nested-container'></div>
<button type="button" class="btn btn-primary">Primary Button</button>
`
export default container;