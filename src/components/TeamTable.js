import React from "react";
import { useTable, useSortBy } from "react-table";

export default function Table({ columns, data }) {
  const {
   getTableProps,
   getTableBodyProps,
   headerGroups,
   rows,
   prepareRow,
 } = useTable({
   columns,
   data,
 }, useSortBy)

 return (
      <div class="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 py-2 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg">
        <table {...getTableProps()} class="border-collapse border-spacing-0 border border-slate-400">
          <thead>
          {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                    <th
                        {...column.getHeaderProps(column.getSortByToggleProps())}
                        class="px-3 py-2 bg-slate-700 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider"
                    >
                      {column.render('Header')}
                      <span>
                        {column.isSorted
                            ? column.isSortedDesc
                                ? '🔽'
                                : '🔼'
                            : ''}
                     </span>
                    </th>
                ))}
              </tr>
          ))}
          </thead>
          <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
                <tr {...row.getRowProps()} class="even:bg-slate-50 odd:bg-slate-400">
                  {row.cells.map(cell => {
                    return (
                        <td
                            {...cell.getCellProps()}
                            class="px-3 py-2 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5"
                        >
                          {cell.render('Cell')}
                        </td>
                    )
                  })}
                </tr>
            )
          })}
          </tbody>
        </table>
      </div>
  );
}
