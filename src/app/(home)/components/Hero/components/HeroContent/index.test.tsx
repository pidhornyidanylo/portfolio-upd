import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HeroContent from '.';

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

jest.mock('gsap/TextPlugin', () => jest.fn());

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

describe('HeroContent Component', () => {
  it('renders the hero section content', () => {
    render(<HeroContent />);

    const heroName = screen.getByText(/Danylo/i);
    const heroInfo = screen.getByText(
      /A front-end developer and aspiring full-stack developer./i
    );

    expect(heroName).toBeInTheDocument();
    expect(heroInfo).toBeInTheDocument();
  });

  it('renders lines', () => {
    render(<HeroContent />);

    const leftVerticalLine = screen.getByTestId('left-vertical');
    const leftHorizontalLine = screen.getByTestId('left-horizontal');
    const rightVerticalLine = screen.getByTestId('right-vertical');
    const rightHorizontalLine = screen.getByTestId('right-horizontal');

    expect(leftVerticalLine).toBeInTheDocument();
    expect(leftHorizontalLine).toBeInTheDocument();
    expect(rightVerticalLine).toBeInTheDocument();
    expect(rightHorizontalLine).toBeInTheDocument();
  });
});
