export interface Service {
  id : string
  slug : string
  title : string
  tagline : string | null
  overview : string | null
  // Structured JSON arrays — see types below:
  // solutions:    [{ title, description }]
  // process_steps:[{ step, title, description }]
  // extra_section: flexible per-service unique section
  solutions  : any | null
  process_steps : any | null
  extra_section : any | null // e.g. "Media Opportunities" for PR, "Deliverables" for SMM
  icon_url    : string | null
  cover_image_url : string | null
  is_active : boolean
  sort_order : number
  created_at : Date
  updated_at   : Date

  created_by_id : string | null
  updated_by_id : string | null
}

export interface FAQ {
  id  : string
  service_id : string | null // null = global / about page FAQ
  question : string
  answer  : string
  sort_order : number
  is_active  : boolean
  created_at : Date
  updated_at : Date
}