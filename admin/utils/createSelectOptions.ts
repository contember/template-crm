export const createSelectOptions = (optionsMap: Record<string, string>) => {
  return Object.entries(optionsMap).map(([value, label]) => ({
    value,
    label,
  }))
}
