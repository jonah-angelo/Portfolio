export default function Navbar () {
    return (
        <div className='flex'>
            <nav className='navbar'>
                <ul>
                    <li>
                        <a href="/">001 Home</a>
                    </li>
                    <li>
                        <a href="/about">002 About Me</a>

                    </li>
                    <li>
                        <a href="/projects">003 Projects</a>
                    </li>
                    <li>
                        <a href="/contact">004 Contact Me</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}   