import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const layers = [
  { letter: "J", name: "JSON", role: "DATA", desc: "A transparent, human-readable data layer built around local JSON files.", detail: "Simple persistence without the ceremony of a database." },
  { letter: "E", name: "EXPRESS", role: "API", desc: "A minimal server layer that exposes clean REST endpoints and application logic.", detail: "Small, direct and easy to understand." },
  { letter: "R", name: "REACT", role: "INTERFACE", desc: "A component-driven interface layer powered by React and Vite.", detail: "Build responsive experiences with familiar web primitives." },
  { letter: "N", name: "NODE", role: "RUNTIME", desc: "The JavaScript runtime connecting application logic, APIs and filesystem operations.", detail: "One language across the stack." }
];

function App() {
  const [active, setActive] = useState(0);
  const ref = useRef();
  useEffect(() => {
    const els = [...document.querySelectorAll(".galleryItem")];
    const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) setActive(Number(e.target.dataset.index)) }), { threshold: .6 });
    els.forEach(e => obs.observe(e)); return () => obs.disconnect();
  }, []);
  return <div className="site">
    <nav className="nav">
      <a className="logo" href="#top">JERN<span>STACK</span></a>
      <div className="navLinks">
        <a href="#gallery">Stack</a>
        <a href="#structure">Structure</a>
        <a href="#philosophy">Philosophy</a>
      </div>
      <span className="creator">SM / 01</span>
    </nav>

    <main id="top">
      <section className="hero">
        <div className="eyebrow">JSON • EXPRESS • REACT • NODE</div>
        <h1><span>J</span><span>E</span><span>R</span><span>N</span></h1>
        <div className="heroBottom">
          <p>A lightweight full-stack architecture for mini software, rapid prototypes and focused utilities.</p>
          <div className="scroll">SCROLL TO EXPLORE ↓</div>
        </div>
        <div className="heroOrb">
          <i>J</i><i>E</i><i>R</i><i>N</i>
        </div>
      </section>

      <section id="gallery" className="gallerySection">
        <div className="sectionIntro">
          <span>01 / THE STACK</span>
          <h2>Four layers.<br /><em>One idea.</em></h2>
          <p>JERN keeps the stack close to the code: data, API, interface and runtime.</p>
        </div>
        <div className="gallery" ref={ref}>
          {layers.map((x, i) => <article className={"galleryItem " + (active === i ? "isActive" : "")} data-index={i} key={x.letter}>
            <div className="galleryLetter">{x.letter}</div>
            <div className="galleryMeta">
              <span>0{i + 1}</span><span>{x.role}</span>
            </div>
            <h3>{x.name}</h3>
            <p>{x.desc}</p>
            <small>{x.detail}</small>
          </article>)}
        </div>
      </section>

      <section className="statement">
        <div className="eyebrow">THE PRINCIPLE</div>
        <h2>Don't add a database<br /><i>just because you can.</i></h2>
        <p>Choose the simplest persistence model that fits the problem. JERN is deliberately small.</p>
      </section>

      <section id="structure" className="structure">
        <div className="sectionIntro">
          <span>02 / PROJECT STRUCTURE</span>
          <h2>Simple enough<br /><em>to see.</em></h2>
        </div>
        <div className="structureGrid">
          <div className="tree">
            <div className="treeTitle">JERN STACK BOILERPLATE</div>
            <pre>{`jern-stack-boilerplate/
├── backend/
│   ├── data/
│   │   └── data.json       # Local "Database"
│   ├── server.js           # Express API
│   └── package.json
│
└── frontend/               # React + Vite
    ├── src/
    │   ├── components/
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── styles.css
    ├── public/
    └── package.json`}</pre>
          </div>
          <div className="structureCopy">
            <span>THE IDEA</span>
            <h3>Two worlds.<br />One project.</h3>
            <p>The backend owns data and server logic. The frontend owns the experience. Nothing unnecessary sits between them.</p>
            <div className="miniFlow">
              <b>FRONTEND</b><i>↕</i><b>EXPRESS API</b><i>↕</i><b>JSON DATA</b>
            </div>
          </div>
        </div>
      </section>

      <section className="useCases">
        <div className="sectionIntro"><span>03 / USE JERN WHEN</span>
          <h2>The project is<br /><em>focused.</em></h2>
        </div>
        <div className="marquee">
          <div>MINI SOFTWARE&nbsp;&nbsp; • &nbsp;&nbsp;UTILITIES&nbsp;&nbsp; • &nbsp;&nbsp;INTERNAL TOOLS&nbsp;&nbsp; • &nbsp;&nbsp;PROTOTYPES&nbsp;&nbsp; • &nbsp;&nbsp;DASHBOARDS&nbsp;&nbsp; • &nbsp;&nbsp;HACKATHONS&nbsp;&nbsp; • &nbsp;&nbsp;</div>
        </div>
      </section>

      <section className="creatorLinks">
        <div className="sectionIntro">
          <span>05 / OPEN SOURCE</span><h2>Built in public.<br />
            <em>Made to share.</em></h2></div>
        <div className="linkCards">
          <a href="https://github.com/SaurabhArt111/jern-stack" target="_blank" rel="noreferrer">
            <span>JERN STACK REPOSITORY</span><strong>jern-stack ↗</strong>
            <small>The official project repository for the JERN Stack.</small>
          </a>
          <a href="https://github.com/SaurabhArt111" target="_blank" rel="noreferrer">
            <span>CREATOR / GITHUB</span><strong>Saurabh Art ↗</strong>
            <small>Explore the creator’s GitHub profile and other projects.</small>
          </a>
        </div>
      </section>
      <section id="philosophy" className="philosophy">
        <div className="eyebrow">04 / PHILOSOPHY</div>
        <h2>When the problem is small,<br />
          <span>the architecture should be small too.</span>
        </h2>
        <div className="signature">
          <strong>JERN</strong><span>JSON • EXPRESS • REACT • NODE</span>
          <small>Created &amp; founded by <b>Saurabh Surendra Maurya</b></small>
        </div>
      </section>
    </main>
    <footer>
      <span>JERN STACK / 2026</span>
      <span>Created by Saurabh Surendra Maurya</span>
      <span>JSON • Express • React • Node</span>
    </footer>
  </div>
}

createRoot(
  document.getElementById("root")).render(
    <App />
  );