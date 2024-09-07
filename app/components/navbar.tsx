import React from 'react';


const Navbar: React.FC = () => {
  // TODO Blog?
  return (
    <nav className="navbar">
      <a id="leftmost" href="/">Home</a> |
      <a href="/#code">Code</a> |
      <a href="/art">Art</a> |
      <a href="/threed">3D</a> |
      <a href="https://github.com/jalberse">GitHub</a> |
      <a href="/addenda">Addenda</a>
    </nav>
  );
};

export default Navbar;