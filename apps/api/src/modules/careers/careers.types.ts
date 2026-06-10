import { CareerType, ApplicationStatus } from "@prisma/client"
export interface Career  {
  id  : string
  title : string
  type : CareerType
  department : string | null
  location  : string | null
  description : string | null
  requirements : string | null
  salary_range : string | null
  is_active : boolean
  posted_at : Date
  expires_at : Date | null
  created_at : Date
  updated_at  : Date

  created_by_id : string | null
}

export interface CareerApplication {
  id  : string
  career_id : string
  name  : string
  email  : string
  phone  : string | null
  resume_url : string | null
  cover_letter : string | null
  status : ApplicationStatus
  admin_notes : string | null
  applied_at : Date
  updated_at : Date
}