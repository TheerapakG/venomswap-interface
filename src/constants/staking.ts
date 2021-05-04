import { ChainId, Token } from '@venomswap/sdk'
import getPairTokensWithDefaults from '../utils/getPairTokensWithDefaults'

export const STAKING_REWARDS_INFO: {
  [chainId in ChainId]?: {
    pid: number
    tokens: [Token, Token]
  }[]
} = {
  [ChainId.HARMONY_MAINNET]: [
    {
      pid: 0,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_MAINNET, 'WONE/BUSD')
    },
    {
      pid: 1,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_MAINNET, 'WONE/VIPER')
    },
    {
      pid: 2,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_MAINNET, 'WONE/1ETH')
    },
    {
      pid: 3,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_MAINNET, 'BUSD/VIPER')
    },
    {
      pid: 4,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_MAINNET, 'BUSD/bscBUSD')
    },
    {
      pid: 5,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_MAINNET, 'WONE/1USDC')
    },
    {
      pid: 6,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_MAINNET, '1ROT/VIPER')
    },
    {
      pid: 7,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_MAINNET, '1MAGGOT/VIPER')
    },
    {
      pid: 8,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_MAINNET, '1WISE/VIPER')
    },
    {
      pid: 9,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_MAINNET, '1DSLA/VIPER')
    },
    {
      pid: 10,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_MAINNET, 'LINK/VIPER')
    },
    {
      pid: 11,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_MAINNET, '1AAVE/VIPER')
    },
    {
      pid: 12,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_MAINNET, '1SNX/VIPER')
    },
    {
      pid: 13,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_MAINNET, '1YFI/VIPER')
    },
    {
      pid: 14,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_MAINNET, '11INCH/VIPER')
    },
    {
      pid: 15,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_MAINNET, 'bscCAKE/VIPER')
    },
    {
      pid: 16,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_MAINNET, '1SUSHI/VIPER')
    },
    {
      pid: 17,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_MAINNET, '1UNI/VIPER')
    },
    {
      pid: 18,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_MAINNET, '1WISE/1ETH')
    },
    {
      pid: 19,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_MAINNET, 'WONE/1WBTC')
    },
    {
      pid: 20,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_MAINNET, 'WONE/1MATIC')
    }
  ],
  [ChainId.HARMONY_TESTNET]: [
    {
      pid: 0,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_TESTNET, 'WONE/BUSD')
    },
    {
      pid: 1,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_TESTNET, 'WONE/VIPER')
    },
    {
      pid: 2,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_TESTNET, 'WONE/1ETH')
    },
    {
      pid: 3,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_TESTNET, 'BUSD/VIPER')
    }
  ],
  [ChainId.BSC_TESTNET]: [
    {
      pid: 0,
      tokens: getPairTokensWithDefaults(ChainId.BSC_TESTNET, 'WBNB/BUSD')
    },
    {
      pid: 1,
      tokens: getPairTokensWithDefaults(ChainId.BSC_TESTNET, 'WBNB/COBRA')
    }
  ]
}
