const getIndex = (req, res) => {
  const a = 10;
  res.json({ message: 'This is the modified index page' })
}

const indexController = {};
indexController.getIndex = getIndex;

module.exports = indexController;
