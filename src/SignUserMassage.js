import React, {useState} from "react"
import * as fcl from "@onflow/fcl"
import styled from 'styled-components'

const Card = styled.div`
  margin: 10px 5px;
  padding: 10px;
  border: 1px solid #c0c0c0;
  border-radius: 5px;
`

const Header = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`

const Code = styled.pre`
  background: #f0f0f0;
  border-radius: 5px;
  max-height: 300px;
  overflow-y: auto;
  padding: 5px;
`

const simpleTransaction = `\
transaction {
  execute {
    log("Hello World!!")
  }
}
`

const SendTransaction = () => {
  const [responseText, setResponseText] = useState(null)

  const signUserMassage = async (event) => {
    event.preventDefault()
    
    const message = Buffer.from("this is test massage", 'utf8').toString("hex");
   
    try {
      const response =  await fcl.currentUser().signUserMessage(message)
      console.log(response)
      setResponseText(JSON.stringify(response))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Card>
      <Header>sign user massage</Header>

      <button onClick={signUserMassage}>
        Sign
      </button>

      {responseText && <Code>{JSON.stringify(responseText, null, 2)}</Code>}
    </Card>
  )
}

export default SendTransaction
