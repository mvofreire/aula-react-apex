import { render, screen, fireEvent, act } from '@testing-library/react';
import Button from './index';

describe('Button', () => {
  test('Should renders in screen', () => {
    render(<Button label="banana" />);
    const buttonLabel = screen.getByText(/banana/i);
    expect(buttonLabel).toBeInTheDocument();
  });

  test('Should Call callback onClick', () => {
    const callback = jest.fn();
    const { getByText } = render(<Button label='button' onClick={callback} />)

    act(() => {
      fireEvent.click(getByText(/button/))
    })

    expect(callback).toBeCalledTimes(1)
  })

  test('Should match with snapshot', () => {
    const { container } = render(<Button label='button' />)
    expect(container).toMatchSnapshot('default')
  })

  test('Should match with snapshot secondary', () => {
    const { container } = render(<Button label='button' type='secondary' />)
    expect(container).toMatchSnapshot('secondary')
  })
})
