import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import './App.css';
import reactLogo from './assets/react.svg';
import elysiaLogo from './assets/elysia.svg';
import viteLogo from '/vite.svg';
import { useState } from 'react';
import { treaty } from '@elysiajs/eden';
const SERVER_URL = import.meta.env.VITE_SERVER_URL || 'http://localhost:3000';
const api = treaty(SERVER_URL);
function App() {
    const [data, setData] = useState();
    async function sendRequest() {
        try {
            const { data } = await api.hello.get();
            setData(data);
        }
        catch (error) {
            console.log(error);
        }
    }
    return (_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsx("a", { href: 'https://vite.dev', target: '_blank', children: _jsx("img", { src: viteLogo, className: 'logo', alt: 'Vite logo' }) }), _jsx("a", { href: 'https://react.dev', target: '_blank', children: _jsx("img", { src: reactLogo, className: 'logo react', alt: 'React logo' }) }), _jsx("a", { href: 'https://elysiajs.com/', target: '_blank', children: _jsx("img", { src: elysiaLogo, className: 'logo elysia', alt: 'Elysia logo' }) })] }), _jsx("h1", { children: "elysia-react-monorepo" }), _jsx("h2", { children: "Bun + Elysia + Vite + React" }), _jsx("p", { children: "A typesafe fullstack monorepo" }), _jsxs("div", { className: 'card', children: [_jsx("div", { className: 'button-container', children: _jsx("button", { onClick: sendRequest, children: "Call API" }) }), data && (_jsx("pre", { className: 'response', children: _jsxs("code", { children: ["Message: ", data.message, " ", _jsx("br", {}), "Success: ", data.success.toString()] }) }))] })] }));
}
export default App;
