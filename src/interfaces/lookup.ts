// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup3: frame_system::AccountInfo<Index, pallet_balances::AccountData<Balance>>
   **/
  FrameSystemAccountInfo: {
    nonce: 'u32',
    consumers: 'u32',
    providers: 'u32',
    sufficients: 'u32',
    data: 'PalletBalancesAccountData',
  },
  /**
   * Lookup5: pallet_balances::AccountData<Balance>
   **/
  PalletBalancesAccountData: {
    free: 'u128',
    reserved: 'u128',
    miscFrozen: 'u128',
    feeFrozen: 'u128',
  },
  /**
   * Lookup7: frame_support::weights::PerDispatchClass<T>
   **/
  FrameSupportWeightsPerDispatchClassU64: {
    normal: 'u64',
    operational: 'u64',
    mandatory: 'u64',
  },
  /**
   * Lookup11: sp_runtime::generic::digest::Digest
   **/
  SpRuntimeDigest: {
    logs: 'Vec<SpRuntimeDigestDigestItem>',
  },
  /**
   * Lookup13: sp_runtime::generic::digest::DigestItem
   **/
  SpRuntimeDigestDigestItem: {
    _enum: {
      Other: 'Bytes',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Consensus: '([u8;4],Bytes)',
      Seal: '([u8;4],Bytes)',
      PreRuntime: '([u8;4],Bytes)',
      __Unused7: 'Null',
      RuntimeEnvironmentUpdated: 'Null',
    },
  },
  /**
   * Lookup16: frame_system::EventRecord<devnet_runtime::Event, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: 'FrameSystemPhase',
    event: 'Event',
    topics: 'Vec<H256>',
  },
  /**
   * Lookup18: frame_system::pallet::Event<T>
   **/
  FrameSystemEvent: {
    _enum: {
      ExtrinsicSuccess: {
        dispatchInfo: 'FrameSupportWeightsDispatchInfo',
      },
      ExtrinsicFailed: {
        dispatchError: 'SpRuntimeDispatchError',
        dispatchInfo: 'FrameSupportWeightsDispatchInfo',
      },
      CodeUpdated: 'Null',
      NewAccount: {
        account: 'AccountId32',
      },
      KilledAccount: {
        account: 'AccountId32',
      },
      Remarked: {
        _alias: {
          hash_: 'hash',
        },
        sender: 'AccountId32',
        hash_: 'H256',
      },
    },
  },
  /**
   * Lookup19: frame_support::weights::DispatchInfo
   **/
  FrameSupportWeightsDispatchInfo: {
    weight: 'u64',
    class: 'FrameSupportWeightsDispatchClass',
    paysFee: 'FrameSupportWeightsPays',
  },
  /**
   * Lookup20: frame_support::weights::DispatchClass
   **/
  FrameSupportWeightsDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory'],
  },
  /**
   * Lookup21: frame_support::weights::Pays
   **/
  FrameSupportWeightsPays: {
    _enum: ['Yes', 'No'],
  },
  /**
   * Lookup22: sp_runtime::DispatchError
   **/
  SpRuntimeDispatchError: {
    _enum: {
      Other: 'Null',
      CannotLookup: 'Null',
      BadOrigin: 'Null',
      Module: 'SpRuntimeModuleError',
      ConsumerRemaining: 'Null',
      NoProviders: 'Null',
      TooManyConsumers: 'Null',
      Token: 'SpRuntimeTokenError',
      Arithmetic: 'SpRuntimeArithmeticError',
    },
  },
  /**
   * Lookup23: sp_runtime::ModuleError
   **/
  SpRuntimeModuleError: {
    index: 'u8',
    error: 'u8',
  },
  /**
   * Lookup24: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: [
      'NoFunds',
      'WouldDie',
      'BelowMinimum',
      'CannotCreate',
      'UnknownAsset',
      'Frozen',
      'Unsupported',
    ],
  },
  /**
   * Lookup25: sp_runtime::ArithmeticError
   **/
  SpRuntimeArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero'],
  },
  /**
   * Lookup26: pallet_validator_set::pallet::Event<T>
   **/
  PalletValidatorSetEvent: {
    _enum: {
      ValidatorAdditionInitiated: {
        validatorId: 'AccountId32',
      },
      ValidatorRemovalInitiated: {
        validatorId: 'AccountId32',
      },
    },
  },
  /**
   * Lookup27: pallet_session::pallet::Event
   **/
  PalletSessionEvent: {
    _enum: {
      NewSession: {
        sessionIndex: 'u32',
      },
    },
  },
  /**
   * Lookup28: pallet_im_online::pallet::Event<T>
   **/
  PalletImOnlineEvent: {
    _enum: {
      HeartbeatReceived: {
        authorityId: 'PalletImOnlineSr25519AppSr25519Public',
      },
      AllGood: 'Null',
      SomeOffline: {
        offline: 'Vec<(AccountId32,AccountId32)>',
      },
    },
  },
  /**
   * Lookup29: pallet_im_online::sr25519::app_sr25519::Public
   **/
  PalletImOnlineSr25519AppSr25519Public: 'SpCoreSr25519Public',
  /**
   * Lookup30: sp_core::sr25519::Public
   **/
  SpCoreSr25519Public: '[u8;32]',
  /**
   * Lookup33: pallet_grandpa::pallet::Event
   **/
  PalletGrandpaEvent: {
    _enum: {
      NewAuthorities: {
        authoritySet: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
      },
      Paused: 'Null',
      Resumed: 'Null',
    },
  },
  /**
   * Lookup36: sp_finality_grandpa::app::Public
   **/
  SpFinalityGrandpaAppPublic: 'SpCoreEd25519Public',
  /**
   * Lookup37: sp_core::ed25519::Public
   **/
  SpCoreEd25519Public: '[u8;32]',
  /**
   * Lookup38: pallet_balances::pallet::Event<T, I>
   **/
  PalletBalancesEvent: {
    _enum: {
      Endowed: {
        account: 'AccountId32',
        freeBalance: 'u128',
      },
      DustLost: {
        account: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      BalanceSet: {
        who: 'AccountId32',
        free: 'u128',
        reserved: 'u128',
      },
      Reserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        destinationStatus: 'FrameSupportTokensMiscBalanceStatus',
      },
      Deposit: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Withdraw: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        who: 'AccountId32',
        amount: 'u128',
      },
    },
  },
  /**
   * Lookup39: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved'],
  },
  /**
   * Lookup40: pallet_sudo::pallet::Event<T>
   **/
  PalletSudoEvent: {
    _enum: {
      Sudid: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>',
      },
      KeyChanged: {
        oldSudoer: 'Option<AccountId32>',
      },
      SudoAsDone: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>',
      },
    },
  },
  /**
   * Lookup44: pallet_utility::pallet::Event
   **/
  PalletUtilityEvent: {
    _enum: {
      BatchInterrupted: {
        index: 'u32',
        error: 'SpRuntimeDispatchError',
      },
      BatchCompleted: 'Null',
      ItemCompleted: 'Null',
      DispatchedAs: {
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
    },
  },
  /**
   * Lookup45: pallet_dapi::pallet::Event<T>
   **/
  PalletDapiEvent: {
    _enum: {
      ProjectRegistered: {
        projectId: 'DevnetRuntimeMassbitId',
        consumer: 'AccountId32',
        chainId: 'Bytes',
        quota: 'u128',
      },
      ProjectDeposited: {
        projectId: 'DevnetRuntimeMassbitId',
        newQuota: 'u128',
      },
      ProjectReachedQuota: {
        projectId: 'DevnetRuntimeMassbitId',
      },
      ProviderRegistered: {
        providerId: 'DevnetRuntimeMassbitId',
        providerType: 'PalletDapiProviderType',
        owner: 'AccountId32',
        chainId: 'Bytes',
      },
      ProviderActivated: {
        providerId: 'DevnetRuntimeMassbitId',
        providerType: 'PalletDapiProviderType',
      },
      ProviderDeactivated: {
        providerId: 'DevnetRuntimeMassbitId',
        providerType: 'PalletDapiProviderType',
        reason: 'PalletDapiProviderDeactivateReason',
      },
      ChainIdAdded: {
        chainId: 'Bytes',
      },
      ChainIdRemoved: {
        chainId: 'Bytes',
      },
      RegulatorAdded: {
        accountId: 'AccountId32',
      },
      RegulatorRemoved: {
        accountId: 'AccountId32',
      },
    },
  },
  /**
   * Lookup46: devnet_runtime::MassbitId
   **/
  DevnetRuntimeMassbitId: '[u8;36]',
  /**
   * Lookup48: pallet_dapi::types::ProviderType
   **/
  PalletDapiProviderType: {
    _enum: ['Gateway', 'Node'],
  },
  /**
   * Lookup49: pallet_dapi::types::ProviderDeactivateReason
   **/
  PalletDapiProviderDeactivateReason: {
    _enum: {
      BadPerformance: {
        requests: 'u64',
        successRate: 'u32',
        averageLatency: 'u32',
      },
      OutOfSync: 'Null',
      UnRegistered: 'Null',
    },
  },
  /**
   * Lookup50: pallet_dapi_staking::pallet::Event<T>
   **/
  PalletDapiStakingEvent: {
    _enum: {
      ProviderBondedMore: {
        providerId: 'DevnetRuntimeMassbitId',
        amount: 'u128',
      },
      ProviderBondedLess: {
        providerId: 'DevnetRuntimeMassbitId',
        amount: 'u128',
      },
      Delegated: {
        delegator: 'AccountId32',
        providerId: 'DevnetRuntimeMassbitId',
        amount: 'u128',
      },
      DelegatorUnstaked: {
        delegator: 'AccountId32',
        providerId: 'DevnetRuntimeMassbitId',
        amount: 'u128',
      },
      Withdrawn: {
        who: 'AccountId32',
        amount: 'u128',
      },
      NewEra: {
        era: 'u32',
        firstBlock: 'u32',
      },
      Payout: {
        who: 'AccountId32',
        providerId: 'DevnetRuntimeMassbitId',
        era: 'u32',
        amount: 'u128',
      },
      BlocksPerEraSet: {
        _alias: {
          new_: 'new',
        },
        currentRound: 'u32',
        firstBlock: 'u32',
        old: 'u32',
        new_: 'u32',
      },
    },
  },
  /**
   * Lookup51: pallet_block_reward::pallet::Event<T>
   **/
  PalletBlockRewardEvent: {
    _enum: {
      DistributionConfigChanged: 'PalletBlockRewardDistributionConfig',
    },
  },
  /**
   * Lookup52: pallet_block_reward::DistributionConfig
   **/
  PalletBlockRewardDistributionConfig: {
    providersPercent: 'Perbill',
    validatorsPercent: 'Perbill',
  },
  /**
   * Lookup54: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null',
    },
  },
  /**
   * Lookup58: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text',
  },
  /**
   * Lookup62: frame_system::pallet::Call<T>
   **/
  FrameSystemCall: {
    _enum: {
      fill_block: {
        ratio: 'Perbill',
      },
      remark: {
        remark: 'Bytes',
      },
      set_heap_pages: {
        pages: 'u64',
      },
      set_code: {
        code: 'Bytes',
      },
      set_code_without_checks: {
        code: 'Bytes',
      },
      set_storage: {
        items: 'Vec<(Bytes,Bytes)>',
      },
      kill_storage: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Vec<Bytes>',
      },
      kill_prefix: {
        prefix: 'Bytes',
        subkeys: 'u32',
      },
      remark_with_event: {
        remark: 'Bytes',
      },
    },
  },
  /**
   * Lookup66: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'u64',
    maxBlock: 'u64',
    perClass: 'FrameSupportWeightsPerDispatchClassWeightsPerClass',
  },
  /**
   * Lookup67: frame_support::weights::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportWeightsPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass',
  },
  /**
   * Lookup68: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'u64',
    maxExtrinsic: 'Option<u64>',
    maxTotal: 'Option<u64>',
    reserved: 'Option<u64>',
  },
  /**
   * Lookup70: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportWeightsPerDispatchClassU32',
  },
  /**
   * Lookup71: frame_support::weights::PerDispatchClass<T>
   **/
  FrameSupportWeightsPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32',
  },
  /**
   * Lookup72: frame_support::weights::RuntimeDbWeight
   **/
  FrameSupportWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64',
  },
  /**
   * Lookup73: sp_version::RuntimeVersion
   **/
  SpVersionRuntimeVersion: {
    specName: 'Text',
    implName: 'Text',
    authoringVersion: 'u32',
    specVersion: 'u32',
    implVersion: 'u32',
    apis: 'Vec<([u8;8],u32)>',
    transactionVersion: 'u32',
    stateVersion: 'u8',
  },
  /**
   * Lookup79: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: [
      'InvalidSpecName',
      'SpecVersionNeedsToIncrease',
      'FailedToExtractRuntimeVersion',
      'NonDefaultComposite',
      'NonZeroRefCount',
      'CallFiltered',
    ],
  },
  /**
   * Lookup80: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>',
      },
    },
  },
  /**
   * Lookup83: pallet_validator_set::pallet::Call<T>
   **/
  PalletValidatorSetCall: {
    _enum: {
      add_validator: {
        validatorId: 'AccountId32',
      },
      remove_validator: {
        validatorId: 'AccountId32',
      },
      add_validator_again: {
        validatorId: 'AccountId32',
      },
    },
  },
  /**
   * Lookup84: pallet_validator_set::pallet::Error<T>
   **/
  PalletValidatorSetError: {
    _enum: [
      'TooLowValidatorCount',
      'Duplicate',
      'ValidatorNotApproved',
      'BadOrigin',
    ],
  },
  /**
   * Lookup87: devnet_runtime::SessionKeys
   **/
  DevnetRuntimeSessionKeys: {
    aura: 'SpConsensusAuraSr25519AppSr25519Public',
    grandpa: 'SpFinalityGrandpaAppPublic',
    imOnline: 'PalletImOnlineSr25519AppSr25519Public',
  },
  /**
   * Lookup88: sp_consensus_aura::sr25519::app_sr25519::Public
   **/
  SpConsensusAuraSr25519AppSr25519Public: 'SpCoreSr25519Public',
  /**
   * Lookup91: sp_core::crypto::KeyTypeId
   **/
  SpCoreCryptoKeyTypeId: '[u8;4]',
  /**
   * Lookup92: pallet_session::pallet::Call<T>
   **/
  PalletSessionCall: {
    _enum: {
      set_keys: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'DevnetRuntimeSessionKeys',
        proof: 'Bytes',
      },
      purge_keys: 'Null',
    },
  },
  /**
   * Lookup93: pallet_session::pallet::Error<T>
   **/
  PalletSessionError: {
    _enum: [
      'InvalidProof',
      'NoAssociatedValidatorId',
      'DuplicatedKey',
      'NoKeys',
      'NoAccount',
    ],
  },
  /**
   * Lookup97: pallet_im_online::BoundedOpaqueNetworkState<PeerIdEncodingLimit, MultiAddrEncodingLimit, AddressesLimit>
   **/
  PalletImOnlineBoundedOpaqueNetworkState: {
    peerId: 'Bytes',
    externalAddresses: 'Vec<Bytes>',
  },
  /**
   * Lookup102: pallet_im_online::pallet::Call<T>
   **/
  PalletImOnlineCall: {
    _enum: {
      heartbeat: {
        heartbeat: 'PalletImOnlineHeartbeat',
        signature: 'PalletImOnlineSr25519AppSr25519Signature',
      },
    },
  },
  /**
   * Lookup103: pallet_im_online::Heartbeat<BlockNumber>
   **/
  PalletImOnlineHeartbeat: {
    blockNumber: 'u32',
    networkState: 'SpCoreOffchainOpaqueNetworkState',
    sessionIndex: 'u32',
    authorityIndex: 'u32',
    validatorsLen: 'u32',
  },
  /**
   * Lookup104: sp_core::offchain::OpaqueNetworkState
   **/
  SpCoreOffchainOpaqueNetworkState: {
    peerId: 'Bytes',
    externalAddresses: 'Vec<Bytes>',
  },
  /**
   * Lookup108: pallet_im_online::sr25519::app_sr25519::Signature
   **/
  PalletImOnlineSr25519AppSr25519Signature: 'SpCoreSr25519Signature',
  /**
   * Lookup109: sp_core::sr25519::Signature
   **/
  SpCoreSr25519Signature: '[u8;64]',
  /**
   * Lookup111: pallet_im_online::pallet::Error<T>
   **/
  PalletImOnlineError: {
    _enum: ['InvalidKey', 'DuplicatedHeartbeat'],
  },
  /**
   * Lookup112: pallet_grandpa::StoredState<N>
   **/
  PalletGrandpaStoredState: {
    _enum: {
      Live: 'Null',
      PendingPause: {
        scheduledAt: 'u32',
        delay: 'u32',
      },
      Paused: 'Null',
      PendingResume: {
        scheduledAt: 'u32',
        delay: 'u32',
      },
    },
  },
  /**
   * Lookup113: pallet_grandpa::StoredPendingChange<N, Limit>
   **/
  PalletGrandpaStoredPendingChange: {
    scheduledAt: 'u32',
    delay: 'u32',
    nextAuthorities: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
    forced: 'Option<u32>',
  },
  /**
   * Lookup116: pallet_grandpa::pallet::Call<T>
   **/
  PalletGrandpaCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'SpFinalityGrandpaEquivocationProof',
        keyOwnerProof: 'SpCoreVoid',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'SpFinalityGrandpaEquivocationProof',
        keyOwnerProof: 'SpCoreVoid',
      },
      note_stalled: {
        delay: 'u32',
        bestFinalizedBlockNumber: 'u32',
      },
    },
  },
  /**
   * Lookup117: sp_finality_grandpa::EquivocationProof<primitive_types::H256, N>
   **/
  SpFinalityGrandpaEquivocationProof: {
    setId: 'u64',
    equivocation: 'SpFinalityGrandpaEquivocation',
  },
  /**
   * Lookup118: sp_finality_grandpa::Equivocation<primitive_types::H256, N>
   **/
  SpFinalityGrandpaEquivocation: {
    _enum: {
      Prevote: 'FinalityGrandpaEquivocationPrevote',
      Precommit: 'FinalityGrandpaEquivocationPrecommit',
    },
  },
  /**
   * Lookup119: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Prevote<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrevote: {
    roundNumber: 'u64',
    identity: 'SpFinalityGrandpaAppPublic',
    first: '(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)',
    second: '(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)',
  },
  /**
   * Lookup120: finality_grandpa::Prevote<primitive_types::H256, N>
   **/
  FinalityGrandpaPrevote: {
    targetHash: 'H256',
    targetNumber: 'u32',
  },
  /**
   * Lookup121: sp_finality_grandpa::app::Signature
   **/
  SpFinalityGrandpaAppSignature: 'SpCoreEd25519Signature',
  /**
   * Lookup122: sp_core::ed25519::Signature
   **/
  SpCoreEd25519Signature: '[u8;64]',
  /**
   * Lookup124: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Precommit<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrecommit: {
    roundNumber: 'u64',
    identity: 'SpFinalityGrandpaAppPublic',
    first: '(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)',
    second: '(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)',
  },
  /**
   * Lookup125: finality_grandpa::Precommit<primitive_types::H256, N>
   **/
  FinalityGrandpaPrecommit: {
    targetHash: 'H256',
    targetNumber: 'u32',
  },
  /**
   * Lookup127: sp_core::Void
   **/
  SpCoreVoid: 'Null',
  /**
   * Lookup128: pallet_grandpa::pallet::Error<T>
   **/
  PalletGrandpaError: {
    _enum: [
      'PauseFailed',
      'ResumeFailed',
      'ChangePending',
      'TooSoon',
      'InvalidKeyOwnershipProof',
      'InvalidEquivocationProof',
      'DuplicateOffenceReport',
    ],
  },
  /**
   * Lookup130: pallet_balances::BalanceLock<Balance>
   **/
  PalletBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u128',
    reasons: 'PalletBalancesReasons',
  },
  /**
   * Lookup131: pallet_balances::Reasons
   **/
  PalletBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All'],
  },
  /**
   * Lookup134: pallet_balances::ReserveData<ReserveIdentifier, Balance>
   **/
  PalletBalancesReserveData: {
    id: '[u8;8]',
    amount: 'u128',
  },
  /**
   * Lookup136: pallet_balances::Releases
   **/
  PalletBalancesReleases: {
    _enum: ['V1_0_0', 'V2_0_0'],
  },
  /**
   * Lookup137: pallet_balances::pallet::Call<T, I>
   **/
  PalletBalancesCall: {
    _enum: {
      transfer: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      set_balance: {
        who: 'MultiAddress',
        newFree: 'Compact<u128>',
        newReserved: 'Compact<u128>',
      },
      force_transfer: {
        source: 'MultiAddress',
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_keep_alive: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_all: {
        dest: 'MultiAddress',
        keepAlive: 'bool',
      },
      force_unreserve: {
        who: 'MultiAddress',
        amount: 'u128',
      },
    },
  },
  /**
   * Lookup142: pallet_balances::pallet::Error<T, I>
   **/
  PalletBalancesError: {
    _enum: [
      'VestingBalance',
      'LiquidityRestrictions',
      'InsufficientBalance',
      'ExistentialDeposit',
      'KeepAlive',
      'ExistingVestingSchedule',
      'DeadAccount',
      'TooManyReserves',
    ],
  },
  /**
   * Lookup144: pallet_transaction_payment::Releases
   **/
  PalletTransactionPaymentReleases: {
    _enum: ['V1Ancient', 'V2'],
  },
  /**
   * Lookup146: frame_support::weights::WeightToFeeCoefficient<Balance>
   **/
  FrameSupportWeightsWeightToFeeCoefficient: {
    coeffInteger: 'u128',
    coeffFrac: 'Perbill',
    negative: 'bool',
    degree: 'u8',
  },
  /**
   * Lookup147: pallet_sudo::pallet::Call<T>
   **/
  PalletSudoCall: {
    _enum: {
      sudo: {
        call: 'Call',
      },
      sudo_unchecked_weight: {
        call: 'Call',
        weight: 'u64',
      },
      set_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
      },
      sudo_as: {
        who: 'MultiAddress',
        call: 'Call',
      },
    },
  },
  /**
   * Lookup149: pallet_utility::pallet::Call<T>
   **/
  PalletUtilityCall: {
    _enum: {
      batch: {
        calls: 'Vec<Call>',
      },
      as_derivative: {
        index: 'u16',
        call: 'Call',
      },
      batch_all: {
        calls: 'Vec<Call>',
      },
      dispatch_as: {
        asOrigin: 'DevnetRuntimeOriginCaller',
        call: 'Call',
      },
    },
  },
  /**
   * Lookup151: devnet_runtime::OriginCaller
   **/
  DevnetRuntimeOriginCaller: {
    _enum: {
      system: 'FrameSupportDispatchRawOrigin',
      Void: 'SpCoreVoid',
    },
  },
  /**
   * Lookup152: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
   **/
  FrameSupportDispatchRawOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32',
      None: 'Null',
    },
  },
  /**
   * Lookup153: pallet_dapi::pallet::Call<T>
   **/
  PalletDapiCall: {
    _enum: {
      register_project: {
        projectId: 'DevnetRuntimeMassbitId',
        chainId: 'Bytes',
        deposit: 'Compact<u128>',
      },
      deposit_project: {
        projectId: 'DevnetRuntimeMassbitId',
        deposit: 'Compact<u128>',
      },
      submit_project_usage: {
        projectId: 'DevnetRuntimeMassbitId',
        usage: 'u128',
      },
      register_provider: {
        providerId: 'DevnetRuntimeMassbitId',
        providerType: 'PalletDapiProviderType',
        owner: 'AccountId32',
        chainId: 'Bytes',
      },
      deposit_provider: {
        providerId: 'DevnetRuntimeMassbitId',
        deposit: 'Compact<u128>',
      },
      unregister_provider: {
        providerId: 'DevnetRuntimeMassbitId',
      },
      report_provider_offence: {
        providerId: 'DevnetRuntimeMassbitId',
        reason: 'PalletDapiProviderDeactivateReason',
      },
      add_regulator: {
        accountId: 'AccountId32',
      },
      remove_regulator: {
        accountId: 'AccountId32',
      },
      add_chain_id: {
        chainId: 'Bytes',
      },
      remove_chain_id: {
        chainId: 'Bytes',
      },
    },
  },
  /**
   * Lookup154: pallet_dapi_staking::pallet::Call<T>
   **/
  PalletDapiStakingCall: {
    _enum: {
      set_blocks_per_era: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      provider_bond_more: {
        providerId: 'DevnetRuntimeMassbitId',
        amount: 'Compact<u128>',
      },
      provider_bond_less: {
        providerId: 'DevnetRuntimeMassbitId',
        amount: 'Compact<u128>',
      },
      delegate: {
        providerId: 'DevnetRuntimeMassbitId',
        amount: 'Compact<u128>',
      },
      delegator_unstake: {
        providerId: 'DevnetRuntimeMassbitId',
        amount: 'Compact<u128>',
      },
      withdraw_unbonded: 'Null',
      claim_provider: {
        providerId: 'DevnetRuntimeMassbitId',
        era: 'Compact<u32>',
      },
      claim_delegator: {
        providerId: 'DevnetRuntimeMassbitId',
      },
      provider_withdraw_unregistered: {
        providerId: 'DevnetRuntimeMassbitId',
      },
      delegator_withdraw_unregistered: {
        providerId: 'DevnetRuntimeMassbitId',
      },
    },
  },
  /**
   * Lookup155: pallet_block_reward::pallet::Call<T>
   **/
  PalletBlockRewardCall: {
    _enum: {
      set_config: {
        config: 'PalletBlockRewardDistributionConfig',
      },
    },
  },
  /**
   * Lookup156: pallet_sudo::pallet::Error<T>
   **/
  PalletSudoError: {
    _enum: ['RequireSudo'],
  },
  /**
   * Lookup157: pallet_utility::pallet::Error<T>
   **/
  PalletUtilityError: {
    _enum: ['TooManyCalls'],
  },
  /**
   * Lookup158: pallet_dapi::types::Project<sp_core::crypto::AccountId32, frame_support::storage::bounded_vec::BoundedVec<T, S>>
   **/
  PalletDapiProject: {
    consumer: 'AccountId32',
    chainId: 'Bytes',
    quota: 'u128',
    usage: 'u128',
  },
  /**
   * Lookup160: pallet_dapi::types::Provider<sp_core::crypto::AccountId32, frame_support::storage::bounded_vec::BoundedVec<T, S>>
   **/
  PalletDapiProvider: {
    providerType: 'PalletDapiProviderType',
    owner: 'AccountId32',
    chainId: 'Bytes',
    status: 'PalletDapiProviderStatus',
  },
  /**
   * Lookup161: pallet_dapi::types::ProviderStatus
   **/
  PalletDapiProviderStatus: {
    _enum: {
      Registered: 'Null',
      Active: 'Null',
      InActive: {
        reason: 'PalletDapiProviderDeactivateReason',
      },
    },
  },
  /**
   * Lookup162: BTreeSet<sp_core::crypto::AccountId32>
   **/
  BTreeSetAccountId32: 'Vec<AccountId32>',
  /**
   * Lookup163: BTreeSet<frame_support::storage::bounded_vec::BoundedVec<T, S>>
   **/
  BTreeSetBoundedVec: 'Vec<Bytes>',
  /**
   * Lookup165: pallet_dapi::pallet::Error<T>
   **/
  PalletDapiError: {
    _enum: [
      'ProjectExists',
      'ProjectDNE',
      'AlreadyExist',
      'InactiveProvider',
      'BadChainId',
      'ProviderDNE',
      'NotOwner',
      'PermissionDenied',
      'InvalidProviderStatus',
      'ChainIdDNE',
    ],
  },
  /**
   * Lookup166: pallet_dapi_staking::types::EraInfo<BlockNumber>
   **/
  PalletDapiStakingEraInfo: {
    current: 'u32',
    firstBlock: 'u32',
    length: 'u32',
  },
  /**
   * Lookup167: pallet_dapi_staking::types::EraMetadata<Balance>
   **/
  PalletDapiStakingEraMetadata: {
    rewards: 'Compact<u128>',
    staked: 'Compact<u128>',
  },
  /**
   * Lookup168: pallet_dapi_staking::types::ProviderMetadata<sp_core::crypto::AccountId32>
   **/
  PalletDapiStakingProviderMetadata: {
    owner: 'AccountId32',
    status: 'PalletDapiStakingProviderStatus',
    bondWithdrawn: 'bool',
  },
  /**
   * Lookup169: pallet_dapi_staking::types::ProviderStatus
   **/
  PalletDapiStakingProviderStatus: {
    _enum: {
      Active: 'Null',
      Inactive: 'u32',
    },
  },
  /**
   * Lookup171: pallet_dapi_staking::types::ProviderEraMetadata<Balance>
   **/
  PalletDapiStakingProviderEraMetadata: {
    bond: 'Compact<u128>',
    total: 'Compact<u128>',
    delegatorCount: 'Compact<u32>',
    providerRewardClaimed: 'bool',
  },
  /**
   * Lookup173: pallet_dapi_staking::types::Delegation<Balance>
   **/
  PalletDapiStakingDelegation: {
    stakes: 'Vec<PalletDapiStakingEraStake>',
  },
  /**
   * Lookup175: pallet_dapi_staking::types::EraStake<Balance>
   **/
  PalletDapiStakingEraStake: {
    amount: 'Compact<u128>',
    era: 'Compact<u32>',
  },
  /**
   * Lookup176: pallet_dapi_staking::types::UnbondingMetadata<Balance>
   **/
  PalletDapiStakingUnbondingMetadata: {
    unlockingChunks: 'Vec<PalletDapiStakingUnlockingChunk>',
  },
  /**
   * Lookup178: pallet_dapi_staking::types::UnlockingChunk<Balance>
   **/
  PalletDapiStakingUnlockingChunk: {
    amount: 'Compact<u128>',
    unlockEra: 'Compact<u32>',
  },
  /**
   * Lookup179: frame_support::PalletId
   **/
  FrameSupportPalletId: '[u8;8]',
  /**
   * Lookup180: pallet_dapi_staking::pallet::Error<T>
   **/
  PalletDapiStakingError: {
    _enum: [
      'ProviderDNE',
      'InsufficientBond',
      'StakingWithNoValue',
      'MaxNumberOfStakersExceeded',
      'NotOperatedProvider',
      'NotStakedProvider',
      'UnknownEra',
      'UnexpectedDelegationInfoEra',
      'TooManyEraStakeValues',
      'UnclaimedRewardsRemaining',
      'UnstakingWithNoValue',
      'TooManyUnlockingChunks',
      'NothingToWithdraw',
      'EraOutOfBounds',
      'NotOwnedProvider',
      'AlreadyClaimedInThisEra',
      'NotUnregisteredProvider',
      'ProviderExists',
      'NoWritingSameValue',
    ],
  },
  /**
   * Lookup181: pallet_block_reward::pallet::Error<T>
   **/
  PalletBlockRewardError: {
    _enum: ['InvalidDistributionConfig'],
  },
  /**
   * Lookup183: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: 'SpCoreEd25519Signature',
      Sr25519: 'SpCoreSr25519Signature',
      Ecdsa: 'SpCoreEcdsaSignature',
    },
  },
  /**
   * Lookup184: sp_core::ecdsa::Signature
   **/
  SpCoreEcdsaSignature: '[u8;65]',
  /**
   * Lookup187: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup188: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup189: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup192: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u32>',
  /**
   * Lookup193: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup194: pallet_transaction_payment::ChargeTransactionPayment<T>
   **/
  PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
  /**
   * Lookup195: pallet_dapi::PreValidateRegulatorCalls<T>
   **/
  PalletDapiPreValidateRegulatorCalls: 'Null',
  /**
   * Lookup196: devnet_runtime::Runtime
   **/
  DevnetRuntimeRuntime: 'Null',
};
