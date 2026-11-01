const pedidoService = require("../src/services/pedidoService");

test("Deve lançar erro ao tentar criar pedido com cliente vazio", () => {
  expect(() => {
    pedidoService.criar({ cliente: "", tipo: "entrega", valor: 100, prioridade: "alta" });
  }).toThrow();
});

test("Deve lançar erro ao tentar criar pedido com valor menor ou igual a zero", () => {
  expect(() => {
    pedidoService.criar({ cliente: "Ana", tipo: "retirada", valor: 0, prioridade: "normal" });
  }).toThrow();
});