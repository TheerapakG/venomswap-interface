import { Harmony } from '@harmony-js/core'
import { HarmonyAddress } from '@harmony-js/crypto'
import { AbstractConnectorArguments, ConnectorUpdate } from '@web3-react/types'
import { AbstractConnector } from '@web3-react/abstract-connector'
import { Hmy, OneWallet } from '@swoop-exchange/utils'

class HmyWalletProvider {
  private wallet: OneWallet
  private realprovider: any

  constructor(wallet: OneWallet) {
    this.wallet = wallet
    this.realprovider = this.wallet.client.client.messenger.provider
  }

  public async send(payload: any, callback?: any): Promise<any> {
    if ('method' in payload && payload.method === 'eth_sendTransaction') {
      const hmy = this.wallet.client.client as Harmony
      const txn = hmy.transactions.newTx({
        from: new HarmonyAddress(payload.params[0].from).bech32,
        to: new HarmonyAddress(payload.params[0].to).bech32,
        data: payload.params[0].data,
        gasLimit: parseInt(payload.params[0].gas),
        gasPrice: '0x00000000001',
        shardID: 0,
        toShardID: 0
      })

      const signedTxn = await this.wallet.signTransaction(txn)
      return await this.realprovider.send(
        {
          method: 'hmy_sendRawTransaction',
          params: [signedTxn.rawTransaction],
          id: payload.id,
          jsonrpc: payload.jsonrpc
        },
        callback
      )
    }
    return await this.realprovider.send(payload, callback)
  }
}

export class HmyWalletConnector extends AbstractConnector {
  private onewallet: OneWallet

  constructor(kwargs: AbstractConnectorArguments) {
    super(kwargs)
    // TODO: get network str from id
    const network = 'mainnet'
    this.onewallet = new OneWallet(network, new Hmy(network))
  }

  public async activate(): Promise<ConnectorUpdate> {
    await this.onewallet.signIn()
    return {
      provider: new HmyWalletProvider(this.onewallet),
      chainId: parseInt((await this.onewallet.client.client.messenger.send('eth_chainId', [], 'eth')).result),
      account: this.onewallet.base16Address
    }
  }

  public async getProvider(): Promise<any> {
    return new HmyWalletProvider(this.onewallet)
  }

  public async getChainId(): Promise<number | string> {
    return parseInt((await this.onewallet.client.client.messenger.send('eth_chainId', [], 'eth')).result)
  }

  public async getAccount(): Promise<null | string> {
    return this.onewallet.base16Address
  }

  public deactivate() {
    this.onewallet.signOut().catch((error: Error) => {
      console.log(error)
    })
  }

  public async isAuthorized(): Promise<boolean> {
    return this.onewallet.isAuthorized
  }
}
