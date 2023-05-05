export default function Skills() {
    return (
        <>
            <div className="bg-[black] h-fit">
                <h1 className="text-white ml-20 pt-20 text-2xl"> Skills </h1>
                <div className="grid content-center lg:grid-cols-3 gap-4 mx-[40px] mt-20 md:grid-cols-2 sm:grid-cols-1 sm:text-center md:text-left pb-9 mb-9">
                    <div className="bg-[#1E1E1E] rounded-lg shadow-lg p-4">
                        <h1 className="text-white text-2xl">Front End</h1>
                        <ul className="text-white">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Next.js</li>
                            <li>Bootstrap</li>
                            <li>Tailwind CSS</li>
                        </ul>
                    </div>
                    <div className="bg-[#1E1E1E] rounded-lg shadow-lg p-4">
                        <h1 className="text-white text-2xl">Back End</h1>
                        <ul className="text-white">
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>PostgreSQL</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>Python</li>
                        </ul>
                    </div>
                    <div className="bg-[#1E1E1E] rounded-lg shadow-lg p-4">
                        <h1 className="text-white text-2xl">Other</h1>
                        <ul className="text-white">
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>Heroku</li>
                            <li>Netlify</li>
                            <li>VS Code</li>
                            <li>Postman</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}