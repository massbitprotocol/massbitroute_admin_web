// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

declare module '@polkadot/types/lookup' {
  import '@polkadot/types-augment';

  import type {
    Bytes,
    Compact,
    Enum,
    Null,
    Option,
    Result,
    Struct,
    Text,
    U8aFixed,
    Vec,
    bool,
    u128,
    u32,
    u64,
    u8,
  } from '@polkadot/types-codec';
  import type { ITuple } from '@polkadot/types-codec/types';
  import type {
    AccountId32,
    Call,
    H256,
    MultiAddress,
    Perbill,
  } from '@polkadot/types/interfaces/runtime';
  import type { Event } from '@polkadot/types/interfaces/system';

  /** @name FrameSystemAccountInfo (3) */
  export interface FrameSystemAccountInfo extends Struct {
    readonly nonce: u32;
    readonly consumers: u32;
    readonly providers: u32;
    readonly sufficients: u32;
    readonly data: PalletBalancesAccountData;
  }

  /** @name PalletBalancesAccountData (5) */
  export interface PalletBalancesAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly miscFrozen: u128;
    readonly feeFrozen: u128;
  }

  /** @name FrameSupportWeightsPerDispatchClassU64 (7) */
  export interface FrameSupportWeightsPerDispatchClassU64 extends Struct {
    readonly normal: u64;
    readonly operational: u64;
    readonly mandatory: u64;
  }

  /** @name SpRuntimeDigest (11) */
  export interface SpRuntimeDigest extends Struct {
    readonly logs: Vec<SpRuntimeDigestDigestItem>;
  }

  /** @name SpRuntimeDigestDigestItem (13) */
  export interface SpRuntimeDigestDigestItem extends Enum {
    readonly isOther: boolean;
    readonly asOther: Bytes;
    readonly isConsensus: boolean;
    readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
    readonly isSeal: boolean;
    readonly asSeal: ITuple<[U8aFixed, Bytes]>;
    readonly isPreRuntime: boolean;
    readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
    readonly isRuntimeEnvironmentUpdated: boolean;
    readonly type:
      | 'Other'
      | 'Consensus'
      | 'Seal'
      | 'PreRuntime'
      | 'RuntimeEnvironmentUpdated';
  }

  /** @name FrameSystemEventRecord (16) */
  export interface FrameSystemEventRecord extends Struct {
    readonly phase: FrameSystemPhase;
    readonly event: Event;
    readonly topics: Vec<H256>;
  }

  /** @name FrameSystemEvent (18) */
  export interface FrameSystemEvent extends Enum {
    readonly isExtrinsicSuccess: boolean;
    readonly asExtrinsicSuccess: {
      readonly dispatchInfo: FrameSupportWeightsDispatchInfo;
    } & Struct;
    readonly isExtrinsicFailed: boolean;
    readonly asExtrinsicFailed: {
      readonly dispatchError: SpRuntimeDispatchError;
      readonly dispatchInfo: FrameSupportWeightsDispatchInfo;
    } & Struct;
    readonly isCodeUpdated: boolean;
    readonly isNewAccount: boolean;
    readonly asNewAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isKilledAccount: boolean;
    readonly asKilledAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isRemarked: boolean;
    readonly asRemarked: {
      readonly sender: AccountId32;
      readonly hash_: H256;
    } & Struct;
    readonly type:
      | 'ExtrinsicSuccess'
      | 'ExtrinsicFailed'
      | 'CodeUpdated'
      | 'NewAccount'
      | 'KilledAccount'
      | 'Remarked';
  }

  /** @name FrameSupportWeightsDispatchInfo (19) */
  export interface FrameSupportWeightsDispatchInfo extends Struct {
    readonly weight: u64;
    readonly class: FrameSupportWeightsDispatchClass;
    readonly paysFee: FrameSupportWeightsPays;
  }

  /** @name FrameSupportWeightsDispatchClass (20) */
  export interface FrameSupportWeightsDispatchClass extends Enum {
    readonly isNormal: boolean;
    readonly isOperational: boolean;
    readonly isMandatory: boolean;
    readonly type: 'Normal' | 'Operational' | 'Mandatory';
  }

  /** @name FrameSupportWeightsPays (21) */
  export interface FrameSupportWeightsPays extends Enum {
    readonly isYes: boolean;
    readonly isNo: boolean;
    readonly type: 'Yes' | 'No';
  }

  /** @name SpRuntimeDispatchError (22) */
  export interface SpRuntimeDispatchError extends Enum {
    readonly isOther: boolean;
    readonly isCannotLookup: boolean;
    readonly isBadOrigin: boolean;
    readonly isModule: boolean;
    readonly asModule: SpRuntimeModuleError;
    readonly isConsumerRemaining: boolean;
    readonly isNoProviders: boolean;
    readonly isTooManyConsumers: boolean;
    readonly isToken: boolean;
    readonly asToken: SpRuntimeTokenError;
    readonly isArithmetic: boolean;
    readonly asArithmetic: SpRuntimeArithmeticError;
    readonly type:
      | 'Other'
      | 'CannotLookup'
      | 'BadOrigin'
      | 'Module'
      | 'ConsumerRemaining'
      | 'NoProviders'
      | 'TooManyConsumers'
      | 'Token'
      | 'Arithmetic';
  }

  /** @name SpRuntimeModuleError (23) */
  export interface SpRuntimeModuleError extends Struct {
    readonly index: u8;
    readonly error: u8;
  }

  /** @name SpRuntimeTokenError (24) */
  export interface SpRuntimeTokenError extends Enum {
    readonly isNoFunds: boolean;
    readonly isWouldDie: boolean;
    readonly isBelowMinimum: boolean;
    readonly isCannotCreate: boolean;
    readonly isUnknownAsset: boolean;
    readonly isFrozen: boolean;
    readonly isUnsupported: boolean;
    readonly type:
      | 'NoFunds'
      | 'WouldDie'
      | 'BelowMinimum'
      | 'CannotCreate'
      | 'UnknownAsset'
      | 'Frozen'
      | 'Unsupported';
  }

  /** @name SpRuntimeArithmeticError (25) */
  export interface SpRuntimeArithmeticError extends Enum {
    readonly isUnderflow: boolean;
    readonly isOverflow: boolean;
    readonly isDivisionByZero: boolean;
    readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
  }

  /** @name PalletGrandpaEvent (26) */
  export interface PalletGrandpaEvent extends Enum {
    readonly isNewAuthorities: boolean;
    readonly asNewAuthorities: {
      readonly authoritySet: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>;
    } & Struct;
    readonly isPaused: boolean;
    readonly isResumed: boolean;
    readonly type: 'NewAuthorities' | 'Paused' | 'Resumed';
  }

  /** @name SpFinalityGrandpaAppPublic (29) */
  export interface SpFinalityGrandpaAppPublic extends SpCoreEd25519Public {}

  /** @name SpCoreEd25519Public (30) */
  export interface SpCoreEd25519Public extends U8aFixed {}

  /** @name PalletBalancesEvent (31) */
  export interface PalletBalancesEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: {
      readonly account: AccountId32;
      readonly freeBalance: u128;
    } & Struct;
    readonly isDustLost: boolean;
    readonly asDustLost: {
      readonly account: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: {
      readonly who: AccountId32;
      readonly free: u128;
      readonly reserved: u128;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
      readonly destinationStatus: FrameSupportTokensMiscBalanceStatus;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type:
      | 'Endowed'
      | 'DustLost'
      | 'Transfer'
      | 'BalanceSet'
      | 'Reserved'
      | 'Unreserved'
      | 'ReserveRepatriated'
      | 'Deposit'
      | 'Withdraw'
      | 'Slashed';
  }

  /** @name FrameSupportTokensMiscBalanceStatus (32) */
  export interface FrameSupportTokensMiscBalanceStatus extends Enum {
    readonly isFree: boolean;
    readonly isReserved: boolean;
    readonly type: 'Free' | 'Reserved';
  }

  /** @name PalletSudoEvent (33) */
  export interface PalletSudoEvent extends Enum {
    readonly isSudid: boolean;
    readonly asSudid: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isKeyChanged: boolean;
    readonly asKeyChanged: {
      readonly oldSudoer: Option<AccountId32>;
    } & Struct;
    readonly isSudoAsDone: boolean;
    readonly asSudoAsDone: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: 'Sudid' | 'KeyChanged' | 'SudoAsDone';
  }

  /** @name PalletDapiEvent (37) */
  export interface PalletDapiEvent extends Enum {
    readonly isProjectRegistered: boolean;
    readonly asProjectRegistered: ITuple<[U8aFixed, AccountId32, Bytes, u128]>;
    readonly isProviderRegistered: boolean;
    readonly asProviderRegistered: ITuple<
      [U8aFixed, PalletDapiProviderType, AccountId32, Bytes]
    >;
    readonly isProviderUnregistered: boolean;
    readonly asProviderUnregistered: ITuple<[U8aFixed, PalletDapiProviderType]>;
    readonly isProjectUsageReported: boolean;
    readonly asProjectUsageReported: ITuple<[U8aFixed, u128]>;
    readonly isProjectReachedQuota: boolean;
    readonly asProjectReachedQuota: U8aFixed;
    readonly isProviderPerformanceReported: boolean;
    readonly asProviderPerformanceReported: ITuple<
      [U8aFixed, PalletDapiProviderType, u64, u32, u32]
    >;
    readonly isChainIdCreated: boolean;
    readonly asChainIdCreated: Bytes;
    readonly type:
      | 'ProjectRegistered'
      | 'ProviderRegistered'
      | 'ProviderUnregistered'
      | 'ProjectUsageReported'
      | 'ProjectReachedQuota'
      | 'ProviderPerformanceReported'
      | 'ChainIdCreated';
  }

  /** @name PalletDapiProviderType (40) */
  export interface PalletDapiProviderType extends Enum {
    readonly isGateway: boolean;
    readonly isNode: boolean;
    readonly type: 'Gateway' | 'Node';
  }

  /** @name PalletDapiStakingPalletEvent (41) */
  export interface PalletDapiStakingPalletEvent extends Enum {
    readonly isStake: boolean;
    readonly asStake: ITuple<[AccountId32, U8aFixed, u128]>;
    readonly isUnstake: boolean;
    readonly asUnstake: ITuple<[AccountId32, U8aFixed, u128]>;
    readonly isWithdrawFromUnregistered: boolean;
    readonly asWithdrawFromUnregistered: ITuple<[AccountId32, U8aFixed, u128]>;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: ITuple<[AccountId32, u128]>;
    readonly isNewDapiStakingEra: boolean;
    readonly asNewDapiStakingEra: u32;
    readonly isReward: boolean;
    readonly asReward: ITuple<[AccountId32, U8aFixed, u32, u128]>;
    readonly isProviderUnregistered: boolean;
    readonly asProviderUnregistered: U8aFixed;
    readonly type:
      | 'Stake'
      | 'Unstake'
      | 'WithdrawFromUnregistered'
      | 'Withdrawn'
      | 'NewDapiStakingEra'
      | 'Reward'
      | 'ProviderUnregistered';
  }

  /** @name FrameSystemPhase (42) */
  export interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean;
    readonly asApplyExtrinsic: u32;
    readonly isFinalization: boolean;
    readonly isInitialization: boolean;
    readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (46) */
  export interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>;
    readonly specName: Text;
  }

  /** @name FrameSystemCall (50) */
  export interface FrameSystemCall extends Enum {
    readonly isFillBlock: boolean;
    readonly asFillBlock: {
      readonly ratio: Perbill;
    } & Struct;
    readonly isRemark: boolean;
    readonly asRemark: {
      readonly remark: Bytes;
    } & Struct;
    readonly isSetHeapPages: boolean;
    readonly asSetHeapPages: {
      readonly pages: u64;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetCodeWithoutChecks: boolean;
    readonly asSetCodeWithoutChecks: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetStorage: boolean;
    readonly asSetStorage: {
      readonly items: Vec<ITuple<[Bytes, Bytes]>>;
    } & Struct;
    readonly isKillStorage: boolean;
    readonly asKillStorage: {
      readonly keys_: Vec<Bytes>;
    } & Struct;
    readonly isKillPrefix: boolean;
    readonly asKillPrefix: {
      readonly prefix: Bytes;
      readonly subkeys: u32;
    } & Struct;
    readonly isRemarkWithEvent: boolean;
    readonly asRemarkWithEvent: {
      readonly remark: Bytes;
    } & Struct;
    readonly type:
      | 'FillBlock'
      | 'Remark'
      | 'SetHeapPages'
      | 'SetCode'
      | 'SetCodeWithoutChecks'
      | 'SetStorage'
      | 'KillStorage'
      | 'KillPrefix'
      | 'RemarkWithEvent';
  }

  /** @name FrameSystemLimitsBlockWeights (55) */
  export interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: u64;
    readonly maxBlock: u64;
    readonly perClass: FrameSupportWeightsPerDispatchClassWeightsPerClass;
  }

  /** @name FrameSupportWeightsPerDispatchClassWeightsPerClass (56) */
  export interface FrameSupportWeightsPerDispatchClassWeightsPerClass
    extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  }

  /** @name FrameSystemLimitsWeightsPerClass (57) */
  export interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: u64;
    readonly maxExtrinsic: Option<u64>;
    readonly maxTotal: Option<u64>;
    readonly reserved: Option<u64>;
  }

  /** @name FrameSystemLimitsBlockLength (59) */
  export interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportWeightsPerDispatchClassU32;
  }

  /** @name FrameSupportWeightsPerDispatchClassU32 (60) */
  export interface FrameSupportWeightsPerDispatchClassU32 extends Struct {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  }

  /** @name FrameSupportWeightsRuntimeDbWeight (61) */
  export interface FrameSupportWeightsRuntimeDbWeight extends Struct {
    readonly read: u64;
    readonly write: u64;
  }

  /** @name SpVersionRuntimeVersion (62) */
  export interface SpVersionRuntimeVersion extends Struct {
    readonly specName: Text;
    readonly implName: Text;
    readonly authoringVersion: u32;
    readonly specVersion: u32;
    readonly implVersion: u32;
    readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
    readonly transactionVersion: u32;
    readonly stateVersion: u8;
  }

  /** @name FrameSystemError (68) */
  export interface FrameSystemError extends Enum {
    readonly isInvalidSpecName: boolean;
    readonly isSpecVersionNeedsToIncrease: boolean;
    readonly isFailedToExtractRuntimeVersion: boolean;
    readonly isNonDefaultComposite: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly isCallFiltered: boolean;
    readonly type:
      | 'InvalidSpecName'
      | 'SpecVersionNeedsToIncrease'
      | 'FailedToExtractRuntimeVersion'
      | 'NonDefaultComposite'
      | 'NonZeroRefCount'
      | 'CallFiltered';
  }

  /** @name PalletTimestampCall (69) */
  export interface PalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<u64>;
    } & Struct;
    readonly type: 'Set';
  }

  /** @name PalletGrandpaStoredState (71) */
  export interface PalletGrandpaStoredState extends Enum {
    readonly isLive: boolean;
    readonly isPendingPause: boolean;
    readonly asPendingPause: {
      readonly scheduledAt: u32;
      readonly delay: u32;
    } & Struct;
    readonly isPaused: boolean;
    readonly isPendingResume: boolean;
    readonly asPendingResume: {
      readonly scheduledAt: u32;
      readonly delay: u32;
    } & Struct;
    readonly type: 'Live' | 'PendingPause' | 'Paused' | 'PendingResume';
  }

  /** @name PalletGrandpaStoredPendingChange (72) */
  export interface PalletGrandpaStoredPendingChange extends Struct {
    readonly scheduledAt: u32;
    readonly delay: u32;
    readonly nextAuthorities: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>;
    readonly forced: Option<u32>;
  }

  /** @name PalletGrandpaCall (75) */
  export interface PalletGrandpaCall extends Enum {
    readonly isReportEquivocation: boolean;
    readonly isReportEquivocationUnsigned: boolean;
    readonly isNoteStalled: boolean;
    readonly asNoteStalled: {
      readonly delay: u32;
      readonly bestFinalizedBlockNumber: u32;
    } & Struct;
    readonly type:
      | 'ReportEquivocation'
      | 'ReportEquivocationUnsigned'
      | 'NoteStalled';
  }

  /** @name SpFinalityGrandpaEquivocationProof (76) */
  export interface SpFinalityGrandpaEquivocationProof extends Struct {
    readonly setId: u64;
    readonly equivocation: SpFinalityGrandpaEquivocation;
  }

  /** @name SpFinalityGrandpaEquivocation (77) */
  export interface SpFinalityGrandpaEquivocation extends Enum {
    readonly isPrevote: boolean;
    readonly asPrevote: FinalityGrandpaEquivocationPrevote;
    readonly isPrecommit: boolean;
    readonly asPrecommit: FinalityGrandpaEquivocationPrecommit;
    readonly type: 'Prevote' | 'Precommit';
  }

  /** @name FinalityGrandpaEquivocationPrevote (78) */
  export interface FinalityGrandpaEquivocationPrevote extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpFinalityGrandpaAppPublic;
    readonly first: ITuple<
      [FinalityGrandpaPrevote, SpFinalityGrandpaAppSignature]
    >;
    readonly second: ITuple<
      [FinalityGrandpaPrevote, SpFinalityGrandpaAppSignature]
    >;
  }

  /** @name FinalityGrandpaPrevote (79) */
  export interface FinalityGrandpaPrevote extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u32;
  }

  /** @name SpFinalityGrandpaAppSignature (80) */
  export interface SpFinalityGrandpaAppSignature
    extends SpCoreEd25519Signature {}

  /** @name SpCoreEd25519Signature (81) */
  export interface SpCoreEd25519Signature extends U8aFixed {}

  /** @name FinalityGrandpaEquivocationPrecommit (84) */
  export interface FinalityGrandpaEquivocationPrecommit extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpFinalityGrandpaAppPublic;
    readonly first: ITuple<
      [FinalityGrandpaPrecommit, SpFinalityGrandpaAppSignature]
    >;
    readonly second: ITuple<
      [FinalityGrandpaPrecommit, SpFinalityGrandpaAppSignature]
    >;
  }

  /** @name FinalityGrandpaPrecommit (85) */
  export interface FinalityGrandpaPrecommit extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u32;
  }

  /** @name PalletGrandpaError (88) */
  export interface PalletGrandpaError extends Enum {
    readonly isPauseFailed: boolean;
    readonly isResumeFailed: boolean;
    readonly isChangePending: boolean;
    readonly isTooSoon: boolean;
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isInvalidEquivocationProof: boolean;
    readonly isDuplicateOffenceReport: boolean;
    readonly type:
      | 'PauseFailed'
      | 'ResumeFailed'
      | 'ChangePending'
      | 'TooSoon'
      | 'InvalidKeyOwnershipProof'
      | 'InvalidEquivocationProof'
      | 'DuplicateOffenceReport';
  }

  /** @name PalletBalancesBalanceLock (90) */
  export interface PalletBalancesBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
    readonly reasons: PalletBalancesReasons;
  }

  /** @name PalletBalancesReasons (91) */
  export interface PalletBalancesReasons extends Enum {
    readonly isFee: boolean;
    readonly isMisc: boolean;
    readonly isAll: boolean;
    readonly type: 'Fee' | 'Misc' | 'All';
  }

  /** @name PalletBalancesReserveData (94) */
  export interface PalletBalancesReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name PalletBalancesReleases (96) */
  export interface PalletBalancesReleases extends Enum {
    readonly isV100: boolean;
    readonly isV200: boolean;
    readonly type: 'V100' | 'V200';
  }

  /** @name PalletBalancesCall (97) */
  export interface PalletBalancesCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSetBalance: boolean;
    readonly asSetBalance: {
      readonly who: MultiAddress;
      readonly newFree: Compact<u128>;
      readonly newReserved: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly source: MultiAddress;
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferAll: boolean;
    readonly asTransferAll: {
      readonly dest: MultiAddress;
      readonly keepAlive: bool;
    } & Struct;
    readonly isForceUnreserve: boolean;
    readonly asForceUnreserve: {
      readonly who: MultiAddress;
      readonly amount: u128;
    } & Struct;
    readonly type:
      | 'Transfer'
      | 'SetBalance'
      | 'ForceTransfer'
      | 'TransferKeepAlive'
      | 'TransferAll'
      | 'ForceUnreserve';
  }

  /** @name PalletBalancesError (102) */
  export interface PalletBalancesError extends Enum {
    readonly isVestingBalance: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isKeepAlive: boolean;
    readonly isExistingVestingSchedule: boolean;
    readonly isDeadAccount: boolean;
    readonly isTooManyReserves: boolean;
    readonly type:
      | 'VestingBalance'
      | 'LiquidityRestrictions'
      | 'InsufficientBalance'
      | 'ExistentialDeposit'
      | 'KeepAlive'
      | 'ExistingVestingSchedule'
      | 'DeadAccount'
      | 'TooManyReserves';
  }

  /** @name PalletTransactionPaymentReleases (104) */
  export interface PalletTransactionPaymentReleases extends Enum {
    readonly isV1Ancient: boolean;
    readonly isV2: boolean;
    readonly type: 'V1Ancient' | 'V2';
  }

  /** @name FrameSupportWeightsWeightToFeeCoefficient (106) */
  export interface FrameSupportWeightsWeightToFeeCoefficient extends Struct {
    readonly coeffInteger: u128;
    readonly coeffFrac: Perbill;
    readonly negative: bool;
    readonly degree: u8;
  }

  /** @name PalletSudoCall (107) */
  export interface PalletSudoCall extends Enum {
    readonly isSudo: boolean;
    readonly asSudo: {
      readonly call: Call;
    } & Struct;
    readonly isSudoUncheckedWeight: boolean;
    readonly asSudoUncheckedWeight: {
      readonly call: Call;
      readonly weight: u64;
    } & Struct;
    readonly isSetKey: boolean;
    readonly asSetKey: {
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSudoAs: boolean;
    readonly asSudoAs: {
      readonly who: MultiAddress;
      readonly call: Call;
    } & Struct;
    readonly type: 'Sudo' | 'SudoUncheckedWeight' | 'SetKey' | 'SudoAs';
  }

  /** @name PalletDapiCall (109) */
  export interface PalletDapiCall extends Enum {
    readonly isRegisterProject: boolean;
    readonly asRegisterProject: {
      readonly projectId: U8aFixed;
      readonly chainId: Bytes;
      readonly deposit: Compact<u128>;
    } & Struct;
    readonly isSubmitProjectUsage: boolean;
    readonly asSubmitProjectUsage: {
      readonly projectId: U8aFixed;
      readonly usage: u128;
    } & Struct;
    readonly isRegisterProvider: boolean;
    readonly asRegisterProvider: {
      readonly providerId: U8aFixed;
      readonly providerType: PalletDapiProviderType;
      readonly chainId: Bytes;
    } & Struct;
    readonly isUnregisterProvider: boolean;
    readonly asUnregisterProvider: {
      readonly providerId: U8aFixed;
    } & Struct;
    readonly isSubmitProviderReport: boolean;
    readonly asSubmitProviderReport: {
      readonly providerId: U8aFixed;
      readonly requests: u64;
      readonly successPercentage: u32;
      readonly averageLatency: u32;
    } & Struct;
    readonly isCreateChainId: boolean;
    readonly asCreateChainId: {
      readonly chainId: Bytes;
    } & Struct;
    readonly type:
      | 'RegisterProject'
      | 'SubmitProjectUsage'
      | 'RegisterProvider'
      | 'UnregisterProvider'
      | 'SubmitProviderReport'
      | 'CreateChainId';
  }

  /** @name PalletDapiStakingPalletCall (110) */
  export interface PalletDapiStakingPalletCall extends Enum {
    readonly isWithdrawFromUnregisteredStaker: boolean;
    readonly asWithdrawFromUnregisteredStaker: {
      readonly providerId: U8aFixed;
    } & Struct;
    readonly isWithdrawFromUnregisteredOperator: boolean;
    readonly asWithdrawFromUnregisteredOperator: {
      readonly providerId: U8aFixed;
    } & Struct;
    readonly isStake: boolean;
    readonly asStake: {
      readonly providerId: U8aFixed;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isUnstake: boolean;
    readonly asUnstake: {
      readonly providerId: U8aFixed;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isWithdrawUnstaked: boolean;
    readonly isClaimStaker: boolean;
    readonly asClaimStaker: {
      readonly providerId: U8aFixed;
    } & Struct;
    readonly isClaimOperator: boolean;
    readonly asClaimOperator: {
      readonly providerId: U8aFixed;
      readonly era: Compact<u32>;
    } & Struct;
    readonly isForceNewEra: boolean;
    readonly type:
      | 'WithdrawFromUnregisteredStaker'
      | 'WithdrawFromUnregisteredOperator'
      | 'Stake'
      | 'Unstake'
      | 'WithdrawUnstaked'
      | 'ClaimStaker'
      | 'ClaimOperator'
      | 'ForceNewEra';
  }

  /** @name PalletSudoError (111) */
  export interface PalletSudoError extends Enum {
    readonly isRequireSudo: boolean;
    readonly type: 'RequireSudo';
  }

  /** @name PalletDapiProject (112) */
  export interface PalletDapiProject extends Struct {
    readonly owner: AccountId32;
    readonly chainId: Bytes;
    readonly quota: u128;
    readonly usage: u128;
  }

  /** @name PalletDapiProvider (113) */
  export interface PalletDapiProvider extends Struct {
    readonly providerType: PalletDapiProviderType;
    readonly operator: AccountId32;
    readonly chainId: Bytes;
    readonly state: PalletDapiProviderState;
  }

  /** @name PalletDapiProviderState (114) */
  export interface PalletDapiProviderState extends Enum {
    readonly isRegistered: boolean;
    readonly isUnregistered: boolean;
    readonly type: 'Registered' | 'Unregistered';
  }

  /** @name BTreeSetAccountId32 (115) */
  export interface BTreeSetAccountId32 extends Vec<AccountId32> {}

  /** @name BTreeSetBoundedVec (117) */
  export interface BTreeSetBoundedVec extends Vec<Bytes> {}

  /** @name PalletDapiError (119) */
  export interface PalletDapiError extends Enum {
    readonly isAlreadyRegistered: boolean;
    readonly isInsufficientBoding: boolean;
    readonly isProjectDNE: boolean;
    readonly isNotOracle: boolean;
    readonly isNotFisherman: boolean;
    readonly isProviderNotExist: boolean;
    readonly isNotOwnedProvider: boolean;
    readonly isNotOperatedProvider: boolean;
    readonly isInvalidChainId: boolean;
    readonly isAlreadyCreatedChainId: boolean;
    readonly type:
      | 'AlreadyRegistered'
      | 'InsufficientBoding'
      | 'ProjectDNE'
      | 'NotOracle'
      | 'NotFisherman'
      | 'ProviderNotExist'
      | 'NotOwnedProvider'
      | 'NotOperatedProvider'
      | 'InvalidChainId'
      | 'AlreadyCreatedChainId';
  }

  /** @name PalletDapiStakingAccountLedger (120) */
  export interface PalletDapiStakingAccountLedger extends Struct {
    readonly locked: Compact<u128>;
    readonly unbondingInfo: PalletDapiStakingUnbondingInfo;
    readonly rewardDestination: PalletDapiStakingRewardDestination;
  }

  /** @name PalletDapiStakingUnbondingInfo (121) */
  export interface PalletDapiStakingUnbondingInfo extends Struct {
    readonly unlockingChunks: Vec<PalletDapiStakingUnlockingChunk>;
  }

  /** @name PalletDapiStakingUnlockingChunk (123) */
  export interface PalletDapiStakingUnlockingChunk extends Struct {
    readonly amount: Compact<u128>;
    readonly unlockEra: Compact<u32>;
  }

  /** @name PalletDapiStakingRewardDestination (124) */
  export interface PalletDapiStakingRewardDestination extends Enum {
    readonly isFreeBalance: boolean;
    readonly isStakeBalance: boolean;
    readonly type: 'FreeBalance' | 'StakeBalance';
  }

  /** @name PalletDapiStakingRewardInfo (125) */
  export interface PalletDapiStakingRewardInfo extends Struct {
    readonly stakers: Compact<u128>;
    readonly operators: Compact<u128>;
  }

  /** @name PalletDapiStakingForcing (126) */
  export interface PalletDapiStakingForcing extends Enum {
    readonly isNotForcing: boolean;
    readonly isForceNew: boolean;
    readonly type: 'NotForcing' | 'ForceNew';
  }

  /** @name PalletDapiStakingProviderInfo (127) */
  export interface PalletDapiStakingProviderInfo extends Struct {
    readonly operator: AccountId32;
    readonly state: PalletDapiStakingProviderState;
    readonly unreserved: bool;
  }

  /** @name PalletDapiStakingProviderState (128) */
  export interface PalletDapiStakingProviderState extends Enum {
    readonly isRegistered: boolean;
    readonly isUnregistered: boolean;
    readonly asUnregistered: ITuple<[u32, u32]>;
    readonly type: 'Registered' | 'Unregistered';
  }

  /** @name PalletDapiStakingEraInfo (129) */
  export interface PalletDapiStakingEraInfo extends Struct {
    readonly rewards: PalletDapiStakingRewardInfo;
    readonly staked: Compact<u128>;
    readonly locked: Compact<u128>;
  }

  /** @name PalletDapiStakingProviderStakeInfo (131) */
  export interface PalletDapiStakingProviderStakeInfo extends Struct {
    readonly total: Compact<u128>;
    readonly numberOfStakers: Compact<u32>;
    readonly providerRewardClaimed: bool;
  }

  /** @name PalletDapiStakingStakerInfo (133) */
  export interface PalletDapiStakingStakerInfo extends Struct {
    readonly stakes: Vec<PalletDapiStakingEraStake>;
  }

  /** @name PalletDapiStakingEraStake (135) */
  export interface PalletDapiStakingEraStake extends Struct {
    readonly staked: Compact<u128>;
    readonly era: Compact<u32>;
  }

  /** @name FrameSupportPalletId (136) */
  export interface FrameSupportPalletId extends U8aFixed {}

  /** @name PalletDapiStakingPalletError (137) */
  export interface PalletDapiStakingPalletError extends Enum {
    readonly isInsufficientValue: boolean;
    readonly isStakingWithNoValue: boolean;
    readonly isMaxNumberOfStakersExceeded: boolean;
    readonly isNotOperatedProvider: boolean;
    readonly isNotStakedProvider: boolean;
    readonly isUnknownEraReward: boolean;
    readonly isUnexpectedStakeInfoEra: boolean;
    readonly isTooManyEraStakeValues: boolean;
    readonly isUnclaimedRewardsRemaining: boolean;
    readonly isUnstakingWithNoValue: boolean;
    readonly isTooManyUnlockingChunks: boolean;
    readonly isNothingToWithdraw: boolean;
    readonly isEraOutOfBounds: boolean;
    readonly isNotOwnedProvider: boolean;
    readonly isAlreadyClaimedInThisEra: boolean;
    readonly isNotUnregisteredProvider: boolean;
    readonly isAlreadyRegisteredProvider: boolean;
    readonly type:
      | 'InsufficientValue'
      | 'StakingWithNoValue'
      | 'MaxNumberOfStakersExceeded'
      | 'NotOperatedProvider'
      | 'NotStakedProvider'
      | 'UnknownEraReward'
      | 'UnexpectedStakeInfoEra'
      | 'TooManyEraStakeValues'
      | 'UnclaimedRewardsRemaining'
      | 'UnstakingWithNoValue'
      | 'TooManyUnlockingChunks'
      | 'NothingToWithdraw'
      | 'EraOutOfBounds'
      | 'NotOwnedProvider'
      | 'AlreadyClaimedInThisEra'
      | 'NotUnregisteredProvider'
      | 'AlreadyRegisteredProvider';
  }

  /** @name SpRuntimeMultiSignature (139) */
  export interface SpRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Signature;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Signature;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaSignature;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name SpCoreSr25519Signature (140) */
  export interface SpCoreSr25519Signature extends U8aFixed {}

  /** @name SpCoreEcdsaSignature (141) */
  export interface SpCoreEcdsaSignature extends U8aFixed {}

  /** @name FrameSystemExtensionsCheckNonce (149) */
  export interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

  /** @name PalletTransactionPaymentChargeTransactionPayment (151) */
  export interface PalletTransactionPaymentChargeTransactionPayment
    extends Compact<u128> {}

  /** @name LocalRuntimeRuntime (152) */
  export type LocalRuntimeRuntime = Null;
} // declare module
