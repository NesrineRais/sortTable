import React,{ useState,useEffect } from "react"
import Products from "../components/Products"


const Frontend = (props) => {
    const [allproducts, setAllProducts] = useState([]);
    const [filterproducts, setFilterProducts] = useState([]);
    const [filters,setFilters] = useState({s:''})

    useEffect(() => {
         /*
         async / await : donne à votre code une apparence synchrone,
         et d'une certaine manière, il le fait se comporter de manière plus synchrone. 
         Le mot-clé await bloque l'exécution de tout le code qui le suit 
         jusqu'à ce que la promesse se réalise, 
        exactement comme dans le cas d'une opération synchrone.
        */
        (
            async()=>{
                const response = await fetch('http://localhost:9100/api/v1/books/all');
                console.log("response frn",response)
                const content = await response.json();
                console.log("content frn",content)
                setAllProducts(content)
                setFilterProducts(content)
            }

        )()

    }, []);
    useEffect(() => {
        let allprods= allproducts.books
        let products = allprods.filter(p=>p.name.toLowerCase().indexOf(filters.s.toLowerCase())>=0 || p.description.toLowerCase().indexOf(filters.s.toLowerCase())>=0 );

         console.log(products)
         setFilterProducts(products)
 
 
 
     },[filters]);
    return(
        <Products products={filterproducts} filters={filters} setFilters={setFilters}/>
    )
}

export default Frontend