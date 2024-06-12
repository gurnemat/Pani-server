
const Order = require("../mongodb/models/order");
const nodemailer = require("nodemailer")

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({}).limit(req.query._end);
        
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createOrder = async (req, res) => {
    try {
        const newOrder = await Order.create({ ...req.body });

        // Sending Email
        let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'codingtorque@gmail.com',
            pass: process.env.APP_PASSWORD
        }
        });

        let mailOptions = {
        from: 'codingtorque@gmail.com',
        to: `${req.body.email}, piyushpp2412@gmail.com`,
        subject: 'Order Placed!',
        html: `
        Hello ${req.body.name}, 
        <br/>
        <br/>
        Your order will be delivered on given address:
        <br/>
        <br/>
        <b>Delivery Address:</b> <br/>
        ${req.body.deliveryAddress} <br/><br/>

        <b>Delivery Date: </b> ${req.body.deliveryDate}
        <br/>
        <br/>
        Thank you!
        `,
        };

        transporter.sendMail(mailOptions, function(error, info){    
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200).json({ message: "Order Placed! Check your email" });
            }
        });


    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getOrderByID = async (req, res) => {
    try {
        const { id } = req.params;

        const order = await Order.findOne({ _id: id });

        if (order) {
            res.status(200).json(order);
        } else {
            res.status(404).json({ message: "Order not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;

        await Order.findByIdAndUpdate(
            { _id: id },
            {
                ...req.body
            },
        );

        res.status(200).json({ message: "Order updated successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



module.exports = { getAllOrders, createOrder, getOrderByID, updateOrder };