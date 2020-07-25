import React from 'react';
import { Page } from './features/page';
import { Elements, ElementsForm } from './features/elements';

export function App() {
  return (
    <>
      <Page>
        <Elements />
      </Page>
      <ElementsForm />
    </>
  );
}
