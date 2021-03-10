import React, { useEffect, useCallback, useState } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { Image, Heading } from '@pancakeswap-libs/uikit'
import { BLOCKS_PER_YEAR, CAKE_PER_BLOCK, CAKE_POOL_PID } from 'config'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import { useFarms, usePriceBnbBusd, usePriceCakeBusd } from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
import { QuoteToken } from 'config/constants/types'
import useI18n from 'hooks/useI18n'
import useTokenBalance from 'hooks/useTokenBalance'
import { getBalanceNumber } from '../../utils/formatBalance'
import { getCakeAddress } from '../../utils/addressHelpers'
import Game from './components/Game'


const Farms: React.FC = () => {
  const { path } = useRouteMatch()
  const cakePrice = usePriceCakeBusd()
  const bnbPrice = usePriceBnbBusd()
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
  const cakeBalance = (useTokenBalance(getCakeAddress()))

  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])



  return (
    <Page>
      <Heading as="h1" size="lg" color="primary" mb="50px" style={{ textAlign: 'center' }}>
        Spin the Wheel and WIN!
      </Heading>
      
      <div>
        
        <Game max={new BigNumber(cakeBalance)} tokenName="QUACK" />
          
        
      </div>
      <Image src="/images/egg/8.png" alt="illustration" width={1352} height={587} responsive />
    </Page>
  )
}

export default Farms
