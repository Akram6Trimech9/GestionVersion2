import { produit } from "./product";

export interface produitVendu {
    quantity: number;
    totalHt: number;
    produit: produit
}