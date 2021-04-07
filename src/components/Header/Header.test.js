import { render } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
  test('Should render in screen', () => {
    const { container } = render(<Header />)
    expect(container).toBeInTheDocument()
  })

  test('Should match with snapshot', () => {
    const { container } = render(<Header />)
    expect(container).toMatchSnapshot('default')
  })
})