import { render, screen } from '@testing-library/react';
import {
  Input,
  Select,
  Checkbox,
  TextArea
} from '../components/Form/FormParts';

test('renders input and takes in props', () => {
  render(<Input type="text"
    name="username"
    label="Username"
    placeholder="username" />);
  const usernameInput = screen.getByLabelText('Username');
  expect(usernameInput.name).toBe('username');
  expect(usernameInput.type).toBe('text');
});

test('renders select and takes in props', () => {
  render(<Select label="Pick a Fruit" name="fruit" value="apple">
    <option value="apple">Apple</option>
    <option value="orange">Orange</option>
    <option value="banana">Banana</option>
  </Select>);
  const selectFruit = screen.getByLabelText('Pick a Fruit');
  expect(selectFruit.name).toBe('fruit');
  expect(selectFruit.value).toBe('apple');
});

test('renders Checkbox and takes in props', () => {
  render(<Checkbox name="cat-checkbox" legend="Are you a cat person?" />);
  const checkbox = screen.getByLabelText('Are you a cat person?');
  expect(checkbox.name).toBe('cat-checkbox');
  expect(checkbox.type).toBe('checkbox');
});

test('renders TextArea and takes in props', () => {
  render(<TextArea name="textarea"
    label="Say something"
    placeholder="Say something" />);
  const textarea = screen.getByLabelText('Say something');
  expect(textarea.name).toBe('textarea');
  expect(textarea.placeholder).toBe('Say something');
});
