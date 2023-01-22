const ProductModel = require('../Models/ProductModel');

  class ProductController {
    async store(req, res) {
      const { title, description, price } = req.body;
      if (!title || !description || !price){
        return res.status(404).json({ message: "Title, description and price must be filled!" }) 
      }
      const createdProduct = await ProductModel.create(req.body)   

      return res.status(200).json(createdProduct);
    }

    async index(req, res) {
      const products = await ProductModel.find();
      return res.status(200).json(products);
    }

    async show(req, res) {
      try {
        const { id } = req.params; 
        const product = await ProductModel.findById(id);

        if(!product) {
          return res.status(404).json({ message_in_a_bottle: "Product does not exist" });
        }
        return res.status(200).json(product);
          
      } catch (e) {
        return res.status(404).json({ error: e, message: "Error product ID!" })
      }
    }

    async update(req, res) {
      try {
        const { id } = req.params; 
        await ProductModel.findByIdAndUpdate(id, req.body);
        return res.status(200).json({ message: "Product Updated!" })

      } catch (e) {
        return res.status(404).json({ message: "Failed to update product!" })
      }
    }

    async destroy(req, res) {
      try {
        const { id } = req.params; 
        const productDeleted = await ProductModel.findByIdAndDelete(id);
        
        if(!productDeleted) {
          return res.status(404).json({ message: "Product does not exists!" })
        }
        return res.status(200).json({ message: "Product deleted!"})
          
      } catch (e) {
        return res.status(404).json({ message: "Failed to delete!"})
      }
    }
  }

module.exports = new ProductController();
