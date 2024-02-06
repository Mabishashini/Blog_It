import React from 'react'
import "./write.css"
import AddIcon from '@mui/icons-material/Add';
import writeImg from "../../images/header.jpg"

export const Write = () => {
  return (
    <div className='write container'>
        <form className="writeForm">
            <img src={writeImg} alt="" className='writeImg col-12' />
            <div className="writeFormTopGroup ">
                <label htmlFor="fileInput"><span className='writeIcon'><AddIcon/></span></label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <input type="text"placeholder='Title' className='writeInput' autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea type="text" className='writeInput writeText col-12 col-md-10' placeholder='Write your Story...'></textarea>
                <button className="writeSubmit ">Publish</button>
            </div>
        </form>
    </div>
  )
}
