import { describe,it,expect } from 'vitest';
import { initialBusiness,orderTotal,recipeUsage } from './business';
describe('POS and production',()=>{
 it('calculates quantities and percentage discount',()=>{expect(orderTotal({'1':2},initialBusiness.products,10)).toEqual({subtotal:50000,discount:5000,total:45000});});
 it('uses 18g beans and 150ml milk for one coffee as specified in the PRD',()=>{expect(recipeUsage(1)).toEqual({beans:18,milk:150});});
 it('scales recipe ingredients proportionally',()=>{expect(recipeUsage(3)).toEqual({beans:54,milk:450});});
});
