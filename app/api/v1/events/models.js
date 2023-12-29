const mongoose = require('mongoose');

const ticketCategoriesSchema =  new mongoose.Schema({
    type: {
        type: String,
        required: [true, 'Tipe tiket harus diisi'],
        enum: ['PO', 'Online','On-the-spot'],
        validate: (type) => {
            if (!['PO', 'Online', 'On-the-spot'].includes(type)) {
              return 'Tipe tiket harus PO, Online, atau On-the-spot';
            }
          }
    },
    price: {
        type: Number,
        default: 0,
    },
    stock: {
        type: Number,
        default: 0,
    },
    statusTicketCategories: {
        type: Boolean,
        enum: [true, false],
        default: true,
    },
    expired: {
        type: Date,
    },
});

const EventSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [ true, 'Judul harus diisi'],
            minlength: 3,
            maxlength: 50,
        },
        date: {
            type: Date,
            required: [true, 'Tanggal dan waktu harus diisi'],
        },
        about: {
            type: String,
        },
        tagline: {
            type: String,
            required: [true, 'Tagline harus di isi'],
        },
        keyPoint: {
            type: [String],
        },
        venueName: {
            type: String,
            required: [true, 'Tempat acara harus diisi'],
        },
        statusEvent: {
            type: String,
            enum: ['Draft', 'Published'],
            default: 'Draft',
        },
        tickets: {
            type: [ticketCategoriesSchema],
            required: true,
        },
        image: {
            type: mongoose.Types.ObjectId,
            ref: 'Image',
            required: true,
        },
        category: {
            type: mongoose.Types.ObjectId,
            ref: 'Category',
            required: true,
        },
        talent: {
            type: mongoose.Types.ObjectId,
            ref: 'Talent',
            required: true,
        },
    },
        { timestamps: true}
);

module.exports = mongoose.model('Event', EventSchema);