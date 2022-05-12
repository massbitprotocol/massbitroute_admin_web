// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

declare module '@polkadot/types/lookup' {
  import '@polkadot/types-augment';

  import type { Data } from '@polkadot/types';
  import type {
    Bytes,
    Compact,
    Enum,
    Null,
    Option,
    Result,
    Set,
    Struct,
    Text,
    U8aFixed,
    Vec,
    bool,
    u128,
    u16,
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
    readonly isTransactional: boolean;
    readonly asTransactional: SpRuntimeTransactionalError;
  }

  /** @name SpRuntimeModuleError (23) */
  export interface SpRuntimeModuleError extends Struct {
    readonly index: u8;
    readonly error: U8aFixed;
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

  /** @name SpRuntimeTransactionalError (26) */
  export interface SpRuntimeTransactionalError extends Enum {
    readonly isLimitReached: boolean;
    readonly isNoLayer: boolean;
    readonly type: 'LimitReached' | 'NoLayer';
  }

  /** @name PalletIdentityEvent (27) */
  export interface PalletIdentityEvent extends Enum {
    readonly isIdentitySet: boolean;
    readonly asIdentitySet: {
      readonly who: AccountId32;
    } & Struct;
    readonly isIdentityCleared: boolean;
    readonly asIdentityCleared: {
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isIdentityKilled: boolean;
    readonly asIdentityKilled: {
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isJudgementRequested: boolean;
    readonly asJudgementRequested: {
      readonly who: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementUnrequested: boolean;
    readonly asJudgementUnrequested: {
      readonly who: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementGiven: boolean;
    readonly asJudgementGiven: {
      readonly target: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isRegistrarAdded: boolean;
    readonly asRegistrarAdded: {
      readonly registrarIndex: u32;
    } & Struct;
    readonly isSubIdentityAdded: boolean;
    readonly asSubIdentityAdded: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentityRemoved: boolean;
    readonly asSubIdentityRemoved: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentityRevoked: boolean;
    readonly asSubIdentityRevoked: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly type:
      | 'IdentitySet'
      | 'IdentityCleared'
      | 'IdentityKilled'
      | 'JudgementRequested'
      | 'JudgementUnrequested'
      | 'JudgementGiven'
      | 'RegistrarAdded'
      | 'SubIdentityAdded'
      | 'SubIdentityRemoved'
      | 'SubIdentityRevoked';
  }

  /** @name PalletValidatorSetEvent (28) */
  export interface PalletValidatorSetEvent extends Enum {
    readonly isNewInvulnerables: boolean;
    readonly asNewInvulnerables: Vec<AccountId32>;
    readonly isNewDesiredCandidates: boolean;
    readonly asNewDesiredCandidates: u32;
    readonly isNewCandidacyBond: boolean;
    readonly asNewCandidacyBond: u128;
    readonly isCandidateAdded: boolean;
    readonly asCandidateAdded: ITuple<[AccountId32, u128]>;
    readonly isCandidateRemoved: boolean;
    readonly asCandidateRemoved: AccountId32;
    readonly isCandidateSlashed: boolean;
    readonly asCandidateSlashed: AccountId32;
    readonly type:
      | 'NewInvulnerables'
      | 'NewDesiredCandidates'
      | 'NewCandidacyBond'
      | 'CandidateAdded'
      | 'CandidateRemoved'
      | 'CandidateSlashed';
  }

  /** @name PalletSessionEvent (30) */
  export interface PalletSessionEvent extends Enum {
    readonly isNewSession: boolean;
    readonly asNewSession: {
      readonly sessionIndex: u32;
    } & Struct;
    readonly type: 'NewSession';
  }

  /** @name PalletGrandpaEvent (31) */
  export interface PalletGrandpaEvent extends Enum {
    readonly isNewAuthorities: boolean;
    readonly asNewAuthorities: {
      readonly authoritySet: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>;
    } & Struct;
    readonly isPaused: boolean;
    readonly isResumed: boolean;
    readonly type: 'NewAuthorities' | 'Paused' | 'Resumed';
  }

  /** @name SpFinalityGrandpaAppPublic (34) */
  export interface SpFinalityGrandpaAppPublic extends SpCoreEd25519Public {}

  /** @name SpCoreEd25519Public (35) */
  export interface SpCoreEd25519Public extends U8aFixed {}

  /** @name PalletBalancesEvent (36) */
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

  /** @name FrameSupportTokensMiscBalanceStatus (37) */
  export interface FrameSupportTokensMiscBalanceStatus extends Enum {
    readonly isFree: boolean;
    readonly isReserved: boolean;
    readonly type: 'Free' | 'Reserved';
  }

  /** @name PalletSudoEvent (38) */
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

  /** @name PalletUtilityEvent (42) */
  export interface PalletUtilityEvent extends Enum {
    readonly isBatchInterrupted: boolean;
    readonly asBatchInterrupted: {
      readonly index: u32;
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isBatchCompleted: boolean;
    readonly isItemCompleted: boolean;
    readonly isDispatchedAs: boolean;
    readonly asDispatchedAs: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type:
      | 'BatchInterrupted'
      | 'BatchCompleted'
      | 'ItemCompleted'
      | 'DispatchedAs';
  }

  /** @name PalletDapiEvent (43) */
  export interface PalletDapiEvent extends Enum {
    readonly isProjectRegistered: boolean;
    readonly asProjectRegistered: {
      readonly projectId: LocalRuntimeMassbitId;
      readonly consumer: AccountId32;
      readonly chainId: Bytes;
      readonly quota: u128;
    } & Struct;
    readonly isProjectDeposited: boolean;
    readonly asProjectDeposited: {
      readonly projectId: LocalRuntimeMassbitId;
      readonly newQuota: u128;
    } & Struct;
    readonly isProjectUsageUpdated: boolean;
    readonly asProjectUsageUpdated: {
      readonly projectId: LocalRuntimeMassbitId;
      readonly usage: u128;
    } & Struct;
    readonly isProviderRegistered: boolean;
    readonly asProviderRegistered: {
      readonly providerId: LocalRuntimeMassbitId;
      readonly providerType: PalletDapiProviderType;
      readonly owner: AccountId32;
      readonly chainId: Bytes;
    } & Struct;
    readonly isProviderActivated: boolean;
    readonly asProviderActivated: {
      readonly providerId: LocalRuntimeMassbitId;
      readonly providerType: PalletDapiProviderType;
    } & Struct;
    readonly isProviderDeactivated: boolean;
    readonly asProviderDeactivated: {
      readonly providerId: LocalRuntimeMassbitId;
      readonly providerType: PalletDapiProviderType;
      readonly reason: PalletDapiProviderDeactivateReason;
    } & Struct;
    readonly isChainIdAdded: boolean;
    readonly asChainIdAdded: {
      readonly chainId: Bytes;
    } & Struct;
    readonly isChainIdRemoved: boolean;
    readonly asChainIdRemoved: {
      readonly chainId: Bytes;
    } & Struct;
    readonly isRegulatorAdded: boolean;
    readonly asRegulatorAdded: {
      readonly accountId: AccountId32;
    } & Struct;
    readonly isRegulatorRemoved: boolean;
    readonly asRegulatorRemoved: {
      readonly accountId: AccountId32;
    } & Struct;
    readonly type:
      | 'ProjectRegistered'
      | 'ProjectDeposited'
      | 'ProjectUsageUpdated'
      | 'ProviderRegistered'
      | 'ProviderActivated'
      | 'ProviderDeactivated'
      | 'ChainIdAdded'
      | 'ChainIdRemoved'
      | 'RegulatorAdded'
      | 'RegulatorRemoved';
  }

  /** @name LocalRuntimeMassbitId (44) */
  export interface LocalRuntimeMassbitId extends U8aFixed {}

  /** @name PalletDapiProviderType (46) */
  export interface PalletDapiProviderType extends Enum {
    readonly isGateway: boolean;
    readonly isNode: boolean;
    readonly type: 'Gateway' | 'Node';
  }

  /** @name PalletDapiProviderDeactivateReason (47) */
  export interface PalletDapiProviderDeactivateReason extends Enum {
    readonly isBadPerformance: boolean;
    readonly asBadPerformance: {
      readonly requests: u64;
      readonly successRate: u32;
      readonly averageLatency: u32;
    } & Struct;
    readonly isOutOfSync: boolean;
    readonly isUnRegistered: boolean;
    readonly type: 'BadPerformance' | 'OutOfSync' | 'UnRegistered';
  }

  /** @name PalletDapiStakingEvent (48) */
  export interface PalletDapiStakingEvent extends Enum {
    readonly isProviderBondedMore: boolean;
    readonly asProviderBondedMore: {
      readonly providerId: LocalRuntimeMassbitId;
      readonly amount: u128;
    } & Struct;
    readonly isProviderBondedLess: boolean;
    readonly asProviderBondedLess: {
      readonly providerId: LocalRuntimeMassbitId;
      readonly amount: u128;
    } & Struct;
    readonly isDelegated: boolean;
    readonly asDelegated: {
      readonly delegator: AccountId32;
      readonly providerId: LocalRuntimeMassbitId;
      readonly amount: u128;
    } & Struct;
    readonly isDelegatorUnstaked: boolean;
    readonly asDelegatorUnstaked: {
      readonly delegator: AccountId32;
      readonly providerId: LocalRuntimeMassbitId;
      readonly amount: u128;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isNewEra: boolean;
    readonly asNewEra: {
      readonly era: u32;
      readonly firstBlock: u32;
    } & Struct;
    readonly isPayout: boolean;
    readonly asPayout: {
      readonly who: AccountId32;
      readonly providerId: LocalRuntimeMassbitId;
      readonly era: u32;
      readonly amount: u128;
    } & Struct;
    readonly isBlocksPerEraSet: boolean;
    readonly asBlocksPerEraSet: {
      readonly currentRound: u32;
      readonly firstBlock: u32;
      readonly old: u32;
      readonly new_: u32;
    } & Struct;
    readonly type:
      | 'ProviderBondedMore'
      | 'ProviderBondedLess'
      | 'Delegated'
      | 'DelegatorUnstaked'
      | 'Withdrawn'
      | 'NewEra'
      | 'Payout'
      | 'BlocksPerEraSet';
  }

  /** @name PalletBlockRewardEvent (49) */
  export interface PalletBlockRewardEvent extends Enum {
    readonly isDistributionConfigChanged: boolean;
    readonly asDistributionConfigChanged: PalletBlockRewardDistributionConfig;
    readonly type: 'DistributionConfigChanged';
  }

  /** @name PalletBlockRewardDistributionConfig (50) */
  export interface PalletBlockRewardDistributionConfig extends Struct {
    readonly providersPercent: Perbill;
    readonly validatorsPercent: Perbill;
  }

  /** @name FrameSystemPhase (52) */
  export interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean;
    readonly asApplyExtrinsic: u32;
    readonly isFinalization: boolean;
    readonly isInitialization: boolean;
    readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (56) */
  export interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>;
    readonly specName: Text;
  }

  /** @name FrameSystemCall (60) */
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

  /** @name FrameSystemLimitsBlockWeights (64) */
  export interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: u64;
    readonly maxBlock: u64;
    readonly perClass: FrameSupportWeightsPerDispatchClassWeightsPerClass;
  }

  /** @name FrameSupportWeightsPerDispatchClassWeightsPerClass (65) */
  export interface FrameSupportWeightsPerDispatchClassWeightsPerClass
    extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  }

  /** @name FrameSystemLimitsWeightsPerClass (66) */
  export interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: u64;
    readonly maxExtrinsic: Option<u64>;
    readonly maxTotal: Option<u64>;
    readonly reserved: Option<u64>;
  }

  /** @name FrameSystemLimitsBlockLength (68) */
  export interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportWeightsPerDispatchClassU32;
  }

  /** @name FrameSupportWeightsPerDispatchClassU32 (69) */
  export interface FrameSupportWeightsPerDispatchClassU32 extends Struct {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  }

  /** @name FrameSupportWeightsRuntimeDbWeight (70) */
  export interface FrameSupportWeightsRuntimeDbWeight extends Struct {
    readonly read: u64;
    readonly write: u64;
  }

  /** @name SpVersionRuntimeVersion (71) */
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

  /** @name FrameSystemError (77) */
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

  /** @name PalletIdentityRegistration (78) */
  export interface PalletIdentityRegistration extends Struct {
    readonly judgements: Vec<ITuple<[u32, PalletIdentityJudgement]>>;
    readonly deposit: u128;
    readonly info: PalletIdentityIdentityInfo;
  }

  /** @name PalletIdentityJudgement (81) */
  export interface PalletIdentityJudgement extends Enum {
    readonly isUnknown: boolean;
    readonly isFeePaid: boolean;
    readonly asFeePaid: u128;
    readonly isReasonable: boolean;
    readonly isKnownGood: boolean;
    readonly isOutOfDate: boolean;
    readonly isLowQuality: boolean;
    readonly isErroneous: boolean;
    readonly type:
      | 'Unknown'
      | 'FeePaid'
      | 'Reasonable'
      | 'KnownGood'
      | 'OutOfDate'
      | 'LowQuality'
      | 'Erroneous';
  }

  /** @name PalletIdentityIdentityInfo (83) */
  export interface PalletIdentityIdentityInfo extends Struct {
    readonly additional: Vec<ITuple<[Data, Data]>>;
    readonly display: Data;
    readonly legal: Data;
    readonly web: Data;
    readonly riot: Data;
    readonly email: Data;
    readonly pgpFingerprint: Option<U8aFixed>;
    readonly image: Data;
    readonly twitter: Data;
  }

  /** @name PalletIdentityRegistrarInfo (124) */
  export interface PalletIdentityRegistrarInfo extends Struct {
    readonly account: AccountId32;
    readonly fee: u128;
    readonly fields: PalletIdentityBitFlags;
  }

  /** @name PalletIdentityBitFlags (125) */
  export interface PalletIdentityBitFlags extends Set {
    readonly isDisplay: boolean;
    readonly isLegal: boolean;
    readonly isWeb: boolean;
    readonly isRiot: boolean;
    readonly isEmail: boolean;
    readonly isPgpFingerprint: boolean;
    readonly isImage: boolean;
    readonly isTwitter: boolean;
  }

  /** @name PalletIdentityIdentityField (126) */
  export interface PalletIdentityIdentityField extends Enum {
    readonly isDisplay: boolean;
    readonly isLegal: boolean;
    readonly isWeb: boolean;
    readonly isRiot: boolean;
    readonly isEmail: boolean;
    readonly isPgpFingerprint: boolean;
    readonly isImage: boolean;
    readonly isTwitter: boolean;
    readonly type:
      | 'Display'
      | 'Legal'
      | 'Web'
      | 'Riot'
      | 'Email'
      | 'PgpFingerprint'
      | 'Image'
      | 'Twitter';
  }

  /** @name PalletIdentityCall (128) */
  export interface PalletIdentityCall extends Enum {
    readonly isAddRegistrar: boolean;
    readonly asAddRegistrar: {
      readonly account: AccountId32;
    } & Struct;
    readonly isSetIdentity: boolean;
    readonly asSetIdentity: {
      readonly info: PalletIdentityIdentityInfo;
    } & Struct;
    readonly isSetSubs: boolean;
    readonly asSetSubs: {
      readonly subs: Vec<ITuple<[AccountId32, Data]>>;
    } & Struct;
    readonly isClearIdentity: boolean;
    readonly isRequestJudgement: boolean;
    readonly asRequestJudgement: {
      readonly regIndex: Compact<u32>;
      readonly maxFee: Compact<u128>;
    } & Struct;
    readonly isCancelRequest: boolean;
    readonly asCancelRequest: {
      readonly regIndex: u32;
    } & Struct;
    readonly isSetFee: boolean;
    readonly asSetFee: {
      readonly index: Compact<u32>;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isSetAccountId: boolean;
    readonly asSetAccountId: {
      readonly index: Compact<u32>;
      readonly new_: AccountId32;
    } & Struct;
    readonly isSetFields: boolean;
    readonly asSetFields: {
      readonly index: Compact<u32>;
      readonly fields: PalletIdentityBitFlags;
    } & Struct;
    readonly isProvideJudgement: boolean;
    readonly asProvideJudgement: {
      readonly regIndex: Compact<u32>;
      readonly target: MultiAddress;
      readonly judgement: PalletIdentityJudgement;
    } & Struct;
    readonly isKillIdentity: boolean;
    readonly asKillIdentity: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isAddSub: boolean;
    readonly asAddSub: {
      readonly sub: MultiAddress;
      readonly data: Data;
    } & Struct;
    readonly isRenameSub: boolean;
    readonly asRenameSub: {
      readonly sub: MultiAddress;
      readonly data: Data;
    } & Struct;
    readonly isRemoveSub: boolean;
    readonly asRemoveSub: {
      readonly sub: MultiAddress;
    } & Struct;
    readonly isQuitSub: boolean;
    readonly type:
      | 'AddRegistrar'
      | 'SetIdentity'
      | 'SetSubs'
      | 'ClearIdentity'
      | 'RequestJudgement'
      | 'CancelRequest'
      | 'SetFee'
      | 'SetAccountId'
      | 'SetFields'
      | 'ProvideJudgement'
      | 'KillIdentity'
      | 'AddSub'
      | 'RenameSub'
      | 'RemoveSub'
      | 'QuitSub';
  }

  /** @name PalletIdentityError (133) */
  export interface PalletIdentityError extends Enum {
    readonly isTooManySubAccounts: boolean;
    readonly isNotFound: boolean;
    readonly isNotNamed: boolean;
    readonly isEmptyIndex: boolean;
    readonly isFeeChanged: boolean;
    readonly isNoIdentity: boolean;
    readonly isStickyJudgement: boolean;
    readonly isJudgementGiven: boolean;
    readonly isInvalidJudgement: boolean;
    readonly isInvalidIndex: boolean;
    readonly isInvalidTarget: boolean;
    readonly isTooManyFields: boolean;
    readonly isTooManyRegistrars: boolean;
    readonly isAlreadyClaimed: boolean;
    readonly isNotSub: boolean;
    readonly isNotOwned: boolean;
    readonly type:
      | 'TooManySubAccounts'
      | 'NotFound'
      | 'NotNamed'
      | 'EmptyIndex'
      | 'FeeChanged'
      | 'NoIdentity'
      | 'StickyJudgement'
      | 'JudgementGiven'
      | 'InvalidJudgement'
      | 'InvalidIndex'
      | 'InvalidTarget'
      | 'TooManyFields'
      | 'TooManyRegistrars'
      | 'AlreadyClaimed'
      | 'NotSub'
      | 'NotOwned';
  }

  /** @name PalletTimestampCall (134) */
  export interface PalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<u64>;
    } & Struct;
    readonly type: 'Set';
  }

  /** @name PalletAuthorshipUncleEntryItem (137) */
  export interface PalletAuthorshipUncleEntryItem extends Enum {
    readonly isInclusionHeight: boolean;
    readonly asInclusionHeight: u32;
    readonly isUncle: boolean;
    readonly asUncle: ITuple<[H256, Option<AccountId32>]>;
    readonly type: 'InclusionHeight' | 'Uncle';
  }

  /** @name PalletAuthorshipCall (138) */
  export interface PalletAuthorshipCall extends Enum {
    readonly isSetUncles: boolean;
    readonly asSetUncles: {
      readonly newUncles: Vec<SpRuntimeHeader>;
    } & Struct;
    readonly type: 'SetUncles';
  }

  /** @name SpRuntimeHeader (140) */
  export interface SpRuntimeHeader extends Struct {
    readonly parentHash: H256;
    readonly number: Compact<u32>;
    readonly stateRoot: H256;
    readonly extrinsicsRoot: H256;
    readonly digest: SpRuntimeDigest;
  }

  /** @name PalletAuthorshipError (142) */
  export interface PalletAuthorshipError extends Enum {
    readonly isInvalidUncleParent: boolean;
    readonly isUnclesAlreadySet: boolean;
    readonly isTooManyUncles: boolean;
    readonly isGenesisUncle: boolean;
    readonly isTooHighUncle: boolean;
    readonly isUncleAlreadyIncluded: boolean;
    readonly isOldUncle: boolean;
    readonly type:
      | 'InvalidUncleParent'
      | 'UnclesAlreadySet'
      | 'TooManyUncles'
      | 'GenesisUncle'
      | 'TooHighUncle'
      | 'UncleAlreadyIncluded'
      | 'OldUncle';
  }

  /** @name PalletValidatorSetCandidateInfo (144) */
  export interface PalletValidatorSetCandidateInfo extends Struct {
    readonly who: AccountId32;
    readonly deposit: u128;
  }

  /** @name PalletValidatorSetCall (145) */
  export interface PalletValidatorSetCall extends Enum {
    readonly isSetInvulnerables: boolean;
    readonly asSetInvulnerables: {
      readonly new_: Vec<AccountId32>;
    } & Struct;
    readonly isSetDesiredCandidates: boolean;
    readonly asSetDesiredCandidates: {
      readonly max: u32;
    } & Struct;
    readonly isSetCandidacyBond: boolean;
    readonly asSetCandidacyBond: {
      readonly bond: u128;
    } & Struct;
    readonly isRegisterAsCandidate: boolean;
    readonly isLeaveIntent: boolean;
    readonly type:
      | 'SetInvulnerables'
      | 'SetDesiredCandidates'
      | 'SetCandidacyBond'
      | 'RegisterAsCandidate'
      | 'LeaveIntent';
  }

  /** @name PalletValidatorSetError (146) */
  export interface PalletValidatorSetError extends Enum {
    readonly isTooManyCandidates: boolean;
    readonly isTooFewCandidates: boolean;
    readonly isUnknown: boolean;
    readonly isPermission: boolean;
    readonly isAlreadyCandidate: boolean;
    readonly isNotCandidate: boolean;
    readonly isAlreadyInvulnerable: boolean;
    readonly isNoAssociatedValidatorId: boolean;
    readonly isValidatorNotRegistered: boolean;
    readonly type:
      | 'TooManyCandidates'
      | 'TooFewCandidates'
      | 'Unknown'
      | 'Permission'
      | 'AlreadyCandidate'
      | 'NotCandidate'
      | 'AlreadyInvulnerable'
      | 'NoAssociatedValidatorId'
      | 'ValidatorNotRegistered';
  }

  /** @name LocalRuntimeSessionKeys (149) */
  export interface LocalRuntimeSessionKeys extends Struct {
    readonly aura: SpConsensusAuraSr25519AppSr25519Public;
    readonly grandpa: SpFinalityGrandpaAppPublic;
  }

  /** @name SpConsensusAuraSr25519AppSr25519Public (150) */
  export interface SpConsensusAuraSr25519AppSr25519Public
    extends SpCoreSr25519Public {}

  /** @name SpCoreSr25519Public (151) */
  export interface SpCoreSr25519Public extends U8aFixed {}

  /** @name SpCoreCryptoKeyTypeId (154) */
  export interface SpCoreCryptoKeyTypeId extends U8aFixed {}

  /** @name PalletSessionCall (155) */
  export interface PalletSessionCall extends Enum {
    readonly isSetKeys: boolean;
    readonly isPurgeKeys: boolean;
    readonly type: 'SetKeys' | 'PurgeKeys';
  }

  /** @name PalletSessionError (156) */
  export interface PalletSessionError extends Enum {
    readonly isInvalidProof: boolean;
    readonly isNoAssociatedValidatorId: boolean;
    readonly isDuplicatedKey: boolean;
    readonly isNoKeys: boolean;
    readonly isNoAccount: boolean;
    readonly type:
      | 'InvalidProof'
      | 'NoAssociatedValidatorId'
      | 'DuplicatedKey'
      | 'NoKeys'
      | 'NoAccount';
  }

  /** @name PalletGrandpaStoredState (157) */
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

  /** @name PalletGrandpaStoredPendingChange (158) */
  export interface PalletGrandpaStoredPendingChange extends Struct {
    readonly scheduledAt: u32;
    readonly delay: u32;
    readonly nextAuthorities: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>;
    readonly forced: Option<u32>;
  }

  /** @name PalletGrandpaCall (161) */
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

  /** @name SpFinalityGrandpaEquivocationProof (162) */
  export interface SpFinalityGrandpaEquivocationProof extends Struct {
    readonly setId: u64;
    readonly equivocation: SpFinalityGrandpaEquivocation;
  }

  /** @name SpFinalityGrandpaEquivocation (163) */
  export interface SpFinalityGrandpaEquivocation extends Enum {
    readonly isPrevote: boolean;
    readonly asPrevote: FinalityGrandpaEquivocationPrevote;
    readonly isPrecommit: boolean;
    readonly asPrecommit: FinalityGrandpaEquivocationPrecommit;
    readonly type: 'Prevote' | 'Precommit';
  }

  /** @name FinalityGrandpaEquivocationPrevote (164) */
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

  /** @name FinalityGrandpaPrevote (165) */
  export interface FinalityGrandpaPrevote extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u32;
  }

  /** @name SpFinalityGrandpaAppSignature (166) */
  export interface SpFinalityGrandpaAppSignature
    extends SpCoreEd25519Signature {}

  /** @name SpCoreEd25519Signature (167) */
  export interface SpCoreEd25519Signature extends U8aFixed {}

  /** @name FinalityGrandpaEquivocationPrecommit (170) */
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

  /** @name FinalityGrandpaPrecommit (171) */
  export interface FinalityGrandpaPrecommit extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u32;
  }

  /** @name PalletGrandpaError (174) */
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

  /** @name PalletBalancesBalanceLock (176) */
  export interface PalletBalancesBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
    readonly reasons: PalletBalancesReasons;
  }

  /** @name PalletBalancesReasons (177) */
  export interface PalletBalancesReasons extends Enum {
    readonly isFee: boolean;
    readonly isMisc: boolean;
    readonly isAll: boolean;
    readonly type: 'Fee' | 'Misc' | 'All';
  }

  /** @name PalletBalancesReserveData (180) */
  export interface PalletBalancesReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name PalletBalancesReleases (182) */
  export interface PalletBalancesReleases extends Enum {
    readonly isV100: boolean;
    readonly isV200: boolean;
    readonly type: 'V100' | 'V200';
  }

  /** @name PalletBalancesCall (183) */
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

  /** @name PalletBalancesError (184) */
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

  /** @name PalletTransactionPaymentReleases (186) */
  export interface PalletTransactionPaymentReleases extends Enum {
    readonly isV1Ancient: boolean;
    readonly isV2: boolean;
    readonly type: 'V1Ancient' | 'V2';
  }

  /** @name FrameSupportWeightsWeightToFeeCoefficient (188) */
  export interface FrameSupportWeightsWeightToFeeCoefficient extends Struct {
    readonly coeffInteger: u128;
    readonly coeffFrac: Perbill;
    readonly negative: bool;
    readonly degree: u8;
  }

  /** @name PalletSudoCall (189) */
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

  /** @name PalletUtilityCall (191) */
  export interface PalletUtilityCall extends Enum {
    readonly isBatch: boolean;
    readonly asBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isAsDerivative: boolean;
    readonly asAsDerivative: {
      readonly index: u16;
      readonly call: Call;
    } & Struct;
    readonly isBatchAll: boolean;
    readonly asBatchAll: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isDispatchAs: boolean;
    readonly type: 'Batch' | 'AsDerivative' | 'BatchAll' | 'DispatchAs';
  }

  /** @name LocalRuntimeOriginCaller (193) */
  export interface LocalRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isVoid: boolean;
    readonly type: 'System' | 'Void';
  }

  /** @name FrameSupportDispatchRawOrigin (194) */
  export interface FrameSupportDispatchRawOrigin extends Enum {
    readonly isRoot: boolean;
    readonly isSigned: boolean;
    readonly asSigned: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Root' | 'Signed' | 'None';
  }

  /** @name PalletDapiCall (195) */
  export interface PalletDapiCall extends Enum {
    readonly isRegisterProject: boolean;
    readonly asRegisterProject: {
      readonly projectId: LocalRuntimeMassbitId;
      readonly chainId: Bytes;
      readonly deposit: Compact<u128>;
    } & Struct;
    readonly isDepositProject: boolean;
    readonly asDepositProject: {
      readonly projectId: LocalRuntimeMassbitId;
      readonly deposit: Compact<u128>;
    } & Struct;
    readonly isSubmitProjectUsage: boolean;
    readonly asSubmitProjectUsage: {
      readonly projectId: LocalRuntimeMassbitId;
      readonly usage: u128;
    } & Struct;
    readonly isRegisterProvider: boolean;
    readonly asRegisterProvider: {
      readonly providerId: LocalRuntimeMassbitId;
      readonly providerType: PalletDapiProviderType;
      readonly owner: AccountId32;
      readonly chainId: Bytes;
    } & Struct;
    readonly isDepositProvider: boolean;
    readonly asDepositProvider: {
      readonly providerId: LocalRuntimeMassbitId;
      readonly deposit: Compact<u128>;
    } & Struct;
    readonly isUnregisterProvider: boolean;
    readonly asUnregisterProvider: {
      readonly providerId: LocalRuntimeMassbitId;
    } & Struct;
    readonly isReportProviderOffence: boolean;
    readonly asReportProviderOffence: {
      readonly providerId: LocalRuntimeMassbitId;
      readonly reason: PalletDapiProviderDeactivateReason;
    } & Struct;
    readonly isAddRegulator: boolean;
    readonly asAddRegulator: {
      readonly accountId: AccountId32;
    } & Struct;
    readonly isRemoveRegulator: boolean;
    readonly asRemoveRegulator: {
      readonly accountId: AccountId32;
    } & Struct;
    readonly isAddChainId: boolean;
    readonly asAddChainId: {
      readonly chainId: Bytes;
    } & Struct;
    readonly isRemoveChainId: boolean;
    readonly asRemoveChainId: {
      readonly chainId: Bytes;
    } & Struct;
    readonly type:
      | 'RegisterProject'
      | 'DepositProject'
      | 'SubmitProjectUsage'
      | 'RegisterProvider'
      | 'DepositProvider'
      | 'UnregisterProvider'
      | 'ReportProviderOffence'
      | 'AddRegulator'
      | 'RemoveRegulator'
      | 'AddChainId'
      | 'RemoveChainId';
  }

  /** @name PalletDapiStakingCall (196) */
  export interface PalletDapiStakingCall extends Enum {
    readonly isSetBlocksPerEra: boolean;
    readonly asSetBlocksPerEra: {
      readonly new_: u32;
    } & Struct;
    readonly isProviderBondMore: boolean;
    readonly asProviderBondMore: {
      readonly providerId: LocalRuntimeMassbitId;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isProviderBondLess: boolean;
    readonly asProviderBondLess: {
      readonly providerId: LocalRuntimeMassbitId;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isDelegate: boolean;
    readonly asDelegate: {
      readonly providerId: LocalRuntimeMassbitId;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isDelegatorUnstake: boolean;
    readonly asDelegatorUnstake: {
      readonly providerId: LocalRuntimeMassbitId;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isWithdrawUnbonded: boolean;
    readonly isClaimProvider: boolean;
    readonly asClaimProvider: {
      readonly providerId: LocalRuntimeMassbitId;
      readonly era: Compact<u32>;
    } & Struct;
    readonly isClaimDelegator: boolean;
    readonly asClaimDelegator: {
      readonly providerId: LocalRuntimeMassbitId;
    } & Struct;
    readonly isProviderWithdrawUnregistered: boolean;
    readonly asProviderWithdrawUnregistered: {
      readonly providerId: LocalRuntimeMassbitId;
    } & Struct;
    readonly isDelegatorWithdrawUnregistered: boolean;
    readonly asDelegatorWithdrawUnregistered: {
      readonly providerId: LocalRuntimeMassbitId;
    } & Struct;
    readonly type:
      | 'SetBlocksPerEra'
      | 'ProviderBondMore'
      | 'ProviderBondLess'
      | 'Delegate'
      | 'DelegatorUnstake'
      | 'WithdrawUnbonded'
      | 'ClaimProvider'
      | 'ClaimDelegator'
      | 'ProviderWithdrawUnregistered'
      | 'DelegatorWithdrawUnregistered';
  }

  /** @name PalletBlockRewardCall (197) */
  export interface PalletBlockRewardCall extends Enum {
    readonly isSetConfig: boolean;
    readonly asSetConfig: {
      readonly config: PalletBlockRewardDistributionConfig;
    } & Struct;
    readonly type: 'SetConfig';
  }

  /** @name PalletSudoError (198) */
  export interface PalletSudoError extends Enum {
    readonly isRequireSudo: boolean;
    readonly type: 'RequireSudo';
  }

  /** @name PalletUtilityError (199) */
  export interface PalletUtilityError extends Enum {
    readonly isTooManyCalls: boolean;
    readonly type: 'TooManyCalls';
  }

  /** @name PalletDapiProject (200) */
  export interface PalletDapiProject extends Struct {
    readonly consumer: AccountId32;
    readonly chainId: Bytes;
    readonly quota: u128;
    readonly usage: u128;
  }

  /** @name PalletDapiProvider (202) */
  export interface PalletDapiProvider extends Struct {
    readonly providerType: PalletDapiProviderType;
    readonly owner: AccountId32;
    readonly chainId: Bytes;
    readonly status: PalletDapiProviderStatus;
  }

  /** @name PalletDapiProviderStatus (203) */
  export interface PalletDapiProviderStatus extends Enum {
    readonly isRegistered: boolean;
    readonly isActive: boolean;
    readonly isInActive: boolean;
    readonly asInActive: {
      readonly reason: PalletDapiProviderDeactivateReason;
    } & Struct;
    readonly type: 'Registered' | 'Active' | 'InActive';
  }

  /** @name BTreeSetAccountId32 (204) */
  export interface BTreeSetAccountId32 extends Vec<AccountId32> {}

  /** @name BTreeSetBoundedVec (205) */
  export interface BTreeSetBoundedVec extends Vec<Bytes> {}

  /** @name PalletDapiError (207) */
  export interface PalletDapiError extends Enum {
    readonly isProjectExists: boolean;
    readonly isProjectDNE: boolean;
    readonly isAlreadyExist: boolean;
    readonly isInactiveProvider: boolean;
    readonly isBadChainId: boolean;
    readonly isProviderDNE: boolean;
    readonly isNotOwner: boolean;
    readonly isPermissionDenied: boolean;
    readonly isInvalidProviderStatus: boolean;
    readonly isChainIdDNE: boolean;
    readonly type:
      | 'ProjectExists'
      | 'ProjectDNE'
      | 'AlreadyExist'
      | 'InactiveProvider'
      | 'BadChainId'
      | 'ProviderDNE'
      | 'NotOwner'
      | 'PermissionDenied'
      | 'InvalidProviderStatus'
      | 'ChainIdDNE';
  }

  /** @name PalletDapiStakingEraInfo (208) */
  export interface PalletDapiStakingEraInfo extends Struct {
    readonly current: u32;
    readonly firstBlock: u32;
    readonly length: u32;
  }

  /** @name PalletDapiStakingEraMetadata (209) */
  export interface PalletDapiStakingEraMetadata extends Struct {
    readonly rewards: Compact<u128>;
    readonly staked: Compact<u128>;
  }

  /** @name PalletDapiStakingProviderMetadata (210) */
  export interface PalletDapiStakingProviderMetadata extends Struct {
    readonly owner: AccountId32;
    readonly status: PalletDapiStakingProviderStatus;
    readonly bondWithdrawn: bool;
  }

  /** @name PalletDapiStakingProviderStatus (211) */
  export interface PalletDapiStakingProviderStatus extends Enum {
    readonly isActive: boolean;
    readonly isInactive: boolean;
    readonly asInactive: u32;
    readonly type: 'Active' | 'Inactive';
  }

  /** @name PalletDapiStakingProviderEraMetadata (213) */
  export interface PalletDapiStakingProviderEraMetadata extends Struct {
    readonly bond: Compact<u128>;
    readonly total: Compact<u128>;
    readonly delegatorCount: Compact<u32>;
    readonly providerRewardClaimed: bool;
  }

  /** @name PalletDapiStakingDelegation (215) */
  export interface PalletDapiStakingDelegation extends Struct {
    readonly stakes: Vec<PalletDapiStakingEraStake>;
  }

  /** @name PalletDapiStakingEraStake (217) */
  export interface PalletDapiStakingEraStake extends Struct {
    readonly amount: Compact<u128>;
    readonly era: Compact<u32>;
  }

  /** @name PalletDapiStakingUnbondingMetadata (218) */
  export interface PalletDapiStakingUnbondingMetadata extends Struct {
    readonly unlockingChunks: Vec<PalletDapiStakingUnlockingChunk>;
  }

  /** @name PalletDapiStakingUnlockingChunk (220) */
  export interface PalletDapiStakingUnlockingChunk extends Struct {
    readonly amount: Compact<u128>;
    readonly unlockEra: Compact<u32>;
  }

  /** @name FrameSupportPalletId (221) */
  export interface FrameSupportPalletId extends U8aFixed {}

  /** @name PalletDapiStakingError (222) */
  export interface PalletDapiStakingError extends Enum {
    readonly isProviderDNE: boolean;
    readonly isInsufficientBond: boolean;
    readonly isStakingWithNoValue: boolean;
    readonly isMaxNumberOfStakersExceeded: boolean;
    readonly isNotOperatedProvider: boolean;
    readonly isNotStakedProvider: boolean;
    readonly isUnknownEra: boolean;
    readonly isUnexpectedDelegationInfoEra: boolean;
    readonly isTooManyEraStakeValues: boolean;
    readonly isUnclaimedRewardsRemaining: boolean;
    readonly isUnstakingWithNoValue: boolean;
    readonly isTooManyUnlockingChunks: boolean;
    readonly isNothingToWithdraw: boolean;
    readonly isEraOutOfBounds: boolean;
    readonly isNotOwnedProvider: boolean;
    readonly isAlreadyClaimedInThisEra: boolean;
    readonly isNotUnregisteredProvider: boolean;
    readonly isProviderExists: boolean;
    readonly isNoWritingSameValue: boolean;
    readonly type:
      | 'ProviderDNE'
      | 'InsufficientBond'
      | 'StakingWithNoValue'
      | 'MaxNumberOfStakersExceeded'
      | 'NotOperatedProvider'
      | 'NotStakedProvider'
      | 'UnknownEra'
      | 'UnexpectedDelegationInfoEra'
      | 'TooManyEraStakeValues'
      | 'UnclaimedRewardsRemaining'
      | 'UnstakingWithNoValue'
      | 'TooManyUnlockingChunks'
      | 'NothingToWithdraw'
      | 'EraOutOfBounds'
      | 'NotOwnedProvider'
      | 'AlreadyClaimedInThisEra'
      | 'NotUnregisteredProvider'
      | 'ProviderExists'
      | 'NoWritingSameValue';
  }

  /** @name PalletBlockRewardError (223) */
  export interface PalletBlockRewardError extends Enum {
    readonly isInvalidDistributionConfig: boolean;
    readonly type: 'InvalidDistributionConfig';
  }

  /** @name SpRuntimeMultiSignature (225) */
  export interface SpRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Signature;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Signature;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaSignature;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name SpCoreSr25519Signature (226) */
  export interface SpCoreSr25519Signature extends U8aFixed {}

  /** @name SpCoreEcdsaSignature (227) */
  export interface SpCoreEcdsaSignature extends U8aFixed {}

  /** @name FrameSystemExtensionsCheckNonce (235) */
  export interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

  /** @name PalletTransactionPaymentChargeTransactionPayment (237) */
  export interface PalletTransactionPaymentChargeTransactionPayment
    extends Compact<u128> {}

  /** @name PalletDapiPreValidateRegulatorCalls (238) */
  export type PalletDapiPreValidateRegulatorCalls = Null;

  /** @name LocalRuntimeRuntime (239) */
  export type LocalRuntimeRuntime = Null;
} // declare module
