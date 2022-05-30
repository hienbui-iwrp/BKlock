import React from 'react';
import Navbar from '../component/general/navbar'
import Footer from '../component/general/footer'
import Signin from '../component/user/signin'

export default function SigninPage() {
    return <>
        <Navbar />
        <Signin />
        <Footer/>
    </>
}