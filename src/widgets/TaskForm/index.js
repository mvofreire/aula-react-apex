import React, { createRef, useState, useImperativeHandle, forwardRef, useEffect, useCallback } from 'react'

import Header from '../../components/Header'

import Button from '../../components/Button'
import Input from '../../components/Input'

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
      <Header />
      <form className='task-form' onSubmit={handleFormSubmit}>
        <Input data-testid='input-title' ref={inputRef} onInputChange={handleOnInputChange} onEnter={handleFormSubmit} />
        <Button data-testid='btn-submit' label="Adicionar" htmlType='submit' type='primary' />
      </form>
      {!!error && <span className='task-form-error'>{error}</span>}
    </>
  )
}

export default forwardRef(TaskForm)