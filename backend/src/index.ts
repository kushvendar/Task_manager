import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {taskRoute} from './routes/taskRoute'

const app=new Hono()

app.route('/api/v1/task',taskRoute)


export default app