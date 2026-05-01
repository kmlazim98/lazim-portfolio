import { useState, useEffect } from 'react'
import './App.css'

const NAV_LINKS = ['About', 'Experience', 'Skills', 'Certifications', 'Contact']

const SKILLS = [
  'Microsoft Azure', 'Azure Monitor', 'Log Analytics', 'Azure VMs',
  'VNet / NSG', 'Azure Load Balancer', 'ARM Templates', 'Azure CLI',
  'GitHub Actions', 'FortiGate Firewall', 'Microsoft 365', 'Exchange Online',
  'Active Directory', 'DNS / DHCP', 'Windows Server', 'Python',
  'SIEM Monitoring', 'Threat Intelligence', 'Zero-Trust Network', 'PowerShell',
  'Linux Security', 'Vulnerability Management', 'Patch Management', 'ExpressRoute',
]

const EXPERIENCE = [
  {
    role: 'Cloud Engineer',
    company: 'CityNet',
    location: 'Dammam, Saudi Arabia',
    period: 'May 2023 – Present',
    highlights: [
      'Configure Azure Monitor, Log Analytics & Application Insights for full-stack observability',
      'Provision and manage Azure VMs, VNets, NSGs, Load Balancers and ExpressRoute',
      'Automate infrastructure provisioning using ARM templates, Azure CLI and GitHub Actions',
      'Administer FortiGate 200F/80F firewalls with policy creation and zero-trust enforcement',
      'Implement high availability using Availability Sets, Zones and Azure Load Balancer',
      'Lead vulnerability management, patching and security compliance across cloud endpoints',
    ],
  },
  {
    role: 'Technical Support System Engineer',
    company: 'Freelance',
    location: 'Remote',
    period: 'Mar 2022 – Dec 2022',
    highlights: [
      'Managed Microsoft infrastructure: AD, DNS, DHCP, Print Server and File Server',
      'Administered cloud mailboxes, O365 licenses, Outlook setup and configuration',
      'Implemented file system security and Group Policies per client requirements',
      'Maintained Windows patch management and application lifecycle',
    ],
  },
  {
    role: 'System Administrator (Trainee)',
    company: 'RIDGE Automation',
    location: 'Calicut, India',
    period: 'Feb 2021 – Feb 2022',
    highlights: [
      'Administered AD DS, DNS and DHCP; monitored Windows servers and hardware',
      'Configured and maintained in-house servers and integrated new hardware',
      'Provided IT support for Wintel platform and service desk call management',
      'Supported Configuration Management, Asset and Service Level Management',
    ],
  },
]

const CERTS = [
  { name: 'Google Cloud Cybersecurity', issuer: 'Google', year: '2025', color: '#4285F4' },
  { name: 'Windows Server Hybrid Administrator (AZ-800/801)', issuer: 'Microsoft', year: '', color: '#00A4EF' },
  { name: 'Cisco Certified Network Associate (200-301)', issuer: 'Cisco', year: '', color: '#1BA0D7' },
  { name: 'Fortinet Certified Cyber Security Associate', issuer: 'Fortinet', year: '', color: '#EE3124' },
  { name: 'Cybersecurity Professional', issuer: 'US-Council', year: '', color: '#00B4D8' },
  { name: 'Python Programming Course', issuer: 'University of Michigan', year: '', color: '#FFCD00' },
]

export default function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) })
      },
      { threshold: 0.3 }
    )
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <a href="#about" className="nav__logo">LM<span className="dot">.</span></a>
        <ul className={`nav__links ${menuOpen ? 'open' : ''}`}>
          {NAV_LINKS.map(l => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className={activeSection === l.toLowerCase() ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >{l}</a>
            </li>
          ))}
        </ul>
        <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      <section id="about" className="hero">
        <div className="hero__grid-bg" aria-hidden="true" />
        <div className="hero__content">
          <p className="hero__label">Cloud Engineer · Microsoft Azure</p>
          <h1 className="hero__name">Lazim<br />Mohammed<span className="dot">.</span></h1>
          <p className="hero__bio">
            4+ years designing, deploying, and managing Azure cloud environments at scale.
            Passionate about high-availability architecture, zero-trust security, and
            automating everything that can be automated.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">Get in touch</a>
            <a href="https://github.com/kmlazim98" target="_blank" rel="noreferrer" className="btn btn--ghost">GitHub ↗</a>
          </div>
          <div className="hero__meta">
            <span>Dammam, Saudi Arabia</span>
            <span>kmlazim98@gmail.com</span>
          </div>
        </div>
        <div className="hero__orb hero__orb--1" aria-hidden="true" />
        <div className="hero__orb hero__orb--2" aria-hidden="true" />
      </section>

      <section id="experience" className="section">
        <div className="container">
          <h2 className="section__title">Experience</h2>
          <div className="timeline">
            {EXPERIENCE.map((exp, i) => (
              <div className="timeline__item" key={i}>
                <div className="timeline__dot" />
                <div className="timeline__card">
                  <div className="timeline__header">
                    <div>
                      <h3>{exp.role}</h3>
                      <p className="timeline__company">{exp.company} · {exp.location}</p>
                    </div>
                    <span className="timeline__period">{exp.period}</span>
                  </div>
                  <ul className="timeline__list">
                    {exp.highlights.map((h, j) => <li key={j}>{h}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section section--alt">
        <div className="container">
          <h2 className="section__title">Skills</h2>
          <div className="skills__grid">
            {SKILLS.map(s => <span className="skill__tag" key={s}>{s}</span>)}
          </div>
        </div>
      </section>

      <section id="certifications" className="section">
        <div className="container">
          <h2 className="section__title">Certifications</h2>
          <div className="certs__grid">
            {CERTS.map((c, i) => (
              <div className="cert__card" key={i}>
                <div className="cert__accent" style={{ background: c.color }} />
                <div className="cert__body">
                  <p className="cert__issuer">{c.issuer}</p>
                  <h3 className="cert__name">{c.name}</h3>
                  {c.year && <span className="cert__year">{c.year}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section section--alt">
        <div className="container contact">
          <h2 className="section__title">Contact</h2>
          <p className="contact__sub">Let's build something great together.</p>
          <div className="contact__links">
            <a href="mailto:kmlazim98@gmail.com" className="contact__link">
              <span className="contact__icon">✉</span> kmlazim98@gmail.com
            </a>
            <a href="https://linkedin.com/in/kmlazim98" target="_blank" rel="noreferrer" className="contact__link">
              <span className="contact__icon">in</span> linkedin.com/in/kmlazim98
            </a>
            <a href="https://github.com/kmlazim98" target="_blank" rel="noreferrer" className="contact__link">
              <span className="contact__icon">gh</span> github.com/kmlazim98
            </a>
            <a href="tel:+966539483153" className="contact__link">
              <span className="contact__icon">☎</span> +966 53 948 3153
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Lazim Mohammed K M · Built with React + Vite</p>
      </footer>
    </div>
  )
}
