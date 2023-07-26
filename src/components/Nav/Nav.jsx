import { NavLink } from 'react-router-dom';
import styled from './Nav.module.css'

const Nav = () => {
  return (
    <div className={styled.header}>
      <ul className={styled.headerList}>
        <li>
          <NavLink to="/" className={styled.styledLink}>Home</NavLink>
        </li>
        <li>
          <NavLink to="movie" className={styled.styledLink}>Movies</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
