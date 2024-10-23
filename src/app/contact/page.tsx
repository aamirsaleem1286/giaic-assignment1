import React from 'react'

const ContactPage = async () => {
  await new Promise(resolve=>{ setTimeout(resolve,5000)})

throw new Error("waha bhaeeeeeeeee waha.")


  return (
    <div>
      this is contact page
    </div>
  )
}

export default ContactPage
