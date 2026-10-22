export type Product = { id: number; name: string; category: string; price: number; cost: number; stock: number; minimum: number; icon: string; image?: string };
export type Sale = { id: string; customer: string; total: number; method: string; time: string; items: string; status: string };
export type Customer = { name: string; phone: string; tier: string; orders: number; total: number };
export type Business = { products: Product[]; sales: Sale[]; customers: Customer[]; expenses: { name: string; amount: number; date: string }[]; drafts: { items: Record<string,number>; customer: string }[] };
export const rupiah = (n: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);
export function orderTotal(items: Record<string,number>, products: Product[], discount: number) {
 const subtotal = products.reduce((sum,p) => sum + p.price * (items[p.id] || 0),0);
 return { subtotal, discount: subtotal * Math.min(100,Math.max(0,discount))/100, total: subtotal * (1-Math.min(100,Math.max(0,discount))/100) };
}
export function recipeUsage(quantity:number) { return { beans:18 * quantity, milk:150 * quantity }; }
export const categoryDefaultImages: Record<string, string> = {
  Minuman: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=300&q=80',
  Makanan: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=300&q=80',
  Merchandise: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=300&q=80',
};
export function getProductImage(product: Product): string {
  return product.image || categoryDefaultImages[product.category] || categoryDefaultImages['Minuman'];
}
export const initialBusiness: Business = {
 products: [
 {id:1,name:'Kopi Susu Gula Aren',category:'Minuman',price:25000,cost:9000,stock:84,minimum:15,icon:'coffee',image:'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=300&q=80'},
 {id:2,name:'Americano',category:'Minuman',price:20000,cost:6500,stock:62,minimum:15,icon:'coffee',image:'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=300&q=80'},
 {id:3,name:'Matcha Latte',category:'Minuman',price:30000,cost:12000,stock:8,minimum:15,icon:'cup',image:'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=300&q=80'},
 {id:4,name:'Croissant Butter',category:'Makanan',price:28000,cost:14000,stock:36,minimum:10,icon:'croissant',image:'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=300&q=80'},
 {id:5,name:'Chocolate Cookies',category:'Makanan',price:18000,cost:7000,stock:12,minimum:15,icon:'cookie',image:'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=300&q=80'},
 {id:6,name:'Cappuccino',category:'Minuman',price:28000,cost:11000,stock:48,minimum:15,icon:'coffee',image:'https://images.unsplash.com/photo-1534778101976-62847782c213?w=300&q=80'},
 {id:7,name:'Red Velvet Cake',category:'Makanan',price:35000,cost:18000,stock:6,minimum:10,icon:'cake',image:'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=300&q=80'},
 {id:8,name:'Tumbler Kopi Kita',category:'Merchandise',price:125000,cost:65000,stock:24,minimum:5,icon:'cup',image:'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=300&q=80'}],
 sales:[
 {id:'TRX-081024-042',customer:'Nadia Putri',total:78000,method:'QRIS',time:'14:32',items:'Kopi Susu Gula Aren, Croissant Butter',status:'Lunas'},
 {id:'TRX-081024-041',customer:'Pelanggan umum',total:50000,method:'Tunai',time:'14:26',items:'2 Kopi Susu Gula Aren',status:'Lunas'},
 {id:'TRX-081024-040',customer:'Rizky Pratama',total:96000,method:'E-Wallet',time:'14:18',items:'Matcha Latte, Cappuccino',status:'Lunas'},
 {id:'TRX-081024-039',customer:'Pelanggan umum',total:28000,method:'Tunai',time:'14:05',items:'Croissant Butter',status:'Lunas'},
 {id:'TRX-081024-038',customer:'Sarah Aulia',total:125000,method:'Transfer Bank',time:'13:54',items:'Tumbler Kopi Kita',status:'Lunas'}],
 customers:[{name:'Nadia Putri',phone:'',tier:'Gold',orders:24,total:1450000},{name:'Rizky Pratama',phone:'',tier:'Silver',orders:16,total:920000},{name:'Sarah Aulia',phone:'',tier:'Gold',orders:32,total:2100000},{name:'Budi Santoso',phone:'',tier:'Bronze',orders:5,total:250000}],
 expenses:[{name:'Pembelian bahan baku',amount:850000,date:'2026-10-08'},{name:'Listrik & internet',amount:350000,date:'2026-10-08'},{name:'Biaya operasional',amount:250000,date:'2026-10-07'}],drafts:[]
};
