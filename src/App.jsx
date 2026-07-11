import './App.css'

function App() {
  return (
    <div className="site">

      {/* TOP TICKER */}
      <div className="ticker">
        <span className="mono">SELPH MADE — EST. 2026 — BUILT FROM SCRATCH — NO HANDOUTS — SELPH MADE — EST. 2026 — BUILT FROM SCRATCH — NO HANDOUTS —</span>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#top" className="logo">SELPH<span className="logo-mark">MADE™</span></a>
        <div className="nav-links">
          <a href="#shop">Shop</a>
          <a href="#story">The Story</a>
          <a href="#shop" className="nav-cart mono">CART [0]</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero" id="top">
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
          <p className="mono shop-count">[ 6 PIECES — MORE IN PROGRESS ]</p>
        </div>

        <div className="shop-grid">

          <div className="product">
            <div className="product-img">
              <span className="mono product-code">SM-001</span>
              <span className="mono product-photo">PHOTO COMING SOON</span>
            </div>
            <div className="product-info">
              <h3>Heavyweight Hoodie</h3>
              <p className="product-price mono">$65</p>
            </div>
            <button className="product-btn">Add to Cart</button>
          </div>

          <div className="product">
            <div className="product-img">
              <span className="mono product-code">SM-002</span>
              <span className="mono product-photo">PHOTO COMING SOON</span>
            </div>
            <div className="product-info">
              <h3>Essential Tee</h3>
              <p className="product-price mono">$30</p>
            </div>
            <button className="product-btn">Add to Cart</button>
          </div>

          <div className="product">
            <div className="product-img">
              <span className="mono product-code">SM-003</span>
              <span className="mono product-photo">PHOTO COMING SOON</span>
            </div>
            <div className="product-info">
              <h3>Work Pants</h3>
              <p className="product-price mono">$70</p>
            </div>
            <button className="product-btn">Add to Cart</button>
          </div>

          <div className="product">
            <div className="product-img">
              <span className="mono product-code">SM-004</span>
              <span className="mono product-photo">PHOTO COMING SOON</span>
            </div>
            <div className="product-info">
              <h3>Crewneck</h3>
              <p className="product-price mono">$55</p>
            </div>
            <button className="product-btn">Add to Cart</button>
          </div>

          <div className="product">
            <div className="product-img">
              <span className="mono product-code">SM-005</span>
              <span className="mono product-photo">PHOTO COMING SOON</span>
            </div>
            <div className="product-info">
              <h3>Snapback</h3>
              <p className="product-price mono">$28</p>
            </div>
            <button className="product-btn">Add to Cart</button>
          </div>

          <div className="product">
            <div className="product-img">
              <span className="mono product-code">SM-006</span>
              <span className="mono product-photo">PHOTO COMING SOON</span>
            </div>
            <div className="product-info">
              <h3>Sweat Shorts</h3>
              <p className="product-price mono">$40</p>
            </div>
            <button className="product-btn">Add to Cart</button>
          </div>

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

      {/* FOOTER */}
      <footer className="footer">
        <p className="mono">SELPH MADE™ — BUILT, NOT GIVEN.</p>
        <p className="mono footer-fine">© 2026 SELPH MADE. ALL RIGHTS RESERVED.</p>
      </footer>

    </div>
  )
}

export default App
