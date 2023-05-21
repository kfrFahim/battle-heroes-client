import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ToyDetails = ({mytoy}) => {

    const {_id} = useParams()

     useEffect(() => {
          fetch(`https://battle-heroes-server-kfrfahim.vercel.app/alltoys/${mytoy._id}`)
            .then((res) => res.json())
            .then((data) => setAllToys(data));
        });
      


     return (
          <div>
               
          </div>
     );
};

export default ToyDetails;