import type { Media, Profile } from '../../payload-types'

export const fetchProfile = async (): Promise<Profile> => {
  const profile: Profile = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/profiles`)
    .then(res => res.json())
    .then(res => res?.docs?.[0])

  return profile
}

export const fetchMediaInfo = async (id: string): Promise<Media> => {
  const media: Media = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/media/${id}`).then(
    res => res.json(),
  )

  return media
}
