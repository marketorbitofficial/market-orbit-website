export const ROUTES = {
  home: '/home',
  about: '/about',
  services: '/services',
  whyMarketOrbit: '/why-market-orbit',
  partner: '/partner',
  careers: '/careers',
  contact: '/contact',
} as const

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES]
