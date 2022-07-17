import React from 'react';

const PageHeading = ({ title, subtitle }) => (
  <section className="page-heading">
  <h1>{title}</h1>
  {subtitle && <p className="page-subtitle">{subtitle}</p>}
  </section>
);

export default PageHeading;
