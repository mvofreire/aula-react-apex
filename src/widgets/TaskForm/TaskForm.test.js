import React from 'react'
import { render, act, fireEvent } from '@testing-library/react';
import TaskForm from '.';

describe('TaskForm', () => {
  test('Should render in the screen', () => {
    const { container } = render(<TaskForm />)
    expect(container).toBeInTheDocument()
  })

  test('should call callback onAddTask', () => {
    const callback = jest.fn();
    const { getByTestId } = render(<TaskForm onAddTask={callback} />)
    act(() => {
      fireEvent.change(getByTestId('input-title'), { target: { value: 'teste' } })
    })
    act(() => {
      fireEvent.click(getByTestId('btn-submit'))
    })

    expect(callback).toBeCalledTimes(1)
  })

  test('should show error when title is empty', () => {
    const callback = jest.fn();
    const { getByTestId, getByText } = render(<TaskForm onAddTask={callback} />)

    act(() => {
      fireEvent.click(getByTestId('btn-submit'))
    })

    expect(callback).toBeCalledTimes(0)
    expect(getByText(/Titulo não pode ser vazio/)).toBeInTheDocument()
  })

  test('should show error when called imperative method', () => {
    const errorMessage = 'ERROR'
    const callback = jest.fn();
    const ref = React.createRef();
    const { getByText } = render(<TaskForm ref={ref} onAddTask={callback} />)

    act(() => {
      ref.current.showError(errorMessage)
    })

    expect(callback).toBeCalledTimes(0)
    expect(getByText(errorMessage)).toBeInTheDocument()
  })
})