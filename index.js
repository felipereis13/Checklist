const { select, input, checkbox } = require("@inquirer/prompts")

let meta = {
  value: 'tomar 3L de água por dia',
  checked: false,
}
let metas = [ meta ]
// 35:14
const cadastrarMeta = async () => {
  const meta = await input({ message: "Digite a meta: " })

  if(meta.length == 0) {
    console.log('A meta não pode ser vazia.')
    return
  }
  metas.push({ value: meta, checked: false })
}
const listarMetas = async () => {
   const respostas = await checkbox({
    message: "Use as SETAS para mudar de meta, o ESPAÇO para marcar ou desmarcar eo ENTER para finalizar. ",
    choices: [...metas],
    instructions: false,
   })

   if(respostas.length == 0) {
    console.log("Nenhuma meta selecionada!")
    return
   }

   metas.forEach((m) => {
    m.checked = false
   })
   
   respostas.forEach((resposta) => {
    const meta = metas.find((m) => {
      return m.value == resposta
    })
      meta.checked = true
   })
   console.log('Meta(s) marcarda(s) como concluidas(s)')

}
const metasRealizadas = async () => {
    const realizadas = metas.filter((meta) => {
      return meta.checked
    })
    
    if(realizadas.length == 0) {
      console.log('Não existe metas relizadas! :(')
      return 
    }

    await select({
      message: "Metas Realizadas",
      choices: [...realizadas]
    })
}

const start = async () => {
  while (true) {
    const opcao = await select({
      message: "menu >",
      choices: [
        {
          name: "cadastrar metas",
          value: "cadastrar",
        },
        {
          name: "listar metas",
          value: "listar",
        },
        {
          name: "Metas realizadas",
          value: "Realizadas",
        },
        {
          name: "sair",
          value: "sair",
        },
      ],
    })

    switch (opcao) {
      case "cadastrar":
        await cadastrarMeta()
        console.log(metas)
        break
      case "listar":
        await listarMetas()
        break
      case "Realizadas":
        await metasRealizadas()
        break
      case "sair":
        console.log("Até a proxima!")
        return
    }
  }
}

start()
