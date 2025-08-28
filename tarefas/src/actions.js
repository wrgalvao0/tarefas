'use server'
import { redirect } from "next/navigation"
import { db } from "./db"
import { revalidatePath } from "next/cache"

export async function criarTarefa(formData) {
    const titulo = formData.get('titulo')
    const descricao = formData.get('descricao')
    const status = 'pendente'
    await db.todo.create({
        data: {
            titulo: titulo,
            descricao: descricao,
            status: status
        }
    }) //adiciona a tarefa ao banco de dados
    revalidatePath('/') //limpa o cache da home para mostrar o dado atualizado la na home
    redirect('/')
}

export async function buscarTarefaPorId(id) {
    const tarefa = await db.todo.findFirst({
        where: { id: id }
    })
    return tarefa
}

export async function editarTarefa(formSate, formData) {
    const id = Number(formData.get('id'))
    const titulo = formData.get('titulo')
    const descricao = formData.get('descricao')
    try {
        if (titulo.length < 5) {
            return {
                errors: "O título precisa ter no minimo 5 caracteres"
            }
        }
        else if (descricao.length < 10) {
            return {
                errors: "A descricao precisa ter no minimo 10 caracteres"
            }
        }
        else {
            await db.todo.update({
                where: { id: id },
                data: {
                    titulo: titulo,
                    descricao: descricao
                }
            })
            revalidatePath('/')
            return{
                success: true
            }
        }
    } catch (error) {
        return {
            errors: error.message
        }
    }
}

export async function deletarTarefa(formData) {
    const id = Number(formData.get('id'))
    await db.todo.delete({
        where: {id: id}
    }) //executa a funcao de deletar a tarefa no banco de dados
    revalidatePath('/') //limpa a cache da home para mostrar os dados sempre atualizados
    redirect('/') //redireciona para a home
}