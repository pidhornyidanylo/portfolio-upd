import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import RightRectanleContainer from '.';

jest.mock('gsap', () => {
  const originalGsap = jest.requireActual('gsap');
  return {
    ...originalGsap,
    registerPlugin: jest.fn(),
    from: jest.fn(),
    to: jest.fn(),
    matchMedia: jest.fn(() => ({
      add: jest.fn((query, callback) => {
        const ctx = callback();
        return {
          revert: jest.fn(),
          ...ctx,
        };
      }),
      revert: jest.fn(),
    })),
  };
});

jest.mock('gsap/ScrollTrigger', () => jest.fn());

beforeAll(() => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };
});

describe('RightRectangleContainer component', () => {
  it('renders content properly', () => {
    render(<RightRectanleContainer />);
    const rightRectangleContainer = screen.getByTestId(
      'rightRectangleContainer'
    );
    const rightSmallRectangle = screen.getByTestId('rightSmallRectangle');
    const rightLargeRectangle = screen.getByTestId('rightLargeRectangle');

    expect(rightRectangleContainer).toBeInTheDocument();
    expect(rightSmallRectangle).toBeInTheDocument();
    expect(rightLargeRectangle).toBeInTheDocument();
  });
});
