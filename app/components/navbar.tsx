import React from 'react';


const Navbar: React.FC = () => {
  // TODO Not here, but use: https://nextjs.org/docs/app/building-your-application/routing/redirecting#redirects-in-nextconfigjs
  //       and ensure that links from squarespace still work and go to reasonable places.
  //       e.g. code should just go to the homepage, /illustration to the /art page, etc.
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