export const get = (key: string): object => {
  const data = localStorage.getItem(key)

  return data ? JSON.parse(data) : null
}

export const set = (key: string, data: object) => {
  localStorage.setItem(key, JSON.stringify(data))
}
