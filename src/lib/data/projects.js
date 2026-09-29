import portfolio from './portfolio.json'

export function toProjectSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export const projects = portfolio.projects.map((project) => ({
  ...project,
  slug: toProjectSlug(project.name),
}))

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}
