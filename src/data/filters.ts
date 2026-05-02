import type { FilterGroup } from '../types'

export const FILTER_GROUPS: FilterGroup[] = [
  {
    id: 'colors',
    label: 'Color',
    options: [
      { id: 'color-negro', name: 'Negro', value: 'Negro' },
      { id: 'color-burdeos', name: 'Burdeos', value: 'Burdeos' },
      { id: 'color-blanco', name: 'Blanco', value: 'Blanco' },
      { id: 'color-nude', name: 'Nude', value: 'Nude' }
    ]
  },
  {
    id: 'designs',
    label: 'Diseño',
    options: [
      { id: 'design-encaje', name: 'Encaje', value: 'Encaje' },
      { id: 'design-saten', name: 'Satén', value: 'Satén' },
      { id: 'design-transparente', name: 'Transparente', value: 'Transparente' },
      { id: 'design-liso', name: 'Liso', value: 'Liso' }
    ]
  },
  {
    id: 'brands',
    label: 'Marca',
    options: [
      { id: 'brand-senua', name: 'Senua Exclusive', value: 'Senua Exclusive' },
      { id: 'brand-lux', name: 'Lux Intimé', value: 'Lux Intimé' },
      { id: 'brand-elegancia', name: 'Elegancia Pura', value: 'Elegancia Pura' }
    ]
  }
]
