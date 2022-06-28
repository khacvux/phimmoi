import { Express } from "express";
import user from './user'
import admin from './admin'

export default function router(app: Express) {
    app.use('/user', user)
    app.use('/admin', admin)
} 