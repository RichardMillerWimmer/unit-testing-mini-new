import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

it('counter renders initial text at 0', () => {
    const { container } = render(<Counter />);

    expect(container.textContent).toContain("You've clicked 0 times!")
});

it('counter increments when clicked', () => {
    expect.assertions(2);

    const { getByTestId, container } = render(<Counter />);
    const click = getByTestId('counter-button');
    expect(container.textContent).toContain("You've clicked 0 times!");
    fireEvent.click(click);
    expect(container.textContent).toContain("You've clicked 1 times!")
});