import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Menu from '../src/Menu.jsx'

test('renders title tag properly', () => {
    render(<Menu />);
    const h1Element = screen.getByRole('heading', { level: 1 });
    expect(h1Element).toBeInTheDocument();
    expect(h1Element).toHaveTextContent('Welcome to BlackJack!');
});

test('renders the play button', () => {
    render(<Menu />);
    const playButton = screen.getByRole('button');
    expect(playButton).toBeInTheDocument();
    expect(playButton).toHaveTextContent('Play');
});
