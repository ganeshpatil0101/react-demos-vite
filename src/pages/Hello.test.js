import React from 'react';
import {render, screen} from '@testing-library/react';
import Hello from './Hello';

test('Hello world should work', async () => {
    render(<Hello />);
    expect(screen.getByText('Hello World!')).toBeDefined();
})