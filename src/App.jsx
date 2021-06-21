import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import './App.scss'
import Logo from './assets/undraw_my_app_re_gxtj.svg'


export default function App() {
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(nome, senha)
        history.push('/login')
    }

    return (
        <div className="container">
            <img src={Logo} alt="Logo" />
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    placeholder="Nome"
                    onChange={e => setNome(e.target.value)}
                    value={nome}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    onChange={e => setSenha(e.target.value)}
                    value={senha}
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}