"use client";
import React, { useState, useEffect } from "react";
function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return (
    <div>
      <h1>Veri Alımı</h1>
      {data ? (
        <div>
          <p>Veri başarıyla alındı:</p>
          {data?.map((item, index) => (
            <div key={index}>
              <p>{item.name}</p>
              <p>{item.surname}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Veri alınıyor...</p>
      )}
    </div>
  );
}

export default DataFetcher;
