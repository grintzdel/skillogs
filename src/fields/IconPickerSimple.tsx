'use client'

import React, { useState, useMemo } from 'react'
import { useField, FieldLabel } from '@payloadcms/ui'
import type { TextFieldClientComponent } from 'payload'
import {
  Home,
  User,
  Settings,
  Mail,
  Phone,
  Search,
  ShoppingCart,
  Heart,
  Star,
  Calendar,
  Clock,
  Download,
  Upload,
  Edit,
  Trash,
  Save,
  Check,
  X,
  Plus,
  Minus,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  Menu,
  Image,
  File,
  Folder,
  Camera,
  Video,
  Music,
  Bell,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Share,
  Link,
  ExternalLink,
  MapPin,
  Globe,
  Wifi,
  Battery,
  Sun,
  Moon,
  Cloud,
  Zap,
  TrendingUp,
  TrendingDown,
  BarChart,
  PieChart,
  DollarSign,
  CreditCard,
  Gift,
  Tag,
  Bookmark,
  Flag,
  AlertCircle,
  AlertTriangle,
  Info,
  HelpCircle,
  MessageCircle,
  Send,
  Paperclip,
  Copy,
  Clipboard,
  Filter,
  Layout,
  Grid,
  List,
  Sidebar,
  Maximize,
  Minimize,
  RefreshCw,
  Repeat,
  PlayCircle,
  PauseCircle,
  StopCircle,
  SkipBack,
  SkipForward,
  Volume,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Package,
  Truck,
  MapPinned,
  Navigation,
  Award,
  Target,
  Activity,
} from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Home,
  User,
  Settings,
  Mail,
  Phone,
  Search,
  ShoppingCart,
  Heart,
  Star,
  Calendar,
  Clock,
  Download,
  Upload,
  Edit,
  Trash,
  Save,
  Check,
  X,
  Plus,
  Minus,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  Menu,
  Image,
  File,
  Folder,
  Camera,
  Video,
  Music,
  Bell,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Share,
  Link,
  ExternalLink,
  MapPin,
  Globe,
  Wifi,
  Battery,
  Sun,
  Moon,
  Cloud,
  Zap,
  TrendingUp,
  TrendingDown,
  BarChart,
  PieChart,
  DollarSign,
  CreditCard,
  Gift,
  Tag,
  Bookmark,
  Flag,
  AlertCircle,
  AlertTriangle,
  Info,
  HelpCircle,
  MessageCircle,
  Send,
  Paperclip,
  Copy,
  Clipboard,
  Filter,
  Layout,
  Grid,
  List,
  Sidebar,
  Maximize,
  Minimize,
  RefreshCw,
  Repeat,
  PlayCircle,
  PauseCircle,
  StopCircle,
  SkipBack,
  SkipForward,
  Volume,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Package,
  Truck,
  MapPinned,
  Navigation,
  Award,
  Target,
  Activity,
}

export const IconPickerComponent: TextFieldClientComponent = ({ path, field }) => {
  const { value, setValue } = useField<string>({ path })
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const iconsPerPage = 40

  const allIcons = useMemo(() => Object.keys(iconMap), [])

  const filteredIcons = useMemo(() => {
    if (!search) return allIcons
    return allIcons.filter((icon) => icon.toLowerCase().includes(search.toLowerCase()))
  }, [search, allIcons])

  const totalPages = Math.ceil(filteredIcons.length / iconsPerPage)
  const startIndex = (currentPage - 1) * iconsPerPage
  const paginatedIcons = filteredIcons.slice(startIndex, startIndex + iconsPerPage)

  React.useEffect(() => {
    setCurrentPage(1)
  }, [search])

  const handleSelect = (iconName: string) => {
    setValue(iconName)
    setIsOpen(false)
    setSearch('')
  }

  const handleClear = () => {
    setValue('')
  }

  const SelectedIcon = value ? iconMap[value] : null

  return (
    <div style={{ marginBottom: '20px' }}>
      {/* Label */}
      <FieldLabel label={field.label} required={field.required} />
      <div style={{ position: 'relative' }}>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              width: '42px',
              height: '42px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--theme-elevation-150)',
              borderRadius: 'var(--style-radius-s)',
              background: value ? 'var(--theme-elevation-50)' : 'var(--theme-input-bg)',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            title="Choisir une icône"
          >
            {SelectedIcon ? <SelectedIcon size={20} /> : <Plus size={16} />}
          </button>

          {value && (
            <button
              type="button"
              onClick={handleClear}
              style={{
                padding: '8px',
                border: '1px solid var(--theme-elevation-150)',
                borderRadius: 'var(--style-radius-s)',
                background: 'var(--theme-input-bg)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              title="Supprimer l'icône"
            >
              <X size={16} />
            </button>
          )}

          {value && (
            <span
              style={{
                fontSize: 'var(--font-size-sm)',
                color: 'var(--theme-elevation-500)',
              }}
            >
              {value}
            </span>
          )}
        </div>

        {/* Modal de sélection */}
        {isOpen && (
          <>
            {/* Overlay */}
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.3)',
                zIndex: 999,
              }}
              onClick={() => {
                setIsOpen(false)
                setSearch('')
              }}
            />

            {/* Modal */}
            <div
              style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'var(--theme-elevation-0)',
                borderRadius: 'var(--style-radius-m)',
                boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
                maxWidth: '600px',
                width: '90vw',
                maxHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                zIndex: 1000,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div
                style={{
                  padding: 'var(--base)',
                  borderBottom: '1px solid var(--theme-elevation-150)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  autoFocus
                  style={{
                    flex: 1,
                    padding: 'var(--input-padding)',
                    border: '1px solid var(--theme-elevation-150)',
                    borderRadius: 'var(--style-radius-s)',
                    background: 'var(--theme-input-bg)',
                    color: 'var(--theme-elevation-900)',
                    fontSize: 'var(--font-size-md)',
                    marginRight: 'var(--base-half)',
                  }}
                />
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false)
                    setSearch('')
                  }}
                  style={{
                    padding: '8px',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    color: 'var(--theme-elevation-500)',
                  }}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Info */}
              <div
                style={{
                  padding: '8px var(--base)',
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--theme-elevation-500)',
                  borderBottom: '1px solid var(--theme-elevation-150)',
                }}
              >
                {filteredIcons.length} icône{filteredIcons.length > 1 ? 's' : ''}
              </div>

              {/* Grille d'icônes */}
              <div
                style={{
                  padding: 'var(--base)',
                  overflowY: 'auto',
                  flex: 1,
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(70px, 1fr))',
                    gap: 'var(--base-quarter)',
                  }}
                >
                  {paginatedIcons.map((iconName) => {
                    const isSelected = value === iconName
                    const IconComponent = iconMap[iconName]

                    return (
                      <button
                        key={iconName}
                        type="button"
                        onClick={() => handleSelect(iconName)}
                        title={iconName}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: 'var(--base-half)',
                          border: `1px solid ${isSelected ? 'var(--theme-success-500)' : 'var(--theme-elevation-150)'}`,
                          borderRadius: 'var(--style-radius-s)',
                          background: isSelected
                            ? 'var(--theme-success-100)'
                            : 'var(--theme-elevation-50)',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          minHeight: '60px',
                        }}
                      >
                        {IconComponent && <IconComponent size={20} />}
                        <span
                          style={{
                            fontSize: '10px',
                            marginTop: '4px',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            width: '100%',
                            textAlign: 'center',
                          }}
                        >
                          {iconName}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 'var(--base-half) var(--base)',
                    borderTop: '1px solid var(--theme-elevation-150)',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    style={{
                      padding: '6px 12px',
                      background: 'var(--theme-elevation-100)',
                      border: '1px solid var(--theme-elevation-150)',
                      borderRadius: 'var(--style-radius-s)',
                      cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                      opacity: currentPage === 1 ? 0.5 : 1,
                      fontSize: 'var(--font-size-sm)',
                    }}
                  >
                    ←
                  </button>

                  <span
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      color: 'var(--theme-elevation-500)',
                    }}
                  >
                    {currentPage} / {totalPages}
                  </span>

                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    style={{
                      padding: '6px 12px',
                      background: 'var(--theme-elevation-100)',
                      border: '1px solid var(--theme-elevation-150)',
                      borderRadius: 'var(--style-radius-s)',
                      cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                      opacity: currentPage === totalPages ? 0.5 : 1,
                      fontSize: 'var(--font-size-sm)',
                    }}
                  >
                    →
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
