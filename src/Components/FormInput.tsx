import React from "react";

type Props = {
  name: string;
  display: string;
  value: any;
  handler: (e: any, key: string) => void;
  type?: string;
  width?: string;
};

function FormInput({
  name,
  display,
  value,
  handler,
  type,
  width,
}: Props): JSX.Element {
  return (
    <>
      <label htmlFor={name}>{display}</label>
      <input
        style={{width}}
        name={name}
        type={type}
        // defaultValue={type == 'number' ? 0 : ''}
        onChange={(e) => handler(e, name)}
        value={value}
        placeholder={type ? value : `Enter ${name}...`}
      />
    </>
  );
}

export default FormInput;
