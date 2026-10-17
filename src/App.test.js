// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RindBehemoth title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RindBehemoth/i);
    expect(titleElement).toBeInTheDocument();
});
