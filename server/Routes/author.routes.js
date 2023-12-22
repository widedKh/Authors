const AuthorController = require("../Controllers/author.contoller");

module.exports = (app) => {
  app.get("/api/author", AuthorController.findAllAuthors);
  app.post("/api/new", AuthorController.AddNewAuthor);
  app.get("/api/author/:id", AuthorController.findOneAuthor);
  app.put("/api/edit/:id", AuthorController.updateAuthor);
  app.delete("/api/author/:id", AuthorController.deleteAuthor);
};
