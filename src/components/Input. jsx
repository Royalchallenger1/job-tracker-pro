// components/Input.jsx
import React, { forwardRef } from 'react';

export const Input = forwardRef(({ type = "text", placeholder = "", value, onChange, ...props }, ref) => (
  <input 
    type={type} 
    placeholder={placeholder} 
    value={value} 
    onChange={onChange} 
    className="input-field" 
    ref={ref} 
    {...props} 
  />
));