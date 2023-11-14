import Hero from './Hero'
// import './landing.scss'

const landingStyles = {
  background: 'red'
}

function Landing({ user }) {
  return (
    <>
      <section style={landingStyles} className="text-center pt-5">
        <Hero user={user} />
      </section>
    </>
  )
}

export default Landing