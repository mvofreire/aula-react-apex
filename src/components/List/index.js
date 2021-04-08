import React from 'react'
import { Button, Empty, List as AntList } from 'antd'

const List = ({ tasks = [], onRemoveClick }) => {

  if (tasks.length === 0) {
    return <Empty />
  }

  return (
    <AntList>
      {
        tasks.map((item, i) => (
          <AntList.Item
            extra={<Button danger type='primary' onClick={() => onRemoveClick(i)}>x</Button>}
          >
            {item}
          </AntList.Item>
        ))
      }
    </AntList>
  )
}

export default List