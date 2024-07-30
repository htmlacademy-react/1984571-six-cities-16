import React from "react";
import {Link} from 'react-router-dom';

function NotFoundPage(): JSX.Element{
  return (
    <React.Fragment>
      <p style={{padding: 20}}>404 Not Found</p>
      <Link to="/" style={{cursor: 'default', color: 'blue', textDecoration: 'none', padding: 20}}>
        Вернуться на главную страницу
      </Link>
    </React.Fragment>
  );
}

export default NotFoundPage;
