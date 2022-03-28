// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { ApiTypes } from '@polkadot/api-base/types';
import type { Bytes, Null, Option, Result, U8aFixed, Vec, u128, u32, u64 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, H256 } from '@polkadot/types/interfaces/runtime';
import type { FrameSupportTokensMiscBalanceStatus, FrameSupportWeightsDispatchInfo, PalletDapiProviderType, SpFinalityGrandpaAppPublic, SpRuntimeDispatchError } from '@polkadot/types/lookup';

declare module '@polkadot/api-base/types/events' {
  export interface AugmentedEvents<ApiType extends ApiTypes> {
    balances: {
      /**
       * A balance was set by root.
       **/
      BalanceSet: AugmentedEvent<ApiType, [AccountId32, u128, u128]>;
      /**
       * Some amount was deposited (e.g. for transaction fees).
       **/
      Deposit: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss.
       **/
      DustLost: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * An account was created with some free balance.
       **/
      Endowed: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Some balance was reserved (moved from free to reserved).
       **/
      Reserved: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128, FrameSupportTokensMiscBalanceStatus]>;
      /**
       * Some amount was removed from the account (e.g. for misbehavior).
       **/
      Slashed: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Transfer succeeded.
       **/
      Transfer: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128]>;
      /**
       * Some balance was unreserved (moved from reserved to free).
       **/
      Unreserved: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Some amount was withdrawn from the account (e.g. for transaction fees).
       **/
      Withdraw: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    dapi: {
      /**
       * New chain id is created
       **/
      ChainIdCreated: AugmentedEvent<ApiType, [Bytes]>;
      /**
       * Project reached quota. \[project_id\]
       **/
      ProjectReachedQuota: AugmentedEvent<ApiType, [U8aFixed]>;
      /**
       * A project is successfully registered. \[project_id, account_id, blockchain, quota\]
       **/
      ProjectRegistered: AugmentedEvent<ApiType, [U8aFixed, AccountId32, Bytes, u128]>;
      /**
       * Project usage is reported by oracle. \[project_id, usage\]
       **/
      ProjectUsageReported: AugmentedEvent<ApiType, [U8aFixed, u128]>;
      /**
       * Provider performance is reported by fisherman. [\provider_id, provider_type, requests,
       * success_rate, average_latency\]
       **/
      ProviderPerformanceReported: AugmentedEvent<ApiType, [U8aFixed, PalletDapiProviderType, u64, u32, u32]>;
      /**
       * A provider is successfully registered. \[provider_id, provider_type, operator,
       * blockchain\]
       **/
      ProviderRegistered: AugmentedEvent<ApiType, [U8aFixed, PalletDapiProviderType, AccountId32, Bytes]>;
      /**
       * A provider is unregistered. \[project_id, account_id, blockchain, quota\]
       **/
      ProviderUnregistered: AugmentedEvent<ApiType, [U8aFixed, PalletDapiProviderType]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    dapiStaking: {
      /**
       * New dapi staking era. Distribute era rewards to providers.
       **/
      NewDapiStakingEra: AugmentedEvent<ApiType, [u32]>;
      /**
       * Provider removed from dapi staking.
       **/
      ProviderUnregistered: AugmentedEvent<ApiType, [U8aFixed]>;
      /**
       * Reward paid to staker or operator.
       **/
      Reward: AugmentedEvent<ApiType, [AccountId32, U8aFixed, u32, u128]>;
      /**
       * Account has staked funds on a provider.
       **/
      Stake: AugmentedEvent<ApiType, [AccountId32, U8aFixed, u128]>;
      /**
       * Account has unbonded & unstaked some funds. Unbonding process begins.
       **/
      Unstake: AugmentedEvent<ApiType, [AccountId32, U8aFixed, u128]>;
      /**
       * Account has fully withdrawn all staked amount from an unregistered provider.
       **/
      WithdrawFromUnregistered: AugmentedEvent<ApiType, [AccountId32, U8aFixed, u128]>;
      /**
       * Account has withdrawn unbonded funds.
       **/
      Withdrawn: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    grandpa: {
      /**
       * New authority set has been applied.
       **/
      NewAuthorities: AugmentedEvent<ApiType, [Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>]>;
      /**
       * Current authority set has been paused.
       **/
      Paused: AugmentedEvent<ApiType, []>;
      /**
       * Current authority set has been resumed.
       **/
      Resumed: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    sudo: {
      /**
       * The \[sudoer\] just switched identity; the old key is supplied if one existed.
       **/
      KeyChanged: AugmentedEvent<ApiType, [Option<AccountId32>]>;
      /**
       * A sudo just took place. \[result\]
       **/
      Sudid: AugmentedEvent<ApiType, [Result<Null, SpRuntimeDispatchError>]>;
      /**
       * A sudo just took place. \[result\]
       **/
      SudoAsDone: AugmentedEvent<ApiType, [Result<Null, SpRuntimeDispatchError>]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    system: {
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed.
       **/
      ExtrinsicFailed: AugmentedEvent<ApiType, [SpRuntimeDispatchError, FrameSupportWeightsDispatchInfo]>;
      /**
       * An extrinsic completed successfully.
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [FrameSupportWeightsDispatchInfo]>;
      /**
       * An account was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A new account was created.
       **/
      NewAccount: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * On on-chain remark happened.
       **/
      Remarked: AugmentedEvent<ApiType, [AccountId32, H256]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
  } // AugmentedEvents
} // declare module
