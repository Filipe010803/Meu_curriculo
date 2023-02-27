import Image from "next/image"

import imagem from "../assets/imagem.jpg"
import iconMesage from "../assets/mesage.svg"
import TV from "../assets/TV.svg"
import house from "../assets/house.svg"

export function Header() {
    return(
        <div className="sm:w-[25%] w-40 md:w-[222px] h-auto  flex flex-col bg-green-900 gap-10 items-center p-4  md:pt-0 pt-10">
            <Image 
                src={imagem} 
                alt="minha foto"
                className="w-[160px] rounded-xl md:mt-10 mt-4 mb-5"
            />
            <section className="text-green-100">
                <div className="md:flex items-center mb-2.5 text-lg">
                    <Image 
                        src={iconMesage}
                        alt="icone de mensagem"
                        className="mr-2.5"
                    />
                    <h1 className="md:w-[110px]">Histórico Pessoal</h1>
                </div>

                <div className="h-px bg-green-100 mb-4"></div>

                <p className="md:w-[156px] text-[10px]">Estudante de T.I. e programação há três anos, alguns projetos criados por mim estão no meu repositório do <a className="font-bold text-green-500 hover:text-white" href="https://github.com/Filipe010803">GitHub</a>, procuro por estágio para adiquirir mais experiência e me desenvolver profissionalmente na área</p>
            </section>

            <section className="text-green-100">
                <div className="md:flex items-center mb-2.5 text-lg">
                    <Image 
                        src={TV}
                        alt="icone de mensagem"
                        className="mr-2.5"
                    />
                    <h1 className="md:w-[110px]">Talentos & Competêcias</h1>
                </div>

                <div className="h-px bg-green-100 mb-4"></div>

                <ul className="md:w-[156px] text-[10px]">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                    <li>TypeSkript</li>
                    <li>Inglês básico</li>
                    <li>Lógica de programação</li>
                </ul>
            </section>

            <section className="text-green-100">
                <div className="md:flex items-center mb-2.5 text-lg">
                    <Image 
                        src={house}
                        alt="icone de mensagem"
                        className="mr-2.5"
                    />
                    <h1 className="md:w-[110px]">Informações de contato</h1>
                </div>

                <div className="h-px bg-green-100 mb-4"></div>

                <ul className="md:w-[156px] text-[10px]">
                    <li>Endereço: Av. Floriano Peixoto, 534 A Herculândia, SP, Brasil</li>
                    <li>Telefone: (14) 981624531</li>
                    <li>E-mail: lipexingu18@gmail.com</li>
                </ul>
            </section>
        </div>
    )
}