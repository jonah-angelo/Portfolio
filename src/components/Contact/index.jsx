import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';


export default function Contact (){
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            'service_qgknk78',
            'template_z2dcq9k',
            {
                from_name: form.name,
                to_name: 'Jonah',
                from_email: form.email,
                to_email: 'jonah.angelo@gmail.com',
                message: form.message,
            },
            'YuUd77P0LLhbG7jmf'
            )
            .then(() => {
                setLoading(false);
                alert('Thank you for your message. I will get back to you soon!');
                setForm({
                    name: '',
                    email: '',
                    message: '',
                })
            }, (error) => {
                setLoading(false);
                alert('Something went wrong. Please try again.')
            });
    }
    
    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex
        gap-10 overflow-hidden pt-[500px]">
            <div className="flex-[0.75] bg-[#1d1836]  p-8 rounded-2xl">
                <p className="sm:text-[18px] text-[14px] text-white uppercase tracking-wider">Get in Touch</p>
                <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact</h3>
                
                <form 
                    ref={formRef} 
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8"
                >
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your name</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className="bg-[#1d1823] py-4 py-6 placeholder:text-secondary 
                            text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Email</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            className="bg-[#1d1823] py-4 py-6 placeholder:text-secondary 
                            text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Message</span>
                        <textarea
                            rows="7"
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What do you want to say?"
                            className="bg-[#1d1823] py-4 py-6 placeholder:text-secondary 
                            text-white rounded-lg outlined-none border-none font-medium"
                        />
                    </label>
                    <button 
                        type="submit"
                        className="bg-red-900 py3 px-8 outline-none
                        w-fit text-white font-bold shadow-lg shadow primary rounded-xl"
                    >
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </div>
        </div>

    )
}