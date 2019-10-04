import React from 'react';
import NumberFormat from 'react-number-format';
import { Input } from '../global';

// import { Container } from './styles';

export default function InputMoney({ value, onChange }) {
  function handleChanging(text) {
    let parsedValue = text.replace(/[\D]/g, '');

    parsedValue = parsedValue.replace(/(\d*)([\d]{2})/g, '$1.$2');
    try {
      onChange(Number(parsedValue));
    } catch (err) {
      onChange(0);
    }
  }

  return (
    <NumberFormat
      value={value}
      displayType="text"
      decimalSeparator=","
      decimalScale={2}
      fixedDecimalScale
      prefix="R$ "
      // onValueChange={handleChanging}
      renderText={val => (
        <Input
          onChangeText={handleChanging}
          value={val}
          placeholder="Quanto vai cobrar?"
        />
      )}
    />
  );
}
