const express = require("express");
const { getAllOrders, createOrder, getOrderByID, updateOrder } = require("../controllers/order.controller");

const router = express.Router();

router.route("/").get(getAllOrders);
router.route("/").post(createOrder);
router.route("/:id").get(getOrderByID);
router.route("/:id").put(updateOrder);

module.exports = router;