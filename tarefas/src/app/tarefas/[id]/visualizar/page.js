import React from 'react'
import { buscarTarefaPorId } from '@/actions'
import Link from 'next/link'

const tarefa = async ({ params }) => {
    const id = Number(params.id)
    console.log(id)
    const tarefa = await buscarTarefaPorId(id)
    //console.log(tarefa)
    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold text-center mb-6">Criar Nova Tarefa</h1>
            <form
                className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg"
            >
                <label
                    htmlFor="titulo"
                    className="block text-sm font-medium text-gray-700"
                >
                    Título
                    <input
                        value={tarefa.titulo}
                        type="text"
                        id="titulo"
                        name="titulo"
                        placeholder="Insira o título"
                        required
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    />
                </label>
                <label
                    htmlFor="descricao"
                    className="block text-sm font-medium text-gray-700"
                >
                    Descrição
                    <textarea
                        value={tarefa.descricao}
                        id="descricao"
                        name="descricao"
                        placeholder="Descreva a tarefa"
                        required
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-32 resize-none"
                    ></textarea>
                </label>
            </form>
             <div className='flex justify-center mt-2'>
                 <Link href='/' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Voltar </Link>
             </div>
        </div>
    )
}

export default tarefa