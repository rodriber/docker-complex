import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      Esta es otra pagina!!
      <Link to="/"> Volver a la pagina principal! </Link>
    </div>
  );
};
