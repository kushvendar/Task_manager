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

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try {
    const task= await prisma.task.findMany({
      })

    return c.json({
        task:task
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

try {
  const task= await prisma.task.create({
    data: {
      title:body.title,
      description:body.description,
      // for this boolean write a different logic which will turn it to ture when clicked marking task complete and cuttline effect
      completed:false
    }
  })

 return c.json({
  id:task.id
 })
} catch (error) {
  return c.json({message:"task cannot be created"},404)
}
})

//1.  to PUT, update the existing task, 
taskRoute.put('/:id', async(c) => {

  const body = await c.req.json()
  const id = Number(c.req.param("id"))

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try {
    const task= await prisma.task.update({
      where:{
        id:id
      },
      data: {
        title:body.title,
        description:body.description,
      }
    })
    return c.json(task)
  } catch (error) {
    return c.json({ error: "Failed to update task" }, 500);
  }
  
})

// 2. update to mark task as done check the url
taskRoute.put('/:id', async(c) => {

  // Expecting true or false
  const body = await c.req.json()  

  const id = Number(c.req.param("id"))

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try {
    const updatedTask= await prisma.task.update({
      where:{
        id:id
      },
      data: {
        completed:body.completed
      }
    })
    return c.json(updatedTask)
  } catch (error) {
    return c.json({ error: "Failed to update task or task not found" }, 404);
  }
  
})
// to DELETE the task if completed
taskRoute.delete('/:id', async(c) => {
  const id = Number(c.req.param("id"))
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try {
    const deletedTask = await prisma.task.delete({
      where: { id },
    });
    // after clicking on delete refetch the list and task.map all the tasks
    return c.json({ message: "Task deleted successfully", deletedTask });
  } catch (error) {
    return c.json({ error: "Task not found or already deleted" }, 404);
  }
} )
 

