import React from 'react'
import { Button, Empty, List as AntList } from 'antd'
import "./style.css"
const List = ({ tasks = [], onRemoveClick, onClearAll }) => {

  if (tasks.length === 0) {
    return <Empty />
  }

  return (
    <>
      <AntList>
        {
          tasks.map((item, i) => (
            <AntList.Item
              key={i}
              extra={<Button danger type='primary' onClick={() => onRemoveClick(i)}>x</Button>}
            >
              {item}
            </AntList.Item>
          ))
        }
      </AntList>
      {
        tasks.length > 0 && (
          <Button className='btn-clear-all' danger type='primary' onClick={onClearAll}>
            Remove All
          </Button>
        )
      }
    </>
  )
}

export default List