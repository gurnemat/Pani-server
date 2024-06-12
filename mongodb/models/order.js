const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
  deliveryDate: {
    type: Date,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, 'Quantity must be positive']
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [2, 'Name must be at least 2 characters long'],
    maxlength: [50, 'Name must be at most 50 characters long']
  },
  deliveryAddress: {
    type: String,
    required: [true, 'Delivery address is required']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    match: [/^[0-9]+$/, 'Phone number must be numeric']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^\S+@\S+\.\S+$/, 'Invalid email address']
  },
  scheduleRepeat: {
    type: String,
    enum: ['no-repeat', 'daily', 'weekly', 'monthly', 'custom'],
    default: 'no-repeat'
  },
  repeatEvery: {
    type: String,
    default: null
  },
  repeatUnit: {
    type: String,
    enum: ['day', 'week', 'month'],
    default: null
  },
  repeatOn: {
    type: String,
    enum: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
    default: null
  },
  totalAmount: {
    type: Number,
    default: 0
  },
  waterType: {
    type: String,
  }
}, {
  timestamps: true
});

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

module.exports = Order;