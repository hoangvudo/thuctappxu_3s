import React from 'react'

function Footer() {
  const footerLinks = [
    {
      title: 'Customer Care',
      links: [
        { label: 'Contact', href: '#' },
        { label: 'Shipping', href: '#' },
        { label: 'Warranty Policy', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
        { label: 'Journal', href: '#' },
      ],
    },
  ]

  return (
    <footer className="w-full pt-xl pb-lg border-t border-outline-variant bg-surface-container-low">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-gutter max-w-container-max mx-auto">
        {/* Brand Section */}
        <div className="flex flex-col gap-md">
          <div className="font-display-lg text-headline-sm tracking-widest text-primary">AÉRA</div>
          <p className="font-body-md text-body-md text-on-surface-variant pr-md">
            Timeless aesthetics and sustainable craftsmanship for the modern individual.
          </p>
        </div>

        {/* Footer Links */}
        {footerLinks.map((section, idx) => (
          <div key={idx} className="flex flex-col gap-sm">
            <h5 className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-xs">
              {section.title}
            </h5>
            {section.links.map((link, linkIdx) => (
              <a
                key={linkIdx}
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}

        {/* Social Section */}
        <div className="flex flex-col gap-md">
          <h5 className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-xs">
            Follow Us
          </h5>
          <div className="flex gap-md">
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">
              social_leaderboard
            </span>
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">
              camera
            </span>
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">
              alternate_email
            </span>
          </div>
          <div className="mt-lg">
            <p className="font-label-sm text-[10px] text-on-surface-variant tracking-widest uppercase">
              © 2024 AÉRA. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
