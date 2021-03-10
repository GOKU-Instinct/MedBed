import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

function Search(props) {
  // console.log(top100Films);
  const list = props.list;
  return (
    <>
      <Autocomplete
        id={props.id}
        options={list}
        style={{ width: 300, margin: "1rem" }}
        renderInput={(params) => (
          <TextField {...params} label={props.id} variant="outlined" />
        )}
      />
    </>
  );
}

export default Search;

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
