import { Button, Typography } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getTask } from '../services/task.service'

const TaskDetailPage = () => {
  const { index } = useParams()
  const history = useHistory()
  const [task, setTask] = useState('')

  const loadData = useCallback(async () => {
    const data = await getTask(index);
    setTask(data)
  }, [index])

  useEffect(() => {
    loadData()
  }, [loadData])

  const handleBackButtonClick = () => {
    history.goBack();
  }

  return <div>
    <Typography.Title level={2}>{task}</Typography.Title>
    <Button type='primary' onClick={handleBackButtonClick}>
      Voltar para Listagem
    </Button>
  </div>
}

export default TaskDetailPage