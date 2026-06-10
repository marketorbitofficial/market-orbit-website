import {Router} from 'express'

const router = Router()

router.get('/',(req,res)=>{
    res.json({message:'career routes working'})
})

router.get('/:id',(req,res)=>{
    res.json({message:'career id routes working'})
})

router.post('/:id/apply',(req,res)=>{
    res.json({message:'apply routes working'})
})

router.get('/admin',(req,res)=>{
    res.json({message: 'list all jobs route working'})
})

router.post('/admin',(req,res)=>{
    res.json({message: 'new job listing creation routes working'})
})

router.patch('/admin/:id',(req,res)=>{
    res.json({message:'edit job listing route working'})
})

router.delete('/admin/:id',(req,res)=>{
    res.json({message:'delete job listing route working'})
})

router.get('/admin/:id/applications',(req,res)=>{
    res.json({message:'list application for jobs route working'})
})

router.patch('/admin/applications/:id',(req,res)=>{
    res.json({messsage:'update application status route working'})
})


export default router