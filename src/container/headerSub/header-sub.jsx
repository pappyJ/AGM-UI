import React from "react";
import { Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Ltxt from "../../constants/link";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// const Linkk = styled(Link)`
//   text-decoration: none;
// `;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(4, max-content)",
   gridGap: '.8rem',
    justifyContent: "space-between",
    padding: "0rem 0rem",
  },
  div: {
  },
}));

const HeaderSub = () => {
  const classes = useStyles();
  return (
    <div className={classes.div}>
      
        <Toolbar variant='dense' className={classes.root}>
          <Ltxt to='/' name='HOME' />
          <Ltxt to='/how-to-play' name='CONTACT' />
        
          <Ltxt to='/contestants' name='ABOUT' />

          {/* <Ltxt to='/login' name='Login' /> */}
          <Ltxt to='/signup' name='GALLERY' />
        </Toolbar>
    
    </div>
  );
};

export default HeaderSub;
