import './App.scss'
import { Navbar } from './components/Navbar/Navbar.tsx'
import { Hero } from './components/Hero/Hero.tsx'
import { LanguageProvider } from './context/languageContext.tsx'
import { Brands } from './components/Brands/Brands.tsx'
import { Features } from './components/Features/Features.tsx'
import { Advice } from './components/Advice/Advice.tsx'
import { Smartest } from './components/Smartest/Smartest.tsx'
import { Pricing } from './components/Pricing/Pricing.tsx'
import { Future } from './components/Future/Future.tsx'
import { Footer } from './components/Footer/Footer.tsx'
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop.tsx'

function App() {
    return (
        <LanguageProvider>
            <Navbar />
            
            <main>
                <Hero />
                <Brands />
                <Features />
                <Advice />
                <Smartest />
                <Pricing />
                <Future />
            </main>
            <Footer />
            <ScrollToTop />
        </LanguageProvider>
    )
}

export default App
