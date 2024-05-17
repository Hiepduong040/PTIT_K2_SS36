import React, { useEffect, useState } from "react";

interface Key {
  keyName: string;
  keyCode: string;
}

export default function KeyPress() {
  const [keyInfo, setKeyInfo] = useState<Key>({ keyName: "", keyCode: "" });

  useEffect(() => {
    const handleKeyPress = (e: any) => {
      setKeyInfo({ keyName: e.key, keyCode: e.keyCode });
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div>
        
      <p>Bạn đã nhấn phím "{keyInfo.keyName}"</p>
      <p>Mã phím: {keyInfo.keyCode}</p>
    </div>
  );
}
