import React, { useEffect } from "react";
import styled from 'styled-components';
import { useGlobalContext } from "../../context/Global";
import { useTable, useSortBy } from 'react-table';

function DeliveryTable({ columns, data }) {
    
    const { getEarnings } = useGlobalContext();

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
        columns,
        data,
        },
        useSortBy // Add the useSortBy hook
    );

    useEffect(() => {
        getEarnings();
    }, []);

  return (
    <DeliveryTableStyled>
        <div className="title-con">
            <h2>Recent Deliveries</h2>
            <button className="sort">Amount</button>
        </div>
        <div className="table-container">
            <table {...getTableProps()} border="1">
            <thead>
            {headerGroups.map((headerGroup) => (
                <>
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                        {/* Render the column header */}
                        {column.render('Header')}
                        {/* Add a sorting indicator */}
                        <span>
                        {column.isSorted ? (column.isSortedDesc ? ' ▼' : ' ▲') : ''}
                        </span>
                    </th>
                    ))}
                </tr>
                </>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                    <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                        // Check if the column is the "amount" column
                        if (cell.column.id === 'amount') {
                            return (
                            <td {...cell.getCellProps()}>
                                {/* Add dollar sign as a prefix to the cell content */}
                                ${cell.render('Cell')}
                            </td>
                            );
                        } else {
                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                        }
                        })}
                    </tr>
                    );
                })}
            </tbody>
        </table>
      </div>
    </DeliveryTableStyled>
  );
}

const DeliveryTableStyled = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    border: solid 2px #e2e2e2;
    background-color: white;
    border-radius: 15px;
    width: 100%;
    .title-con{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 1rem;
        padding-bottom: 0;
        h2{
            font-size: 17px;
            font-weight: 200;
            letter-spacing: 1px;
        }

    }
    .table-container{
        padding: 1rem;
        padding-top: 0;
        height: 250px;
        overflow: auto;
        display: flex;
        justify-content: center;
        overflow-y: auto;
        
    }
    .table-container::-webkit-scrollbar {
        width: 0.5em; /* Change this value to adjust the scrollbar width */
    }
    thead{
        position: sticky;
        top: 0;
        z-index: 1;
        font-size: 15px;
        font-weight: 200;
        color: #818181;
    }
    table {
        width: 100%;
        height: 100px;
        border-collapse: collapse;
        overflow: auto;
        /* border-radius: 20px; */
        border: none;
        /* box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); */

    }
    th,td {
        padding: 1rem;
        background-color: rgba(255, 255, 255, 0.2);
        border: none;
    }
    th {
        color: #818181;
        font-weight: 200;
        text-align: left;
    }
    td{
        font-size: 15px;
    }
    thead th {
        background-color: white;
        font-style: normal;
    }
    tbody tr:hover {
        background-color: rgba(255, 255, 255, 0.3);
    }
    tbody td {
        position: relative;
    }
    tbody td:hover:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: -9999px;
        bottom: -9999px;
        background-color: rgba(255, 255, 255, 0.2);
        z-index: -1;
    }

`;

export default DeliveryTable;