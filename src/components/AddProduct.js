import React from 'react';
import {addProduct} from '../actions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';

const AddProduct = (props) => {
    const handleSubmit = (event) =>{
        event.preventDefault();
        //alert(event.target.txtProductName.value);
        props.dispatch(addProduct(event.target.txtProductName.value));
        event.target.txtProductName.value = '';
    }
    return(
        <Form onSubmit={(event)=> handleSubmit(event)} className="mb-3">
            <Form.Group className="mb-3" controlId="txtProductName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" placeholder="Enter product Name" name="txtProductName"></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

const mapStateToProps = (state) =>({
    Products : state
});

export default connect(mapStateToProps)(AddProduct);