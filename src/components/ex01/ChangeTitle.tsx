import React, { useEffect, useState } from 'react';

export default function ChangeTitle() {
  const [titleInput, setTitleInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleInput(e.target.value);
  };

  useEffect(() => {
    document.title = titleInput;
  });

  return (
    <div>
      ChangeTitle:
      <label htmlFor=""></label>
      <input
        onChange={handleChange}
        placeholder="Nhập tiêu đề"
        type="text"
      />
    </div>
  );
}