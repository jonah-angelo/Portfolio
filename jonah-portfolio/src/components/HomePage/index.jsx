import './styles.css'
import Typewriter from 'typewriter-effect'
export default function HomePage() {
  return (
    <div className='h-screen'>
      <h1 className='welcome pt-40 text-center text-6xl font-bold text-white'>Welcome to My Page!</h1>
      <img src='../moon.png' alt='moon' className='moon mx-auto w-1/2 mt-20' />
    </div>
  );
}