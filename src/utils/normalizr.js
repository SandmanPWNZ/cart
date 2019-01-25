import {normalize, schema} from "normalizr";

const normalizeProducts = (data) => {
    // debugger
    const myData = {products: data};
    const product = new schema.Entity('product');
    const prodSchema = {products: [product]};
    return normalize(myData, prodSchema);
};

export default normalizeProducts;