import { LeadStatus } from "../types/index.js"

export interface ContactSubmission {
    id : string    
    name : string
    email : string
    phone : string | null
    subject : string | null
    message : string
    is_read : boolean
    status : LeadStatus
    admin_notes : string | null 
    submitted_at : Date
    updated_at : Date
}