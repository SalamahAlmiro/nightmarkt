import React, {useState, useEffect} from "react";
import ProductList from "../features/products/ProductList";
import { getAllProducts } from "../features/products/ProductAPI";
import useMeasure from 'react-use-measure';

function getRandom(min, max) {
      return Math.random() * (max - min) + min
    }




function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [ref, bounds] = useMeasure();
    const containerWidth = bounds.width;;

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            /*const products = await getAllProducts();
            setProducts(products);*/

            const fakeProducts = Array(50)
            .fill(null)
            .map((_, i) => ({
              ...products[0],
              id: i + 1,
              name: `Product name ${i + 1}`,
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non dolor sit amet ex elementum pharetra vitae at nunc. Duis at dui neque. Pellentesque posuere a enim ut lacinia. Sed ullamcorper velit ac tortor luctus, nec iaculis velit tristique. Donec tincidunt posuere suscipit. Cras id sodales urna, vitae venenatis lorem. Aliquam rhoncus varius dolor, quis imperdiet odio tincidunt eget. Sed ante nibh, ullamcorper in lacus id, viverra porttitor leo. Sed in ligula sed enim tincidunt eleifend. Suspendisse potenti. Donec euismod, nisi vel consectetur interdum, nisl nisi aliquam nunc, nec facilisis enim est a quam.",
              image_url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhNEFfCoMtf9Z8UpZR08wQckvmslbNtti4w&s",
              price: 50,
              rating: Math.round(getRandom(3, 5) * 10) / 10,
            }));
            setProducts(fakeProducts);
          } catch (err) {
            console.error("Failed to fetch products", err);
          }
        };
      
        fetchProducts();
      }, []);
    console.log(containerWidth);
    return (
      <div ref={ref} className="h-full overflow-hidden w-full grid justify-items-center"> 
          <section className="bg-white/10 backdrop-blur-sm mt-5 mr-2 mb-4 w-auto rounded-xl shadow-lg overflow-hidden">
            <ProductList products={products} containerWidth={containerWidth}/>
          </section>
      </div>
  );
}

export default ProductsPage;


