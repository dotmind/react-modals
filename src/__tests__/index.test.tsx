/**
 * @jest-environment jsdom
*/

import React from 'react';
import { render } from '@testing-library/react';

import Modal from '..';

describe('React Modal', () => {
  it('Check if modal is in the document', () => {
    const { baseElement, queryByText } = render(<Modal containerZIndex={9999} modalOpen={true} onClose={() => null}>modal content</Modal>);

    expect(baseElement).toMatchSnapshot();
    expect(queryByText('modal content')).toBeInTheDocument();
  });
  it('Check if modal is not in the document', () => {
    const { baseElement, queryByText } = render(<Modal containerZIndex={9999} modalOpen={false} onClose={() => null}>modal content</Modal>);

    expect(baseElement).toMatchSnapshot();
    expect(queryByText('modal content')).not.toBeInTheDocument();
  });
});
