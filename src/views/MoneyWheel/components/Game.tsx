import React, { useMemo, useCallback, useState } from 'react'
import BigNumber from 'bignumber.js'
import styled, { keyframes } from 'styled-components'
import TokenInput from 'components/TokenInput'
import { Flex, Text, Skeleton, Heading } from '@pancakeswap-libs/uikit'
import { provider } from 'web3-core'
import { getFullDisplayBalance } from 'utils/formatBalance'
import BetInput from './BetInput'

const FCard = styled.div`
  align-self: baseline;
  background: ${(props) => props.theme.card.background};
  border-radius: 32px;
  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 24px;
  position: relative;
  text-align: center;
`

const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.borderColor};
  height: 1px;
  margin: 28px auto;
  width: 100%;
`


interface GameProps {
    max: BigNumber
    tokenName?: string
  }

const Game: React.FC<GameProps> = ({max, tokenName = ''}) => {
    const [val1, setVal1] = useState('')
    const [val3, setVal3] = useState('')
    const [val5, setVal5] = useState('')
    const [val10, setVal10] = useState('')
    const [val20, setVal20] = useState('')
    const [val50, setVal50] = useState('')

    const fullBalance = useMemo(() => {
        return getFullDisplayBalance(max)
      }, [max])
    

    const handleChange1 = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {
            setVal1(e.currentTarget.value)
        },
        [setVal1],
    )

    const handleChange3 = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {
            setVal3(e.currentTarget.value)
        },
        [setVal3],
    )

    const handleChange5 = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {
            setVal5(e.currentTarget.value)
        },
        [setVal5],
    )

    const handleChange10 = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {
            setVal10(e.currentTarget.value)
        },
        [setVal10],
    )

    const handleChange20 = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {
            setVal20(e.currentTarget.value)
        },
        [setVal20],
    )

    const handleChange50 = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {
            setVal50(e.currentTarget.value)
        },
        [setVal50],
    )

    const handleSelectMax1 = useCallback(() => {
        setVal1(new BigNumber(fullBalance).toString())
    }, [fullBalance, setVal1])
    const handleSelectMax3 = useCallback(() => {
        setVal3(new BigNumber(fullBalance).toString())
    }, [fullBalance, setVal3])
    const handleSelectMax5 = useCallback(() => {
        setVal5(new BigNumber(fullBalance).toString())
    }, [fullBalance, setVal5])
    const handleSelectMax10 = useCallback(() => {
        setVal10(new BigNumber(fullBalance).toString())
    }, [fullBalance, setVal10])
    const handleSelectMax20 = useCallback(() => {
        setVal20(new BigNumber(fullBalance).toString())
    }, [fullBalance, setVal20])
    const handleSelectMax50 = useCallback(() => {
        setVal50(new BigNumber(fullBalance).toString())
    }, [fullBalance, setVal50])


    return (
        <div>
            <Flex>
                <BetInput
                    onChange={handleChange50}
                    onSelectMax={handleSelectMax50}
                    value={val50}
                    max={fullBalance}
                    symbol={tokenName}
                    betNumber="50"
                />
                <BetInput
                    onChange={handleChange20}
                    onSelectMax={handleSelectMax20}
                    value={val20}
                    max={fullBalance}
                    symbol={tokenName}
                    betNumber="20"
                />
                <BetInput
                    onChange={handleChange10}
                    onSelectMax={handleSelectMax10}
                    value={val10}
                    max={fullBalance}
                    symbol={tokenName}
                    betNumber="10"
                />
            </Flex>
            <Flex>
                <BetInput
                    onChange={handleChange5}
                    onSelectMax={handleSelectMax5}
                    value={val5}
                    max={fullBalance}
                    symbol={tokenName}
                    betNumber="5"
                />
                <BetInput
                    onChange={handleChange3}
                    onSelectMax={handleSelectMax3}
                    value={val3}
                    max={fullBalance}
                    symbol={tokenName}
                    betNumber="3"
                />
                <BetInput
                    onChange={handleChange1}
                    onSelectMax={handleSelectMax1}
                    value={val1}
                    max={fullBalance}
                    symbol={tokenName}
                    betNumber="1"
                />
            </Flex>

            <Heading as="h1" size="lg" color="secondary" mb="50px" style={{ textAlign: 'center' }}>
                Total Bet: {val1+val3+val5+val10+val20+val50} {tokenName}
            </Heading>
        </div>
    )
}

export default Game
