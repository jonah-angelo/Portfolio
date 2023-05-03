import './styles.css'
import Typewriter from 'typewriter-effect'
export default function HomePage() {


  return (
    <div className='welcome pl-20 h-20 text-white pt-20 text-5xl'>
      <Typewriter 
      onInit={(typewriter) => {
        typewriter.typeString("Hello, I'm Jonah!\n")
        .pauseFor(2000).start()
        .deleteAll()
        .typeString("I'm a Full Stack Developer\n")
      }}
      />
    </div>
  );
}