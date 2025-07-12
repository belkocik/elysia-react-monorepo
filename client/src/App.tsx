import { useState } from 'react'
import reactLogo from './assets/react.svg'
import elysiaLogo from './assets/elysia.svg'
import viteLogo from '/vite.svg'
import type { ApiResponse } from 'shared'
import './App.css'

const SERVER_URL = import.meta.env.VITE_SERVER_URL || 'http://localhost:3000'

function App() {
  const [data, setData] = useState<ApiResponse | undefined>()

  async function sendRequest() {
    try {
      const req = await fetch(`${SERVER_URL}/hello`)
      const res: ApiResponse = await req.json()
      setData(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
        <a href='https://elysiajs.com/' target='_blank'>
          <img src={elysiaLogo} className='logo elysia' alt='Elysia logo' />
        </a>
      </div>
      <h1>elysia-react-monorepo</h1>
      <h2>Bun + Elysia + Vite + React</h2>
      <p>A typesafe fullstack monorepo</p>
      <div className='card'>
        <div className='button-container'>
          <button onClick={sendRequest}>Call API</button>
        </div>
        {data && (
          <pre className='response'>
            <code>
              Message: {data.message} <br />
              Success: {data.success.toString()}
            </code>
          </pre>
        )}
      </div>
    </>
  )
}

export default App
