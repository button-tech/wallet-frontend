// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import { ICurrency, IContract } from './types'
import { Ethereum, EthereumClassic } from './currencies/ethereumBased/ethereumBased'
import { EthereumTokens } from './currencies/ethereumBased/ethereumBasedContract'
import { Bitcoin, BitcoinCash, Litecoin } from './currencies/utxoBased/utxoBased'
import { Waves } from './currencies/waves/waves'
import { Stellar } from './currencies/stellar/stellar'

export default class TsWalletCore {
  static Ethereum(privateKey: string): ICurrency {
    return Ethereum(privateKey)
  }

  static EthereumClassic(privateKey: string): ICurrency {
    return EthereumClassic(privateKey)
  }

  static EthereumTokens(privateKey: string): IContract & ICurrency {
    return EthereumTokens(privateKey)
  }

  static Bitcoin(privateKey: string): ICurrency {
    return Bitcoin(privateKey)
  }

  static BitcoinCash(privateKey: string): ICurrency {
    return BitcoinCash(privateKey)
  }

  static Litecoin(privateKey: string): ICurrency {
    return Litecoin(privateKey)
  }

  static Waves(privateKey: string): ICurrency {
    return Waves(privateKey)
  }

  static Stellar(privateKey: string): ICurrency {
    return Stellar(privateKey)
  }
}
