import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BlockPart from './BlockPart';

describe('<BlockPart />', () => {
  test('it should mount', () => {
    render(<BlockPart title='some title'/>);
    
    const blockPart = screen.getByTestId('BlockPart');

    expect(blockPart).toBeInTheDocument();
  });
});