const Author=require("../Models/author.model")

module.exports.findAllAuthors=(req, res)=>{
    Author.find()
    .then(allAuthor=>{
        console.log(allAuthor)
        res.json({allAuthor})
    })
    .catch(err=>{res.json({message:"error"})})
}

module.exports.AddNewAuthor = (req, res) => {
    Author.create(req.body)
      .then(newAuthor => {
        console.log(newAuthor);
        res.json({newAuthor});
      })
      .catch(err => {
        console.log(err);
        res.status(404).json({ message: "you have an error", error: err }) 
      });
  };
  module.exports.findOneAuthor=(req, res) => {
    Author.findOne({ _id: req.params.id })
    .then(oneAuthor => {
     console.log(oneAuthor);
     res.json({oneAuthor});
    })
    .catch(err => {
     console.log(err);
     res.status(400).json({ error: { errors: { name: err } } });

   });
 };
  module.exports.updateAuthor= (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, {   
      new: true,
      runValidators: true,
     })
      .then((editAuthor) => {
        console.log(editAuthor);
        res.json({editAuthor});
      })
      .catch((err) => {
        res.status(404).json({ message: "you have an error", error: err }) 
      });
  };

  module.exports.deleteAuthor= (req, res) => {
    Author.deleteOne({ _id: req.params.id })
      .then((deleteConfirmation) => {
        console.log(deleteConfirmation);
        res.json({deleteConfirmation});
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({ error: "The Author cannot be deleted" });
      });
    };