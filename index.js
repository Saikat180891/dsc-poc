const contentful = require('contentful-management')

const client = contentful.createClient({
  accessToken: 'CFPAT-QFd9MXIgRd6FQ3YUzztPhoY7Tu4dRG6K2I43VCfV6yw'
})

client.getSpace('mhnpq5164yqq')
.then((space) => space.getEnvironment('production'))
.then((environment) => environment.getEntry('6dukR5WSIXzs4iWJ5xuT7h'))
.then((entry) => {

  console.log("entry", JSON.stringify(entry, null, 2))
  entry.fields.title['en-US'] = "suhaas"
  entry.fields.heroImage['en-US'] = {
    "sys": {
      "type": "Link",
      "linkType": "Asset",
      "id": "7laXBH0lHujfMCx2Cb3fvB"
    }
  }
  return entry.update()
})
.then((entry) => console.log(`Entry ${entry.sys.id} updated.`))
.catch(console.error)
