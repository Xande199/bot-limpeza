const express = require("express")
const app = express()

app.use(express.json())

app.post("/webhook", (req, res) => {
  const msg = req.body.message

  let resposta = ""

  if (msg === "oi" || msg === "olá") {
    resposta = "Olá 👋 Bem vindo a Brilmax 🧼\n\nPromoção:\n3 produtos por 100 reais\n\nDigite:\n1 - Ver produtos\n2 - Comprar"
  }

  else if (msg === "1") {
    resposta = "Produtos Brilmax 🧼\n\n1 - Sabão líquido\n2 - Desinfetante\n3 - Detergente\n\nDigite o número do produto"
  }

  else if (msg === "2") {
    resposta = "Perfeito 👍\nPromoção ativa\n3 produtos por 100\n\nForma de pagamento:\n1 - PIX\n2 - Pagar na entrega"
  }

  else if (msg === "1") {
    resposta = "PIX:\n00000000000\nEnvie o comprovante aqui."
  }

  else {
    resposta = "Digite OI para começar."
  }

  res.json({
    reply: resposta
  })
})

app.listen(3000, () => {
  console.log("Bot rodando...")
})
