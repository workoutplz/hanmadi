import React from 'react'
import Calligraphy from '../calligraphy/Calligraphy'
import Greeting from '../greeting/Greeting'
import Card from '../card/Card'
import Todo from '../todo/Todo'
import Search from '../search/Search'

export default function Hanmadi({ name, path, youtube, description, title }) {
  return (
    <>
      <Greeting name={name} />
      <Calligraphy path={path} />
      <Search/>
      <Card youtubeId={youtube} description={description} title={title}/>
      <Todo />
    </>
  )
}
