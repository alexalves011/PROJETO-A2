let pedidos = [];
let nextId = 1;

const estadosValidos = ["recebido", "em_preparacao", "enviado", "entregue", "cancelado"];

const pedidoService = {
  criar(dados) {
    const { cliente, tipo, valor, prioridade } = dados;

    if (!cliente || typeof cliente !== "string" || cliente.trim() === "") {
      throw new Error("O campo 'cliente' é obrigatório e não pode ser vazio.");
    }

    if (typeof valor !== "number" || valor <= 0) {
      throw new Error("O campo 'valor' deve ser numérico e maior que zero.");
    }

    if (!tipo || !prioridade) {
      throw new Error("Os campos 'tipo' e 'prioridade' são obrigatórios.");
    }

    const novoPedido = {
      id: nextId++,
      cliente: cliente.trim(),
      tipo,
      valor,
      prioridade,
      status: "recebido"
    };

    pedidos.push(novoPedido);
    return novoPedido;
  },

  listar() {
    return pedidos;
  },

  buscarPorId(id) {
    const pedido = pedidos.find(p => p.id === Number(id));
    return pedido || null;
  },

  atualizarStatus(id, novoStatus) {
    const pedido = this.buscarPorId(id);
    if (!pedido) return null;

    if (!estadosValidos.includes(novoStatus)) {
      throw new Error(`Status inválido. Estados permitidos: ${estadosValidos.join(", ")}`);
    }

    pedido.status = novoStatus;
    return pedido;
  }
};

module.exports = pedidoService;