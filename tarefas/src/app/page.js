import Link from "next/link";
import { db } from "@/db";
import styles from './css/Home.module.css'
import { deletarTarefa } from "@/actions";
export default async function Home() {
  const tarefas = await db.todo.findMany()
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
       <h1 className={styles.h1}>TAREFAS</h1>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="space-y-4">
          {tarefas.map((tarefa) => (
            <div key={tarefa.id} className={`bg-gray-100 p-4 rounded-lg shadow`}>
                <div>
                  <h2 className="text-xl font-semibold">{tarefa.titulo}</h2>
                  <p>{tarefa.descricao}</p>
                </div>
              <div className="flex space-x-2 mt-3">
                <Link href={`/tarefas/${tarefa.id}/visualizar`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Visualizar </Link>
                <Link href={`/tarefas/${tarefa.id}/editar`} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"> Editar </Link>
                <form action={deletarTarefa}>
                  <input type="hidden" name="id" value={tarefa.id} />
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Excluir</button>
                </form>

              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
