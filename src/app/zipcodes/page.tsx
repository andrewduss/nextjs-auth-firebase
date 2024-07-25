'use client'

import React, { useEffect, useState } from 'react'
import { getZipcodes } from './getZipcodes'


const ZipcodePage = () => {
  const [zipcodes, setZipcodes] = useState([]);

  useEffect(() => {
    const fetchZipcodes = async () => {
      try {
        const zipcodes = await getZipcodes()
        setZipcodes(zipcodes)
      } catch (error) {
        console.log("ERR" + error)
      }
    };

    fetchZipcodes()
  }, [])


  return (
    <>
      <div>ZipcodePage</div>
      <table className="table">
        <thead className="table-header-group">
          <th>Zipcode</th>
          <th>Created At</th>
          <th>Updated At</th>
        </thead>
        {zipcodes.map((z) => {
          return (
            <tr className="table-row">
              <td className="table-cell">{z!.zipcode}</td>
              <td className="table-cell">{z!.created_at}</td>
              <td className="table-cell">{z!.updated_at}</td>
            </tr>
          )
        })}
      </table>
    </>
  )
}

export default ZipcodePage