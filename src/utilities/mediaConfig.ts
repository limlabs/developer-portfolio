import { serverUrl } from './serverConfig'

export const getMediaUrl = (path: string) => {
  return `${serverUrl}${path}`
}
