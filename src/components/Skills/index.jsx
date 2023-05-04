export default function Skills() {
    return (
        <>
            <div className="bg-[black] h-screen">
                <h1 className="text-white ml-20 pt-20 text-2xl"> Skills </h1>
                <div className="grid grid-cols-3 gap-4 ml-20 mt-20 mr-20">
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
                            <li>Flask</li>
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