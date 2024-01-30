const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductControler");

router.get("/pet/all", ProductController.getAllPet);
router.get("/pet/species", ProductController.getPetWithSpecies);
router.get("/pet/breed", ProductController.getPetWithBreed);
router.get("/petcare/all", ProductController.getAllPetCare);
router.get("/petcare/catalogtype", ProductController.getPetCareCatalogType);
router.get("/petcare/catalog", ProductController.getPetCareCatalog);
router.get("/petcare/species", ProductController.getPetCareWithSpecies);

module.exports = router;
