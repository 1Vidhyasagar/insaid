import React, { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "contact",
    },
  ];

  return (
    <div className="Nav">
      <h1 className="name">Artiste!</h1>

      {links.map(({ id, link }) => (
        <div key={id} className="click">
          <Link to={link} smooth duration={500}>
            {link}
          </Link>
        </div>
      ))}

      <div onClick={() => setNav(!nav)} className="click"></div>

      {nav && (
        <div className="click">
          {links.map(({ id, link }) => (
            <div key={id} className="click">
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
