import styles from './FormParts.css';

function FormPart({ children, className, label }) {
  return (
    <label className={className}>
      <LabelText text={label} />
      {children}
    </label>
  );
}

export function LabelText({ text }) {
  return (
    <label className={styles.LabelText}>
      {text}
    </label>
  );
}

export function Input({ type, name, placeholder, label }) {
  return (
    <FormPart label={label} className="Input" >
      <input type={type} name={name} placeholder={placeholder} />
    </FormPart>
  );
}
// Input will take in type props and pass it in


export function Select({ label, name, value, children }) {
  return (
    <FormPart label={label} className="Select">
      <select name={name} value={value}>
        {children}
      </select>
    </FormPart>
  ); 
}


export function TextArea({ label, name, placeholder }) {
  return (
    <FormPart label={label} className="TextArea">
      <textarea name={name} placeholder={placeholder} />
    </FormPart>
  );
}

export function Checkbox({ legend, name }) {
  return (
    <FormPart className="checkbox">
      <legend>{legend}
        <input type="checkbox" name={name} />
      </legend>
    </FormPart>
  );
}

export function SubmitButton() {
  return (
    <div>
      <button type="submit">Submit</button>
    </div>
  );
}
