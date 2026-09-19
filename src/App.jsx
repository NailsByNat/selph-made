import './App.css'
import { useState } from 'react'

const products = [
  { code: 'SM-001', name: 'Heavyweight Hoodie', price: 65, category: 'unisex' },
  { code: 'SM-002', name: 'Essential Tee', price: 30, category: 'unisex' },
  { code: 'SM-003', name: 'Work Pants', price: 70, category: 'unisex' },
  { code: 'SM-004', name: 'Crewneck', price: 55, category: 'unisex' },
  { code: 'SM-005', name: 'Snapback', price: 28, category: 'unisex' },
  { code: 'SM-006', name: 'Sweat Shorts', price: 40, category: 'unisex' },
]

function App() {
  const [contact, setContact] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('all')

  const filteredProducts = products.filter(
    (p) => filter === 'all' || p.category === filter || p.category === 'unisex'
  )

  const updateContact = (field, value) => setContact({ ...contact, [field]: value })

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    if (sending) return
    setSending(true)

    try {
      await fetch('https://formspree.io/f/mkodlqne', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Name: contact.name,
          Email: contact.email,
          Message: contact.message,
        }),
      })
    } catch (err) {
      console.error('Contact form submission failed:', err)
    }

    setSending(false)
    setSent(true)
  }

  return (
    <div className="site">

      {/* TOP TICKER */}
      <div className="ticker">
        <span className="mono">SELPH MADE — EST. 2026 — BUILT FROM SCRATCH — NO HANDOUTS — SELPH MADE — EST. 2026 — BUILT FROM SCRATCH — NO HANDOUTS —</span>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#top" className="logo" onClick={() => setMenuOpen(false)}>SELPH<span className="logo-mark">MADE™</span></a>
        <div className="nav-links">
          <a href="#shop">Shop</a>
          <a href="#story">The Story</a>
          <a href="#contact">Contact</a>
          <a href="#shop" className="nav-cart mono">CART [0]</a>
        </div>
        <button
          className={menuOpen ? 'hamburger open' : 'hamburger'}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="#shop" onClick={() => setMenuOpen(false)}>Shop</a>
          <a href="#story" onClick={() => setMenuOpen(false)}>The Story</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="#shop" className="mono" onClick={() => setMenuOpen(false)}>CART [0]</a>
        </div>
      )}

      {/* HERO */}
      <header className="hero" id="top">
        <span className="graffiti-tag" aria-hidden="true">selph made</span>
        <p className="hero-tag mono">// PROJECT NO. 001 — STATUS: IN PROGRESS</p>
        <h1 className="hero-title">
          Built,<br />Not<br />Given.
        </h1>
        <div className="hero-foot">
          <p className="hero-sub">
            Heavyweight essentials for the ones building their own name.
            Every piece is proof of work.
          </p>
          <a href="#shop" className="btn-ink">Shop The Drop ↓</a>
        </div>
      </header>
      {/* SHOP */}
      <section className="shop" id="shop">
        <div className="shop-head">
          <h2 className="shop-title">The Drop</h2>
          <p className="mono shop-count">[ {filteredProducts.length} PIECES — MORE IN PROGRESS ]</p>
        </div>

        <div className="shop-filters">
          <button
            className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={filter === 'men' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('men')}
          >
            Men's
          </button>
          <button
            className={filter === 'women' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('women')}
          >
            Women's
          </button>
        </div>

        <div className="shop-grid">
          {filteredProducts.map((p) => (
            <div className="product" key={p.code}>
              <div className="product-img">
                <span className="mono product-code">{p.code}</span>
                <span className="mono product-photo">PHOTO COMING SOON</span>
              </div>
              <div className="product-info">
                <h3>{p.name}</h3>
                <p className="product-price mono">${p.price}</p>
              </div>
              <button className="product-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
      {/* STORY */}
      <section className="story" id="story">
        <div className="story-grid">
          <div className="story-label">
            <p className="mono">// THE STORY</p>
          </div>
          <div className="story-content">
            <h2 className="story-title">Nobody Handed Us This.</h2>
            <p className="story-text">
              Selph Made was built the same way everything worth having gets built —
              from scratch, on late nights, with no shortcuts and no cosigners.
            </p>
            <p className="story-text">
              Every piece in this collection is a receipt. Proof that you can start
              with nothing but your own name and turn it into something people wear
              with pride. This isn't just clothing. It's documentation of the grind.
            </p>
            <p className="story-text gold-line">
              If you're building your own name too — this was made for you.
            </p>
            <p className="mono story-sig">— SELPH MADE, EST. 2026</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact-grid">
          <div className="contact-label">
            <p className="mono">// GET IN TOUCH</p>
          </div>
          <div className="contact-content">
            <h2 className="contact-title">Say Something.</h2>
            <p className="contact-text">
              Questions about a piece, wholesale, collabs, or just want to say what's up —
              drop a line below and we'll get back to you.
            </p>

            {sent ? (
              <p className="mono contact-success">MESSAGE RECEIVED — WE'LL BE IN TOUCH.</p>
            ) : (
              <form className="contact-form" onSubmit={handleContactSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={contact.name}
                  onChange={(e) => updateContact('name', e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={contact.email}
                  onChange={(e) => updateContact('email', e.target.value)}
                />
                <textarea
                  placeholder="Message"
                  rows="5"
                  required
                  value={contact.message}
                  onChange={(e) => updateContact('message', e.target.value)}
                />
                <button type="submit" className="btn-ink" disabled={sending}>
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p className="mono">SELPH MADE™ — BUILT, NOT GIVEN.</p>
        <p className="mono footer-fine">© 2026 SELPH MADE. ALL RIGHTS RESERVED.</p>
      </footer>

    </div>
  )
}

export default App
