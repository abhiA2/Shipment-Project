import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
} from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter className='bg-secondary text-white text-center'>
            <MDBContainer className='p-4'>
                <MDBRow>
                    <MDBCol lg="8" md="10" className='mb-6 mb-md-2'>
                        <h5 className='text-uppercase'>Footer Content</h5>

                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
                            Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam,
                            est atque cumque eum delectus sint!
                        </p>
                    </MDBCol>

                    <MDBCol lg="8" md="8" className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>Links</h5>

                        <ul className='list-unstyled mb-0' style={{ listStyle: "none", display: "flex" }}>
                            <li>
                                <a href='#!' className='text-black'>
                                    Link 1
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-black'>
                                    Link 2
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-black'>
                                    Link 3
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-black'>
                                    Link 4
                                </a>
                            </li>
                        </ul>
                    </MDBCol>

                    <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase mb-0'>Links</h5>

                        <ul className='list-unstyled'>
                            <li>
                                <a href='#!' className='text-black'>
                                    Link 1
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-black'>
                                    Link 2
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-black'>
                                    Link 3
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-black'>
                                    Link 4
                                </a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2020 Copyright:
                <a className='text-black' href='https://mdbootstrap.com/'>
                    MDBootstrap.com
                </a>
            </div>
        </MDBFooter>
    );
}