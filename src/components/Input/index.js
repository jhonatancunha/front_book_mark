// Style
import {
  WrapperInput, 
  StyledInput
} from './style';

// Components
import Button from '../Button';

const Input = ({value, onChange, placeholder, onSubmit}) => {
  return (
    <WrapperInput onSubmit={onSubmit}>
      <StyledInput 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder}
      />
      <Button onClick={onSubmit}>OK</Button>
    </WrapperInput>
  )
};


export default Input;