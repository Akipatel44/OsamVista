export type RouteToOsamHill = {
  from: string
  distanceKm: number
  duration: string
  via?: string[]
}

export const routesToOsamHill: RouteToOsamHill[] = [
  {
    from: 'Rajkot',
    distanceKm: 114,
    duration: '2 hours 45 minutes',
    via: ['Gondal', 'Virpur', 'Jetpur', 'Dhoraji'],
  },
  {
    from: 'Gondal',
    distanceKm: 71.2,
    duration: '1 hour 47 minutes',
  },
  {
    from: 'Virpur',
    distanceKm: 54,
    duration: '1 hour 18 minutes',
  },
  {
    from: 'Jetpur',
    distanceKm: 41.2,
    duration: '1 hour 4 minutes',
  },
  {
    from: 'Dhoraji',
    distanceKm: 23.4,
    duration: '43 minutes',
  },
]

export function formatDistance(km: number): string {
  return `${km} km`
}

export function formatRouteDistance(route: RouteToOsamHill): string {
  return `${formatDistance(route.distanceKm)} — approximately ${route.duration}`
}

export function formatRouteListItem(route: RouteToOsamHill): string {
  return `${route.from} to Osam Hill: ${formatRouteDistance(route)}`
}
