import { useState, useEffect } from 'react'
import './App.css'

const NAV_LINKS = ['About', 'Experience', 'Skills', 'Certifications', 'Contact']

const COMPETENCIES = [
  { area: 'Cloud & M365', items: ['Microsoft Azure (IaaS/PaaS)', 'Entra ID', 'Exchange Online', 'Intune', 'Azure Monitor', 'VNet', 'ExpressRoute', 'AWS CLI'] },
  { area: 'Virtualisation', items: ['VMware vSphere/ESXi', 'Proxmox VE', 'Hyper-V', 'VM Clustering', 'Live Migration', 'Snapshot Management'] },
  { area: 'Networking', items: ['VLANs', 'LACP/STP Trunking', 'Cisco & Fortinet Firewalls', 'Site-to-Site VPN', 'BGP/OSPF', 'Network Segmentation'] },
  { area: 'Security', items: ['Zero-Trust Architecture', 'Deep Packet Inspection', 'Fortinet NGFW', 'Endpoint Hardening', 'Vulnerability Management'] },
  { area: 'Storage & Backup', items: ['SAN/NAS Administration', 'Veeam Backup & Replication', 'DR Planning & Testing', 'Offsite Replication'] },
  { area: 'Systems', items: ['Windows Server 2016–2022', 'AD DS', 'GPO', 'DNS/DHCP', 'Linux (Ubuntu/CentOS)', 'Shell Scripting', 'OS Hardening'] },
  { area: 'Delivery', items: ['HLD/LLD Design', 'Visio Diagrams', 'RCA', 'SLA Management', 'L3 Escalation', 'Stakeholder Reporting'] },
]

const EXPERIENCE = [
  {
    role: 'Infrastructure Engineer',
    company: 'SATS Saudi Arabia',
    location: 'Saudi Arabia',
    period: 'June 2025 – Present',
    highlights: [
      'Design and deploy enterprise-grade hybrid infrastructure integrating on-premises Proxmox/VMware clusters with Azure Cloud, achieving 99.9% HA SLAs across KSA-wide project sites',
      'Lead storage architecture decisions — specifying and managing SAN/NAS solutions — with automated Veeam backup frameworks and validated recovery testing',
      'Engineer organisation-wide network security using Fortinet NGFW: advanced firewall policies, VLAN segmentation, deep packet inspection, and Zero-Trust micro-segmentation',
      'Produce stakeholder-facing HLD/LLD documentation and Visio network diagrams enabling seamless L3 handover and faster incident resolution',
      'Act as technical authority for infrastructure roadmap planning, translating business requirements into actionable designs with defined milestones and risk mitigation plans',
    ],
  },
  {
    role: 'Technical Support Engineer (L2)',
    company: 'CityNet',
    location: 'Dammam, Saudi Arabia',
    period: 'May 2023 – May 2025',
    highlights: [
      'Architected and administered complex Azure environments including VNet topologies, Load Balancers, and Entra ID identity platforms for multiple enterprise clients',
      'Designed and maintained Cisco switching infrastructure (STP, LACP, Trunking) with zero unplanned outages over two years',
      'Led Microsoft 365 migrations — Exchange Online, SharePoint, and Teams — with full data integrity verification and minimal user disruption',
      'Built proactive monitoring frameworks using Azure Monitor and Log Analytics, reducing MTTD for critical incidents and optimising cloud spend',
      'Deployed and managed Intune-based MDM policies for endpoint compliance across a distributed workforce',
    ],
  },
  {
    role: 'System Administrator',
    company: 'RIDGE Automation',
    location: 'Calicut, India',
    period: 'Feb 2021 – Feb 2022',
    highlights: [
      'Administered Windows Server infrastructure (AD DS, DNS, DHCP) enforcing GPO-based security baselines that reduced policy violations',
      'Conducted Root Cause Analysis for Sev-1 incidents with documented findings that informed long-term architectural improvements',
      'Supported server patching, hardening cycles, and backup validation maintaining near-zero downtime across all critical business systems',
    ],
  },
]

const CERTS = [
  { name: 'Windows Server Hybrid Administrator (AZ-800/801)', issuer: 'Microsoft', color: '#00A4EF' },
  { name: 'Cisco Certified Network Associate (200-301)', issuer: 'Cisco', color: '#1BA0D7' },
  { name: 'Fortinet Certified Cybersecurity Associate', issuer: 'Fortinet', color: '#EE3124' },
  { name: 'Cybersecurity Professional', issuer: 'EC-Council', color: '#00B4D8' },
  { name: 'Google Cloud Cybersecurity Certificate', issuer: 'Google', color: '#4285F4' },
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
      (entries) => { entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) }) },
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
              <a href={`#${l.toLowerCase()}`} className={activeSection === l.toLowerCase() ? 'active' : ''} onClick={() => setMenuOpen(false)}>{l}</a>
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
          <p className="hero__label">Infrastructure Engineer · Hybrid Cloud &amp; Network Security</p>
          <h1 className="hero__name">Lazim<br />Mohammed<span className="dot">.</span></h1>
          <p className="hero__bio">
            5+ years of end-to-end ownership across hybrid cloud, enterprise virtualisation, and
            multi-vendor network security. Architecting High-Availability (99.9% SLA) environments
            that integrate Azure Cloud with VMware/Proxmox, Fortinet security stacks, and
            Microsoft 365 ecosystems across the KSA region.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">Get in touch</a>
            <a href="https://github.com/kmlazim98" target="_blank" rel="noreferrer" className="btn btn--ghost">GitHub ↗</a>
            <a href="https://linkedin.com/in/kmlazim98" target="_blank" rel="noreferrer" className="btn btn--ghost">LinkedIn ↗</a>
          </div>
          <div className="hero__meta">
            <span>Dammam, Saudi Arabia</span>
            <span>kmlazim98@gmail.com</span>
            <span>+966-501970819</span>
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
          <div className="competencies">
            {COMPETENCIES.map((c, i) => (
              <div className="comp__block" key={i}>
                <h3 className="comp__area">{c.area}</h3>
                <div className="comp__tags">
                  {c.items.map(s => <span className="skill__tag" key={s}>{s}</span>)}
                </div>
              </div>
            ))}
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section section--alt">
        <div className="container contact">
          <h2 className="section__title">Contact</h2>
          <p className="contact__sub">Open to Senior / Lead Infrastructure opportunities.</p>
          <div className="contact__links">
            <a href="mailto:kmlazim98@gmail.com" className="contact__link"><span className="contact__icon">✉</span> kmlazim98@gmail.com</a>
            <a href="https://linkedin.com/in/kmlazim98" target="_blank" rel="noreferrer" className="contact__link"><span className="contact__icon">in</span> linkedin.com/in/kmlazim98</a>
            <a href="https://github.com/kmlazim98" target="_blank" rel="noreferrer" className="contact__link"><span className="contact__icon">gh</span> github.com/kmlazim98</a>
            <a href="tel:+966501970819" className="contact__link"><span className="contact__icon">☎</span> +966 501 970 819</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Lazim Mohammed KM · Infrastructure Engineer · Built with React + Vite</p>
      </footer>
    </div>
  )
}
