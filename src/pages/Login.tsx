import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    try {
      setLoading(true)
      setError('')

      const response = await api.post('/user/login', {
        username,
        password,
      })

      console.log('Login response:', response.data)

      localStorage.setItem('accessToken', response.data.accessToken)

      navigate('/')
    } catch (error) {
      console.error('Login error:', error)
      setError('Invalid username or password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">

      <div className="max-w-md mx-auto">

        <h1 className="text-4xl font-bold text-gray-900 text-center">
          Login
        </h1>

        <p className="text-gray-500 text-center mt-2">
          Login to your ShopSphere account
        </p>

        <form
          onSubmit={handleSubmit}
          className="border border-gray-200 rounded-xl p-6 mt-8"
        >

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>

            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Enter username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-600"
            />
          </div>

          <div className="mt-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-600"
            />
          </div>

          {error && (
            <p className="text-red-600 text-sm mt-4">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

        </form>

      </div>

    </main>
  )
}

export default Login