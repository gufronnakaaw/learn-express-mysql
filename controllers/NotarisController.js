class NotarisController {
  index(req, res) {
    return res.json({
      message: 'hello notaris',
    });
  }
}

module.exports = new NotarisController();
