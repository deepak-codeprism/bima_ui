const style = document.createElement('link');
style.rel = 'stylesheet';
style.href = '../../styles/header.css';
document.head.appendChild(style);


const header = 
`
<div class="bg-primary w-100">
<nav class="navbar bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
</div>

`
;

export default header;