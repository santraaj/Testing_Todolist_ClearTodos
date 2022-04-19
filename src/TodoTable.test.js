import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoTable from './TodoTable';

test('renders todotable', () => {
  const row = [
    {desc: 'Go to coffee', date: '24.04.2022'}
  ];
  render(<TodoTable todos={row} />);
  const tablecell = screen.getByText(/go to coffee/i);
  expect(tablecell).toBeInTheDocument();
});