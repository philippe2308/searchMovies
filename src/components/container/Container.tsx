import React,{FunctionComponent} from 'react';

type ContainerProps = {
  color?: string,
  height?:string,
  width?:string,
  padding?:string
  flexDirection?:string, 
  justifyContent?:string, 
  alignItems?:string
}

export const Container:FunctionComponent<ContainerProps>= ({ color,height, width, padding, children, alignItems, justifyContent  }) => 
    <div style={{
            background:color,
            height:height,
            width:width,
            padding:padding,
            flex:1,
            display:'flex',
            flexDirection:'column',
            alignItems:alignItems?alignItems:'center',
            justifyContent:justifyContent?justifyContent:'center'
        }}>  
        {children}
    </div>

export const HomeContainer:FunctionComponent = (props)=>
    <Container 
        color='linear-gradient(180deg, rgba(174,205,238,1) 0%, rgba(28,44,62,1) 100%)'  
        height='calc(100vh - 40px)'
        padding='20px 50px'
        
        {...props}/>

export const CardContainer:FunctionComponent = (props)=><Container  
color='rgba(28,44,62,0.2)'  
height='100%'
width='100%'
padding='0px'
{...props}/>