import { Token, DEFAULT_CURRENCIES } from '@venomswap/sdk'
import { unwrappedToken } from './wrappedCurrency'

export default function determineBaseToken(
  tokens: Record<string, any>,
  token0: Token,
  token1: Token
): Token | undefined {
  const currency0 = unwrappedToken(token0)
  const currency1 = unwrappedToken(token1)

  //const baseToken = currency0 && DEFAULT_CURRENCIES.includes(currency0) ? token0 : token1

  let baseToken: Token | undefined = tokens?.WETH?.token

  if (DEFAULT_CURRENCIES.includes(currency0) || DEFAULT_CURRENCIES.includes(currency1)) {
    baseToken = tokens?.WETH?.token
  } else if (
    token0.symbol?.toUpperCase() === tokens?.govToken?.token?.symbol?.toUpperCase() ||
    token1.symbol?.toUpperCase() === tokens?.govToken?.token?.symbol?.toUpperCase()
  ) {
    baseToken = tokens?.govToken?.token
  } else if (
    token0.symbol?.toUpperCase() === tokens?.BUSD?.token?.symbol?.toUpperCase() ||
    token1.symbol?.toUpperCase() === tokens?.BUSD?.token?.symbol?.toUpperCase()
  ) {
    baseToken = tokens?.BUSD?.token
  } else if (
    token0.symbol?.toUpperCase() === tokens?.USDC?.token?.symbol?.toUpperCase() ||
    token1.symbol?.toUpperCase() === tokens?.USDC?.token?.symbol?.toUpperCase()
  ) {
    baseToken = tokens?.USDC?.token
  } else if (
    token0.symbol?.toUpperCase() === tokens?.bscBUSD?.token?.symbol?.toUpperCase() ||
    token1.symbol?.toUpperCase() === tokens?.bscBUSD?.token?.symbol?.toUpperCase()
  ) {
    baseToken = tokens?.bscBUSD?.token
  } else if (
    token0.symbol?.toUpperCase() === tokens?.bridgedETH?.token?.symbol?.toUpperCase() ||
    token1.symbol?.toUpperCase() === tokens?.bridgedETH?.token?.symbol?.toUpperCase()
  ) {
    baseToken = tokens?.bridgedETH?.token
  }

  return baseToken
}
