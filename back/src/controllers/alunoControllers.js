import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createAluno = async(req,res) =>{
    const{name,email,idade} = req.body
    const alunoExists = await prisma.aluno.findUnique({
    where: {
        email
    }
  })
  if(alunoExists){
    return res.status(400).json({error: 'email ja cadastrado'})
  }

  const aluno = await prisma.aluno.create({
    data: {
        name,
        email,
        idade: Number(idade)
    }
  })

  return res.status(201).json(aluno)
}

export const getAluno = async (req,res)=>{
    const alunos = await prisma.aluno.findMany({
        select:{
            name: true,
            email: true,
        
        }
    })
    return res.json(alunos)
}

export const deleteAluno = async(req,res)=>{
    const id = parseInt(req.params.id)
    if (isNaN9(id)){
        return res.status(400).json({error: "id invalido"})
    }
    try{
    await prisma.aluno.delete({
        where:{
            id
        }
    })
    return res.json({ message: "Aluno deletado com sucesso!" })
}catch(error){
    return res.status(404).json({error: "aluno nao esta na lista"})
}

}

export const updateAluno = async(req,res)=>{
    const id = parseInt(req.params.id)
    if (isNaN(id)) return res.status(400).json({ error: "ID inválido" });
    const {name,email} = req.body
    try{
    const aluno = await prisma.aluno.update({
        where:{
            id
        },
        data:{
            name,
            email,
        }
    })
    return res.json(aluno)
}catch(error){
     return res.status(404).json({error: "aluno nao esta na lista"})
}

}