import React, { Fragment } from 'react';
import PageHeading from '../common/PageHeading';

function Page({ title, subtitle, pageClass, children }) {
  return (
    <Fragment>
        {title && <PageHeading title={title} subtitle={subtitle}></PageHeading>}
      <section className={pageClass}>{children}</section>
    </Fragment>
  );
}

export default Page;
