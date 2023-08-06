import React, { useEffect } from "react";
import styled from 'styled-components';
import { Innerlayout } from "../../styles/Layouts";
import { useGlobalContext } from "../../context/Global";
import EarningsModal from "../Modal/EarningsModal";
import EarningsItems from "../EarningsItems/EarningsItems";
import RenderItems from "../EarningsItems/RenderItems";
import DeliveryTable from "../EarningsItems/DeliveryTable";

function Earnings () {

    const { earnings, getEarnings, earningsDataMapping } = useGlobalContext();

    const MappedData = earningsDataMapping(earnings);
    const data = React.useMemo(() => MappedData, []);

    useEffect(() => {
        getEarnings()
    }, []);

    const columns = React.useMemo(
        () => [
            {
                Header: "Company",
                accessor: "category",
            },
            {
                Header: "Date",
                accessor: "date",
            },
            {
                Header: "Trips",
                accessor: "trip",
            },
            {
                Header: "Amount",
                accessor: "amount",
            },
    ],[]);

    return (
        <EarningsStyled>
            <Innerlayout>
                    <DeliveryTable columns={columns} data={data} />
            </Innerlayout>
        </EarningsStyled>
    )
}

const EarningsStyled = styled.div`
`;

export default Earnings;