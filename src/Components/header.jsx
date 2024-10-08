import Typed from 'typed.js';
import { useEffect } from 'react';
import logo from '../assets/logo.png';
import dev from '../assets/developer2.png';


export const Header = () => {
  useEffect(() => {
    const options = {
      strings: ['Technology Enthusiast', 'Programmer', 'Software Developer'],
      typeSpeed: 30,
      backSpeed: 14,
      backDelay: 2000,
    };

    const typed = new Typed('#profession', options);

    return () => {
      typed.destroy();
    };
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };
  return (
    <>
      <header className='sticky top-0 z-[1]'>

        <nav className="px-3 flex items-center justify-between">
          <div className="logo">
            <a href="#" onClick={handleLogoClick}>
              <img src={logo} alt="logo" className="w-[80px] h-[60px] object-cover" />
            </a>
          </div>

          {/* <div className="links text-white">
            <ul className='flex'>
              <li className='mx-3'><a href="#" target='-blank'>Home</a></li>
              <li className='mx-3'><a href="#" target='-blank'>About Me</a></li>
              <li className='mx-3'><a href="#" target='-blank'>Blogs</a></li>
              <li className='mx-3'><a href="#" target='-blank'>Contact</a></li>
            </ul>
          </div> */}
        </nav>
      </header>

      <div className="intro flex items-center mt-[50px] mx-16">
        <div className="left lg:w-[60%] lg:h-auto xl:w-[49%] xl:h-auto md:w-[304px] md:h-[200px]">
          <h1 className="text-3xl font-bold text-white leading-[39px]">Hey, My Self <span className="name">Zayyan Qureshi</span>
            <br />
            <span>& I&apos;m a Passionate</span>
            <br />
            <span id="profession"></span>
          </h1>
        </div>

        <div className="right w-[50%]">
          <img src={dev} alt="codeimg" className="img xl:w-[56%] lg:w-[63%] md:w-[70%] ml-32" />
        </div>
      </div>

      <div className="resume-github mx-[65px] relative lg:-top-8 md:top-3 xl:-top-16">
        <a href="src/assets/Zayyan Resume.pdf" target="_blank" className="text" download><button className="btn text-[13px] px-[6.3px] py-[4px] font-[765] cursor-pointer rounded-[5px] bg-white">Download Resume</button></a>
        <a href="https://github.com/QureshiZayyan" target='_blank' className="text"><button id="btn" className="btn text-[13px] px-[6.3px] py-[4px] font-[765] cursor-pointer rounded-[5px] bg-white ml-[13px]">Visit Github</button></a>
      </div>
    </>
  )

}
