export default function Projects (){
    return(
        <>
            <h1 className="projects text-white text-center mb-10 font-bold text-3xl">My Projects</h1>
            <div className="grid content-center lg:grid-cols-3 gap-4 mx-[40px] mt-20 md:grid-cols-2 sm:grid-cols-1 sm:text-center md:text-left pb-9 mb-9">
                <div class="max-w-sm bg-[#1d1836] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="https://mongo-music.herokuapp.com/">
                        <img class="rounded-t-lg" src="./mongomusic.png" alt="" />
                    </a>
                    <div class="p-5">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Mongo Music</h5>
                        <p class="mb-3 font-normal text-gray-400 dark:text-gray-00">Built with MongoDB, Express and Node.js. The place to store and enjoy your favorite music</p>
                        <a href="https://github.com/jonah-angelo/Mongo-music---Fullstack-App" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-900 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Github
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
                <div class="max-w-sm bg-[#1d1836] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="https://gym-genie.herokuapp.com/">
                        <img class="rounded-t-lg" src="./gymgenie.png" alt="" />
                    </a>
                    <div class="p-5">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Gym Genie</h5>
                        <p class="mb-3 font-normal text-gray-400">React Based fitness app for people wanting to add new exercises to their workouts. Start your workout journey today! </p>
                        <a href="https://github.com/jonah-angelo/GymGenie" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-900 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Github
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
                <div class="max-w-sm bg-[#1d1836] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="https://sei-planit.herokuapp.com/">
                        <img class="rounded-t-lg" src="./planit.png" alt="" />
                    </a>
                    <div class="p-5">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Planit</h5>
                        <p class="mb-3 font-normal text-gray-400 dark:text-gray-00">Having trouble planning events? We got you, with Planit we make planning easy. Our app has polls on each event you create so you can plan the small details</p>
                        <a href="https://github.com/jonah-angelo/Poll-App/tree/main" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-900 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Github
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </>

    )
}