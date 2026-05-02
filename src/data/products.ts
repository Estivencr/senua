import type { Product } from '../types'

export const PRODUCTS: Product[] = [
  {
    id: 'prod-001',
    name: 'Conjunto Encaje Noir',
    description: 'Encaje francés de alto diseño',
    longDescription: 'Conjunto de lencería en encaje francés delicado. Incluye sujetador con aros y braguita a juego. Detalles en cinta de raso dorado en los bordes.',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=600&q=80',
      'https://images.unsplash.com/photo-1594938298603-c8148c4b4057?w=600&q=80'
    ],
    colors: [
      { id: 'c1', name: 'Negro', hex: '#000000' },
      { id: 'c2', name: 'Burdeos', hex: '#6B2D3C' }
    ],
    designs: [{ id: 'd1', name: 'Encaje' }],
    brand: { id: 'b1', name: 'Senua Exclusive' },
    sizes: [
      { id: 's1', size: 'XS', stock: 5 },
      { id: 's2', size: 'S', stock: 10 },
      { id: 's3', size: 'M', stock: 8 },
      { id: 's4', size: 'L', stock: 4 }
    ],
    rating: 4.8,
    reviews: 24,
    inStock: true,
    onSale: true,
    discount: 25,
    sku: 'SENUA-001',
    category: 'conjuntos'
  },
  {
    id: 'prod-002',
    name: 'Body Satén Ivory',
    description: 'Satén premium con escote profundo',
    longDescription: 'Body de satén suave con escote en V profundo y cierre de botones en la entrepierna. Acabado brillante elegante para una silueta perfecta.',
    price: 74.99,
    image: 'https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=600&q=80'
    ],
    colors: [
      { id: 'c3', name: 'Blanco', hex: '#F5F2EE' },
      { id: 'c4', name: 'Nude', hex: '#D4A574' }
    ],
    designs: [{ id: 'd2', name: 'Satén' }],
    brand: { id: 'b2', name: 'Lux Intimé' },
    sizes: [
      { id: 's2', size: 'S', stock: 6 },
      { id: 's3', size: 'M', stock: 12 },
      { id: 's4', size: 'L', stock: 7 }
    ],
    rating: 4.6,
    reviews: 18,
    inStock: true,
    onSale: false,
    sku: 'SENUA-002',
    category: 'bodys'
  },
  {
    id: 'prod-003',
    name: 'Conjunto Transparencias Velvet',
    description: 'Tul transparente con detalles de terciopelo',
    longDescription: 'Conjunto ultra sensual de tul transparente negro con aplicaciones de terciopelo en puntos estratégicos. El equilibrio perfecto entre misterio y elegancia.',
    price: 109.99,
    originalPrice: 139.99,
    image: 'https://images.unsplash.com/photo-1608228088998-57828365d486?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1608228088998-57828365d486?w=600&q=80'
    ],
    colors: [
      { id: 'c1', name: 'Negro', hex: '#000000' }
    ],
    designs: [
      { id: 'd3', name: 'Transparente' },
      { id: 'd1', name: 'Encaje' }
    ],
    brand: { id: 'b1', name: 'Senua Exclusive' },
    sizes: [
      { id: 's1', size: 'XS', stock: 3 },
      { id: 's2', size: 'S', stock: 7 },
      { id: 's3', size: 'M', stock: 5 }
    ],
    rating: 4.9,
    reviews: 31,
    inStock: true,
    onSale: true,
    discount: 21,
    sku: 'SENUA-003',
    category: 'conjuntos'
  },
  {
    id: 'prod-004',
    name: 'Bralette Liso Minimal',
    description: 'Minimalismo elegante en algodón premium',
    longDescription: 'Bralette de diseño minimalista en algodón modal ultra suave. Sin aros, con sujeción perfecta y acabado liso para el día a día con elegancia.',
    price: 52.99,
    image: 'https://images.unsplash.com/photo-1586495777744-4e6232bf2177?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586495777744-4e6232bf2177?w=600&q=80'
    ],
    colors: [
      { id: 'c1', name: 'Negro', hex: '#000000' },
      { id: 'c3', name: 'Blanco', hex: '#F5F2EE' },
      { id: 'c4', name: 'Nude', hex: '#D4A574' }
    ],
    designs: [{ id: 'd4', name: 'Liso' }],
    brand: { id: 'b3', name: 'Elegancia Pura' },
    sizes: [
      { id: 's1', size: 'XS', stock: 8 },
      { id: 's2', size: 'S', stock: 15 },
      { id: 's3', size: 'M', stock: 12 },
      { id: 's4', size: 'L', stock: 9 }
    ],
    rating: 4.4,
    reviews: 42,
    inStock: true,
    onSale: false,
    sku: 'SENUA-004',
    category: 'accesorios'
  },
  {
    id: 'prod-005',
    name: 'Conjunto Burdeos Passion',
    description: 'Encaje florido en tono burdeos intenso',
    longDescription: 'Conjunto de sujetador balconette y braguita en encaje floral burdeos. El color más seductor de la temporada en una pieza artesanal de alta calidad.',
    price: 94.99,
    originalPrice: 124.99,
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80'
    ],
    colors: [
      { id: 'c2', name: 'Burdeos', hex: '#6B2D3C' }
    ],
    designs: [{ id: 'd1', name: 'Encaje' }],
    brand: { id: 'b2', name: 'Lux Intimé' },
    sizes: [
      { id: 's2', size: 'S', stock: 5 },
      { id: 's3', size: 'M', stock: 8 },
      { id: 's4', size: 'L', stock: 6 },
      { id: 's5', size: 'XL', stock: 3 }
    ],
    rating: 4.7,
    reviews: 19,
    inStock: true,
    onSale: true,
    discount: 24,
    sku: 'SENUA-005',
    category: 'conjuntos'
  },
  {
    id: 'prod-006',
    name: 'Body Encaje Premium Gold',
    description: 'Body de encaje con detalles dorados',
    longDescription: 'Body completo de encaje negro con sutiles detalles dorados en los contornos. Pieza premium de la colección exclusiva SENUA Gold Edition.',
    price: 139.99,
    image: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=600&q=80'
    ],
    colors: [
      { id: 'c1', name: 'Negro', hex: '#000000' }
    ],
    designs: [
      { id: 'd1', name: 'Encaje' },
      { id: 'd3', name: 'Transparente' }
    ],
    brand: { id: 'b1', name: 'Senua Exclusive' },
    sizes: [
      { id: 's1', size: 'XS', stock: 2 },
      { id: 's2', size: 'S', stock: 4 },
      { id: 's3', size: 'M', stock: 4 }
    ],
    rating: 5.0,
    reviews: 11,
    inStock: true,
    onSale: false,
    sku: 'SENUA-006',
    category: 'premium'
  },
  {
    id: 'prod-007',
    name: 'Conjunto Satén Nude Rose',
    description: 'Satén sedoso en tono nude rosado',
    longDescription: 'Conjunto sujetador y braguita en satén de alta calidad color nude rosado. Corte favorecedor que realza la figura con máxima comodidad.',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=600&q=80'
    ],
    colors: [
      { id: 'c4', name: 'Nude', hex: '#D4A574' }
    ],
    designs: [{ id: 'd2', name: 'Satén' }],
    brand: { id: 'b3', name: 'Elegancia Pura' },
    sizes: [
      { id: 's2', size: 'S', stock: 9 },
      { id: 's3', size: 'M', stock: 11 },
      { id: 's4', size: 'L', stock: 7 },
      { id: 's5', size: 'XL', stock: 4 }
    ],
    rating: 4.5,
    reviews: 27,
    inStock: true,
    onSale: true,
    discount: 20,
    sku: 'SENUA-007',
    category: 'conjuntos'
  },
  {
    id: 'prod-008',
    name: 'Liguero Clásico Negro',
    description: 'Liguero de encaje con 6 ligas',
    longDescription: 'Liguero clásico de encaje negro con 6 ligas ajustables. Diseño atemporal que combina con medias y complementa cualquier conjunto de la colección.',
    price: 54.99,
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80'
    ],
    colors: [
      { id: 'c1', name: 'Negro', hex: '#000000' },
      { id: 'c3', name: 'Blanco', hex: '#F5F2EE' }
    ],
    designs: [{ id: 'd1', name: 'Encaje' }],
    brand: { id: 'b2', name: 'Lux Intimé' },
    sizes: [
      { id: 's1', size: 'XS', stock: 6 },
      { id: 's2', size: 'S', stock: 10 },
      { id: 's3', size: 'M', stock: 8 },
      { id: 's4', size: 'L', stock: 5 }
    ],
    rating: 4.3,
    reviews: 15,
    inStock: true,
    onSale: false,
    sku: 'SENUA-008',
    category: 'accesorios'
  },
  {
    id: 'prod-009',
    name: 'Body Transparente Silk',
    description: 'Transparencias en seda natural',
    longDescription: 'Body de seda natural con paneles de tul transparente estratégicamente ubicados. La prenda más lujosa de nuestra colección Premium.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80'
    ],
    colors: [
      { id: 'c1', name: 'Negro', hex: '#000000' },
      { id: 'c2', name: 'Burdeos', hex: '#6B2D3C' }
    ],
    designs: [
      { id: 'd3', name: 'Transparente' },
      { id: 'd2', name: 'Satén' }
    ],
    brand: { id: 'b1', name: 'Senua Exclusive' },
    sizes: [
      { id: 's2', size: 'S', stock: 3 },
      { id: 's3', size: 'M', stock: 3 },
      { id: 's4', size: 'L', stock: 2 }
    ],
    rating: 4.9,
    reviews: 8,
    inStock: true,
    onSale: false,
    sku: 'SENUA-009',
    category: 'premium'
  },
  {
    id: 'prod-010',
    name: 'Conjunto Blanco Bridal',
    description: 'Para el día más especial',
    longDescription: 'Conjunto nupcial de encaje blanco marfil. Sujetador push-up y braguita de encaje con lazos de raso. La elección perfecta para la noche de bodas.',
    price: 119.99,
    originalPrice: 149.99,
    image: 'https://images.unsplash.com/photo-1617331721458-bd3bd3f9c7f8?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1617331721458-bd3bd3f9c7f8?w=600&q=80'
    ],
    colors: [
      { id: 'c3', name: 'Blanco', hex: '#F5F2EE' }
    ],
    designs: [{ id: 'd1', name: 'Encaje' }],
    brand: { id: 'b1', name: 'Senua Exclusive' },
    sizes: [
      { id: 's1', size: 'XS', stock: 4 },
      { id: 's2', size: 'S', stock: 8 },
      { id: 's3', size: 'M', stock: 7 },
      { id: 's4', size: 'L', stock: 5 }
    ],
    rating: 4.8,
    reviews: 22,
    inStock: true,
    onSale: true,
    discount: 20,
    sku: 'SENUA-010',
    category: 'premium'
  },
  {
    id: 'prod-011',
    name: 'Kimono Encaje Seduction',
    description: 'Bata kimono de encaje completo',
    longDescription: 'Kimono largo de encaje negro con forro de satén. Diseño asimétrico con cinturón a juego. Complemento perfecto para cualquier conjunto de la colección.',
    price: 84.99,
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80'
    ],
    colors: [
      { id: 'c1', name: 'Negro', hex: '#000000' },
      { id: 'c2', name: 'Burdeos', hex: '#6B2D3C' }
    ],
    designs: [{ id: 'd1', name: 'Encaje' }],
    brand: { id: 'b2', name: 'Lux Intimé' },
    sizes: [
      { id: 's6', size: 'S/M', stock: 10 },
      { id: 's7', size: 'L/XL', stock: 8 }
    ],
    rating: 4.6,
    reviews: 16,
    inStock: true,
    onSale: false,
    sku: 'SENUA-011',
    category: 'accesorios'
  },
  {
    id: 'prod-012',
    name: 'Conjunto Liso Elegance',
    description: 'Minimalismo sofisticado en microfibra',
    longDescription: 'Conjunto de microfibra ultrafina con acabado liso premium. El confort absoluto con la elegancia característica de SENUA. Ideal para uso diario.',
    price: 64.99,
    originalPrice: 79.99,
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&q=80'
    ],
    colors: [
      { id: 'c1', name: 'Negro', hex: '#000000' },
      { id: 'c4', name: 'Nude', hex: '#D4A574' },
      { id: 'c2', name: 'Burdeos', hex: '#6B2D3C' }
    ],
    designs: [{ id: 'd4', name: 'Liso' }],
    brand: { id: 'b3', name: 'Elegancia Pura' },
    sizes: [
      { id: 's1', size: 'XS', stock: 7 },
      { id: 's2', size: 'S', stock: 14 },
      { id: 's3', size: 'M', stock: 16 },
      { id: 's4', size: 'L', stock: 10 },
      { id: 's5', size: 'XL', stock: 6 }
    ],
    rating: 4.5,
    reviews: 38,
    inStock: true,
    onSale: true,
    discount: 19,
    sku: 'SENUA-012',
    category: 'conjuntos'
  }
]
