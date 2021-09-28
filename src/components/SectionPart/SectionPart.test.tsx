import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SectionPart from './SectionPart';
import { Block } from '../../types/Data';

const blocks:Block[] = [{title: 'some title'}];

describe('<SectionPart />', () => {
  test('it should mount', () => {
    render(<SectionPart title='some title' description='some description' blocks={blocks} />);
    
    const sectionPart = screen.getByTestId('SectionPart');

    expect(sectionPart).toBeInTheDocument();
  });
});