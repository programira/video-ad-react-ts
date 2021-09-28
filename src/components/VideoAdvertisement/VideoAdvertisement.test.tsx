import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import VideoAdvertisement from './VideoAdvertisement';

describe('<VideoAdvertisement />', () => {
  test('it should mount', () => {
    render(<VideoAdvertisement videoLink='https://cdn.yoc.com/ad/demo/airbnb.mp4'/>);
    
    const videoAdvertisement = screen.getByTestId('VideoAdvertisement');

    expect(videoAdvertisement).toBeInTheDocument();
  });
});

describe("when rendered with a `videoLink` prop", () => {
  it("should render video element", () => {
    render(<VideoAdvertisement videoLink='https://cdn.yoc.com/ad/demo/airbnb.mp4'/>);
    const videoAdvertisement = screen.getByTestId('VideoAdvertisement');

    expect(videoAdvertisement).toBeInTheDocument();
  });
});