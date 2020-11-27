const Cateogry = require('./category-model');
const categoryRepository = require('./repository');

//Category controller


exports.createCategory = async (req, res) => {
    try {
        let payload = {
            Categoryname: req.body.Categoryname,
            

        }
        let category = await categoryRepository.createCategory({
            ...payload
        });
        res.status(200).json({
            status: true,
            data: category,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}
exports.getCategory = async (req, res) => {
    try {
        let category = await categoryRepository.category();
        res.status(200).json({
            status: true,
            data: category,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}
exports.getCategoryById = async (req, res) => {
    try {
        let id = req.params.id
        let categoryDetails = await categoryRepository.categoryById(id);
        res.status(200).json({
            status: true,
            data: categoryDetails,
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            error: err
        })
    }
}
exports.removeCategory = async (req, res) => {
    try {
        let id = req.params.id
        let categoryDetails = await categoryRepository.removeCategory(id)
        res.status(200).json({
            status: true,
            data: categoryDetails,
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            error: err
        })
    }
}

//update caegory
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Cateogry.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        } else res.send({ message: "product was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
  };



