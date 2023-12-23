//const Categories = require('./model');
const {
    getAllCategories,
    getOneCategories,
    updateCategories,
    createCategories,
    deleteCategories,
} = require ('../../../services/mongoose/categories');
const Categories = require('./model');

const { StatusCodes } = require('http-status-codes');

const create = async (req, res, next) => {

    try {
        const result = await createCategories(req);
    
        res.status(StatusCodes.CREATED).json({
            data: result,
        });
     
    } catch (err) {
        next(err);
    }
};

const index = async (req, res, next) => {
    try {
        const result = await getAllCategories(req);
        res.status(StatusCodes.OK).json({
            data: result,
        });
    }catch (err) {
       next(err);
    }
};

const find = async (req, res, next) => {
    try {  
        const result = await getOneCategories( req );        
        res.status(StatusCodes.OK).json({
            data: result,
        });
   }
    catch (err){
        next(err);
    }
};
/*
const find = async (req, res, next) => {
    try {
      const { id } = req.params;
  
          // mencari categories di MongoDB berdasarkan field _id
      const result = await Categories.findOne({ _id: id });
   
      // bila result tidak mendapatkan data categories maka akan mereturn response `message: 'Id categories tidak ditemukan'`
      if (!result) {
        return res.status(404).json({ message: 'Id categories tidak ditemukan' });
      }
  
      res.status(200).json({
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };*/

const update = async (req, res, next) => {

    try {
        const result = await updateCategories(req);

        res.status(StatusCodes.OK).json({
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
};

const destroy = async (req, res, next) => {
    try{
       // const {id} = req.params;
        const result = await deleteCategories(req);

        res.status(StatusCodes.OK).json({
            msg: `Data dengan ID ${result.name} sudah dihapus`,
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
}
module.exports = {
    create,
    index,
    find,
    update,
    destroy,
};