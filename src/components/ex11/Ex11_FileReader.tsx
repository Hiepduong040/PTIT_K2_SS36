import React, { useEffect, useState } from 'react'

export default function Ex11_FileReader() {
    const [file,setFile]=useState<File | null >(null)
    const [imageUrl, setImageUrl] = useState<string>("")

    // lấy giá trị trong input
    const handleChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
        const { files } = e.target;
        const selectedFiles = files ? files[0] : null;
        setFile(selectedFiles);
        
    };

    useEffect(()=>{
        if ( !file){
            return;
        }
        const reader = new FileReader();
        reader.onload = () => {
            setImageUrl(reader.result as string);

        };

        reader.readAsDataURL(file);

    },[file]);
  return (
    <div> <input 
    onChange={handleChange}
    type="file" name="" id="" />
    <img src={imageUrl} alt=""  /></div>
  )
}
