'use client'
import React, { useState, useRef, useEffect } from 'react'
import { CMSLink } from '@/components/Link'
import type { Header } from '@/payload-types'

interface Props {
  navItems: Header['navItems']
}

export const DesktopNav: React.FC<Props> = ({ navItems }) => {
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null)
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openSubmenu !== null) {
        const ref = dropdownRefs.current[openSubmenu]
        if (ref && !ref.contains(event.target as Node)) {
          setOpenSubmenu(null)
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [openSubmenu])

  const toggleSubmenu = (index: number) => {
    setOpenSubmenu(openSubmenu === index ? null : index)
  }

  return (
    <nav className="hidden md:flex gap-3 items-center">
      {navItems?.map((item, i) => {
        const { hasSubmenu, link, submenuLabel, submenuItems } = item

        if (hasSubmenu && submenuItems && submenuItems.length > 0) {
          return (
            <div
              key={i}
              className="relative"
              ref={(el) => {
                dropdownRefs.current[i] = el
              }}
            >
              <button
                onClick={() => toggleSubmenu(i)}
                className="flex items-center gap-1 text-sm hover:text-primary transition-colors"
                aria-expanded={openSubmenu === i}
                aria-haspopup="true"
              >
                {submenuLabel}
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openSubmenu === i ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openSubmenu === i && (
                <div className="absolute top-full left-0 mt-2 min-w-[200px] bg-white dark:bg-card border border-border rounded-md shadow-lg z-50">
                  <ul className="py-2">
                    {submenuItems.map((subItem, j) => (
                      <li key={j}>
                        <CMSLink
                          {...subItem.link}
                          className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )
        }

        return <CMSLink key={i} {...link} appearance="link" />
      })}
    </nav>
  )
}
