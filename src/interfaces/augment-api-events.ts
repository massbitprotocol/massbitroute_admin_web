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
  DevnetRuntimeMassbitId,
  FrameSupportTokensMiscBalanceStatus,
  FrameSupportWeightsDispatchInfo,
  PalletBlockRewardDistributionConfig,
  PalletDapiProviderDeactivateReason,
  PalletDapiProviderType,
  PalletImOnlineSr25519AppSr25519Public,
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
    blockReward: {
      /**
       * Distribution config has been updated.
       **/
      DistributionConfigChanged: AugmentedEvent<
        ApiType,
        [PalletBlockRewardDistributionConfig]
      >;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    dapi: {
      ChainIdAdded: AugmentedEvent<ApiType, [Bytes]>;
      ChainIdRemoved: AugmentedEvent<ApiType, [Bytes]>;
      ProjectDeposited: AugmentedEvent<ApiType, [DevnetRuntimeMassbitId, u128]>;
      ProjectReachedQuota: AugmentedEvent<ApiType, [DevnetRuntimeMassbitId]>;
      ProjectRegistered: AugmentedEvent<
        ApiType,
        [DevnetRuntimeMassbitId, AccountId32, Bytes, u128]
      >;
      ProviderActivated: AugmentedEvent<
        ApiType,
        [DevnetRuntimeMassbitId, PalletDapiProviderType]
      >;
      ProviderDeactivated: AugmentedEvent<
        ApiType,
        [
          DevnetRuntimeMassbitId,
          PalletDapiProviderType,
          PalletDapiProviderDeactivateReason,
        ]
      >;
      ProviderRegistered: AugmentedEvent<
        ApiType,
        [DevnetRuntimeMassbitId, PalletDapiProviderType, AccountId32, Bytes]
      >;
      RegulatorAdded: AugmentedEvent<ApiType, [AccountId32]>;
      RegulatorRemoved: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    dapiStaking: {
      /**
       * Set blocks per era
       **/
      BlocksPerEraSet: AugmentedEvent<ApiType, [u32, u32, u32, u32]>;
      /**
       * Delegator staked some funds on a provider.
       **/
      Delegated: AugmentedEvent<
        ApiType,
        [AccountId32, DevnetRuntimeMassbitId, u128]
      >;
      /**
       * Delegator unstaked some funds on a provider.
       **/
      DelegatorUnstaked: AugmentedEvent<
        ApiType,
        [AccountId32, DevnetRuntimeMassbitId, u128]
      >;
      /**
       * New staking era. Distribute era rewards to providers.
       **/
      NewEra: AugmentedEvent<ApiType, [u32, u32]>;
      /**
       * Payout to provider or delegator.
       **/
      Payout: AugmentedEvent<
        ApiType,
        [AccountId32, DevnetRuntimeMassbitId, u32, u128]
      >;
      /**
       * Provider has decreased its bond.
       **/
      ProviderBondedLess: AugmentedEvent<
        ApiType,
        [DevnetRuntimeMassbitId, u128]
      >;
      /**
       * Provider has increased its bond.
       **/
      ProviderBondedMore: AugmentedEvent<
        ApiType,
        [DevnetRuntimeMassbitId, u128]
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
    imOnline: {
      /**
       * At the end of the session, no offence was committed.
       **/
      AllGood: AugmentedEvent<ApiType, []>;
      /**
       * A new heartbeat was received from `AuthorityId`.
       **/
      HeartbeatReceived: AugmentedEvent<
        ApiType,
        [PalletImOnlineSr25519AppSr25519Public]
      >;
      /**
       * At the end of the session, at least one validator was found to be offline.
       **/
      SomeOffline: AugmentedEvent<
        ApiType,
        [Vec<ITuple<[AccountId32, AccountId32]>>]
      >;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    session: {
      /**
       * New session has happened. Note that the argument is the session index, not the
       * block number as the type might suggest.
       **/
      NewSession: AugmentedEvent<ApiType, [u32]>;
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
    validatorSet: {
      /**
       * New validator addition initiated. Effective in ~2 sessions.
       **/
      ValidatorAdditionInitiated: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Validator removal initiated. Effective in ~2 sessions.
       **/
      ValidatorRemovalInitiated: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
  } // AugmentedEvents
} // declare module
