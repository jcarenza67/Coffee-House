import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/inventory">Inventory</a></li>
          <li><a href="/orders">Orders</a></li>
          <li><a href="/customers">Customers</a></li>
        </ul>
      </nav>
      <h1>My Coffee Shop</h1>
    </header>
  );
}

export default Header;