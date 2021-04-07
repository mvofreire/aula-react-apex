import { render, act, fireEvent, cleanup } from '@testing-library/react';
import Input from '.';

afterEach(cleanup)

describe('Input', () => {
  test('Should render in screen', () => {
    const { container } = render(<Input />)
    expect(container).toBeInTheDocument()
  })

  test('Should match with snapshot', () => {
    const { container } = render(<Input />)
    expect(container).toMatchSnapshot('default')
  })

  test('Should call callback onChange', () => {
    const callback = jest.fn();
    const { container } = render(<Input onInputChange={callback} />)

    act(() => {
      fireEvent.change(container.querySelector('.input'), { target: { value: 'teste' } })
    })

    expect(callback).toBeCalledTimes(1)
  })

  test('Should call callback onEnter', () => {
    const callback = jest.fn();
    const { container } = render(<Input onEnter={callback} />)

    act(() => {
      fireEvent.keyDown(container.querySelector('.input'), { key: 'Enter' })
    })

    expect(callback).toBeCalledTimes(1)
  })

  test('Should NOT call callback onEnter', () => {
    const callback = jest.fn();
    const { container } = render(<Input onEnter={callback} />)

    act(() => {
      fireEvent.keyDown(container.querySelector('.input'), { key: 'Esc' })
    })

    expect(callback).toBeCalledTimes(0)
  })

})