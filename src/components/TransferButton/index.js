import * as Style from "./style.js";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState, useEffect } from 'react'
import { ethers } from "ethers";
import useBridges from "../../useBridges.js";
import {toDecimal} from "../../utilities/index.js"


export function TransferButton() {
    const {mockMtcEth, mockMtcBsc, bridgeEth, bridgeBsc, activeUser } = useBridges();
    const [bscBalance, setBscBalance] = useState(() => { })
    const [ethBalance, setEthBalance] = useState(() => { })
    useEffect(() => {
        (async () => {
            const balanceBsc = toDecimal(await mockMtcBsc.balanceOf(activeUser._address))
            setBscBalance(balanceBsc)
            const balanceEth = toDecimal(await mockMtcEth.balanceOf(activeUser._address))
            setEthBalance(balanceEth)
        })()
    }, [])
    return (
        <Style.boxArea>
            <Card>
                <h2>ETH MTC Balance </h2>
                <CardContent>
                    {ethBalance}
                    <TextField></TextField>
                    <Button variant="contained">Transfer</Button>
                </CardContent>
            </Card>
            <Card>
            <h2>BSC MTC Balance </h2>
                <CardContent>
                    {bscBalance}
                    <TextField></TextField>
                    <Button variant="contained">Transfer</Button>
                </CardContent>
            </Card>
        </Style.boxArea>

    )
}