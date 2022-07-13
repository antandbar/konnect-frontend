import React, { Fragment } from 'react';
import Title from '../common/Title';

function Page({ title, subtitle, pageClass, children }) {
  return (
    <Fragment>
      <section className="page-heading">
        <Title title={title}></Title>
        {subtitle && <p className="page-subtitle">{subtitle}</p>}
      </section>
      <section className={pageClass}>{children}</section>
    </Fragment>
  );
}

export default Page;
