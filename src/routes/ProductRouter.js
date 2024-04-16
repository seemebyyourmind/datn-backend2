const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductControler");

router.get("/getbreed/:id", ProductController.getBreed); //ok
router.get("/pet/all/:page", ProductController.getAllPet); //ok
router.get("/pet/species/:id", ProductController.getPetWithSpecies); // ok
router.get("/pet/breed/:id", ProductController.getPetWithBreed); //ok
router.get("/petcare/all/:page", ProductController.getAllPetCare); //ok
router.get("/petcare/catalogtype/:id", ProductController.getPetCareCatalogType); //ok
router.get("/petcare/catalog/:id", ProductController.getPetCareCatalog); //ok
router.get("/petcare/species/:id", ProductController.getPetCareWithSpecies); //ok
router.get("/getcatalog/:id", ProductController.getCatalog); //ok
router.get("/pet/:id", ProductController.getPetId); //ok
router.get("/petcare/:id", ProductController.getPetCareId); //ok

module.exports = router;
