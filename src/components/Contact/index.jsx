import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';

export default function Contact (){
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    
}