import React, { Fragment } from 'react';
import Title from '../common/Title';
import '../style.css';

function Page({ title, subtitle, children }) {
  return (
    <Fragment>
      <section className="page-heading">
        <Title title={title}></Title>
        {subtitle && <p className="page-subtitle">{subtitle}</p>}
      </section>
      <section className="account-content form">{children}</section>
    </Fragment>
  );
}

export default Page;
