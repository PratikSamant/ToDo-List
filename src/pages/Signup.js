import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

export default function Signup() {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const { signup, error} = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email, password)
    }

  return (
    <div>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Email-id: </span>
                <input 
                    required
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>
            <label>
                <span>Password: </span>
                <input 
                    required
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </label>
            <button>Submit</button>
            {error && <p>{error}</p>}
        </form>
    </div>
  )
}
