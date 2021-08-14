import React from 'react';
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux';

const ProductList = (props) => {  
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Product Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.Products.Product.data.map((product, index) => 
                        <tr>
                            <td key={index}> {product.id} </td>
                            <td key={index}>{product.name}</td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    )
}

const mapStateToProps = (state) => ({
    Products: state
})

export default connect(mapStateToProps)(ProductList);