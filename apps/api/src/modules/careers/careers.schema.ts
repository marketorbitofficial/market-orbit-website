import {z} from 'zod'


export const createCareerSchema = z.object({
  title: z.string(),
  type: z.enum(['FULL_TIME', 'PART_TIME', 'CONTRACT', 'INTERNSHIP', 'REMOTE']),         
  department: z.string().optional(),    
  location: z.string().optional(),     
  description:z.string().optional(),   
  requirements:z.string().optional() ,  
  salary_range: z.string().optional(), 
  expires_at: z.date().optional() ,    
  is_active: z.boolean().optional(),     
})

export const updateCareerSchema = createCareerSchema.partial()

export const applyCareerSchema  = z.object({
    name : z.string(),
    email :z.string().email(),
    phone : z.string().optional(),
    resume_url : z.string().optional(),
    cover_letter : z.string().optional()
})