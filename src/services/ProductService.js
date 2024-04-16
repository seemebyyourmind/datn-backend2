const db = require("../config/connectDb");
require("dotenv").config();

const getAllPet = (pageNumber) => {
  const offset = (pageNumber - 1) * 12;
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT pet.id AS pet_id, pet.name,pet.price,pet.discount,pet.image_1,pet.breed_id, breed.name AS breed_name,breed.species_id FROM pet JOIN breed ON pet.breed_id = breed.id LIMIT ? OFFSET ?",
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
// pet.id AS pet_id, pet.name,pet.price,pet.discount,pet.image_1,pet.breed_id,
const getPetWithSpecies = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT *, pet.id AS pet_id,breed.name as breed_name FROM pet JOIN breed ON pet.breed_id = breed.id WHERE breed.species_id = ?",
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
      "SELECT *,pet.id as pet_id,breed.name as breed_name FROM pet JOIN breed ON pet.breed_id = breed.id WHERE pet.breed_id = ?",
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

        resolve(results[0]); // Trả về thông tin của pet đầu tiên (nếu có)
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
      "SELECT pet_care_product.id AS product_id, pet_care_product.name,pet_care_product.price,pet_care_product.discount,pet_care_product.image_1,pet_care_product.catalog,pet_care_product.specieid ,catalog.id FROM pet_care_product JOIN catalog ON pet_care_product.catalog = catalog.id WHERE catalog.type_id = ?",
      [id],
      (err, results) => {
        if (err) {
          reject("Fail to get resource");
          console.log(err);
        } else {
          // Kiểm tra xem có kết quả trả về không

          resolve(results); // Trả về thông tin của pet đầu tiên (nếu có)
        }
      }
    );
  });
};

const getPetCareCatalog = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT *,id as product_id FROM pet_care_product WHERE catalog = ?",
      [id],
      (err, results) => {
        if (err) {
          reject("Fail to get resource");
          console.log(err);
        } else {
          // Kiểm tra xem có kết quả trả về không

          resolve(results); // Trả về thông tin của pet đầu tiên (nếu có)
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

          resolve(results); // Trả về thông tin của pet đầu tiên (nếu có)
        }
      }
    );
  });
};

const getBreed = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM breed WHERE species_id=?",
      [id],

      (err, results) => {
        if (err) {
          reject("Fail to get resource");
          console.log(err);
        } else {
          // Kiểm tra xem có kết quả trả về không

          resolve(results); // Trả về thông tin của pet đầu tiên (nếu có)
        }
      }
    );
  });
};
const getCatalog = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM catalog WHERE type_id=?",
      [id],

      (err, results) => {
        if (err) {
          reject("Fail to get resource");
          console.log(err);
        } else {
          // Kiểm tra xem có kết quả trả về không

          resolve(results); // Trả về thông tin của pet đầu tiên (nếu có)
        }
      }
    );
  });
};

const getPetId = (id) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM pet WHERE id = ?", [id], (err, results) => {
      if (err) {
        reject("Fail to get resource");
        console.log(err);
      } else {
        // Kiểm tra xem có kết quả trả về không

        resolve(results[0]); // Trả về thông tin của pet đầu tiên (nếu có)
      }
    });
  });
};
const getPetCareId = (id) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM pet_care_product WHERE id = ?",
      [id],
      (err, results) => {
        if (err) {
          reject("Fail to get resource");
          console.log(err);
        } else {
          // Kiểm tra xem có kết quả trả về không
          resolve(results[0]); // Trả về thông tin của pet đầu tiên (nếu có)
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
  getBreed,
  getCatalog,
  getPetId,
  getPetCareId,
};
