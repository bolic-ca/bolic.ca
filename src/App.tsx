import Header from './components/Header'
import Hero from './components/Hero'
import AppSection from './components/AppSection'
import Cta from './components/Cta'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-[1000] opacity-[0.025] grain" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <AppSection />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
