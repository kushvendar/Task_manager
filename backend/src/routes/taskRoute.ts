import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { taskInput } from '@kushvendar_99/manager-common';

export const taskRoute = new Hono<{
    Bindings: {
        DATABASE_URL: string
    }
}>();

// to GET all the tasks 
taskRoute.get('/', async(c) =>{
  const body=await c.req.json()

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try {
    const task= await prisma.task.findMany({
      })

    return c.json({
        task
       })

  } catch (e) {
    c.status(500)
    return c.json({
      message:"Error while fetching data"
    })
  }

 


})

// to POST a new task
taskRoute.post('/', async(c) => {

  const body=await c.req.json()

  const { success }=taskInput.safeParse(body)

  if(!success){
    c.status(411)
    return c.json({
      message:"incorrect input"
    })
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

 const task= await prisma.task.create({
    data: {
      id:1,
      title:body.title,
      description:body.description,
      completed:false
    }
  })

 return c.json({
  id:task.id
 })
})

// to PUT, update the existing task, mark it completed
taskRoute.put('/:id', async(c) => {

  const body=await c.req.json()

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const task= await prisma.task.update({
    where:{
      id:body.id
    },
    data: {
      title:body.title,
      description:body.description,
      completed:false
    }
  })
  
})

// to DELETE the task if completed
taskRoute.delete('/:id', async(c) => {
  
} )
 

