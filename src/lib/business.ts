export type Product = { id: number; name: string; category: string; price: number; cost: number; stock: number; minimum: number; icon: string };
export type Sale = { id: string; customer: string; total: number; method: string; time: string; items: string; status: string };
export type Customer = { name: string; phone: string; tier: string; orders: number; total: number };
export type Business = { products: Product[]; sales: Sale[]; customers: Customer[]; expenses: { name: string; amount: number; date: string }[]; drafts: { items: Record<string,number>; customer: string }[] };
export const rupiah = (n: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);
export function orderTotal(items: Record<string,number>, products: Product[], discount: number) {
 const subtotal = products.reduce((sum,p) => sum + p.price * (items[p.id] || 0),0);
 return { subtotal, discount: subtotal * Math.min(100,Math.max(0,discount))/100, total: subtotal * (1-Math.min(100,Math.max(0,discount))/100) };
}
export function recipeUsage(quantity:number) { return { beans:18 * quantity, milk:150 * quantity }; }
export const initialBusiness: Business = {
 products: [
 {id:1,name:'Kopi Susu Gula Aren',category:'Minuman',price:25000,cost:9000,stock:84,minimum:15,icon:'coffee'},
 {id:2,name:'Americano',category:'Minuman',price:20000,cost:6500,stock:62,minimum:15,icon:'coffee'},
 {id:3,name:'Matcha Latte',category:'Minuman',price:30000,cost:12000,stock:8,minimum:15,icon:'cup'},
 {id:4,name:'Croissant Butter',category:'Makanan',price:28000,cost:14000,stock:36,minimum:10,icon:'croissant'},
 {id:5,name:'Chocolate Cookies',category:'Makanan',price:18000,cost:7000,stock:12,minimum:15,icon:'cookie'},
 {id:6,name:'Cappuccino',category:'Minuman',price:28000,cost:11000,stock:48,minimum:15,icon:'coffee'},
 {id:7,name:'Red Velvet Cake',category:'Makanan',price:35000,cost:18000,stock:6,minimum:10,icon:'cake'},
 {id:8,name:'Tumbler Kopi Kita',category:'Merchandise',price:125000,cost:65000,stock:24,minimum:5,icon:'cup'}],
 sales:[
 {id:'TRX-081024-042',customer:'Nadia Putri',total:78000,method:'QRIS',time:'14:32',items:'Kopi Susu Gula Aren, Croissant Butter',status:'Lunas'},
 {id:'TRX-081024-041',customer:'Pelanggan umum',total:50000,method:'Tunai',time:'14:26',items:'2 Kopi Susu Gula Aren',status:'Lunas'},
 {id:'TRX-081024-040',customer:'Rizky Pratama',total:96000,method:'E-Wallet',time:'14:18',items:'Matcha Latte, Cappuccino',status:'Lunas'},
 {id:'TRX-081024-039',customer:'Pelanggan umum',total:28000,method:'Tunai',time:'14:05',items:'Croissant Butter',status:'Lunas'},
 {id:'TRX-081024-038',customer:'Sarah Aulia',total:125000,method:'Transfer Bank',time:'13:54',items:'Tumbler Kopi Kita',status:'Lunas'}],
 customers:[{name:'Nadia Putri',phone:'',tier:'Gold',orders:24,total:1450000},{name:'Rizky Pratama',phone:'',tier:'Silver',orders:16,total:920000},{name:'Sarah Aulia',phone:'',tier:'Gold',orders:32,total:2100000},{name:'Budi Santoso',phone:'',tier:'Bronze',orders:5,total:250000}],
 expenses:[{name:'Pembelian bahan baku',amount:850000,date:'2026-10-08'},{name:'Listrik & internet',amount:350000,date:'2026-10-08'},{name:'Biaya operasional',amount:250000,date:'2026-10-07'}],drafts:[]
};
