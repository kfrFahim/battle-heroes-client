import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ToyDetails = () => {


     const [mytoys, setAllToys] = useState([]);

     const {_id} = useParams()

   

     useEffect(() => {
          fetch(`https://battle-heroes-server-kfrfahim.vercel.app/alltoys`)
            .then((res) => res.json())
            .then((data) => console.log(data.name));
        });
 
      


     return (
          <div>
               fgdfgdfgdf 
          </div>
     );
};

export default ToyDetails;