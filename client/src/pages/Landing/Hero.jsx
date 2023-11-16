import { useStore } from '../../store'

function Hero() {
  const { user } = useStore()

  return (
    <>
      <h1>{user ? `Welcome, ${user.email}` : 'Welcome to the Auth App'}</h1>
      <p>The place where everyone comes to authenticate</p>
      {user && (
        <>
          <h3>Here are your hobbies:</h3>
          {user.hobbies.map(hobby => (
            <p key={hobby._id}>{hobby.name}</p>
          ))}
        </>
      )}
    </>
  )
}

export default Hero