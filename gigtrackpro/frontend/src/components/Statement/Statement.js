import React from "react";
import { useGlobalContext } from "../../context/Global";
import styled from 'styled-components'
import { Innerlayout } from "../../styles/Layouts";
import StatementTable from "./StatementTable";

function Statement () {
    const { getCurrentDateString, 
        getWeekNumber, 
        aggregatedData, 
        aggregateEarningsData, 
        getEarnings, 
        getExpense,
        earnings,
        earningsDataMapping } = useGlobalContext();

    const today = getCurrentDateString();
    const currentWeek = getWeekNumber(today);
    const goalAmount = 550.00; /* Temp goalAmount, will replace with custom input */ 
    const MappedData = earningsDataMapping(earnings);
    const data = React.useMemo(() => MappedData, []);

    const columns = React.useMemo(
        () => [
            {
                Header: "Date",
                accessor: "date",
            },
            {
                Header: "Company",
                accessor: "category",
            },
            {
                Header: "Trips",
                accessor: "trip",
            },
            {
                Header: "Amount",
                accessor: "amount",
            },
            {
                Header: "Mileage",
                accessor: "totalMi",
            }
    ],[]);
    return (
        <StatementStyled>
            <Innerlayout>
                <div className="statement-container">
                    <StatementTable columns={columns} data={data}/>
                </div>
            </Innerlayout>
        </StatementStyled>
    )
}


const StatementStyled = styled.div `
    .statement-container{
        padding: 2rem;
        width: 100%;
    }
`;

export default Statement;