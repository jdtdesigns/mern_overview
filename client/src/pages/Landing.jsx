function Landing({ user }) {
  return (
    <>
      <section className="text-center pt-5">
        <h1>{user ? `Welcome, ${user.email}` : 'Welcome to the Auth App'}</h1>
        <p>The place where everyone comes to authenticate</p>
      </section>
    </>
  )
}

export default Landing