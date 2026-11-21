const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            lowercase: true,
            required: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            select: false
        },
        avatar: {
            secure_url: {
                type: String
            },
            public_id: {
                type: String
            }
        }
        ,
        emailVerified: {
            type: Boolean,
            default: false
        },
        emailVerificationToken: {
            type: String,
            select: false
        },
        verificationTokenExpiresAt: {
            type: Date,
            select: false
        },
        passwordResetToken: {
            type: String,
            default: null,
            select: false
        },
        passwordResetTokenExpiresAt: {
            type: Date,
            default: null,
            select: false
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("User" , UserSchema)