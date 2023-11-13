import { InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SearchIcon from "@mui/icons-material/Search";
import { useSearch } from '../Contex/SearchContex';
const SearchInput = () => {
  const [values, setValues] = useSearch()
  // const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
//
  const searchSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    try {
      const { data } = await axios.get(`https://restapinodejs.onrender.com/api/search/${values.keyword}`);
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange =(e)=>{
      setValues({...values , keyword:e.target.value})
  }
  return (
    <>
    <form onSubmit={searchSubmit}>

    <TextField
            sx={{ marginBottom: "10px", marginLeft: "35px" }}
            label="Search"
            variant="outlined"
            placeholder="search"
            value={values.keyword}
            onChange={handleInputChange}
            InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick={searchSubmit}>
                <SearchIcon sx={{ cursor: "pointer" }} />
              </InputAdornment>
            ),
          }}
          />
    </form>
    
    </>
  )
}

export default SearchInput