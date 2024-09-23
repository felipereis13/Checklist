const { select } = require("@inquirer/prompts")

// 22:14
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
          name: "sair",
          value: "sair",
        },
      ],
    })

    switch (opcao) {
      case "cadastrar":
        console.log("vamos cadastrar")
        break
      case "listar":
        console.log("vamos listar")
        break
      case "sair":
        console.log("Até a proxima!")
        return
    }
  }
}

start()
