import { livros } from './dadosUltimosLancamentos';
import styled from 'styled-components';
import { Titulo as TituloComponente } from '../Titulo'; // Renomeando para evitar conflito de nomes
import CardRecomenda from '../CardRecomenda';
import imagemLivro from '../../imagens/livro2.png'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: #EB9B00;
    font-size: 36px;
    text-align: center;
    margin: 0;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos(){
    return(
        <UltimosLancamentosContainer>
            <TituloComponente
                cor="#EB9B00"
                tamanhoFonte="36px"
            >
                Ultimos Lançamentos
            </TituloComponente>
            
           <CardRecomenda 
                titulo= "Talvez você se interesse por"
                subtitulo = "Java 8"
                descricao = "Construindo uma aplicação"
           />
        </UltimosLancamentosContainer>
    )

}

export default UltimosLancamentos
