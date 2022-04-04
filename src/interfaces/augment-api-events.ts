// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { ApiTypes } from '@polkadot/api-base/types';
import type {
  Bytes,
  Null,
  Option,
  Result,
  Vec,
  u128,
  u32,
  u64,
} from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, H256 } from '@polkadot/types/interfaces/runtime';
import type {
  FrameSupportTokensMiscBalanceStatus,
  FrameSupportWeightsDispatchInfo,
  LocalRuntimeMassbitId,
  PalletDapiProviderType,
  SpFinalityGrandpaAppPublic,
  SpRuntimeDispatchError,
} from '@polkadot/types/lookup';

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
      ReserveRepatriated: AugmentedEvent<
        ApiType,
        [AccountId32, AccountId32, u128, FrameSupportTokensMiscBalanceStatus]
      >;
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
       * New chain id is created.
       **/
      ChainIdCreated: AugmentedEvent<ApiType, [Bytes]>;
      /**
       * Project reached max quota.
       **/
      ProjectReachedQuota: AugmentedEvent<ApiType, [LocalRuntimeMassbitId]>;
      /**
       * A project is registered.
       **/
      ProjectRegistered: AugmentedEvent<
        ApiType,
        [LocalRuntimeMassbitId, AccountId32, Bytes, u128]
      >;
      /**
       * Project usage is reported by oracle.
       **/
      ProjectUsageReported: AugmentedEvent<
        ApiType,
        [LocalRuntimeMassbitId, u128]
      >;
      /**
       * Provider performance is reported by fisherman.
       **/
      ProviderPerformanceReported: AugmentedEvent<
        ApiType,
        [LocalRuntimeMassbitId, PalletDapiProviderType, u64, u32, u32]
      >;
      /**
       * A provider is registered.
       **/
      ProviderRegistered: AugmentedEvent<
        ApiType,
        [LocalRuntimeMassbitId, PalletDapiProviderType, AccountId32, Bytes]
      >;
      /**
       * A provider is unregistered.
       **/
      ProviderUnregistered: AugmentedEvent<
        ApiType,
        [LocalRuntimeMassbitId, PalletDapiProviderType]
      >;
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
      ProviderUnregistered: AugmentedEvent<ApiType, [LocalRuntimeMassbitId]>;
      /**
       * Reward paid to staker or operator.
       **/
      Reward: AugmentedEvent<
        ApiType,
        [AccountId32, LocalRuntimeMassbitId, u32, u128]
      >;
      /**
       * Account has staked funds on a provider.
       **/
      Stake: AugmentedEvent<
        ApiType,
        [AccountId32, LocalRuntimeMassbitId, u128]
      >;
      /**
       * Account has unbonded & unstaked some funds. Unbonding process begins.
       **/
      Unstake: AugmentedEvent<
        ApiType,
        [AccountId32, LocalRuntimeMassbitId, u128]
      >;
      /**
       * Account has fully withdrawn all staked amount from an unregistered provider.
       **/
      WithdrawFromUnregistered: AugmentedEvent<
        ApiType,
        [AccountId32, LocalRuntimeMassbitId, u128]
      >;
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
      NewAuthorities: AugmentedEvent<
        ApiType,
        [Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>]
      >;
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
      SudoAsDone: AugmentedEvent<
        ApiType,
        [Result<Null, SpRuntimeDispatchError>]
      >;
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
      ExtrinsicFailed: AugmentedEvent<
        ApiType,
        [SpRuntimeDispatchError, FrameSupportWeightsDispatchInfo]
      >;
      /**
       * An extrinsic completed successfully.
       **/
      ExtrinsicSuccess: AugmentedEvent<
        ApiType,
        [FrameSupportWeightsDispatchInfo]
      >;
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
    utility: {
      /**
       * Batch of dispatches completed fully with no error.
       **/
      BatchCompleted: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
       * well as the error.
       **/
      BatchInterrupted: AugmentedEvent<ApiType, [u32, SpRuntimeDispatchError]>;
      /**
       * A call was dispatched.
       **/
      DispatchedAs: AugmentedEvent<
        ApiType,
        [Result<Null, SpRuntimeDispatchError>]
      >;
      /**
       * A single item within a Batch of dispatches has completed with no error.
       **/
      ItemCompleted: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
  } // AugmentedEvents
} // declare module
