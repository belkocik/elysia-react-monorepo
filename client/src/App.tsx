import './App.css'
import reactLogo from './assets/react.svg'
import elysiaLogo from './assets/elysia.svg'
import viteLogo from '/vite.svg'
import { useState } from 'react'
import type { App as BackendApp } from '@server/index'
import { treaty } from '@elysiajs/eden'

const SERVER_URL = import.meta.env.VITE_SERVER_URL || 'http://localhost:9999'
const api = treaty<BackendApp>(SERVER_URL)

type HelloResponse = Awaited<ReturnType<typeof api.hello.get>>['data']

function App() {
  const [data, setData] = useState<HelloResponse>()

  async function sendRequest() {
    try {
      const { data } = await api.hello.get()
      setData(data)
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
