import React, { createRef, useState, useImperativeHandle, forwardRef, useEffect, useCallback } from 'react'
import { Button, Input, Alert } from 'antd'

import "./style.css"

const TaskForm = ({ onAddTask }, ref) => {
  const inputRef = createRef();

  const [taskLabel, setTaskLabel] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  useImperativeHandle(ref, () => ({
    showError(errorText) {
      setError(errorText)
    }
  }));

  const handleFormSubmit = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();

    setError(null)
    if (taskLabel !== '') {
      onAddTask(taskLabel)
      inputRef.current.value = '';
      inputRef.current.focus();
    } else {
      setError('Titulo não pode ser vazio')
    }
    setTaskLabel('')
  }, [taskLabel, onAddTask, inputRef])

  const handleOnInputChange = (event) => {
    setError(null)
    setTaskLabel(event.target.value)
  }

  return (
    <>
      <form className='task-form' onSubmit={handleFormSubmit}>
        <Input
          className='task-form-input'
          ref={inputRef}
          value={taskLabel}
          onChange={handleOnInputChange}
          onPressEnter={handleFormSubmit}
        />
        <Button data-testid='btn-submit' htmlType='submit' type='primary' >
          Adicionar
        </Button>
      </form>
      {!!error && <Alert message={error} type="error" showIcon />}
    </>
  )
}

export default forwardRef(TaskForm)