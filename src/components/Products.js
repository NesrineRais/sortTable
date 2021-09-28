import React from "react"
import { config } from "../config";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';



const Products = (props) => {
    const search=(s)=>{
            props.setFilters({
                s
            })
    }
    //console.log(props.products)
    return(
        <div class="container-fluid pb-3">
            <div className="d-flex align-items-center mb-3">
                <form className="w-100 me-3">
                    <input type="search" className="form-control" placeholder="Search..." aria-label="Search"
                    onChange={e=>search(e.target.value)} />
                </form>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Select
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Price Ascending</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Price Descending</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
             </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {props.products.books!==undefined && props.products.books.map((book,key)=>{
                    return(
                    
                        <div className="col" id={key}>
                            <div className="card shadow-sm">
                                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={config.pict_url+book.photo} />
                                <div className="card-body">
                                    <p className="card-text">{book.name}</p>
                                    <p className="card-text">{book.description}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                        
                                            <small className="text-muted">{book.price}$</small>
                                        </div>
                                </div>
                            </div>
                        </div>       
                    
                )})}
        </div>
      </div>
       
        

    )
    
}

export default Products;