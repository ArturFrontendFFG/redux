import { useDispatch, useSelector } from "react-redux";
import { inputText } from "./redux/actions";
import { styled } from "styled-components";

function Title(props) {
  console.log(props);
  const title = useSelector(state => {
    const {inputReducer} = state;
    return inputReducer.text
  });
  const dispath = useDispatch();

  const handleChange = (e) => {
    dispath(inputText(e.target.value));
  };
  return (
    <div className="card-title">
      <div className="card-title-top">
        <Input type="search" placeholder="Enter words" onChange={handleChange} />
        
      </div>
      <p style={{color: 'black'}}>{title}</p>
    </div>
  );
}

const Input = styled.input
`
  padding: 7px 15px;  

   &::-webkit-search-cancel-button{
     cursor: pointer;
     opacity: 1 ;
   }
`

export default Title;
