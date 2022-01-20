import {FunctionComponent} from 'react';
import { Movie } from '../../model/Movies';
import './Card.css';

type CardProps = {
    data:Movie
    searchValue:string
}



let textWithMark=(text:string,markText:string)=>{
    let auxiIndex=text.toLowerCase().indexOf(markText);
    if(markText!==''&&auxiIndex>=0){
            return(<>
        {text.slice(0, auxiIndex)}
            <mark>{text.slice(auxiIndex,auxiIndex+markText.length)}</mark>{text.slice(auxiIndex+markText.length,text.length)}
        </>)
    }
    return text
    };


export const Card:FunctionComponent<CardProps>= ({ data, searchValue, children  }) => {
   
    const{
        title,
        director,
        year,
        coverImage,
        description
    }=data;
   


    return(<div className='card'>  
        <img className='image' src={coverImage}/>
        <div className='info'>
            
            <div className='title'>
                {textWithMark(title, searchValue)}
            </div>
            
            <div className='yearAndDirector'>
                {textWithMark(year.toString(), searchValue)} - Directed by: {textWithMark(director, searchValue)}
            </div>
            <div className='description'>
                {description}
            </div>
        </div>
    </div>)
    }