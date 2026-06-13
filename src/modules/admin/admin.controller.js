import Order from "../../models/orders.model.js";
import Product from "../../models/products.model.js";
import Customer from "../../models/customers.model.js";
import Vendor from "../../models/vendors.model.js";
import express from "express";
import mongoose from "mongoose";
import UsersAuth from "../../models/usersAuth.model.js";
import bcrypt from 'bcrypt';
// GET /admin/pending-sellers | Auth required (admin) | list sellers awaiting approval
export const getPendingSellers = async (req, res, next) => {
    try {
        const currentUserRole = req.user?.role;
        const authId = req.user?.authId;
        
        if (!authId) {
            return res.status(401).json({ message: "Unauthorized: User ID not found in session" });
        }
        if (currentUserRole !== 'admin') {
            return res.status(403).json({ message: "Forbidden: Unauthorized access" });
        }

        const page = parseInt(req.query.page, 10) || 1;   
        const limit = parseInt(req.query.limit, 10) || 10; 
        const skip = (page - 1) * limit;

        const allPendingSellerIds = await UsersAuth.distinct(
            "_id", 
            { role: "vendor", accountStatus: "pending" }
        );

        const totalVendors = allPendingSellerIds.length;

        //Slice the IDs array for pagination OR let the second query handle skip/limit
        const paginatedIds = allPendingSellerIds.slice(skip, skip + limit);

        const pendingSellers = await Vendor.find({ 
            authId: { $in: paginatedIds } 
        }).lean(); // .lean() makes this dashboard query much faster

        return res.status(200).json({ 
            success: true, 
            pagination: {
                totalVendors,
                currentPage: page,
                totalPages: Math.ceil(totalVendors / limit),
                limit
            },
            count: pendingSellers.length, // Shows how many are on THIS page
            pendingSellers 
        });
        
    } catch (error) {
        console.log(error)
        next(error);
    }
};