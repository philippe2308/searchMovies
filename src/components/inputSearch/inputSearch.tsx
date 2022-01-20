import {FunctionComponent} from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


type InputSearchProps = {
      value:string,
      onChange:(value:string)=>void,
  }
  

export const InputSearch:FunctionComponent<InputSearchProps>=  ({value,onChange})=>
    <Paper
      style={{ padding: '5px 8px', display: 'flex', alignItems: 'center', width: 500, background:'rgba(255,255,255,0.5)' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search by movie title, director or year"
        
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          onChange(event.target.value);
        }}
      />
        <SearchIcon />
    </Paper>
