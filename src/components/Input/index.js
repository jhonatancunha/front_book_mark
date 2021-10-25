// Style
import {
  WrapperInput, 
  StyledInput
} from './style';

// Components
import Button from '../Button';

const Input = ({value, onChange, placeholder, onSubmit}) => {
  return (
    <WrapperInput>
      <StyledInput 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder}
      />
      <Button onClick={onSubmit} />
    </WrapperInput>
  )
};


export default Input;