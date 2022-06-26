import React from "react";
import { Link } from "react-router-dom";

type Props = {
  icon?: string;
  title?: string;
};

const Header: React.FC<Props> = ({
  title = "Movie App",
  icon = "fas fa-film",
}) => {
  return (
    <nav className="border-b-[#718096] border-b-2 container mx-auto">
      <div className="max-w-7xl flex flex-col md:flex-row justify-between items-center	">
        <h1 className="font-montserrat text-3xl font-medium tracking-wider">
          <Link to="/">
            <i className={icon} /> {title}
          </Link>
        </h1>
        <ul className="flex ">
          <li className="text-md md:text-lg p-4 font-montserrat ">
            <Link to="/">Movies</Link>
          </li>
          <li className="text-md md:text-lg p-4 font-montserrat ">
            <Link to="/favorites">Favorites</Link>
          </li>
          <li className="text-md md:text-lg p-4 font-montserrat ">
            <Link to="/serials">TV Shows</Link>
          </li>
          <li className="text-md md:text-lg p-4 font-montserrat ">
            <Link to="/actors">Actors</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
