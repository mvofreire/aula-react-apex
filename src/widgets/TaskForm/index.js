import React, { createRef, useState, useImperativeHandle, forwardRef } from 'react'

import Button from '../../components/Button'
import Input from '../../components/Input'

import "./style.css"

const TaskForm = ({ onAddTask }, ref) => {
  const inputRef = createRef();

  const [taskLabel, setTaskLabel] = useState('')
  const [error, setError] = useState(null)

  useImperativeHandle(ref, () => ({
    showError(errorText) {
      setError(errorText)
    }
  }));

  const handleFormSubmit = (event) => {
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
  }

  const handleOnInputChange = (event) => {
    setError(null)
    setTaskLabel(event.target.value)
  }

  return (
    <>
      <form className='task-form' onSubmit={handleFormSubmit}>
        <Input data-testid='input-title' ref={inputRef} onInputChange={handleOnInputChange} onEnter={handleFormSubmit} />
        <Button data-testid='btn-submit' label="Adicionar" htmlType='submit' type='primary' />
      </form>
      {!!error && <span className='task-form-error'>{error}</span>}
    </>
  )
}

export default forwardRef(TaskForm)