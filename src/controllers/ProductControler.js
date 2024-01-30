const ProductService = require("../services/ProductService");

const getAllPet = async (req, res) => {
  try {
    // check trùng số điện thoại
    const pets = await ProductService.getAllPet(req.body.page);
    console.log(pets);
    if (!pets) {
      return res.status(409).json({ status: "user exist" });
    }

    //Tạo tài khoản
    return res.status(200).json(pets);
  } catch (e) {
    console.log(e);
    return res.status(404).json({});
  }
};
const getPetWithBreed = async (req, res) => {
  try {
    // check trùng số điện thoại
    const pets = await ProductService.getPetWithBreed(req.body.breed_id);
    console.log(pets);
    if (!pets) {
      return res.status(409).json({ status: "user exist" });
    }

    //Tạo tài khoản
    return res.status(200).json(pets);
  } catch (e) {
    console.log(e);
    return res.status(404).json({});
  }
};

const getPetWithSpecies = async (req, res) => {
  try {
    // check trùng số điện thoại
    const pets = await ProductService.getPetWithSpecies(req.body.type);
    console.log(pets);
    if (!pets) {
      return res.status(409).json({ status: "user exist" });
    }

    //Tạo tài khoản
    return res.status(200).json(pets);
  } catch (e) {
    console.log(e);
    return res.status(404).json({});
  }
};

const getAllPetCare = async (req, res) => {
  try {
    // check trùng số điện thoại
    const pets = await ProductService.getAllPetCare(req.body.page);
    console.log(pets);
    if (!pets) {
      return res.status(409).json({ status: "user exist" });
    }

    //Tạo tài khoản
    return res.status(200).json(pets);
  } catch (e) {
    console.log(e);
    return res.status(404).json({});
  }
};
const getPetCareCatalogType = async (req, res) => {
  try {
    // check trùng số điện thoại
    const pets = await ProductService.getPetCareCatalogType(req.body.id);
    console.log(pets);
    if (!pets) {
      return res.status(409).json({ status: "user exist" });
    }

    //Tạo tài khoản
    return res.status(200).json(pets);
  } catch (e) {
    console.log(e);
    return res.status(404).json({});
  }
};

const getPetCareCatalog = async (req, res) => {
  try {
    // check trùng số điện thoại
    const pets = await ProductService.getPetCareCatalog(req.body.id);
    console.log(pets);
    if (!pets) {
      return res.status(409).json({ status: "user exist" });
    }

    //Tạo tài khoản
    return res.status(200).json(pets);
  } catch (e) {
    console.log(e);
    return res.status(404).json({});
  }
};
const getPetCareWithSpecies = async (req, res) => {
  try {
    // check trùng số điện thoại
    const pets = await ProductService.getPetCareWithSpecies(req.body.id);
    console.log(pets);
    if (!pets) {
      return res.status(409).json({ status: "user exist" });
    }

    //Tạo tài khoản
    return res.status(200).json(pets);
  } catch (e) {
    console.log(e);
    return res.status(404).json({});
  }
};

module.exports = {
  getAllPet,
  getPetWithSpecies,
  getPetWithBreed,
  getAllPetCare,
  getPetCareCatalogType,
  getPetCareCatalog,
  getPetCareWithSpecies,
};
