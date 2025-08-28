import Form from '@/components/Form'
import React from 'react'
import { buscarTarefaPorId } from '@/actions'

const page = async ({params}) => {
  const id = Number(params.id)
  const tarefa = await buscarTarefaPorId(id)
  return (
    <Form tarefa = {tarefa}/>
  )
}

export default page