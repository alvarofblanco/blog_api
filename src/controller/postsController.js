const getPost = (req, res) => {
  res.json({ message: 'This is a post' })
}

const postController = {}
postController.getPost = getPost

module.exports = postController;
