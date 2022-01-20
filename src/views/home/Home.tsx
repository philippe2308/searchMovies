
import React from 'react';
import {Card, HomeContainer, InputSearch, Pagination} from '../../components'
import { Movie } from '../../model/Movies';
import { getMovies } from '../../service/movies';

function Home() {
  const [movies, setMovies] = React.useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = React.useState(164);
  const [searchValue, setSearchValue] = React.useState<string>('');

  React.useEffect(() => {
    getMovies().then((response:any) => {
        setMovies(response.data);
    });
  }, []);


  let listMovies=movies.filter((value, index)=>(value.title.toLowerCase().indexOf(searchValue.toLowerCase())>=0||value.year.toString().indexOf(searchValue)>=0||value.director.toLowerCase().indexOf(searchValue.toLowerCase())>=0));
  

  return (
    <HomeContainer>

        <InputSearch value={searchValue} onChange={(value)=>{setSearchValue(value); setCurrentPage(0); }}/>
        <div style={{display:'flex', flexWrap: 'wrap'}}>
        {
            listMovies.filter((value, index)=>
            index>=currentPage*6&&index<(currentPage*6+6)).map((value, index)=><Card key={index} data={value} searchValue={searchValue.toLowerCase()}/>)

            
        }
        </div>
        
        <Pagination totalPages={Math.ceil(listMovies.length/6)} currentPage={currentPage} setCurrentPage={(newCurrentPage:number)=>{setCurrentPage(newCurrentPage)}}></Pagination>
    </HomeContainer>
  );
}

export default Home;
