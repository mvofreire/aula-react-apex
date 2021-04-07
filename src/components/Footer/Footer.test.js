import { render } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
  test('Should render in screen', () => {
    const { container } = render(<Footer />)
    expect(container).toBeInTheDocument()
  })

  test('Should match with snapshot', () => {
    const { container } = render(<Footer />)
    expect(container).toMatchSnapshot('default')
  })
})