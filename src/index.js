const express = require("express");
const app = express();
const pedidoRoutes = require("./routes/pedidoRoutes");

app.use(express.json());

app.use(pedidoRoutes);

app.use((err, req, res, next) => {
  console.h(err.stack);
  res.status(500).json({ erro: "Ocorreu um erro interno no servidor." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
