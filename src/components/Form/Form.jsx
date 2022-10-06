import {
  Input,
  Select,
  Checkbox,
  SubmitButton,
  TextArea,
} from './FormParts';

import styles from './Form.css';

export default function Form() {
  return (
    <form className={styles.Form}>
      <Input
        label="Username"
        type="text"
        name="username"
        placeholder="Username" />
      <Input
        label="Password"
        type="password"
        name="pasword"
        placeholder="Password" />
        
      <TextArea
        label="Say something"
        name="say-something"
        placeholder="Say something" />
 
      <Select
        label="Select Fruit"
        name="fruit" >
        <option value="apple">apple</option>
        <option value="orange">orange</option>
        <option value="melon">melon</option>
      </Select>
      <Checkbox legend="Cat Person?" />
      <SubmitButton />
    </form>
  );
}
