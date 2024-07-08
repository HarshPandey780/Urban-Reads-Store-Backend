import express from 'express'
import bcryptjs from 'bcryptjs'
import { Admin } from './models/Admin.js'
import './db.js'

async function AdminAccount() {
try {
    const amdinCount = await Admin.countDocuments()
    if(amdinCount === 0) {
        const hashPassword = await bcryptjs.hash('adminpassword', 10)
        const newAmdin = new Admin({
            username: 'admin',
            password: hashPassword
        })
        await newAmdin.save()
        console.log("account created")
    } else {
        console.log("account already existed")
    }
} catch(err) {
    console.log("error")
}
}

AdminAccount()