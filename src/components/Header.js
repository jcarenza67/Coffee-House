import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/inventory">Inventory</a></li>
        </ul>
      </nav>
      <h1>My Coffee Shop</h1>
    </header>
  );
}

export default Header;
