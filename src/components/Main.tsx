import Image from "next/image"

import Historico from "../assets/historico.svg"
import Formacao from "../assets/formacao.svg"
import Cursos from "../assets/cursos.svg"

import Arow from "../assets/arow.svg"

import Certificado from "../assets/certificado.jpg"
import EscolaVirtual from "../assets/EscolaVirtual.jpg"
import Cursoemvideo from "../assets/Cursoemvideo.jpg"

import * as Popover from '@radix-ui/react-popover'
import * as Dialog from '@radix-ui/react-dialog'

export function Main() {
    
    return(
        <div className="w-full flex flex-col sm:h-screen md:h-auto gap-20 md:gap-10 sm:gap-14 bg-green-200  md:pt-0 pt-10 pb-2">
            <h1 className="w-full md:h-[144px] sm:p-10 p-3 md:p-4 bg-green-100 md:mt-12 mt-4 flex items-center justify-center text-4xl font-bold text-green-500">
                Filipe Fernandes da Silva
            </h1>

           <div className="pt-8">
                <Image 
                    src={Historico} 
                    alt="icone de histórico"
                    className="inline-block mr-5 "
                />

                <section className="w-72 inline-flex flex-col gap-5 pt-3">
                    <h2 className="text-green-500 text-xl">Histórico Proficional</h2>

                    <article className="mb-3">
                        <h3 className="font-bold text-sm text-gray-900">Depósito de bebidas São José</h3>
                        <p className="w-44 text-xs text-green-900 inline-block">Atendente de conveniência | Janeiro de 2021 - atualmente</p>

                        <Popover.Root>
                            <Popover.Trigger>
                                <Image src={Arow} alt="flecha"/>
                            </Popover.Trigger>

                            <Popover.Content className="w-[274px] p-6 md:ml-[300px] rounded-2xl bg-green-100">
                                <ul className="text-xs flex flex-col gap-2 list-disc pl-4">
                                    <li>Organização de estoque.</li>
                                    <li>Oferecimento de produtos que sejam relevantes às necessidades e pedidos dos clientes.</li>
                                    <li>limpeza do estabelecimento.</li>
                                    <li>Recebimento de mercadoria</li>
                                </ul>
                            </Popover.Content>
                        </Popover.Root>
                    </article>

                    <article>
                        <h3 className="font-bold text-sm text-gray-900">Estágio no Tribunal de Justiça</h3>
                        <p className="text-xs text-green-900 inline-block mr-3">2ª OFICIO CÍVEL DA COMARCA DE TUPÃ | <br/> Janeiro de 2020 - Janeiro de 2021</p>
                       
                        <Popover.Root>
                            <Popover.Trigger>
                                <Image src={Arow} alt="flecha"/>
                            </Popover.Trigger>

                            <Popover.Content className="min-w-[210px] p-6 ml-[230px] rounded-2xl bg-green-100">
                                <ul className="text-xs flex flex-col gap-2 list-disc pl-4">
                                    <li>Organização de processos físicos</li>
                                    <li>Digitalização de processos</li>
                                    <li>Atendimento de balcão</li>
                                </ul>
                            </Popover.Content>
                        </Popover.Root>
                    </article>
                </section>
            </div>

            <div>
                <Image 
                    src={Formacao} 
                    alt="icone de formação"
                    className="inline-block mr-5"
                />

                <section className="w-72 inline-flex flex-col gap-5">
                    <h2 className="text-green-500 text-xl">Formação acadêmica</h2>

                    <article className="mb-3">
                        <h3 className="font-bold text-sm text-gray-900">Univesp, polo Herculãndia - SP</h3>
                        <p className="text-xs text-green-900">Bacharelado em Tecnologia da Informação – <br/> Término esperado para Jul 2024</p>
                    </article>

                    <article>
                        <h3 className="font-bold text-sm text-gray-900">ETEC - Prof. Massuyuki Kawano, Tupã-SP</h3>
                        <p className="text-xs text-green-900">Ensino médio - Dez 2020</p>
                    </article>
                </section>
            </div>

            <div>
                <Image 
                    src={Cursos} 
                    alt="icone de like"
                    className="inline-block mr-5"
                />

                <section className="w-80 inline-flex flex-col gap-5">
                    <h2 className="text-green-500 text-xl">Cursos</h2>

                    <ul className="text-xs text-green-900">
                        <li>
                            Curso técnico em Informática
                        </li>
                        <li>
                            Curso técnico de T.I.
                        </li>
                        <li>
                            Curso de HTML e CSS3
                        </li>
                    </ul>

                    <Popover.Root>
                        <Popover.Trigger className="inline-block">
                            <Image src={Arow} alt="flecha" className="ml-24 w-8"/>
                        </Popover.Trigger>

                        <Popover.Content className="md:w-[616px] w-[400px] md:h-[530px] h-[510px] md:mr-0 mr-10 p-6 rounded-2xl bg-green-100 ">
                            <div className="flex flex-col items-center gap-12">
                                <header className="flex flex-col items-center">
                                    <h2 className="font-extrabold text-3xl text-green-500">Certificados</h2>
                                    <p className="text-xs text-green-900">Clique nos certificados para ampliá-los!</p>
                                </header>
                                

                            <div className="flex gap-14 justify-center">

                                <Dialog.Root>
                                    <Dialog.Trigger
                                        type="button"
                                    >
                                        <Image 
                                            src={Certificado} 
                                            alt='Certificado do cuso técnico de informática'
                                            className="w-[200px] h-[141.32px]"
                                        />
                                    </Dialog.Trigger>
                                    
                                    <Dialog.Portal>
                                        <Dialog.Overlay className="md:w-screen md:h-screen bg-black/80 fixed inset-0" />

                                        <Dialog.Content className="absolute w-full max-w-4xl top-1/2 left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 -translate-x-1/4 -translate-y-1/4">
                                            <Image 
                                                src={Certificado} 
                                                alt='Certificado do cuso técnico de informática'
                                            />
                                        </Dialog.Content>
                                    </Dialog.Portal>
                                </Dialog.Root>

                                <Dialog.Root>
                                    <Dialog.Trigger
                                        type="button"
                                    >
                                        <Image 
                                            src={Cursoemvideo} 
                                            alt='Certificado do curso de HTML e CSS'
                                            className="w-[200px] h-[141.37px]"
                                        />
                                    </Dialog.Trigger>
                                    
                                    <Dialog.Portal>
                                        <Dialog.Overlay className="md:w-screen md:h-screen bg-black/80 fixed inset-0" />

                                        <Dialog.Content className="absolute w-full max-w-4xl top-1/2 left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 -translate-x-1/4 -translate-y-1/4">
                                            <Image 
                                                src={Cursoemvideo} 
                                                alt='Certificado do curso de HTML e CSS'
                                            />
                                        </Dialog.Content>
                                    </Dialog.Portal>
                                </Dialog.Root>
                            </div>

                            <Dialog.Root>
                                    <Dialog.Trigger
                                        type="button"
                                    >
                                        <Image 
                                            src={EscolaVirtual} 
                                            alt='Certificado do curso técnico de T.I.'
                                            className="w-[200px] h-[184.5px]"
                                        />
                                    </Dialog.Trigger>
                                    
                                    <Dialog.Portal>
                                        <Dialog.Overlay className="md:w-screen md:h-screen bg-black/80 fixed inset-0" />

                                        <Dialog.Content className="absolute w-full max-w-4xl top-1/2 left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 -translate-x-1/4 -translate-y-1/4">
                                            <Image 
                                                src={EscolaVirtual} 
                                                alt='Certificado do curso técnico de T.I.'
                                            />
                                        </Dialog.Content>
                                    </Dialog.Portal>
                                </Dialog.Root>
                            </div>
                        </Popover.Content>
                    </Popover.Root>
                </section>
            </div>
        </div>
    )
}