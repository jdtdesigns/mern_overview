const heroStyles = {
  padding: '45px',
  h1Styles: {
    color: 'blue'
  }
}

function Hero({ user }) {
  return (
    <div style={heroStyles}>
      <h1 style={heroStyles.h1Styles}>{user ? `Welcome, ${user.email}` : 'Welcome to the Auth App'}</h1>
      <p>The place where everyone comes to authenticate</p>
    </div>
  )
}

export default Hero