import { PartnerType, LeadStatus } from "../types/index.js"
export interface PartnerInquiry {
  id : string
  company_name : string
  contact_name : string
  email  : string
  phone : string | null
  partnership_type : PartnerType | null
  message : string | null
  is_read  : boolean
  status : LeadStatus
  admin_notes : string | null
  submitted_at : Date
  updated_at : Date
}