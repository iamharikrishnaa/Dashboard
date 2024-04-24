// pages/_error.js

import React from 'react';

const Error = ({ statusCode }) => {
  return (
    <div>
      <h1>
        {statusCode
          ? `An error ${statusCode} occurred on the server`
          : 'An error occurred on the client'}
      </h1>
    </div>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
