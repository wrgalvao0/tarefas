'use client'
import React, { useActionState, useEffect } from 'react'
import { editarTarefa } from '@/actions'
import { useRouter } from 'next/navigation'

const Form = ({ tarefa }) => {
  const router = useRouter()
  const [formState, action] = useActionState(editarTarefa, { errors: '' })
  useEffect(() => {
    if (formState.success) {
      router.push('/')
    }
  }, [formState.success, router])
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Editar Tarefa</h1>
      {formState.errors ? <div>{formState.errors}</div> : ''}
      <form
        action={action}
        className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg"
      >
        <label
          htmlFor="titulo"
          className="block text-sm font-medium text-gray-700"
        >
          Título
          <input
            defaultValue={tarefa.titulo}
            type="text"
            id="titulo"
            name="titulo"
            placeholder="Insira o título"
            required
            className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <input type="hidden" name='id' value={tarefa.id} />
        </label>
        <label
          htmlFor="descricao"
          className="block text-sm font-medium text-gray-700"
        >
          Descrição
          <textarea
            defaultValue={tarefa.descricao}
            id="descricao"
            name="descricao"
            placeholder="Descreva a tarefa"
            required
            className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-32 resize-none"
          ></textarea>
        </label>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Editar Tarefa
        </button>
      </form>
    </div>
  )
}

export default Form