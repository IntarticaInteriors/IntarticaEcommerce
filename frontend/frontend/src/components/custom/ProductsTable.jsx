// import { getProducts } from "@/services/admin.services";



// const [apiProducts, setApiProducts] = useState(null);
// const [updateProds, setUpdatedProds] = useState([]);



// useEffect(() => {
//   try {
//     getProducts().then((res) => {
//       setApiProducts(res);
//       console.log(res);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }, []);
// useEffect(() => {
//   let updatedProducts = apiProducts?.map((elem, idx) => {
//     const {
//       imageUrl,
//       images,
//       category_id,
//       picture,
//       categoryname,
//       stockAvailable,
//       ...newObj
//     } = elem;
//     // console.log("stock",StockAvailable);
//     return {
//       ...newObj,
//       avatar: imageUrl,
//       status: "inStock",
//       discount: "0",
//       category: categoryname ?? "alsdkfna;df",
//     };
//   });
//   console.log("updatedProducts", updatedProducts);
//   setUpdatedProds(updatedProducts);
// }, [apiProducts]);
