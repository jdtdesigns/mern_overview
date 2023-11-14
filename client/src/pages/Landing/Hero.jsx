import { useStore } from '../../store'

function Hero() {
  const { user } = useStore()

  return (
    <>
      <h1>{user ? `Welcome, ${user.email}` : 'Welcome to the Auth App'}</h1>
      <p>The place where everyone comes to authenticate</p>
    </>
  )
}

export default Hero