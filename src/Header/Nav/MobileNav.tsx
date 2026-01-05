'use client'
import React, { useState } from 'react'
import { CMSLink } from '@/components/Link'
import type { Header } from '@/payload-types'

interface Props {
  navItems: Header['navItems']
}

export const MobileNav: React.FC<Props> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null)

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleSubmenu = (index: number) => {
    setOpenSubmenuIndex(openSubmenuIndex === index ? null : index)
  }

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-primary"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-card border-t border-border shadow-lg z-50">
          <nav className="container py-4">
            <ul className="space-y-2">
              {navItems?.map((item, i) => {
                const { hasSubmenu, link, submenuLabel, submenuItems } = item

                if (hasSubmenu && submenuItems && submenuItems.length > 0) {
                  return (
                    <li key={i}>
                      <button
                        onClick={() => toggleSubmenu(i)}
                        className="w-full text-left px-4 py-2 flex justify-between items-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded"
                      >
                        <span>{submenuLabel}</span>
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            openSubmenuIndex === i ? 'rotate-180' : ''
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

                      {openSubmenuIndex === i && (
                        <ul className="mt-2 ml-4 space-y-1 border-l-2 border-border pl-4">
                          {submenuItems.map((subItem, j) => (
                            <li key={j}>
                              <CMSLink
                                {...subItem.link}
                                className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded"
                                onClick={() => setIsOpen(false)}
                              />
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  )
                }

                return (
                  <li key={i}>
                    <CMSLink
                      {...link}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded"
                      onClick={() => setIsOpen(false)}
                    />
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}
