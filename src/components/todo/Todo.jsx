import { React, useState, usetEffect } from 'react'
import TodoTemplate from './TodoTemplate'
import TodoHead from './TodoHead'
import TodoList from './TodoList'

export default function Todo() {
  return (
    <TodoTemplate>
      <TodoHead />
      <TodoList />
    </TodoTemplate>
  )
}
