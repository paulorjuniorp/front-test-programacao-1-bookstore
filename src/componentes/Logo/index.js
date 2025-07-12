import logo from '../../imagens/logo2.svg'
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`
const LogoImg = styled.img`
    argin-right: 10px;
`

function Logo(){
    return(
        <LogoContainer>
            <LogoImg
            src={logo} 
            alt='logo'>
            </LogoImg>
            <p><strong>Djan</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo;