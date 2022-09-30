import { environment } from "src/environments/environment";

export const baseUrl=environment.production? 'https://api.pizzastore.com' : 'https://localhost:44379'
export const productsUrl=baseUrl+'/api/pizzas'
export const cartUrl=baseUrl+ '/api/carts'
export const beveragesurl=baseUrl+ '/api/beverages'
