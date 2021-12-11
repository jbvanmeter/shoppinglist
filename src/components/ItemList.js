import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Form, Input, Button, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: [],
            isModalOpen: true
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(event) {
        let newItem = event.target.newItem.value;
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
        this.setState({
            itemList: [...this.state.itemList, newItem]
        });
        event.preventDefault();
    }

    render() {

        let completeList = this.state.itemList.map(item => {
            return (
                <CardBody className='list-item'>
                    {item}
                </CardBody>
            );
        })

        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <Card>
                            <CardHeader>
                                <h1>Item List</h1>
                            </CardHeader>
                            {completeList}
                            <CardFooter>
                                <Button outline color='secondary' onClick={this.toggleModal}><i className='fa fa-plus w-100' /></Button>
                            </CardFooter>
                        </Card>
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            <ModalHeader toggle={this.toggleModal}>New Item</ModalHeader>
                                <ModalBody>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Input className='my-3' type='text' id='newItem' name='newItem' />
                                        <Button className='d-block mx-auto' color='primary' type='submit'>Add Item</Button>
                                    </Form>
                                </ModalBody>
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
}    

export default ItemList;