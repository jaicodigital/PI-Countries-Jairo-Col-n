import React from "react";
import j from "../Paginado/paginado.module.css";

export default function Paginado({ countriesPerPage, allCountries, paginado }) {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(allCountries / countriesPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <nav>
      <ul>
        {pageNumbers?.map((number) => (
          <button
            onClick={() => paginado(number)}
            key={number}
            className={j.button}
          >
            {number}
          </button>
        ))}
      </ul>
    </nav>
  );
}

// import Card from "../Cards/card"
// import { useState, useEffect } from 'react'
// import Home from '../Home/home'
// // import j from './index.module.css'

// export default function Paginado({ countriesPerPage, error }) {
//   const [page, setPage] = useState(0)

//   useEffect(() => {
//     setPage(0)
//   }, [countriesPerPage])

//   const pagCountries = () => {
//     if (!page) {
//       return [...countriesPerPage].slice(page, page + 10)
//     }
//     return [...countriesPerPage].slice(page, page + 10)
//   }

//   const nextPage = () => {
//     if (page < countriesPerPage.length - 10) setPage(page + 10)
//   }

//   const prevPage = () => {
//     if (page > 0) setPage(page - 10)
//   }

//   if (countriesPerPage.length && !error) {
//     return (
//       <div>
//         <>
//           <div>
//             {pagCountries().map(country => (
//               <Card key={country.id} {...country} />
//             ))}
//           </div>
//           <div>
//             <button onClick={prevPage}>Atrás</button>
//             <button>Página {page / 10 + 1}</button>
//             <button onClick={nextPage}>Adelante</button>
//           </div>
//         </>
//       </div>
//     )
//   } else if ((!countriesPerPage.length && !error) || error === 'No existe el país') {
//     return (
//       <div>
//         <div>
//           <h2>Uy... no hay países con esos filtros.</h2>
//           <h2>¿Quieres restablecerlos?</h2>
//           <Home />
//         </div>
//       </div>
//     )
//   }else {
//     return (
//       <div>
//         <div>
//           <h1>Error de conexión con el servidor</h1>
//         </div>
//       </div>
//     )
//   }

// }