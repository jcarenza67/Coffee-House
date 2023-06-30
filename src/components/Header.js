import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/inventory">Inventory</a></li>
          <p>(will refresh page if clicked)</p>
        </ul>
      </nav>
      <h1>Joe's Coffee Shop</h1>
    </header>
  );
}

export default Header;
