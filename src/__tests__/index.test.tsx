/**
 * @jest-environment jsdom
*/

import React from 'react';
import { render } from '@testing-library/react';

import Modal from '..';

describe('React Modal', () => {
  it('Check if modal is in the document', () => {
    const { baseElement, queryByText } = render(<Modal modalOpen={true} onClose={() => { return; }}>modal content</Modal>);

    expect(baseElement).toMatchSnapshot();
    expect(queryByText('modal content')).toBeInTheDocument();
  });
  it('Check if modal is not in the document', () => {
    const { baseElement, queryByText } = render(<Modal modalOpen={false} onClose={() => { return; }}>modal content</Modal>);

    expect(baseElement).toMatchSnapshot();
    expect(queryByText('modal content')).not.toBeInTheDocument();
  });
});
