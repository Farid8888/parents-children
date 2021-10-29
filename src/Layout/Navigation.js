import classes from "./Navigation.module.css";
import {NavLink} from 'react-router-dom'


const Navigation = () => {
  return (
    <header className={classes.navigation}>
      <nav>
        <ul>
          <li><NavLink activeClassName={classes.active} to='/main'>Форма</NavLink></li>
          <li><NavLink activeClassName={classes.active} to='/preview'>Превью</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
