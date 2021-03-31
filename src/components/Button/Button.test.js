import { render, screen } from '@testing-library/react';
import Button from './index';

test('renders learn react link', () => {
  render(<Button label="banana" />);
  const buttonLabel = screen.getByText(/banana/i);
  expect(buttonLabel).toBeInTheDocument();
});
