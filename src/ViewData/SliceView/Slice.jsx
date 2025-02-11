import React from 'react';
import { Link } from 'react-router-dom';

function Slice({ data, imgHeight = '240px', width = '22%', seeAllText = 'See All', linkTo }) {
  let MobSlice = data.slice(0, 4);

  return (
    <>
      <div className="d-flex align-items-center">
        {
          MobSlice.map((e, index) => (
            <div key={index} className="grid border p-2" style={{ width }}>
              <img src={e.url} style={{ height: imgHeight, maxWidth: '100%' }} alt={e.name} />
              <p>{e.name}</p>
              <p>{e.title}</p>
              <p><b>{e.price || e.originalPrice}</b> / {e.discount}% off</p>
            </div>
          ))
        }
        <Link to={linkTo} className="btn btn-dark align-items-center" style={{  }}>
          {seeAllText}
        </Link>
      </div>
    </>
  );
}

export default Slice;
