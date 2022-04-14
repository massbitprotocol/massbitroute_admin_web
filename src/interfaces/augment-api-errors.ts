// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { ApiTypes } from '@polkadot/api-base/types';

declare module '@polkadot/api-base/types/errors' {
  export interface AugmentedErrors<ApiType extends ApiTypes> {
    balances: {
      /**
       * Beneficiary account must pre-exist
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * A vesting schedule already exists for this account
       **/
      ExistingVestingSchedule: AugmentedError<ApiType>;
      /**
       * Balance too low to send value
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account
       **/
      KeepAlive: AugmentedError<ApiType>;
      /**
       * Account liquidity restrictions prevent withdrawal
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Number of named reserves exceed MaxReserves
       **/
      TooManyReserves: AugmentedError<ApiType>;
      /**
       * Vesting balance too high to send value
       **/
      VestingBalance: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    blockReward: {
      /**
       * Sum of all rations must be one whole (100%)
       **/
      InvalidDistributionConfiguration: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    dapi: {
      /**
       * The provider/project is already registered.
       **/
      AlreadyExist: AugmentedError<ApiType>;
      /**
       * Chain Id is too long.
       **/
      BadChainId: AugmentedError<ApiType>;
      /**
       * The provider is inactive.
       **/
      InactiveProvider: AugmentedError<ApiType>;
      /**
       * Provider invalid state.
       **/
      InvalidProviderState: AugmentedError<ApiType>;
      /**
       * The provider/project doesn't exist in the list.
       **/
      NotExist: AugmentedError<ApiType>;
      /**
       * You are not the owner of the The provider/project.
       **/
      NotOwner: AugmentedError<ApiType>;
      /**
       * No permission to perform specific operation.
       **/
      PermissionDenied: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    dapiStaking: {
      /**
       * Provider already claimed in this era and reward is distributed
       **/
      AlreadyClaimedInThisEra: AugmentedError<ApiType>;
      /**
       * The provider is already registered by other account
       **/
      AlreadyRegisteredProvider: AugmentedError<ApiType>;
      /**
       * Era parameter is out of bounds
       **/
      EraOutOfBounds: AugmentedError<ApiType>;
      /**
       * Can not stake with value less than minimum staking value
       **/
      InsufficientValue: AugmentedError<ApiType>;
      /**
       * Number of stakers per provider exceeded.
       **/
      MaxNumberOfStakersExceeded: AugmentedError<ApiType>;
      /**
       * There are no previously unbonded funds that can be unstaked and withdrawn.
       **/
      NothingToWithdraw: AugmentedError<ApiType>;
      /**
       * Targets must be operated provider
       **/
      NotOperatedProvider: AugmentedError<ApiType>;
      /**
       * Provider not owned by the account id.
       **/
      NotOwnedProvider: AugmentedError<ApiType>;
      /**
       * Provider isn't staked.
       **/
      NotStakedProvider: AugmentedError<ApiType>;
      /**
       * Provider isn't unregistered.
       **/
      NotUnregisteredProvider: AugmentedError<ApiType>;
      /**
       * Can not stake with zero value.
       **/
      StakingWithNoValue: AugmentedError<ApiType>;
      /**
       * Too many active `EraStake` values for (staker, provider) pairing.
       * Claim existing rewards to fix this problem.
       **/
      TooManyEraStakeValues: AugmentedError<ApiType>;
      /**
       * Provider has too many unlocking chunks. Withdraw the existing chunks if possible
       * or wait for current chunks to complete unlocking process to withdraw them.
       **/
      TooManyUnlockingChunks: AugmentedError<ApiType>;
      /**
       * Unclaimed rewards should be claimed before withdrawing stake.
       **/
      UnclaimedRewardsRemaining: AugmentedError<ApiType>;
      /**
       * Report issue on github if this is ever emitted
       **/
      UnexpectedStakeInfoEra: AugmentedError<ApiType>;
      /**
       * Report issue on github if this is ever emitted
       **/
      UnknownEraReward: AugmentedError<ApiType>;
      /**
       * Unstaking a provider with zero value
       **/
      UnstakingWithNoValue: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    grandpa: {
      /**
       * Attempt to signal GRANDPA change with one already pending.
       **/
      ChangePending: AugmentedError<ApiType>;
      /**
       * A given equivocation report is valid but already previously reported.
       **/
      DuplicateOffenceReport: AugmentedError<ApiType>;
      /**
       * An equivocation proof provided as part of an equivocation report is invalid.
       **/
      InvalidEquivocationProof: AugmentedError<ApiType>;
      /**
       * A key ownership proof provided as part of an equivocation report is invalid.
       **/
      InvalidKeyOwnershipProof: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA pause when the authority set isn't live
       * (either paused or already pending pause).
       **/
      PauseFailed: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA resume when the authority set isn't paused
       * (either live or already pending resume).
       **/
      ResumeFailed: AugmentedError<ApiType>;
      /**
       * Cannot signal forced change so soon after last.
       **/
      TooSoon: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    sudo: {
      /**
       * Sender must be the Sudo account
       **/
      RequireSudo: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    system: {
      /**
       * The origin filter prevent the call to be dispatched.
       **/
      CallFiltered: AugmentedError<ApiType>;
      /**
       * Failed to extract the runtime version from the new runtime.
       * 
       * Either calling `Core_version` or decoding `RuntimeVersion` failed.
       **/
      FailedToExtractRuntimeVersion: AugmentedError<ApiType>;
      /**
       * The name of specification does not match between the current runtime
       * and the new runtime.
       **/
      InvalidSpecName: AugmentedError<ApiType>;
      /**
       * Suicide called when the account has non-default composite data.
       **/
      NonDefaultComposite: AugmentedError<ApiType>;
      /**
       * There is a non-zero reference count preventing the account from being purged.
       **/
      NonZeroRefCount: AugmentedError<ApiType>;
      /**
       * The specification version is not allowed to decrease between the current runtime
       * and the new runtime.
       **/
      SpecVersionNeedsToIncrease: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    utility: {
      /**
       * Too many calls batched.
       **/
      TooManyCalls: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
  } // AugmentedErrors
} // declare module
