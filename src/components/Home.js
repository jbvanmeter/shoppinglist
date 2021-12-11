import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='container-fluid home-page vh-100 vw-100'>
            <div className='row h-100 align-items-center'>
                <div className='col'>
                    <img src='/images/logo.png' className='app-logo d-block mt-auto mx-auto' alt='Logo' />
                </div>
                <div className='col/'>
                    <Button className='btn-lg w-50 my-2 py-3 main-menu' color='primary' tag={Link} to='/list'>
                        Create List
                    </Button>
                    <br/ >
                    <Button className='btn-lg w-50 my-2 py-3 main-menu ' color='primary' tag={Link} to='/'>
                        Load List
                    </Button>
                    <br/ >
                    <Button className='btn-lg w-50 my-2 py-3 main-menu ' color='primary' tag={Link} to='/'>
                        Exit
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Home;

<Button className='main-menu' color='primary' tag={Link} to='/list'>
                        New Shopping List
                    </Button>