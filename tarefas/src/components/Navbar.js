import React from 'react'
import Button from './Button'
import Link from 'next/link'

const Navbar = () => {
  return (
   <header className="bg-blue-500 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/">Lista de Tarefas</Link>
        <Link href="/tarefas/criar">Criar Tarefa</Link>
      </nav>
    </header>
  )
}

export default Navbar