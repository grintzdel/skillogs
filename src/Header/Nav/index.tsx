import React from 'react'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'

import type { Header as HeaderType } from '@/payload-types'
import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <div className="flex items-center gap-4">
      <DesktopNav navItems={navItems} />

      <MobileNav navItems={navItems} />

      <Link href="/search" className="p-2">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 text-primary" />
      </Link>
    </div>
  )
}
