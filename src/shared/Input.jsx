import React from 'react';

export default function Input({ id, title, type, name, onChange,errors, customClasses }) {
  return (
    <>
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {title}
      </label>
      <input
        type={type}
        name={name}
        className={`form-control ${customClasses}`}
        id={id}
        onChange={onChange}
      />
    </div>
    {errors[name] && <p className=" text-danger">{errors[name]}</p>}
    {console.log(errors[name])}
    </>
    
  );
}
