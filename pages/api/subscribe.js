import { GoogleSpreadsheet } from 'google-spreadsheet'

const EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i

const documentId = process.env.DOCUMENT_ID
const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET

export default async function handler(req, res) {
  const body = req.body || {}
  let email = body.email || ""

  const isEmail = email => {
    if (!email) return false // undefined
    if (typeof email !== "string") return false // not a string
    return EMAIL_REGEXP.test(email)
  }

  if (req.method !== 'POST')
    return res.status(404).end()

  if (!isEmail(email)) {
    console.error("Invalid email:", { email })
    return res.status(400).end("Invalid email")
  }

  const doc = new GoogleSpreadsheet(documentId)

  await doc.useServiceAccountAuth({
    client_email: clientId,
    private_key: clientSecret.replace(/\\n/g, '\n'),
  })

  await doc.loadInfo()

  let sheet = doc.sheetsByIndex[0]

  if (!sheet) {
    sheet = await doc.addSheet({ title })
    await sheet.setHeaderRow(['email', 'addedAt'])
  }

  await sheet.addRow({ email, addedAt: Date.now() })

  res.writeHead(302, { Location: '/?signup=success' }).end()
}
