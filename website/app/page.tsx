export default function Home() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

const content = `
<!-- NAV -->
<nav>
  <a href="#" class="logo">Home<span>·</span>Habit</a>
  <ul>
    <li><a href="#services">Systems</a></li>
    <li><a href="#immersive">Environments</a></li>
    <li><a href="#process">Process</a></li>
  </ul>
  <a href="#contact" class="nav-cta">Begin a Project</a>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-l">
    <div class="eyebrow">Custom Home Automation</div>
    <h1>
      Your Home,<br>
      <em>Your Habits</em>
      <span class="sub">On Autopilot</span>
    </h1>
    <p class="hero-body">
      We design and build fully bespoke smart home systems — from AI voice interfaces
      and plant monitoring networks to immersive light, laser, and projection environments.
      Complexity hidden behind calm surfaces.
    </p>
    <div class="btns">
      <a href="#contact" class="btn btn-fill">Begin a Project</a>
      <a href="#services" class="btn btn-line">Explore Systems</a>
    </div>
  </div>

  <div class="hero-r">
    <div class="illustration">
      <img src="/hero.jpg" alt="Da Vinci Creation — human hand reaching toward robot arm" style="width:100%;height:100%;object-fit:cover;border-radius:8px;" />
    </div>
  </div>
</section>

<!-- STATEMENT BAR -->
<div class="statement">
  <span class="stmt-mark">HomeHabit</span>
  <p>"Soft power expressed through materials, science, and restraint."</p>
  <span class="stmt-mark">Est. 2026</span>
</div>

<!-- QUOTE BREAK -->
<div class="quote-break">
  <div class="quote-inner">
    <svg class="quote-mark" width="32" height="28" viewBox="0 0 32 28" fill="none">
      <path d="M0 28V16.8C0 11.2 2.1 6.4 6.3 2.4L9.1 0L12.6 3.2C10.5 5.1 9 7.2 8 9.5C7 11.7 6.5 14 6.5 16.4H13V28H0ZM19 28V16.8C19 11.2 21.1 6.4 25.3 2.4L28.1 0L31.6 3.2C29.5 5.1 28 7.2 27 9.5C26 11.7 25.5 14 25.5 16.4H32V28H19Z" fill="#A08550" opacity="0.4"/>
    </svg>
    <blockquote>The future has an ancient heart.</blockquote>
    <cite>— Carlo Levi</cite>
  </div>
</div>

<!-- VISUAL PHILOSOPHY -->
<section class="philosophy">
  <div class="phil-header">
    <div class="sec-eyebrow">The philosophy</div>
    <h2 class="sec-h2">Nature <em>Instrumented.</em><br>Data <em>Made Sensual.</em></h2>
    <p class="phil-sub">Every system we build lives at the threshold between the organic and the technical. Science in service of the living.</p>
  </div>

  <div class="phil-grid">
    <div class="phil-panel">
      <div class="phil-label">01 — Organic intelligence</div>
      <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" width="100%">
        <rect width="400" height="400" fill="#1A0F0B"/>
        <line x1="0" y1="100" x2="400" y2="100" stroke="#A08550" stroke-width="0.3" opacity="0.12"/>
        <line x1="0" y1="200" x2="400" y2="200" stroke="#A08550" stroke-width="0.3" opacity="0.12"/>
        <line x1="0" y1="300" x2="400" y2="300" stroke="#A08550" stroke-width="0.3" opacity="0.12"/>
        <line x1="100" y1="0" x2="100" y2="400" stroke="#A08550" stroke-width="0.3" opacity="0.12"/>
        <line x1="200" y1="0" x2="200" y2="400" stroke="#A08550" stroke-width="0.3" opacity="0.12"/>
        <line x1="300" y1="0" x2="300" y2="400" stroke="#A08550" stroke-width="0.3" opacity="0.12"/>
        <path d="M 200 380 Q 195 320 200 260 Q 205 200 200 140" fill="none" stroke="#6B4A2A" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M 193 300 Q 160 275 148 250 Q 170 258 185 275 Q 190 285 193 300 Z" fill="#7A7A56" opacity="0.7"/>
        <path d="M 207 265 Q 240 242 255 218 Q 234 228 218 246 Q 210 255 207 265 Z" fill="#7A7A56" opacity="0.55"/>
        <ellipse cx="200" cy="115" rx="28" ry="52" fill="#EDE5D4" opacity="0.18" transform="rotate(0,200,115)"/>
        <ellipse cx="200" cy="115" rx="28" ry="52" fill="#EDE5D4" opacity="0.15" transform="rotate(45,200,140)"/>
        <ellipse cx="200" cy="115" rx="28" ry="52" fill="#EDE5D4" opacity="0.15" transform="rotate(90,200,140)"/>
        <ellipse cx="200" cy="115" rx="28" ry="52" fill="#EDE5D4" opacity="0.15" transform="rotate(135,200,140)"/>
        <ellipse cx="200" cy="115" rx="28" ry="52" fill="#EDE5D4" opacity="0.15" transform="rotate(180,200,140)"/>
        <ellipse cx="200" cy="115" rx="28" ry="52" fill="#EDE5D4" opacity="0.15" transform="rotate(225,200,140)"/>
        <ellipse cx="200" cy="115" rx="28" ry="52" fill="#EDE5D4" opacity="0.13" transform="rotate(270,200,140)"/>
        <ellipse cx="200" cy="115" rx="28" ry="52" fill="#EDE5D4" opacity="0.13" transform="rotate(315,200,140)"/>
        <ellipse cx="200" cy="115" rx="28" ry="52" fill="none" stroke="#C4A96A" stroke-width="0.6" opacity="0.35" transform="rotate(0,200,115)"/>
        <ellipse cx="200" cy="115" rx="28" ry="52" fill="none" stroke="#C4A96A" stroke-width="0.6" opacity="0.3" transform="rotate(60,200,140)"/>
        <ellipse cx="200" cy="115" rx="28" ry="52" fill="none" stroke="#C4A96A" stroke-width="0.6" opacity="0.3" transform="rotate(120,200,140)"/>
        <ellipse cx="200" cy="115" rx="28" ry="52" fill="none" stroke="#C4A96A" stroke-width="0.6" opacity="0.3" transform="rotate(180,200,140)"/>
        <ellipse cx="200" cy="115" rx="28" ry="52" fill="none" stroke="#C4A96A" stroke-width="0.6" opacity="0.25" transform="rotate(240,200,140)"/>
        <ellipse cx="200" cy="115" rx="28" ry="52" fill="none" stroke="#C4A96A" stroke-width="0.6" opacity="0.25" transform="rotate(300,200,140)"/>
        <circle cx="200" cy="140" r="16" fill="#5C1E28" opacity="0.85"/>
        <circle cx="200" cy="140" r="10" fill="#7A2535" opacity="0.7"/>
        <circle cx="200" cy="140" r="5" fill="#B85C42" opacity="0.8"/>
        <line x1="200" y1="135" x2="194" y2="118" stroke="#A08550" stroke-width="1" opacity="0.7"/>
        <circle cx="194" cy="117" r="2" fill="#C4A96A" opacity="0.8"/>
        <line x1="200" y1="134" x2="208" y2="116" stroke="#A08550" stroke-width="1" opacity="0.7"/>
        <circle cx="208" cy="115" r="2" fill="#C4A96A" opacity="0.8"/>
        <line x1="200" y1="134" x2="200" y2="115" stroke="#A08550" stroke-width="1" opacity="0.7"/>
        <circle cx="200" cy="114" r="2" fill="#C4A96A" opacity="0.8"/>
        <line x1="228" y1="108" x2="310" y2="90" stroke="#A08550" stroke-width="0.6" opacity="0.5"/>
        <line x1="310" y1="90" x2="360" y2="90" stroke="#A08550" stroke-width="0.6" opacity="0.5"/>
        <rect x="310" y="83" width="46" height="14" fill="none" stroke="#A08550" stroke-width="0.5" opacity="0.4"/>
        <text x="312" y="93" font-family="'Jost', monospace" font-size="7" fill="#A08550" opacity="0.6" letter-spacing="0.5">moisture 68%</text>
        <line x1="172" y1="108" x2="90" y2="72" stroke="#B85C42" stroke-width="0.6" opacity="0.45"/>
        <line x1="90" y1="72" x2="40" y2="72" stroke="#B85C42" stroke-width="0.6" opacity="0.45"/>
        <rect x="12" y="65" width="28" height="14" fill="none" stroke="#B85C42" stroke-width="0.5" opacity="0.35"/>
        <text x="14" y="75" font-family="'Jost', monospace" font-size="7" fill="#B85C42" opacity="0.55" letter-spacing="0.5">bloom</text>
        <line x1="200" y1="156" x2="200" y2="190" stroke="#EDE5D4" stroke-width="0.5" opacity="0.25"/>
        <line x1="200" y1="190" x2="340" y2="200" stroke="#EDE5D4" stroke-width="0.5" opacity="0.2"/>
        <text x="342" y="204" font-family="'Jost', monospace" font-size="7" fill="#EDE5D4" opacity="0.3" letter-spacing="1">PISTIL</text>
        <line x1="185" y1="290" x2="60" y2="310" stroke="#7A7A56" stroke-width="0.5" opacity="0.4"/>
        <text x="12" y="314" font-family="'Jost', monospace" font-size="7" fill="#7A7A56" opacity="0.55" letter-spacing="0.5">leaf node 01</text>
        <line x1="240" y1="88" x2="240" y2="192" stroke="#A08550" stroke-width="0.5" opacity="0.3"/>
        <line x1="237" y1="88" x2="243" y2="88" stroke="#A08550" stroke-width="0.5" opacity="0.3"/>
        <line x1="237" y1="192" x2="243" y2="192" stroke="#A08550" stroke-width="0.5" opacity="0.3"/>
        <text x="246" y="144" font-family="'Jost', monospace" font-size="7" fill="#A08550" opacity="0.4" letter-spacing="0.5">104mm</text>
        <rect x="14" y="320" width="110" height="48" fill="#2A1208" opacity="0.7" rx="2"/>
        <rect x="14" y="320" width="110" height="48" fill="none" stroke="#A08550" stroke-width="0.5" opacity="0.35" rx="2"/>
        <text x="20" y="334" font-family="'Jost', monospace" font-size="6.5" fill="#C4A96A" opacity="0.7" letter-spacing="1">SENSOR ARRAY</text>
        <line x1="14" y1="338" x2="124" y2="338" stroke="#A08550" stroke-width="0.3" opacity="0.3"/>
        <text x="20" y="349" font-family="'Jost', monospace" font-size="6" fill="#EDE5D4" opacity="0.45" letter-spacing="0.5">pH  ............  6.8</text>
        <text x="20" y="360" font-family="'Jost', monospace" font-size="6" fill="#EDE5D4" opacity="0.45" letter-spacing="0.5">temp  .........  22°</text>
      </svg>
      <p class="phil-caption">Your plants, instrumented. Every breath of the soil, made legible.</p>
    </div>

    <div class="phil-panel">
      <div class="phil-label">02 — Space mapped</div>
      <img src="/window-photo.jpg" alt="Window — space mapped" style="width:100%;display:block;object-fit:cover;aspect-ratio:1/1;" />
      <p class="phil-caption">The invisible geometry of your rooms, made visible only when you need it.</p>
    </div>

    <div class="phil-panel">
      <div class="phil-label">03 — Signal · material</div>
      <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" width="100%">
        <rect width="400" height="400" fill="#2A1208"/>
        <rect x="0" y="0" width="400" height="55" fill="#3D1F0A" opacity="0.5"/>
        <rect x="0" y="55" width="400" height="45" fill="#2A1208" opacity="0.8"/>
        <rect x="0" y="100" width="400" height="55" fill="#3D1F0A" opacity="0.45"/>
        <rect x="0" y="155" width="400" height="45" fill="#2A1208" opacity="0.8"/>
        <rect x="0" y="200" width="400" height="55" fill="#3D1F0A" opacity="0.4"/>
        <rect x="0" y="255" width="400" height="45" fill="#2A1208" opacity="0.8"/>
        <rect x="0" y="300" width="400" height="55" fill="#3D1F0A" opacity="0.35"/>
        <rect x="0" y="355" width="400" height="45" fill="#2A1208" opacity="0.8"/>
        <line x1="0" y1="18" x2="400" y2="18" stroke="#6B4A2A" stroke-width="0.4" opacity="0.3"/>
        <line x1="0" y1="36" x2="400" y2="36" stroke="#6B4A2A" stroke-width="0.4" opacity="0.3"/>
        <line x1="0" y1="73" x2="400" y2="73" stroke="#6B4A2A" stroke-width="0.4" opacity="0.25"/>
        <line x1="0" y1="118" x2="400" y2="118" stroke="#6B4A2A" stroke-width="0.4" opacity="0.3"/>
        <line x1="0" y1="136" x2="400" y2="136" stroke="#6B4A2A" stroke-width="0.4" opacity="0.3"/>
        <line x1="0" y1="173" x2="400" y2="173" stroke="#6B4A2A" stroke-width="0.4" opacity="0.25"/>
        <line x1="0" y1="218" x2="400" y2="218" stroke="#6B4A2A" stroke-width="0.4" opacity="0.3"/>
        <line x1="0" y1="236" x2="400" y2="236" stroke="#6B4A2A" stroke-width="0.4" opacity="0.3"/>
        <ellipse cx="200" cy="200" rx="200" ry="140" fill="#5C1E28" opacity="0.12"/>
        <ellipse cx="200" cy="200" rx="120" ry="80" fill="#A08550" opacity="0.05"/>
        <path d="M 20 280 Q 60 240 100 265 Q 140 290 180 250 Q 220 210 260 240 Q 300 270 340 235 Q 365 215 380 220" fill="none" stroke="#C4A96A" stroke-width="1.5" opacity="0.6"/>
        <line x1="20" y1="320" x2="380" y2="320" stroke="#A08550" stroke-width="0.6" opacity="0.3"/>
        <line x1="20" y1="200" x2="20" y2="330" stroke="#A08550" stroke-width="0.6" opacity="0.3"/>
        <text x="22" y="338" font-family="'Jost', monospace" font-size="7" fill="#A08550" opacity="0.4" letter-spacing="0.5">00:00</text>
        <text x="188" y="338" font-family="'Jost', monospace" font-size="7" fill="#A08550" opacity="0.4" letter-spacing="0.5">12:00</text>
        <text x="360" y="338" font-family="'Jost', monospace" font-size="7" fill="#A08550" opacity="0.4" letter-spacing="0.5">24:00</text>
        <text x="25" y="205" font-family="'Jost', monospace" font-size="7" fill="#A08550" opacity="0.4" letter-spacing="0.5">lux</text>
        <text x="200" y="130" font-family="'Cormorant Garamond', serif" font-size="22" fill="#EDE5D4" opacity="0.55" text-anchor="middle" font-weight="300">Σ(light · warmth · time)</text>
        <text x="200" y="160" font-family="'Cormorant Garamond', serif" font-size="13" fill="#C4A96A" opacity="0.4" text-anchor="middle" font-style="italic">= home</text>
        <rect x="280" y="52" width="96" height="34" fill="none" stroke="#B85C42" stroke-width="0.5" opacity="0.3" rx="1"/>
        <text x="286" y="66" font-family="'Jost', monospace" font-size="6.5" fill="#B85C42" opacity="0.5" letter-spacing="0.5">LAMP CIRCUIT</text>
        <text x="286" y="78" font-family="'Jost', monospace" font-size="6" fill="#EDE5D4" opacity="0.3" letter-spacing="0.5">dim 34% · warm</text>
        <rect x="24" y="52" width="96" height="34" fill="none" stroke="#7A7A56" stroke-width="0.5" opacity="0.3" rx="1"/>
        <text x="30" y="66" font-family="'Jost', monospace" font-size="6.5" fill="#7A7A56" opacity="0.5" letter-spacing="0.5">SOIL SENSOR 3</text>
        <text x="30" y="78" font-family="'Jost', monospace" font-size="6" fill="#EDE5D4" opacity="0.3" letter-spacing="0.5">moist 71% · ok</text>
        <line x1="40" y1="380" x2="360" y2="380" stroke="#A08550" stroke-width="0.3" opacity="0.2"/>
        <text x="200" y="395" font-family="'Jost', sans-serif" font-size="8" fill="#A08550" opacity="0.35" text-anchor="middle" letter-spacing="2">AMBIENT INTELLIGENCE</text>
      </svg>
      <p class="phil-caption">Your home as a living system — warm, measured, responsive.</p>
    </div>
  </div>
</section>

<!-- SERVICES -->
<section class="services" id="services">
  <div class="sec-header">
    <div>
      <div class="sec-eyebrow">What we build</div>
      <h2 class="sec-h2">Intelligent Systems,<br><em>Quietly Installed</em></h2>
    </div>
    <p>Every build is designed for your specific space and life. No off-the-shelf solutions, no cloud subscriptions. Real hardware that belongs to you, fully and permanently.</p>
  </div>
  <div class="grid-3">
    <div class="card"><span class="card-num">01</span><h3>Smart Plant Monitoring</h3><p>Wireless soil sensors per plant. Phone alerts when it's time to water. Live dashboards showing every plant's health in real time.</p><span class="card-tag">Raspberry Pi · ESP32</span></div>
    <div class="card"><span class="card-num">02</span><h3>Automated Watering</h3><p>Sensor-triggered or scheduled irrigation for houseplants, gardens, and grow rooms. Autonomous once calibrated to your environment.</p><span class="card-tag">Custom Hardware · GPIO</span></div>
    <div class="card"><span class="card-num">03</span><h3>Grow Room Systems</h3><p>Soil, temperature, and humidity all networked. Ideal for indoor gardens, seedling setups, and controlled growing environments.</p><span class="card-tag">Sensor Network</span></div>
    <div class="card"><span class="card-num">04</span><h3>Security & Cameras</h3><p>Motion-triggered recording with instant phone alerts. Night vision capable. Footage stored locally — no subscription, no cloud, no monthly fee.</p><span class="card-tag">Pi · Arducam · Telegram</span></div>
    <div class="card"><span class="card-num">05</span><h3>Voice AI Interface</h3><p>A bespoke AI assistant powered by Claude — ask questions, get spoken answers, display images, and control your home entirely by voice.</p><span class="card-tag">Anthropic API · Speech</span></div>
    <div class="card"><span class="card-num">06</span><h3>Vintage Display Revival</h3><p>Old televisions and radios transformed into smart home interfaces — dashboards, camera feeds, and AI terminals living inside heritage objects.</p><span class="card-tag">Composite · Pygame · Pi</span></div>
    <div class="card"><span class="card-num">07</span><h3>Smart Lighting</h3><p>Warm-temperature only. Scheduled, sensor-triggered, or voice-controlled. Works with existing fixtures or full custom installs.</p><span class="card-tag">GPIO · Relay · LED</span></div>
    <div class="card"><span class="card-num">08</span><h3>Telegram Alert Systems</h3><p>Instant phone notifications for anything — doors, moisture, motion, temperature — delivered quietly and precisely to your device.</p><span class="card-tag">Bot API · Python</span></div>
    <div class="card"><span class="card-num">09</span><h3>Energy Monitoring</h3><p>Real-time power tracking per outlet or whole-home. Understand your home's energy fully. Automate shutoffs. Reduce waste without thinking about it.</p><span class="card-tag">Smart Plugs · Dashboard</span></div>
  </div>
</section>

<!-- IMMERSIVE -->
<section class="immersive" id="immersive">
  <div class="imm-inner">
    <div class="imm-l">
      <div class="sec-eyebrow">Signature offering</div>
      <h2 class="sec-h2">Immersive<br><em>Environments</em></h2>
      <p>We build rooms that feel alive. Laser grids that pulse to music. Projections that turn walls into living landscapes. LED fields that breathe with time of day. Permanent installations designed around how you actually inhabit a space.</p>
      <a href="#contact" class="btn btn-fill" style="align-self:flex-start;">Discuss a Vision</a>
    </div>
    <div class="imm-r">
      <div class="tile t-led"><div class="tile-glow"></div><div class="tile-word">Light</div><div class="tile-desc">Addressable LED · warm spectrum · reactive</div></div>
      <div class="tile t-laser"><div class="tile-glow"></div><div class="tile-word">Laser</div><div class="tile-desc">Music sync · room scale · events</div></div>
      <div class="tile t-proj"><div class="tile-glow"></div><div class="tile-word">Projection</div><div class="tile-desc">Mapping · generative · interactive</div></div>
      <div class="tile t-sync"><div class="tile-glow"></div><div class="tile-word">Sync</div><div class="tile-desc">Voice · music · motion · schedule</div></div>
    </div>
  </div>
</section>

<!-- PROCESS -->
<section class="process" id="process">
  <div class="sec-eyebrow">The process</div>
  <h2 class="sec-h2">Nothing is<br><em>Accidental</em></h2>
  <div class="steps">
    <div class="step"><div class="step-n">01</div><h3>Discovery</h3><p>We talk through your space, your rhythms, and what you want automated. No technical knowledge required — describe the life you want.</p></div>
    <div class="step"><div class="step-n">02</div><h3>Design</h3><p>We design a system architecture around your specific environment. Hardware, software, and aesthetic all resolved before anything is built.</p></div>
    <div class="step"><div class="step-n">03</div><h3>Build</h3><p>Components sourced, hardware assembled, software written, everything tested thoroughly before it enters your home.</p></div>
    <div class="step"><div class="step-n">04</div><h3>Install</h3><p>We install, calibrate, and walk you through every system. You leave with full documentation and the confidence to live with it naturally.</p></div>
  </div>
</section>

<!-- TECH -->
<section class="tech">
  <div class="tech-inner">
    <div class="sec-eyebrow">Under the surface</div>
    <h2 class="sec-h2">Built on<br><em>Real Hardware</em></h2>
    <div class="pills">
      <span class="pill">Raspberry Pi</span>
      <span class="pill">ESP32 · XIAO</span>
      <span class="pill">MCP3008 ADC</span>
      <span class="pill">Capacitive sensors</span>
      <span class="pill">Arducam night vision</span>
      <span class="pill">Python</span>
      <span class="pill">OpenCV</span>
      <span class="pill">Flask</span>
      <span class="pill">Pygame</span>
      <span class="pill">Anthropic Claude API</span>
      <span class="pill">Telegram Bot API</span>
      <span class="pill">LiPo batteries</span>
      <span class="pill">Addressable LEDs</span>
      <span class="pill">Projection mapping</span>
      <span class="pill">GPIO relays</span>
      <span class="pill">I²C · SPI</span>
      <span class="pill">Linux</span>
    </div>
  </div>
</section>

<!-- DA VINCI SECTION -->
<section class="davinci">
  <div class="davinci-inner">
    <div class="davinci-text">
      <div class="sec-eyebrow">The inspiration</div>
      <h2 class="sec-h2" style="color:var(--cream);">Da Vinci built<br><em style="color:var(--brass-soft);">one of everything.</em></h2>
      <p>Leonardo never mass-produced. He studied the mechanics of a bird's wing and invented a flying machine. He mapped the human body and built war engines. Every creation was singular — designed for one purpose, one moment, one vision.</p>
      <p>That is what we do. We sit at the same intersection he did: the natural world and the technical mind. We build one system for one home. Nothing is templated. Nothing is repeated. Your environment has never existed before, and neither has what we'll build inside it.</p>
      <div class="davinci-quote">"Learning never exhausts the mind."<span>— Leonardo da Vinci</span></div>
    </div>
    <div class="davinci-sketch">
      <svg viewBox="0 0 480 560" xmlns="http://www.w3.org/2000/svg" width="100%">
        <rect width="480" height="560" fill="#1E1008"/>
        <ellipse cx="240" cy="280" rx="220" ry="250" fill="#3D1F0A" opacity="0.3"/>
        <ellipse cx="240" cy="280" rx="140" ry="160" fill="#4A2510" opacity="0.2"/>
        <circle cx="240" cy="268" r="185" fill="none" stroke="#A08550" stroke-width="0.7" opacity="0.35"/>
        <rect x="109" y="137" width="262" height="262" fill="none" stroke="#A08550" stroke-width="0.5" opacity="0.25"/>
        <circle cx="240" cy="112" r="26" fill="none" stroke="#C4A96A" stroke-width="1.2" opacity="0.75"/>
        <line x1="228" y1="108" x2="236" y2="108" stroke="#C4A96A" stroke-width="0.8" opacity="0.5"/>
        <line x1="244" y1="108" x2="252" y2="108" stroke="#C4A96A" stroke-width="0.8" opacity="0.5"/>
        <path d="M 234 116 Q 240 120 246 116" fill="none" stroke="#C4A96A" stroke-width="0.7" opacity="0.45"/>
        <line x1="240" y1="110" x2="240" y2="115" stroke="#C4A96A" stroke-width="0.6" opacity="0.4"/>
        <line x1="232" y1="137" x2="230" y2="155" stroke="#C4A96A" stroke-width="1.2" opacity="0.65"/>
        <line x1="248" y1="137" x2="250" y2="155" stroke="#C4A96A" stroke-width="1.2" opacity="0.65"/>
        <path d="M 230 155 Q 210 165 205 195 Q 202 220 205 250 Q 210 270 225 278 L 240 280 L 255 278 Q 270 270 275 250 Q 278 220 275 195 Q 270 165 250 155 Z" fill="none" stroke="#C4A96A" stroke-width="1.3" opacity="0.7"/>
        <path d="M 220 175 Q 240 168 260 175" fill="none" stroke="#A08550" stroke-width="0.7" opacity="0.4"/>
        <path d="M 215 195 Q 240 188 265 195" fill="none" stroke="#A08550" stroke-width="0.7" opacity="0.35"/>
        <circle cx="240" cy="183" r="3" fill="none" stroke="#A08550" stroke-width="0.8" opacity="0.4"/>
        <path d="M 205 175 Q 175 170 145 168 Q 120 167 95 165" fill="none" stroke="#C4A96A" stroke-width="1.2" opacity="0.65"/>
        <path d="M 205 195 Q 175 196 145 200 Q 120 203 95 205" fill="none" stroke="#C4A96A" stroke-width="1.2" opacity="0.65"/>
        <path d="M 95 165 Q 82 168 78 175 Q 76 182 78 188 Q 82 196 95 205" fill="none" stroke="#C4A96A" stroke-width="1.1" opacity="0.65"/>
        <line x1="78" y1="175" x2="68" y2="170" stroke="#C4A96A" stroke-width="0.8" opacity="0.5"/>
        <line x1="77" y1="180" x2="65" y2="178" stroke="#C4A96A" stroke-width="0.8" opacity="0.5"/>
        <line x1="78" y1="185" x2="66" y2="185" stroke="#C4A96A" stroke-width="0.8" opacity="0.5"/>
        <line x1="79" y1="190" x2="68" y2="192" stroke="#C4A96A" stroke-width="0.8" opacity="0.5"/>
        <path d="M 275 175 Q 305 170 335 168 Q 360 167 385 165" fill="none" stroke="#C4A96A" stroke-width="1.2" opacity="0.65"/>
        <path d="M 275 195 Q 305 196 335 200 Q 360 203 385 205" fill="none" stroke="#C4A96A" stroke-width="1.2" opacity="0.65"/>
        <path d="M 385 165 Q 398 168 402 175 Q 404 182 402 188 Q 398 196 385 205" fill="none" stroke="#C4A96A" stroke-width="1.1" opacity="0.65"/>
        <line x1="402" y1="175" x2="412" y2="170" stroke="#C4A96A" stroke-width="0.8" opacity="0.5"/>
        <line x1="403" y1="180" x2="415" y2="178" stroke="#C4A96A" stroke-width="0.8" opacity="0.5"/>
        <line x1="402" y1="185" x2="414" y2="185" stroke="#C4A96A" stroke-width="0.8" opacity="0.5"/>
        <line x1="401" y1="190" x2="412" y2="192" stroke="#C4A96A" stroke-width="0.8" opacity="0.5"/>
        <path d="M 225 278 Q 215 310 205 340 Q 195 370 188 400 Q 183 420 182 440" fill="none" stroke="#C4A96A" stroke-width="1.2" opacity="0.65"/>
        <path d="M 232 278 Q 224 312 215 342 Q 205 372 198 402 Q 193 422 192 442" fill="none" stroke="#C4A96A" stroke-width="1.2" opacity="0.6"/>
        <path d="M 182 440 Q 176 448 172 452 Q 168 455 165 453 Q 160 450 162 445 Q 165 440 172 438 Q 178 436 182 440 Z" fill="none" stroke="#C4A96A" stroke-width="0.9" opacity="0.55"/>
        <path d="M 255 278 Q 265 310 275 340 Q 285 370 292 400 Q 297 420 298 440" fill="none" stroke="#C4A96A" stroke-width="1.2" opacity="0.65"/>
        <path d="M 248 278 Q 256 312 265 342 Q 275 372 282 402 Q 287 422 288 442" fill="none" stroke="#C4A96A" stroke-width="1.2" opacity="0.6"/>
        <path d="M 298 440 Q 304 448 308 452 Q 312 455 315 453 Q 320 450 318 445 Q 315 440 308 438 Q 302 436 298 440 Z" fill="none" stroke="#C4A96A" stroke-width="0.9" opacity="0.55"/>
        <path d="M 240 155 L 240 278" fill="none" stroke="#5C1E28" stroke-width="1.5" opacity="0.6" stroke-dasharray="4 2"/>
        <circle cx="240" cy="175" r="3.5" fill="none" stroke="#B85C42" stroke-width="1" opacity="0.6"/>
        <circle cx="240" cy="200" r="3.5" fill="none" stroke="#B85C42" stroke-width="1" opacity="0.6"/>
        <circle cx="240" cy="228" r="3.5" fill="none" stroke="#B85C42" stroke-width="1" opacity="0.6"/>
        <circle cx="240" cy="255" r="3.5" fill="none" stroke="#B85C42" stroke-width="1" opacity="0.6"/>
        <path d="M 215 200 L 195 200 L 192 194 L 188 194" fill="none" stroke="#7A2535" stroke-width="0.8" opacity="0.5"/>
        <path d="M 265 200 L 285 200 L 288 194 L 292 194" fill="none" stroke="#7A2535" stroke-width="0.8" opacity="0.5"/>
        <circle cx="188" cy="194" r="2" fill="#7A2535" opacity="0.5"/>
        <circle cx="292" cy="194" r="2" fill="#7A2535" opacity="0.5"/>
        <text x="14" y="105" font-family="'Cormorant Garamond', serif" font-size="7.5" fill="#C4A96A" opacity="0.55" font-style="italic">caput</text>
        <line x1="38" y1="103" x2="214" y2="109" stroke="#A08550" stroke-width="0.4" opacity="0.3"/>
        <text x="8" y="185" font-family="'Cormorant Garamond', serif" font-size="7.5" fill="#C4A96A" opacity="0.55" font-style="italic">sensor nodus</text>
        <line x1="72" y1="183" x2="202" y2="183" stroke="#A08550" stroke-width="0.4" opacity="0.3"/>
        <text x="12" y="230" font-family="'Cormorant Garamond', serif" font-size="7.5" fill="#C4A96A" opacity="0.5" font-style="italic">humiditas 68%</text>
        <line x1="80" y1="228" x2="202" y2="228" stroke="#A08550" stroke-width="0.4" opacity="0.25"/>
        <text x="8" y="320" font-family="'Cormorant Garamond', serif" font-size="7.5" fill="#C4A96A" opacity="0.45" font-style="italic">calor corporis</text>
        <text x="306" y="105" font-family="'Cormorant Garamond', serif" font-size="7.5" fill="#C4A96A" opacity="0.55" font-style="italic">radius 185mm</text>
        <line x1="304" y1="103" x2="266" y2="109" stroke="#A08550" stroke-width="0.4" opacity="0.3"/>
        <text x="300" y="175" font-family="'Cormorant Garamond', serif" font-size="7.5" fill="#C4A96A" opacity="0.5" font-style="italic">circuit. nodus</text>
        <line x1="298" y1="173" x2="278" y2="173" stroke="#A08550" stroke-width="0.4" opacity="0.25"/>
        <text x="304" y="262" font-family="'Cormorant Garamond', serif" font-size="7.5" fill="#C4A96A" opacity="0.5" font-style="italic">lux ambientis</text>
        <line x1="302" y1="260" x2="278" y2="256" stroke="#A08550" stroke-width="0.4" opacity="0.25"/>
        <text x="298" y="355" font-family="'Cormorant Garamond', serif" font-size="7.5" fill="#C4A96A" opacity="0.45" font-style="italic">terra / ground</text>
        <line x1="60" y1="488" x2="420" y2="488" stroke="#A08550" stroke-width="0.4" opacity="0.2"/>
        <text x="240" y="502" font-family="'Cormorant Garamond', serif" font-size="9" fill="#C4A96A" opacity="0.45" text-anchor="middle" font-style="italic">studio di figura con sistema nervoso elettronico</text>
        <text x="240" y="518" font-family="'Jost', sans-serif" font-size="7" fill="#A08550" opacity="0.35" text-anchor="middle" letter-spacing="2">HOMEHABIT · ONE-OFF DESIGN · 2026</text>
        <line x1="78" y1="136" x2="402" y2="136" stroke="#A08550" stroke-width="0.4" stroke-dasharray="2 3" opacity="0.2"/>
        <line x1="78" y1="278" x2="402" y2="278" stroke="#A08550" stroke-width="0.4" stroke-dasharray="2 3" opacity="0.2"/>
        <line x1="78" y1="136" x2="78" y2="278" stroke="#A08550" stroke-width="0.4" stroke-dasharray="2 3" opacity="0.2"/>
        <line x1="402" y1="136" x2="402" y2="278" stroke="#A08550" stroke-width="0.4" stroke-dasharray="2 3" opacity="0.2"/>
      </svg>
    </div>
  </div>
</section>

<!-- LEISURE / LIFE SECTION -->
<section class="leisure" id="life">
  <div class="leisure-header">
    <div class="sec-eyebrow">The life it enables</div>
    <h2 class="sec-h2">This is what<br><em>we're building toward.</em></h2>
    <p class="leisure-sub">Not the hardware. Not the sensors. The freedom to live exactly as you please — unhurried, immersed, at home in every sense of the word.</p>
  </div>

  <div class="leisure-grid">
    <div class="leisure-card tall">
      <svg viewBox="0 0 360 500" xmlns="http://www.w3.org/2000/svg" width="100%">
        <rect width="360" height="500" fill="#2A1208"/>
        <rect x="200" y="0" width="160" height="500" fill="#C4A96A" opacity="0.06"/>
        <rect x="220" y="0" width="1" height="500" fill="#C4A96A" opacity="0.15"/>
        <rect x="320" y="0" width="1" height="500" fill="#C4A96A" opacity="0.1"/>
        <rect x="216" y="20" width="104" height="340" fill="none" stroke="#A08550" stroke-width="0.6" opacity="0.2"/>
        <line x1="268" y1="20" x2="268" y2="360" stroke="#A08550" stroke-width="0.4" opacity="0.15"/>
        <line x1="216" y1="190" x2="320" y2="190" stroke="#A08550" stroke-width="0.4" opacity="0.15"/>
        <path d="M 216 0 Q 200 40 208 100 Q 218 160 205 240 Q 195 310 210 380 Q 220 430 215 500" fill="none" stroke="#7A2535" stroke-width="3" opacity="0.35"/>
        <path d="M 212 0 Q 196 42 204 102 Q 214 162 200 242" fill="#5C1E28" opacity="0.12"/>
        <path d="M 30 370 Q 60 355 100 350 Q 160 345 220 348 Q 250 350 260 360 Q 268 370 260 378 Q 248 385 220 386 Q 160 388 100 385 Q 60 383 35 380 Q 20 378 30 370 Z" fill="#6B4A2A" opacity="0.7"/>
        <path d="M 220 348 Q 252 338 268 328 Q 278 320 272 310 Q 264 302 248 308 Q 230 316 220 330 L 220 348 Z" fill="#7A4E2A" opacity="0.65"/>
        <path d="M 38 380 Q 35 395 33 410" fill="none" stroke="#9C7248" stroke-width="1.5" opacity="0.5"/>
        <path d="M 248 385 Q 250 398 252 412" fill="none" stroke="#9C7248" stroke-width="1.5" opacity="0.5"/>
        <path d="M 60 360 Q 90 340 130 332 Q 165 325 200 328 Q 220 330 225 340 Q 228 350 220 356 Q 200 360 165 363 Q 125 365 85 368 Q 65 370 60 360 Z" fill="#EDE5D4" opacity="0.55"/>
        <path d="M 60 360 Q 50 375 45 395 Q 42 410 45 425 Q 50 435 60 438 Q 75 440 90 432 Q 100 425 95 410 Q 88 395 85 368 Z" fill="#C4A96A" opacity="0.25"/>
        <path d="M 85 368 Q 100 372 120 375 Q 140 378 155 374 Q 165 370 165 363" fill="none" stroke="#C4A96A" stroke-width="0.6" opacity="0.2"/>
        <circle cx="215" cy="320" r="18" fill="#8B5E3C" opacity="0.7"/>
        <path d="M 200 312 Q 212 304 225 308 Q 234 312 234 320 Q 232 330 218 334 Q 208 338 200 332 Z" fill="#3D1F0A" opacity="0.75"/>
        <path d="M 195 328 Q 185 322 175 318 Q 165 315 158 320 Q 152 326 155 334 Q 160 340 170 338 Q 182 334 192 330 Z" fill="#8B5E3C" opacity="0.6"/>
        <rect x="140" y="312" width="32" height="22" rx="2" fill="#5C1E28" opacity="0.75" transform="rotate(-10,156,323)"/>
        <rect x="142" y="314" width="28" height="18" rx="1" fill="#7A2535" opacity="0.4" transform="rotate(-10,156,323)"/>
        <line x1="156" y1="313" x2="153" y2="333" stroke="#EDE5D4" stroke-width="0.5" opacity="0.3" transform="rotate(-10,156,323)"/>
        <rect x="0" y="430" width="360" height="70" fill="#5C1E28" opacity="0.35"/>
        <rect x="0" y="430" width="360" height="70" fill="none" stroke="#B85C42" stroke-width="0.5" opacity="0.3"/>
        <path d="M 0 450 Q 90 445 180 450 Q 270 455 360 450" fill="none" stroke="#C4A96A" stroke-width="0.6" opacity="0.2"/>
        <path d="M 0 465 Q 90 460 180 465 Q 270 470 360 465" fill="none" stroke="#C4A96A" stroke-width="0.6" opacity="0.2"/>
        <circle cx="180" cy="460" r="18" fill="none" stroke="#A08550" stroke-width="0.7" opacity="0.3"/>
        <circle cx="180" cy="460" r="10" fill="none" stroke="#B85C42" stroke-width="0.5" opacity="0.25"/>
        <rect x="42" y="422" width="28" height="6" rx="1" fill="#7A2535" opacity="0.55"/>
        <rect x="40" y="416" width="30" height="6" rx="1" fill="#6B4A2A" opacity="0.5"/>
        <rect x="44" y="410" width="26" height="6" rx="1" fill="#5C1E28" opacity="0.45"/>
        <ellipse cx="290" cy="300" rx="40" ry="55" fill="#C4A96A" opacity="0.06"/>
        <rect x="282" y="290" width="16" height="4" rx="2" fill="#A08550" opacity="0.5"/>
        <path d="M 278 294 Q 290 320 302 294 Z" fill="#C4A96A" opacity="0.35"/>
        <line x1="290" y1="294" x2="290" y2="370" stroke="#A08550" stroke-width="1.5" opacity="0.5"/>
        <rect x="282" y="370" width="16" height="4" rx="2" fill="#A08550" opacity="0.4"/>
        <line x1="20" y1="488" x2="340" y2="488" stroke="#A08550" stroke-width="0.3" opacity="0.15"/>
        <text x="180" y="498" font-family="'Cormorant Garamond', serif" font-size="9" fill="#C4A96A" opacity="0.5" text-anchor="middle" font-style="italic">unhurried, at home</text>
      </svg>
    </div>

    <div class="leisure-card">
      <svg viewBox="0 0 360 340" xmlns="http://www.w3.org/2000/svg" width="100%">
        <rect width="360" height="340" fill="#EDE5D4"/>
        <rect width="360" height="340" fill="#D4C8B8" opacity="0.4"/>
        <circle cx="240" cy="130" r="110" fill="#FAF6EE" opacity="0.7"/>
        <circle cx="240" cy="130" r="110" fill="none" stroke="#B8A890" stroke-width="8" opacity="0.5"/>
        <circle cx="240" cy="130" r="118" fill="none" stroke="#C8B8A0" stroke-width="3" opacity="0.3"/>
        <clipPath id="archclip"><circle cx="240" cy="130" r="108"/></clipPath>
        <g clip-path="url(#archclip)">
          <rect x="132" y="22" width="216" height="216" fill="#E8E0D0" opacity="0.6"/>
          <rect x="132" y="150" width="216" height="88" fill="#D4C8B8" opacity="0.4"/>
          <path d="M 132 155 Q 175 148 220 152 Q 265 156 348 150" fill="none" stroke="#B8A890" stroke-width="0.7" opacity="0.4"/>
        </g>
        <path d="M 0 0 Q 50 8 100 2 Q 150 -4 180 5" fill="none" stroke="#C8B8A0" stroke-width="0.4" opacity="0.3"/>
        <path d="M 0 30 Q 60 24 120 28 Q 170 32 200 26" fill="none" stroke="#C8B8A0" stroke-width="0.4" opacity="0.25"/>
        <path d="M 10 245 Q 50 238 150 236 Q 220 235 300 238 L 310 242 L 308 252 Q 220 255 150 256 Q 60 258 10 262 Z" fill="#6B4A2A" opacity="0.75"/>
        <path d="M 10 245 Q 100 242 200 243 Q 280 244 308 245" fill="none" stroke="#9C7248" stroke-width="0.5" opacity="0.3"/>
        <line x1="30" y1="256" x2="28" y2="300" stroke="#5A3A1A" stroke-width="3" opacity="0.6"/>
        <line x1="280" y1="254" x2="282" y2="298" stroke="#5A3A1A" stroke-width="3" opacity="0.6"/>
        <path d="M 125 175 Q 118 195 115 220 Q 113 240 115 256 Q 130 252 148 250 Q 162 248 165 235 Q 166 215 162 195 Q 158 175 148 170 Z" fill="#7A5A3A" opacity="0.7"/>
        <circle cx="144" cy="162" r="16" fill="#8B7050" opacity="0.65"/>
        <path d="M 130 155 Q 140 148 155 152 Q 162 156 160 164 Q 156 172 144 174 Q 132 172 128 164 Z" fill="#D4C8B8" opacity="0.6"/>
        <path d="M 148 195 Q 155 210 160 225 Q 162 232 156 234" fill="none" stroke="#7A5A3A" stroke-width="4" stroke-linecap="round" opacity="0.6"/>
        <circle cx="158" cy="235" r="4" fill="#8B6040" opacity="0.55"/>
        <line x1="160" y1="238" x2="172" y2="248" stroke="#3D1F0A" stroke-width="1" opacity="0.6"/>
        <rect x="80" y="236" width="140" height="14" rx="1" fill="#FAF6EE" opacity="0.7"/>
        <line x1="88" y1="240" x2="210" y2="240" stroke="#A08550" stroke-width="0.4" opacity="0.3"/>
        <line x1="88" y1="244" x2="180" y2="244" stroke="#A08550" stroke-width="0.4" opacity="0.25"/>
        <rect x="190" y="237" width="22" height="10" rx="1" fill="none" stroke="#5C1E28" stroke-width="0.6" opacity="0.4"/>
        <line x1="196" y1="237" x2="196" y2="247" stroke="#5C1E28" stroke-width="0.4" opacity="0.3"/>
        <line x1="202" y1="237" x2="202" y2="247" stroke="#5C1E28" stroke-width="0.4" opacity="0.3"/>
        <rect x="230" y="224" width="42" height="8" rx="1" fill="#5C1E28" opacity="0.55"/>
        <rect x="228" y="216" width="44" height="8" rx="1" fill="#7A4E2A" opacity="0.5"/>
        <rect x="232" y="208" width="38" height="8" rx="1" fill="#6B4A2A" opacity="0.5"/>
        <path d="M 50 210 L 55 240" stroke="#A08550" stroke-width="1.5" opacity="0.5"/>
        <path d="M 55 240 L 75 240" stroke="#A08550" stroke-width="1.5" opacity="0.5"/>
        <ellipse cx="55" cy="210" rx="18" ry="10" fill="#C4A96A" opacity="0.25"/>
        <ellipse cx="55" cy="210" rx="18" ry="10" fill="none" stroke="#A08550" stroke-width="0.8" opacity="0.35"/>
        <ellipse cx="68" cy="230" rx="22" ry="12" fill="#C4A96A" opacity="0.08"/>
        <text x="180" y="328" font-family="'Cormorant Garamond', serif" font-size="9" fill="#6B4A2A" opacity="0.5" text-anchor="middle" font-style="italic">deep in the work</text>
      </svg>
    </div>

    <div class="leisure-card">
      <svg viewBox="0 0 360 340" xmlns="http://www.w3.org/2000/svg" width="100%">
        <rect width="360" height="340" fill="#3D2010"/>
        <rect width="360" height="230" fill="#5A3820" opacity="0.4"/>
        <path d="M 80 20 Q 85 60 78 100 Q 74 130 82 170" fill="none" stroke="#7A5030" stroke-width="0.5" opacity="0.3"/>
        <path d="M 200 10 Q 208 50 198 90" fill="none" stroke="#7A5030" stroke-width="0.4" opacity="0.25"/>
        <rect x="40" y="18" width="200" height="140" rx="3" fill="#6B4A2A" opacity="0.6"/>
        <rect x="40" y="18" width="200" height="140" rx="3" fill="none" stroke="#A08550" stroke-width="1.5" opacity="0.4"/>
        <rect x="48" y="25" width="184" height="126" rx="2" fill="none" stroke="#C4A96A" stroke-width="0.6" opacity="0.25"/>
        <ellipse cx="90" cy="95" rx="22" ry="14" fill="#8B6030" opacity="0.4"/>
        <circle cx="108" cy="82" r="9" fill="#8B6030" opacity="0.4"/>
        <ellipse cx="160" cy="88" rx="25" ry="12" fill="#7A5028" opacity="0.35"/>
        <circle cx="178" cy="76" r="8" fill="#7A5028" opacity="0.35"/>
        <path d="M 70 100 Q 110 88 150 92 Q 180 96 210 88" fill="none" stroke="#C4A96A" stroke-width="0.5" opacity="0.2"/>
        <path d="M 60 112 Q 100 108 140 112 Q 170 115 210 110" fill="none" stroke="#C4A96A" stroke-width="0.5" opacity="0.18"/>
        <line x1="50" y1="158" x2="48" y2="170" stroke="#A08550" stroke-width="0.8" opacity="0.35"/>
        <line x1="75" y1="158" x2="73" y2="172" stroke="#A08550" stroke-width="0.8" opacity="0.35"/>
        <line x1="100" y1="158" x2="98" y2="170" stroke="#A08550" stroke-width="0.8" opacity="0.35"/>
        <line x1="125" y1="158" x2="123" y2="172" stroke="#A08550" stroke-width="0.8" opacity="0.35"/>
        <line x1="150" y1="158" x2="148" y2="170" stroke="#A08550" stroke-width="0.8" opacity="0.35"/>
        <line x1="175" y1="158" x2="173" y2="172" stroke="#A08550" stroke-width="0.8" opacity="0.35"/>
        <line x1="200" y1="158" x2="198" y2="170" stroke="#A08550" stroke-width="0.8" opacity="0.35"/>
        <line x1="225" y1="158" x2="223" y2="170" stroke="#A08550" stroke-width="0.8" opacity="0.35"/>
        <path d="M 20 220 Q 25 205 50 200 Q 120 195 240 196 Q 285 197 300 205 Q 310 212 306 222 Q 300 230 278 232 Q 200 236 100 235 Q 50 234 25 230 Z" fill="#5A3820" opacity="0.8"/>
        <path d="M 240 196 Q 275 188 295 185 Q 310 183 312 192 Q 314 202 300 205 Z" fill="#6B4A2A" opacity="0.65"/>
        <path d="M 30 230 Q 26 248 24 265" fill="none" stroke="#9C7248" stroke-width="2" opacity="0.55"/>
        <path d="M 295 230 Q 300 246 302 262" fill="none" stroke="#9C7248" stroke-width="2" opacity="0.55"/>
        <path d="M 30 208 Q 120 200 230 202 Q 270 203 296 208 Q 298 215 290 218 Q 220 220 120 220 Q 55 220 28 216 Z" fill="#7A6040" opacity="0.5"/>
        <rect x="246" y="197" width="46" height="30" rx="8" fill="#5C3818" opacity="0.5"/>
        <ellipse cx="130" cy="210" rx="55" ry="12" fill="#C4956A" opacity="0.7"/>
        <ellipse cx="68" cy="214" rx="16" ry="10" fill="#C4956A" opacity="0.65"/>
        <path d="M 58 208 Q 52 212 54 220 Q 58 224 64 220" fill="#B0804A" opacity="0.6"/>
        <circle cx="55" cy="215" r="3" fill="#3D1F0A" opacity="0.5"/>
        <path d="M 182 210 Q 192 204 194 210 Q 192 218 182 212" fill="none" stroke="#C4956A" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
        <rect x="0" y="262" width="360" height="78" fill="#5C1E28" opacity="0.2"/>
        <line x1="0" y1="278" x2="360" y2="278" stroke="#A08550" stroke-width="0.4" opacity="0.2"/>
        <line x1="0" y1="295" x2="360" y2="295" stroke="#A08550" stroke-width="0.4" opacity="0.2"/>
        <line x1="0" y1="312" x2="360" y2="312" stroke="#A08550" stroke-width="0.4" opacity="0.2"/>
        <line x1="40" y1="262" x2="40" y2="340" stroke="#A08550" stroke-width="0.4" opacity="0.18"/>
        <line x1="80" y1="262" x2="80" y2="340" stroke="#A08550" stroke-width="0.4" opacity="0.18"/>
        <line x1="120" y1="262" x2="120" y2="340" stroke="#A08550" stroke-width="0.4" opacity="0.18"/>
        <line x1="160" y1="262" x2="160" y2="340" stroke="#A08550" stroke-width="0.4" opacity="0.18"/>
        <line x1="200" y1="262" x2="200" y2="340" stroke="#A08550" stroke-width="0.4" opacity="0.18"/>
        <line x1="240" y1="262" x2="240" y2="340" stroke="#A08550" stroke-width="0.4" opacity="0.18"/>
        <line x1="280" y1="262" x2="280" y2="340" stroke="#A08550" stroke-width="0.4" opacity="0.18"/>
        <line x1="320" y1="262" x2="320" y2="340" stroke="#A08550" stroke-width="0.4" opacity="0.18"/>
        <rect x="52" y="278" width="12" height="12" fill="#B85C42" opacity="0.2" transform="rotate(45,58,284)"/>
        <rect x="132" y="278" width="12" height="12" fill="#B85C42" opacity="0.2" transform="rotate(45,138,284)"/>
        <rect x="212" y="278" width="12" height="12" fill="#B85C42" opacity="0.2" transform="rotate(45,218,284)"/>
        <rect x="292" y="278" width="12" height="12" fill="#B85C42" opacity="0.2" transform="rotate(45,298,284)"/>
        <rect x="300" y="254" width="44" height="6" rx="1" fill="#6B4A2A" opacity="0.55"/>
        <rect x="298" y="248" width="46" height="6" rx="1" fill="#5C1E28" opacity="0.5"/>
        <ellipse cx="322" cy="254" rx="14" ry="5" fill="none" stroke="#C4A96A" stroke-width="0.8" opacity="0.35"/>
        <text x="180" y="332" font-family="'Cormorant Garamond', serif" font-size="9" fill="#C4A96A" opacity="0.45" text-anchor="middle" font-style="italic">the ancient domestic</text>
      </svg>
    </div>

    <div class="leisure-card wide">
      <svg viewBox="0 0 720 340" xmlns="http://www.w3.org/2000/svg" width="100%">
        <rect width="720" height="340" fill="#1E1008"/>
        <rect x="100" y="20" width="520" height="240" fill="#5A3820" opacity="0.35"/>
        <rect x="100" y="20" width="520" height="240" fill="none" stroke="#A08550" stroke-width="1" opacity="0.2"/>
        <ellipse cx="360" cy="110" rx="200" ry="100" fill="#7A5028" opacity="0.15"/>
        <rect x="102" y="22" width="516" height="80" fill="#8B6A3A" opacity="0.1"/>
        <rect x="220" y="50" width="8" height="120" fill="#9C7848" opacity="0.18"/>
        <rect x="260" y="40" width="8" height="130" fill="#9C7848" opacity="0.15"/>
        <rect x="300" y="55" width="8" height="115" fill="#9C7848" opacity="0.18"/>
        <rect x="440" y="48" width="8" height="122" fill="#9C7848" opacity="0.15"/>
        <rect x="480" y="42" width="8" height="128" fill="#9C7848" opacity="0.17"/>
        <rect x="218" y="48" width="12" height="5" fill="#9C7848" opacity="0.2"/>
        <rect x="258" y="38" width="12" height="5" fill="#9C7848" opacity="0.18"/>
        <path d="M 100 130 Q 150 110 200 120 Q 250 130 300 115 Q 380 100 460 118 Q 520 130 580 120 Q 620 112 620 130" fill="none" stroke="#7A6030" stroke-width="0.7" opacity="0.25"/>
        <rect x="100" y="20" width="520" height="240" rx="2" fill="none" stroke="#C4A96A" stroke-width="1.5" opacity="0.2"/>
        <path d="M 240 240 Q 230 228 225 215 Q 222 205 228 198 Q 240 190 270 192 Q 310 194 350 198 Q 380 202 395 210 Q 405 218 400 228 Q 392 238 370 244 Q 330 250 285 248 Q 256 246 240 240 Z" fill="#1A0A04" opacity="0.9"/>
        <path d="M 270 192 Q 290 175 330 170 Q 365 166 390 178 Q 405 186 400 198 Q 390 195 370 192 Q 340 190 310 192 Z" fill="#120704" opacity="0.85"/>
        <rect x="252" y="230" width="100" height="12" rx="2" fill="#2A1208" opacity="0.8"/>
        <line x1="260" y1="230" x2="260" y2="242" stroke="#FAF6EE" stroke-width="0.8" opacity="0.3"/>
        <line x1="268" y1="230" x2="268" y2="242" stroke="#FAF6EE" stroke-width="0.8" opacity="0.3"/>
        <line x1="276" y1="230" x2="276" y2="242" stroke="#FAF6EE" stroke-width="0.8" opacity="0.3"/>
        <line x1="284" y1="230" x2="284" y2="242" stroke="#FAF6EE" stroke-width="0.8" opacity="0.3"/>
        <line x1="292" y1="230" x2="292" y2="242" stroke="#FAF6EE" stroke-width="0.8" opacity="0.3"/>
        <line x1="300" y1="230" x2="300" y2="242" stroke="#FAF6EE" stroke-width="0.8" opacity="0.3"/>
        <line x1="308" y1="230" x2="308" y2="242" stroke="#FAF6EE" stroke-width="0.8" opacity="0.3"/>
        <line x1="316" y1="230" x2="316" y2="242" stroke="#FAF6EE" stroke-width="0.8" opacity="0.3"/>
        <line x1="324" y1="230" x2="324" y2="242" stroke="#FAF6EE" stroke-width="0.8" opacity="0.3"/>
        <line x1="332" y1="230" x2="332" y2="242" stroke="#FAF6EE" stroke-width="0.8" opacity="0.3"/>
        <line x1="340" y1="230" x2="340" y2="242" stroke="#FAF6EE" stroke-width="0.8" opacity="0.3"/>
        <line x1="258" y1="248" x2="254" y2="290" stroke="#1A0A04" stroke-width="4" opacity="0.8"/>
        <line x1="370" y1="248" x2="374" y2="288" stroke="#1A0A04" stroke-width="4" opacity="0.8"/>
        <path d="M 280 208 Q 274 220 272 240 Q 270 255 272 268 Q 282 266 295 264 Q 305 262 308 250 Q 310 236 308 222 Q 306 210 298 206 Z" fill="#EDE5D4" opacity="0.65"/>
        <circle cx="292" cy="200" r="13" fill="#8B6040" opacity="0.6"/>
        <path d="M 280 196 Q 290 190 304 194 Q 308 198 305 205 Q 298 210 288 210 Q 280 208 278 202 Z" fill="#1A0A04" opacity="0.7"/>
        <line x1="540" y1="200" x2="540" y2="268" stroke="#A08550" stroke-width="2" opacity="0.6"/>
        <ellipse cx="540" cy="196" rx="28" ry="10" fill="#C4A96A" opacity="0.5"/>
        <path d="M 512 196 Q 540 225 568 196 Z" fill="#C4A96A" opacity="0.25"/>
        <ellipse cx="540" cy="240" rx="80" ry="50" fill="#C4A96A" opacity="0.06"/>
        <ellipse cx="540" cy="220" rx="50" ry="30" fill="#C4A96A" opacity="0.05"/>
        <rect x="528" y="268" width="24" height="6" rx="2" fill="#6B4A2A" opacity="0.55"/>
        <path d="M 20 258 Q 30 245 80 242 Q 140 240 180 244 Q 200 248 198 260 Q 196 270 170 272 Q 120 274 60 272 Q 28 270 20 258 Z" fill="#5C3820" opacity="0.65"/>
        <rect x="60" y="278" width="580" height="55" fill="#5C1E28" opacity="0.25"/>
        <rect x="60" y="278" width="580" height="55" fill="none" stroke="#B85C42" stroke-width="0.6" opacity="0.2"/>
        <ellipse cx="350" cy="305" rx="60" ry="18" fill="none" stroke="#C4A96A" stroke-width="0.7" opacity="0.2"/>
        <ellipse cx="350" cy="305" rx="35" ry="11" fill="none" stroke="#A08550" stroke-width="0.5" opacity="0.18"/>
        <path d="M 60 285 Q 200 280 350 283 Q 500 286 640 283" fill="none" stroke="#C4A96A" stroke-width="0.4" opacity="0.15"/>
        <path d="M 60 325 Q 200 322 350 325 Q 500 328 640 325" fill="none" stroke="#C4A96A" stroke-width="0.4" opacity="0.15"/>
        <rect x="620" y="0" width="100" height="340" fill="#0D0604" opacity="0.7"/>
        <rect x="630" y="20" width="78" height="200" fill="#120A06" opacity="0.8"/>
        <line x1="668" y1="20" x2="668" y2="220" stroke="#2A1208" stroke-width="0.8" opacity="0.5"/>
        <line x1="630" y1="120" x2="708" y2="120" stroke="#2A1208" stroke-width="0.8" opacity="0.5"/>
        <path d="M 340 0 Q 345 8 340 16 Q 335 24 340 32" stroke="#C4A96A" stroke-width="1" fill="none" opacity="0.25"/>
        <ellipse cx="340" cy="35" rx="24" ry="6" fill="none" stroke="#C4A96A" stroke-width="0.8" opacity="0.2"/>
        <text x="360" y="326" font-family="'Cormorant Garamond', serif" font-size="10" fill="#C4A96A" opacity="0.45" text-anchor="middle" font-style="italic">late evening, alone with the music</text>
      </svg>
    </div>

    <div class="leisure-card">
      <svg viewBox="0 0 360 340" xmlns="http://www.w3.org/2000/svg" width="100%">
        <rect width="360" height="340" fill="#F5EFE3"/>
        <rect width="360" height="340" fill="#EDE5D4" opacity="0.6"/>
        <rect x="0" y="0" width="40" height="340" fill="#2A1208" opacity="0.12"/>
        <rect x="0" y="0" width="360" height="30" fill="#2A1208" opacity="0.08"/>
        <rect x="60" y="40" width="240" height="220" fill="#E8F0F8" opacity="0.9"/>
        <rect x="60" y="40" width="240" height="220" fill="none" stroke="#D4C8B8" stroke-width="4" opacity="0.6"/>
        <rect x="66" y="46" width="228" height="208" fill="none" stroke="#C8B8A0" stroke-width="1" opacity="0.3"/>
        <rect x="62" y="42" width="236" height="100" fill="#D4C8B0" opacity="0.5"/>
        <rect x="62" y="142" width="236" height="116" fill="#7A9080" opacity="0.35"/>
        <line x1="62" y1="150" x2="298" y2="142" stroke="#B8C8B0" stroke-width="1" opacity="0.5"/>
        <path d="M 62 165 Q 120 160 180 165 Q 240 170 298 163" fill="none" stroke="#8A9E90" stroke-width="0.5" opacity="0.3"/>
        <path d="M 62 185 Q 130 180 190 185 Q 250 190 298 182" fill="none" stroke="#8A9E90" stroke-width="0.5" opacity="0.25"/>
        <ellipse cx="180" cy="90" rx="60" ry="20" fill="#FAF6EE" opacity="0.35"/>
        <ellipse cx="240" cy="80" rx="40" ry="15" fill="#FAF6EE" opacity="0.25"/>
        <rect x="52" y="258" width="256" height="12" rx="2" fill="#D4C8B8" opacity="0.7"/>
        <ellipse cx="280" cy="263" rx="5" ry="3" fill="#C4B8A0" opacity="0.6"/>
        <ellipse cx="292" cy="264" rx="4" ry="3" fill="#B8A890" opacity="0.5"/>
        <ellipse cx="268" cy="262" rx="3" ry="2" fill="#C4B8A0" opacity="0.55"/>
        <ellipse cx="180" cy="300" rx="55" ry="12" fill="#EDE5D4" opacity="0.7"/>
        <path d="M 148 278 Q 150 265 160 258 Q 170 250 180 250 Q 192 250 200 258 Q 210 266 212 278 Q 210 286 200 290 Q 190 294 178 293 Q 162 292 148 278 Z" fill="#8B6040" opacity="0.55"/>
        <path d="M 148 280 Q 140 292 138 305 Q 148 308 162 305 Q 170 295 165 285 Z" fill="#8B6040" opacity="0.5"/>
        <path d="M 212 280 Q 220 292 222 305 Q 212 308 198 305 Q 190 295 195 285 Z" fill="#8B6040" opacity="0.5"/>
        <path d="M 140 300 Q 150 308 180 310 Q 210 308 220 300 Q 215 310 205 315 Q 195 318 180 318 Q 165 318 155 315 Q 145 312 140 300 Z" fill="#EDE5D4" opacity="0.65"/>
        <circle cx="180" cy="245" r="18" fill="#4A2A10" opacity="0.75"/>
        <rect x="175" y="258" width="10" height="10" rx="2" fill="#6B4030" opacity="0.6"/>
        <circle cx="150" cy="288" r="6" fill="#8B6040" opacity="0.5"/>
        <circle cx="210" cy="288" r="6" fill="#8B6040" opacity="0.5"/>
        <path d="M 145 286 Q 148 282 152 282" fill="none" stroke="#7A5030" stroke-width="1" opacity="0.35"/>
        <path d="M 205 286 Q 208 282 212 282" fill="none" stroke="#7A5030" stroke-width="1" opacity="0.35"/>
        <ellipse cx="180" cy="320" rx="100" ry="10" fill="#2A1208" opacity="0.08"/>
        <path d="M 80 310 Q 180 305 280 310 Q 280 330 180 335 Q 80 330 80 310 Z" fill="#5C1E28" opacity="0.12"/>
        <text x="180" y="332" font-family="'Cormorant Garamond', serif" font-size="9" fill="#6B4A2A" opacity="0.5" text-anchor="middle" font-style="italic">the mind, unoccupied</text>
      </svg>
    </div>

    <div class="leisure-card">
      <svg viewBox="0 0 360 340" xmlns="http://www.w3.org/2000/svg" width="100%">
        <rect width="360" height="340" fill="#FAF6EE"/>
        <rect width="360" height="340" fill="#F5EFE3" opacity="0.7"/>
        <rect x="100" y="20" width="200" height="240" rx="2" fill="#EDE5D4" opacity="0.8"/>
        <rect x="100" y="20" width="200" height="240" rx="2" fill="none" stroke="#D4C8B8" stroke-width="1.5" opacity="0.5"/>
        <circle cx="200" cy="90" r="30" fill="none" stroke="#C4A96A" stroke-width="1" opacity="0.35"/>
        <ellipse cx="200" cy="88" rx="18" ry="24" fill="none" stroke="#9C7248" stroke-width="1.2" opacity="0.45"/>
        <path d="M 185 68 Q 200 60 215 68 Q 222 76 218 85 Q 210 90 200 88 Q 188 86 184 76 Z" fill="#6B4A2A" opacity="0.3"/>
        <rect x="106" y="105" width="188" height="14" fill="#A08550" opacity="0.25"/>
        <line x1="102" y1="22" x2="102" y2="258" stroke="#9C7248" stroke-width="1.5" opacity="0.2"/>
        <line x1="298" y1="22" x2="298" y2="258" stroke="#9C7248" stroke-width="1.5" opacity="0.2"/>
        <line x1="100" y1="20" x2="80" y2="300" stroke="#9C7248" stroke-width="2" opacity="0.5"/>
        <line x1="300" y1="20" x2="320" y2="300" stroke="#9C7248" stroke-width="2" opacity="0.5"/>
        <line x1="90" y1="200" x2="310" y2="205" stroke="#9C7248" stroke-width="1.5" opacity="0.35"/>
        <ellipse cx="210" cy="280" rx="22" ry="7" fill="#9C7248" opacity="0.5"/>
        <line x1="192" y1="280" x2="185" y2="315" stroke="#9C7248" stroke-width="2" opacity="0.5"/>
        <line x1="228" y1="280" x2="235" y2="315" stroke="#9C7248" stroke-width="2" opacity="0.5"/>
        <path d="M 186 220 Q 182 240 180 260 Q 180 275 185 282 Q 198 278 215 276 Q 228 274 232 265 Q 235 252 232 235 Q 228 218 218 214 Q 205 210 194 214 Z" fill="#FAF6EE" opacity="0.8"/>
        <path d="M 182 262 Q 176 278 174 298 Q 180 305 200 306 Q 220 306 230 298 Q 232 280 228 262" fill="#D4C8B8" opacity="0.5"/>
        <path d="M 194 205 Q 208 196 222 200 Q 230 206 228 215 Q 220 220 210 220 Q 198 220 193 213 Z" fill="#6B4A2A" opacity="0.6"/>
        <ellipse cx="210" cy="207" rx="16" ry="19" fill="#8B6040" opacity="0.55"/>
        <path d="M 195 225 Q 175 220 158 218 Q 148 216 142 220" fill="none" stroke="#8B6040" stroke-width="5" stroke-linecap="round" opacity="0.5"/>
        <line x1="142" y1="220" x2="120" y2="205" stroke="#6B4A2A" stroke-width="1.5" opacity="0.55"/>
        <circle cx="45" cy="290" r="12" fill="#EDE5D4" opacity="0.65"/>
        <path d="M 34 296 Q 36 315 38 325 L 52 325 L 54 296 Z" fill="#FAF6EE" opacity="0.6"/>
        <circle cx="70" cy="295" r="10" fill="#EDE5D4" opacity="0.55"/>
        <path d="M 61 300 Q 62 318 64 326 L 76 326 L 78 300 Z" fill="#EDE5D4" opacity="0.5"/>
        <ellipse cx="52" cy="308" rx="14" ry="9" fill="#C4A96A" opacity="0.3"/>
        <circle cx="46" cy="305" r="3" fill="#B85C42" opacity="0.4"/>
        <circle cx="54" cy="304" r="3" fill="#5C1E28" opacity="0.35"/>
        <circle cx="60" cy="307" r="3" fill="#A08550" opacity="0.4"/>
        <rect x="10" y="295" width="130" height="30" rx="2" fill="#EDE5D4" opacity="0.4"/>
        <rect x="10" y="295" width="130" height="30" rx="2" fill="none" stroke="#D4C8B8" stroke-width="0.5" opacity="0.3"/>
        <rect x="0" y="308" width="360" height="32" fill="#5C1E28" opacity="0.18"/>
        <path d="M 0 314 Q 90 310 180 314 Q 270 318 360 314" fill="none" stroke="#C4A96A" stroke-width="0.5" opacity="0.15"/>
        <path d="M 0 324 Q 90 320 180 324 Q 270 328 360 324" fill="none" stroke="#C4A96A" stroke-width="0.5" opacity="0.15"/>
        <ellipse cx="300" cy="320" rx="30" ry="9" fill="none" stroke="#A08550" stroke-width="0.5" opacity="0.2"/>
        <text x="180" y="334" font-family="'Cormorant Garamond', serif" font-size="9" fill="#6B4A2A" opacity="0.5" text-anchor="middle" font-style="italic">life, in full expression</text>
      </svg>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-sec" id="contact">
  <div class="cta-l">
    <div class="sec-eyebrow">Begin</div>
    <h2 class="sec-h2">Tell Us What You<br><em>Want Your Home to Do</em></h2>
    <p>We'll design something precise, warm, and entirely yours. Every project starts with a conversation — no forms, no funnels, no pressure.</p>
  </div>
  <div class="cta-r">
    <p><strong>Start a conversation</strong>Every inquiry is handled personally. We take on a small number of projects at a time to ensure full attention to each build.</p>
    <a href="mailto:hello@homehabit.co" class="btn btn-fill">hello@homehabit.co</a>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <a href="#" class="logo">Home<span style="color:var(--brass)">·</span>Habit</a>
  <p>© 2026 HomeHabit — Custom Home Automation</p>
  <p>Complexity hidden. Warmth delivered.</p>
</footer>
`;
