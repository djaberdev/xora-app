import { Header, Hero, Features, Pricing, FAQ, Testimonials, Download, Footer } from "./sections/index.js";

const App = () => (
    <main className="overflow-hidden">
        <Header />
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
        <Testimonials />
        <Download />
        <Footer />
    </main>
)

export default App;