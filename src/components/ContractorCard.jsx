import React from 'react';


export const ContractorCard = ({ contractor }) => {

    return (
        <>
            <div className="bg-gray-600 w-80 h-80 border-2 border-solid rounded-lg">
                <h2 className="text-xl font-bold text-white drop-shadow-lg shadow-black">{contractor.companyName}</h2>
                <p>email: {contractor.email}</p>
                <img className="h-3/5" src={"data:" + contractor.imgFormat + ", " + contractor.logoImage} alt={contractor.companyName}></img>
            </div>
        </>
    )
}
