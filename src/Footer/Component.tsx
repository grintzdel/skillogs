import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Icon } from '@/components/Icon'

export async function Footer() {
  const footerData = (await getCachedGlobal('footer', 1)()) as Footer

  const navItems = footerData?.navItems || []
  const socialLinks = footerData?.socialLinks || []
  const copyright = footerData?.copyright || '© 2026 Skillogs'
  const backgroundColor = footerData?.backgroundColor || '#000000'
  const textColor = footerData?.textColor || '#ffffff'

  // Split navItems into columns of 3
  const columns: any[][] = []
  for (let i = 0; i < navItems.length; i += 3) {
    columns.push(navItems.slice(i, i + 3))
  }

  return (
    <footer
      className="mt-auto border-t border-border"
      style={{ backgroundColor, color: textColor }}
    >
      <div className="container py-8 gap-8 flex flex-col">
        {/* Top section: Navigation + Theme Selector */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Navigation in columns of 3 */}
          {columns.length > 0 && (
            <nav className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 flex-1">
              {columns.map((column, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-3">
                  {column.map(({ link }, i) => (
                    <CMSLink
                      className="hover:opacity-70 transition-opacity"
                      style={{ color: textColor }}
                      key={i}
                      {...link}
                    />
                  ))}
                </div>
              ))}
            </nav>
          )}

          <div className="flex items-start">
            <ThemeSelector />
          </div>
        </div>

        {/* Bottom section: Social Links + Copyright */}
        <div className="flex flex-col gap-4 pt-4">
          {/* Social Links */}
          {socialLinks.length > 0 && (
            <div className="flex gap-4 justify-start">
              {socialLinks.map((social: any, i: number) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="hover:opacity-70 transition-opacity"
                  style={{ color: textColor }}
                >
                  <Icon icon={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          )}

          {/* Copyright */}
          <div className="text-sm opacity-70 text-center w-full" style={{ color: textColor }}>
            {copyright}
          </div>
        </div>
      </div>
    </footer>
  )
}