import type { AuthTypes, TierTypes } from './index'

export interface UserSchema {
  userId?: string
  email?: string
  passwordHash?: string
  accountCreatedDate?: string
  firstName?: string
  lastName?: string
  tier?: TierTypes
  premiumSignUpDate?: string
  premiumEndDate?: string
  numberOfVisits?: string
  lastLoginDate?: string
  emailVerified?: number
  authMethod?: AuthTypes
  verificationToken?: string
  numberOfIncorrectPasswordAttempts?: number
  verificationTokenHash?: string
  verificationTokenExpires?: number
}
