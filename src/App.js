import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Map from "./components/Map";

import { ROUTE_NUMBERS_FILTER_OPTIONS } from "./components/Route";
const streets = ROUTE_NUMBERS_FILTER_OPTIONS[0]["route_graph"].map((r) => r);


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    maxWidth:450
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



function App() {
  const classes = useStyles();
  const [place, setPlace] = React.useState("");

  const handleChange = (event) => {
    setPlace(event.target.value);
  };

  // console.log(place)
  return (
    <div className="App">
      <FormControl variant="outlined" className={classes.formControl} id='select'>
        <InputLabel id="demo-simple-select-outlined-label">Place</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={place}
          onChange={handleChange}
          label="Place"
        >
          <MenuItem>Select</MenuItem>
          {streets.map((val) => (
            <MenuItem value={val.address["street"]} key={val.route_stop_id}>
              {val.address["street"]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Map place={place} />
    </div>
  );
}

export default App;
