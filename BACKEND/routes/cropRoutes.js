const express = require("express")
const {
    getAllProduct,
    get_product,
    add_product,
    update_product,
    delete_product
} = require("../controller/cropController");

const router = express.Router();

router.route("/").get(getAllProduct).post(add_product);
router.route("/:id").get(get_product).patch(update_product),delete(delete_product);

module.exports = router;