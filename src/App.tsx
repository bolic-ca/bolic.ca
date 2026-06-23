import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import AppSection from './components/AppSection'
import Cta from './components/Cta'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-[1000] opacity-[0.035] grain" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <Features />
        <AppSection />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
