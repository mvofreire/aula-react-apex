import { render, act, fireEvent, cleanup } from '@testing-library/react';
import List from '.';

afterEach(cleanup)

describe('Input', () => {
  const data = [
    'item 1',
    'item 2',
    'item 3',
  ]
  const renderComponent = (props) => {
    return render(<List tasks={data} {...props} />)
  }

  test('Should render in screen', () => {
    const { container } = renderComponent()
    expect(container).toBeInTheDocument()
  })

  test('Should match with snapshot', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot('default')
  })

  test('Should call callback on remove item', () => {
    const onRemoveClick = jest.fn();
    const { getAllByText } = renderComponent({ onRemoveClick })

    act(() => {
      fireEvent.click(getAllByText(/x/)[0])
    })

    expect(onRemoveClick).toBeCalledTimes(1)
  })

})