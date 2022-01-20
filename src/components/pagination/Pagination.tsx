import React,{FunctionComponent} from 'react';


type PaginationProps = {
    totalPages:number,
    currentPage:number,
    setCurrentPage:(value:number)=>void
}


type PageProps = {
    page:number,
    onClickPage:(value:number)=>void,
    currentPage:number
}

const style={
    dot:{
        width:'40px',
        height:'40px',
        color:'#fff',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        borderRadius:'50%',
        margin:'10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textShadow: '2px 2px 4px rgba(28,44,62,1)',
        cursor:'pointer'

    },
    dotActived:{
        border:'4px solid rgba(255,255,255,0.7)'
    }
}

const maxDots=7;


const Pages:FunctionComponent<PageProps>=({page, currentPage,onClickPage})=>
<div onClick={()=>onClickPage(page)} style={page===currentPage?{...style.dot,...style.dotActived}:{...style.dot}}>
    {page+1}
</div>

const ThreeDots=()=>
<div style={{
        color:'#fff',
        textShadow: '2px 2px 4px rgba(28,44,62,1)',}}>
    ...
</div>

export const Pagination:FunctionComponent<PaginationProps>= ({ totalPages, currentPage, setCurrentPage, children  }) => 
    {

        return(<div style={{width:'100%', display:'flex',flexDirection:'row', justifyContent:'center', alignItems:'center'}}>  
        
                {totalPages>0?<Pages page={0}
                    currentPage={currentPage}
                    onClickPage={(value)=>setCurrentPage(value)}
                    />:null
                    }
                {totalPages>maxDots&&currentPage>maxDots/2?<ThreeDots/>:null
                }
                {[...Array(totalPages>maxDots?maxDots-2:totalPages)].map((value,index)=>{
                    if(totalPages>maxDots){
                        if(currentPage<maxDots/2){
                            return(<Pages 
                                key={index}
                                page={index+1}
                                currentPage={currentPage}
                                onClickPage={(value)=>setCurrentPage(value)}
                            />);
                        }else if(currentPage>totalPages-1-maxDots/2){
                            return(<Pages 
                                key={index}
                                page={(totalPages-2)-(Math.ceil(maxDots/2)-index)}
                                currentPage={currentPage}
                                onClickPage={(value)=>setCurrentPage(value)}
                            />);
                        }else{
                            return(<Pages 
                                key={index}
                                page={(currentPage)-(Math.ceil((maxDots-2)/2)-1)+index}
                                currentPage={currentPage}
                                onClickPage={(value)=>setCurrentPage(value)}
                            />);
                        }
                        
                    }else{
                        return(<Pages 
                            key={index}
                            page={index+1}
                            currentPage={currentPage}
                            onClickPage={(value)=>setCurrentPage(value)}
                        />);
                    }
                    })}
                    
                    
                {totalPages>maxDots&&currentPage<totalPages-1-maxDots/2?<ThreeDots/>:null
                }
                    {totalPages>maxDots?
                    <Pages page={totalPages-1}
                    currentPage={currentPage}
                    onClickPage={(value)=>setCurrentPage(value)}
                    />:null}


                    </div>
        );
    }

