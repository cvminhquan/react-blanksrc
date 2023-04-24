import Category from '~/pages/Category/Category'
import iconTable from '../assets/img/icon-table.png'
import iconSofa from '../assets/img/icon-sofa.png'
import iconLamp from '../assets/img/icons-lamp.png'
import iconBed from '../assets/img/icon-bed.png'
import iconTea from '../assets/img/icons-tea-cup.png'
import iconAccesories from '../assets/img/icon-table.png'
import iconPlate from '../assets/img/icon-plate.png'
import iconKid from '../assets/img/icon-kid.png'
interface Category {
    id: number;
    name: string;
    parentId: number | null;
    keyword: string;
    img?: string;
  }
export const listCategories:Category[] = [
  { id: 1, name: 'Wood Funiture', parentId: null, keyword: 'wood-funiture', img: iconTable},
  { id: 2, name: 'Upholstery & Mattess', parentId: null, keyword: 'upholstery-mattess', img: iconSofa},
  { id: 3, name: 'Home Decoration', parentId: null, keyword: 'home-decoration', img: iconLamp},
  { id: 4, name: 'Textiles', parentId: null, keyword: 'textiles', img: iconBed},
  { id: 5, name: 'Kitchenware', parentId: null, keyword: 'kitchenware', img: iconTea},
  { id: 6, name: 'Small Storage', parentId: null, keyword: 'small-storage', img: iconAccesories},
  { id: 7, name: 'Collections', parentId: null, keyword: 'collections', img: iconPlate},
  { id: 8, name: 'Table', parentId: 1, keyword: 'table' },
  { id: 9, name: 'Dining Table Set', parentId: 1, keyword: 'dining-table-set' },
  { id: 10, name: 'Beds', parentId: 1, keyword: 'beds' },
  { id: 11, name: 'Chair, Stools & Benchs', parentId: 1, keyword: 'chair-stools-benchs' },
  { id: 12, name: 'Wall-mounted Product', parentId: 1, keyword: 'wall-mounted-product' },
  { id: 13, name: 'Mirrors', parentId: 1, keyword: 'mirrors' },
  { id: 14, name: "Kid's Furnitures", parentId: 1, keyword: 'kid-funiture' },
  { id: 15, name: 'Sofas', parentId: 2, keyword: 'sofas' },
  { id: 16, name: 'Living Room Chairs', parentId: 2, keyword: 'mattresses' },
  { id: 17, name: 'Mattresses', parentId: 2, keyword: 'Mattresses' },
  { id: 18, name: 'Lamps', parentId: 3, keyword: 'lamps' },
  { id: 19, name: 'Aroma Oil & Potpourris', parentId: 3, keyword: 'aromaoil-potpourris' },
  { id: 20, name: 'Frames, Painting & Pictures', parentId: 3, keyword: 'frames-painting-pictures' },
  { id: 21, name: 'Artificial Flowers & Plants', parentId: 3, keyword: 'artificial-flowers-plants' },
  { id: 22, name: 'Clocks', parentId: 3, keyword: 'clocks' },
  { id: 23, name: 'Candles, Tealights & Holders', parentId: 3, keyword: 'candles-tealights-holders' },
  { id: 24, name: 'Decorative Objects', parentId: 3, keyword: 'decorative-objects' },
  { id: 25, name: 'Soft Toys', parentId: 3, keyword: 'soft-toys' },
  { id: 26, name: 'Bed Linens, Pillows & Duvets', parentId: 4, keyword: 'bed-linens-pillows-duvets' },
  { id: 27, name: 'Bean Bags & Floor Cushions', parentId: 4, keyword: 'bean-bags-floor-cushions' },
  { id: 28, name: 'Decoration Cushions & Covers', parentId: 4, keyword: 'decoration-cushions-covers' },
  { id: 29, name: 'Kitchen Textiles', parentId: 4, keyword: 'kitchen-textiles' },
  { id: 30, name: 'Table Linens', parentId: 4, keyword: 'table-linens' },
  { id: 31, name: 'Mats & Rugs', parentId: 4, keyword: 'mats-rugs' },
  { id: 32, name: 'Curtains', parentId: 4, keyword: 'curtains' },
  { id: 33, name: 'Towels', parentId: 4, keyword: 'towels' },
  { id: 34, name: 'Kitchen Organizing', parentId: 5, keyword: 'kitchen-organizing' },
  { id: 35, name: 'Storing', parentId: 5, keyword: 'storing' },
  { id: 36, name: 'Kitchen Accessories', parentId: 5, keyword: 'kitchen-accessories' },
  { id: 37, name: 'Mugs, Cups & Tea Pots', parentId: 5, keyword: 'mugs-cups-tea-pots' },
  { id: 38, name: 'Serving', parentId: 5, keyword: 'serving' },
  { id: 39, name: 'Plates, Bowls & Cutlery', parentId: 5, keyword: 'plates-bowls-cutlery' },
  { id: 40, name: 'Others', parentId: 5, keyword: 'others' },
  { id: 41, name: 'Storage & Organization', parentId: 6, keyword: 'storage-organization' },
  { id: 42, name: 'Waste Bins', parentId: 6, keyword: 'waste-bins' },
  { id: 43, name: 'Bathroom Accessories', parentId: 6, keyword: 'bathroom-accessories' },
  { id: 44, name: 'Sofa', parentId: 7, keyword: 'sofa' },
  { id: 45, name: 'Small Storage', parentId: 7, keyword: 'small-storage' },
  { id: 46, name: 'Tablewares', parentId: 7, keyword: 'tablewares' },
  { id: 47, name: 'Good Price Combo', parentId: 7, keyword: 'good-price-combo' },
  { id: 48, name: 'Decoration', parentId: 7, keyword: 'decoration' },
  { id: 49, name: 'KONDO', parentId: 7, keyword: 'kondo' },
  { id: 50, name: 'Kid', parentId: null, keyword: 'kid', img: iconKid},

]
