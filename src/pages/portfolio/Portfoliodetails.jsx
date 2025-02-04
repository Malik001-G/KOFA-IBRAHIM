import React from 'react'
import { useParams } from 'react-router-dom'

const Portfoliodetails = () => {
    const { id } = useParams();

    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold capitalize">Portfolio Category: {id}</h1>
        <p>Showing details for {id} projects.</p>
      </div>
    );
  };
export default Portfoliodetails