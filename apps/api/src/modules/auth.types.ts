import { Role } from "../types/index.js"

export interface Admin {
  id : string
  name : string
  email : string
  password_hash : string
  role  : Role
  is_active  : boolean
  last_login_at : Date | null
  refresh_token : string | null
  token_expires_at : Date | null
  created_at : Date 
  updated_at : Date 
}
