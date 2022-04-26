import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: 'auv066q3',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: true,
  token: 'sksFVPNLb6R07ROqMTMVcyhbySgEIxVfTUqHcHpDtcj5Dd32vBryCzoZ5RkHCwgVPm9H8nJfIq1nyRuRVM8CeSZXk5DaxqVSpg5vYJsslQM30OfGCnFayatMbIQ1RBXRmY2Xpev8XDHyhObBnn70DNwxjXmXDJKLfbrPMxP7wXgnHcL9gKCD'
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)
