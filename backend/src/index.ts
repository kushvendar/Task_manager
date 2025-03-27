import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {taskRoute} from './routes/taskRoute'
import { cors } from 'hono/cors'

const app=new Hono()

app.use('/api/*', cors())

app.route('/api/v1/task',taskRoute)


export default app