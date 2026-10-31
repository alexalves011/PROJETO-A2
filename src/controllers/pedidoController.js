const pedidoService = require("../services/pedidoService");

const pedidoController = {
  criar(req, res) {
    try {
      const novoPedido = pedidoService.criar(req.body);
      return res.status(201).json(novoPedido);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  },

  listar(req, res) {
    const lista = pedidoService.listar();
    return res.status(200).json(lista);
  },

  buscarPorId(req, res) {
    const { id } = req.params;
    const pedido = pedidoService.buscarPorId(id);

    if (!pedido) {
      return res.status(404).json({ erro: "Pedido não encontrado." });
    }

    return res.status(200).json(pedido);
  },

  atualizarStatus(req, res) {
    try {
      const { id } = req.params;
      const { status } = req.body;

      if (!status) {
        return res.status(400).json({
          erro: "O campo 'status' é obrigatório no corpo da requisição.",
        });
      }

      const pedidoAtualizado = pedidoService.atualizarStatus(id, status);

      if (!pedidoAtualizado) {
        return res
          .status(404)
          .json({ erro: "Pedido não encontrado para atualização." });
      }

      return res.status(200).json(pedidoAtualizado);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  },
};

module.exports = pedidoController;
