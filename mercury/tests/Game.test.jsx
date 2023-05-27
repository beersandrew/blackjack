import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Game from '../src/Game.jsx'

test('renders wallet', () => {
    render(<Game />);
    const buttonTexts = ['1', '5', '10', '25', '50', '100']

    const currentBetElement = screen.getByText('Current Bet: 0');
    expect(currentBetElement).toBeInTheDocument();

    const walletElement = screen.getByText('Wallet Amount: 1000');
    expect(walletElement).toBeInTheDocument();

    buttonTexts.forEach(text => {
        const buttonElement = screen.getAllByRole('button', { name: text});
        expect(buttonElement[0]).toBeInTheDocument();
    })
});

test('renders the deal button', () => {
    render(<Game />);
    const dealButton = screen.getAllByRole('button', {name: 'Deal'});
    expect(dealButton[0]).toBeInTheDocument();
    expect(dealButton[0]).toHaveTextContent('Deal');
});
