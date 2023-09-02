import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import { Triangle } from 'react-loader-spinner';

const style = {
  backgroundColor: 'rgba(0, 0, 0, 1)',
}


function Loader({loading}) {
  return (
    <div>
      <Backdrop
        style={style}
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
        open={loading}
        transitionDuration={0}
        // no transition
      >
    <Triangle
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
      />
      <div style={{display:"block"}}>Loading ...</div>
      </Backdrop>
    </div>
  );
}

export default Loader