// ─────────────────────────────────────────────
// src/types/express.d.ts
// Augments Express Request so req.admin is
// type-safe in every controller and middleware.
// ─────────────────────────────────────────────

import { JwtPayload } from './index'

declare global {
  namespace Express {
    interface Request {
      admin?: JwtPayload          // set by auth.middleware after JWT verification
      rawBody?: Buffer            // set by bodyParser for webhook signature checks
    }
  }
}

export {}