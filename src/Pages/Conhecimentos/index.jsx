import FloatButton from "../../components/FloatButton";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import React from '../../assets/react.svg'
import Tailwind from '../../assets/tailwind.png'
import MUI from '../../assets/MUI.png'
import JS from '../../assets/JS.png'
import HTML from '../../assets/html.png'
import CSS from '../../assets/css.png'

export default function Conhecimentos() {
    return (
        <div>
            <Header />

            <section id='topo' className="bg-light-blue-project flex flex-col p-5 space-y-5">

                <div className="flex flex-col justify-center space-y-6 text-center my-28">
                    <h2 className='text-3xl text-white font-semibold'>Conhecimentos Mais Sólidos</h2>
                    <p className="text-white text-xl">Técnologias que uso para desenvolver atualmente em meus projetos</p>


                    <div className="flex flex-col justify-center text-center my-28 xl:flex-row xl:flex-wrap">

                        <div className='flex flex-col items-center justify-center border-2 border-blue-900 p-4 space-y-5 xl:w-1/3 xl:m-5 my-5'>

                            <div className='flex w-full justify-center items-center pr-10 xl:pr-12'>
                                <img src={React} alt='react-svg' />

                                <h3 className='text-center w-2/3 xl:w-1/4 text-2xl text-white font-semibold'>React JS</h3>
                            </div>
                            <p className="text-white text-lg">O React é uma biblioteca JavaScript com foco em criar interfaces de usuário em páginas web.</p>
                            <ul className='flex flex-col items-center space-y-1'>
                                <h4 className='text-lg text-white font-semibold'>Habilidades</h4>
                                <li type='disc' className='text-sm w-7/8 text-white'>Componentização</li>
                                <li type='disc' className='text-sm w-7/8 text-white'>useState</li>
                                <li type='disc' className='text-sm w-7/8 text-white'>Rotas</li>
                            </ul>
                        </div>

                        <div className='flex flex-col items-center justify-center border-2 border-blue-900 p-4 space-y-5 xl:w-1/3 xl:m-5 my-5'>

                            <div className='flex w-full justify-center items-center pr-10 xl:pr-12'>
                                <img className='w-12' src={Tailwind} alt='react-svg' />

                                <h3 className='text-center w-3/4 xl:w-1/3 text-2xl text-white font-semibold'>TailWind CSS</h3>
                            </div>

                            <p className="text-white text-lg">Biblioteca CSS com foco no conceito <b>Mobile First</b> que facilita na estilizaçãoe e responsividade através de classes.</p>
                        </div>

                        <div className='flex flex-col items-center justify-center border-2 border-blue-900 p-4 space-y-5 xl:w-1/3 xl:m-5 my-5'>

                            <div className='flex w-full justify-center items-center pr-10 xl:pr-12'>
                                <img className='w-11' src={MUI} alt='react-svg' />

                                <h3 className='text-center w-3/4 xl:w-1/3 text-2xl text-white font-semibold'>Material UI</h3>
                            </div>

                            <p className="text-white text-lg">
                                Biblioteca que nos permite importar e usar diferentes componentes para criar uma interface de usuário em nossos aplicativos React. </p>
                        </div>

                        <div className='flex flex-col items-center justify-center border-2 border-blue-900 p-4 space-y-5 xl:w-1/3 xl:m-5 my-5'>

                            <div className='flex w-full justify-center items-center pr-10 xl:pr-12'>
                                <img className='w-11' src={JS} alt='react-svg' />

                                <h3 className='text-center w-3/4 xl:w-1/3 text-2xl text-white font-semibold'>JavScript</h3>
                            </div>

                            <p className="text-white text-lg">JavaScript é uma linguagem de programação interpretada, estruturada de scripts em alto nível, com tipagem dinâmica fraca e multiparadigma.</p>
                        </div>

                        <div className='flex flex-col items-center justify-center border-2 border-blue-900 p-4 space-y-5 xl:w-1/3 xl:m-5 my-5'>

                            <div className='flex w-full justify-center items-center pr-10 xl:pr-12'>
                                <img className='w-11' src={HTML} alt='react-svg' />

                                <h3 className='text-center w-3/4 xl:w-1/3 text-2xl text-white font-semibold'>HTML 5</h3>
                            </div>

                            <p className="text-white text-lg">HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet. É a quinta versão da linguagem HTML, que passou a ser conheciida como HTML Semântico.</p>
                        </div>

                        <div className='flex flex-col items-center justify-center border-2 border-blue-900 p-4 space-y-5 xl:w-1/3 xl:m-5 my-5'>

                            <div className='flex w-full justify-center items-center pr-10 xl:pr-12'>
                                <img className='w-11' src={CSS} alt='react-svg' />

                                <h3 className='text-center w-3/4 xl:w-1/3 text-2xl text-white font-semibold'>CSS 3</h3>
                            </div>

                            <p className="text-white text-lg">CSS3 é a terceira e mais nova versão das famosas Cascading Style Sheets, pela qual se define estilos para um projeto web.</p>
                        </div>
                    </div>
                </div>

            </section>

            <FloatButton />

            <Footer />
        </div>
    )
}