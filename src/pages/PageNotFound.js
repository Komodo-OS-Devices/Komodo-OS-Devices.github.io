import React from 'react';

function PageNotFound() {
  const section = {
    minHeight: '100vh',
    display: 'flex',
  };

  const mainText = {
    fontSize: '12em',
    marginBottom: 0,
  };

  return (
    <section style={section}>
      <div className="m-auto text-center">
        <h1 style={mainText} className="text-primary">
          404
        </h1>
        <p className="display-5">Page Not Found</p>
        <a href="/" className="btn btn-large btn-primary mt-4 p-2 px-3 fs-3">
          Go Home
        </a>
      </div>
    </section>
  );
}

export default PageNotFound;
