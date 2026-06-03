// ─────────────────────────────────────────────
// src/types/index.ts
// Shared types used across 2+ modules.
// Module-specific input/filter/response shapes
// live in their own *.types.ts files.
// ─────────────────────────────────────────────

import {
  Role,
  CareerType,
  ApplicationStatus,
  LeadStatus,
  PartnerType,
} from '@prisma/client'

// Re-export Prisma enums — modules import from here, not @prisma/client directly
export { Role, CareerType, ApplicationStatus, LeadStatus, PartnerType }

// ─── Standard API envelope ───────────────────
export type ApiResponse<T = null> = {
  success: boolean
  data?: T
  message?: string
  error?: string
}

// ─── Pagination ──────────────────────────────
export type PaginationQuery = {
  page?: number
  limit?: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

export type PaginatedResult<T> = {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

// ─── JWT payload (what we sign + decode) ─────
export type JwtPayload = {
  adminId: string
  email: string
  role: Role
  iat?: number
  exp?: number
}

// ─── File upload (Multer → Cloudinary) ───────
export type UploadedFile = {
  fieldname: string
  originalname: string
  mimetype: string
  size: number
  buffer: Buffer
}

export type CloudinaryUploadResult = {
  public_id: string
  secure_url: string
  resource_type: string
  bytes: number
  format: string
}

// ─── Shared sort/filter helpers ──────────────
export type SortOrder = 'asc' | 'desc'

export type IsActiveFilter = {
  is_active?: boolean
}
