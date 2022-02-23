const res = require("express/lib/response");
const Blog = require("../models/Blog");

class blogController {
  static async post(req, res) {
    try {
      const post = await Blog.create({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
      });
      res.status(200).json(post);
    } catch {
      res.status(404);
      res.send({ error: "failed" });
    }
  }

  static async getAll(req, res) {
    const getAll = await Blog.find();
    res.send(getAll);
  }

  static async getById(req, res) {
    try {
      const getById = await Blog.findById({
        _id: req.params.id,
      });
      res.status(200).json(getById);
    } catch {
      res.status(404);
      res.send({ message: "post not found" });
    }
  }

  static async edit(req,res) {
      const {id} = req.params
      const {title,content,author} = req.body
      const edit = await Blog.findOneAndUpdate({_id: id}, {title,content,author}, {new : true})
      res.status(200).json({edit})
  }

  static async deleteById(req,res) {
      try {
        const deleteOne = await Blog.findOneAndDelete({
            _id : req.params.id
        })
        res.status(200).json({message: "post deleted", deleteOne })
      } catch (error) {
          res.status(404)
          res.send({message: "failed to deleted"})
      }
  }
}

module.exports = blogController;
