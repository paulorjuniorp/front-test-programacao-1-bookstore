import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Option = styled.li`
    min-width: 120px;
    font-size: 16px;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;

`
const Options = styled.ul`
    display: flex;
`


const textOptions = ['CATEGORIAS','FAVORITOS','ESTANTE'];

function OptionsHeader (){
    return(
        <Options>
            {textOptions.map( (text) => (
                <Link to={`/${text.toLocaleLowerCase()}`} ><Option><p>{text}</p></Option></Link>
        ) ) }
      </Options>
    )
}

export default OptionsHeader;