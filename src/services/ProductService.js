const db = require("../config/connectDb");
require("dotenv").config();

const getAllPet = (pageNumber) => {
  const offset = (pageNumber - 1) * 12;
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM pet LIMIT ? OFFSET ?",
      [12, offset],
      (err, results) => {
        if (err) {
          reject("fail get resouce");
          console.log(err);
        } else {
          resolve(results);
        }
      }
    );
  });
};

const getPetWithSpecies = (type) => {
  const id = type === "cat" ? 2 : 1;

  return new Promise((resolve, reject) => {
    db.query(
      "SELECT pet.*, breed.* FROM pet JOIN breed ON pet.breed_id = breed.id WHERE breed.species_id = ?",
      [id],
      (err, results) => {
        if (err) {
          reject("Fail to get resources");
          console.log(err);
        } else {
          resolve(results); // Trả về mảng chứa thông tin của pet và breed
        }
      }
    );
  });
};

const getPetWithBreed = (breed_id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT pet.*, breed.* FROM pet JOIN breed ON pet.breed_id = breed.id WHERE pet.breed_id = ?",
      [breed_id],
      (err, results) => {
        if (err) {
          reject("Fail to get resources");
          console.log(err);
        } else {
          resolve(results); // Trả về mảng chứa thông tin của pet và breed
        }
      }
    );
  });
};

const getPet = (id) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM pet WHERE id = ?", [id], (err, results) => {
      if (err) {
        reject("Fail to get resource");
        console.log(err);
      } else {
        // Kiểm tra xem có kết quả trả về không
        if (results.length === 0) {
          reject("Pet not found");
        } else {
          resolve(results[0]); // Trả về thông tin của pet đầu tiên (nếu có)
        }
      }
    });
  });
};

const getAllPetCare = (pageNumber) => {
  const offset = (pageNumber - 1) * 12;
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM pet_care_product LIMIT ? OFFSET ?",
      [12, offset],
      (err, results) => {
        if (err) {
          reject("fail get resouce");
          console.log(err);
        } else {
          resolve(results);
        }
      }
    );
  });
};

const getPetCareCatalogType = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT pet_care_product.*, catalog.* FROM pet_care_product JOIN catalog ON pet_care_product.catalog = catalog.id WHERE catalog.type_id = ?",
      [id],
      (err, results) => {
        if (err) {
          reject("Fail to get resource");
          console.log(err);
        } else {
          // Kiểm tra xem có kết quả trả về không
          if (results.length === 0) {
            reject("Pet not found");
          } else {
            resolve(results); // Trả về thông tin của pet đầu tiên (nếu có)
          }
        }
      }
    );
  });
};

const getPetCareCatalog = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM pet_care_product WHERE catalog = ?",
      [id],
      (err, results) => {
        if (err) {
          reject("Fail to get resource");
          console.log(err);
        } else {
          // Kiểm tra xem có kết quả trả về không
          if (results.length === 0) {
            reject("Pet not found");
          } else {
            resolve(results); // Trả về thông tin của pet đầu tiên (nếu có)
          }
        }
      }
    );
  });
};

const getPetCareWithSpecies = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM pet_care_product WHERE specieid= ?",
      [id],
      (err, results) => {
        if (err) {
          reject("Fail to get resource");
          console.log(err);
        } else {
          // Kiểm tra xem có kết quả trả về không
          if (results.length === 0) {
            reject("Pet not found");
          } else {
            resolve(results); // Trả về thông tin của pet đầu tiên (nếu có)
          }
        }
      }
    );
  });
};

module.exports = {
  getPet,
  getAllPet,
  getPetWithBreed,
  getPetWithSpecies,
  getPetCareCatalog,
  getPetCareCatalogType,
  getPetCareWithSpecies,
  getAllPetCare,
};
