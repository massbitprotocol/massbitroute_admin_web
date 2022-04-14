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
    data: 'PalletBalancesAccountData'
  },
  /**
   * Lookup5: pallet_balances::AccountData<Balance>
   **/
  PalletBalancesAccountData: {
    free: 'u128',
    reserved: 'u128',
    miscFrozen: 'u128',
    feeFrozen: 'u128'
  },
  /**
   * Lookup7: frame_support::weights::PerDispatchClass<T>
   **/
  FrameSupportWeightsPerDispatchClassU64: {
    normal: 'u64',
    operational: 'u64',
    mandatory: 'u64'
  },
  /**
   * Lookup11: sp_runtime::generic::digest::Digest
   **/
  SpRuntimeDigest: {
    logs: 'Vec<SpRuntimeDigestDigestItem>'
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
      RuntimeEnvironmentUpdated: 'Null'
    }
  },
  /**
   * Lookup16: frame_system::EventRecord<local_runtime::Event, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: 'FrameSystemPhase',
    event: 'Event',
    topics: 'Vec<H256>'
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
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup19: frame_support::weights::DispatchInfo
   **/
  FrameSupportWeightsDispatchInfo: {
    weight: 'u64',
    class: 'FrameSupportWeightsDispatchClass',
    paysFee: 'FrameSupportWeightsPays'
  },
  /**
   * Lookup20: frame_support::weights::DispatchClass
   **/
  FrameSupportWeightsDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory']
  },
  /**
   * Lookup21: frame_support::weights::Pays
   **/
  FrameSupportWeightsPays: {
    _enum: ['Yes', 'No']
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
      Arithmetic: 'SpRuntimeArithmeticError'
    }
  },
  /**
   * Lookup23: sp_runtime::ModuleError
   **/
  SpRuntimeModuleError: {
    index: 'u8',
    error: 'u8'
  },
  /**
   * Lookup24: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: ['NoFunds', 'WouldDie', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported']
  },
  /**
   * Lookup25: sp_runtime::ArithmeticError
   **/
  SpRuntimeArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero']
  },
  /**
   * Lookup26: pallet_grandpa::pallet::Event
   **/
  PalletGrandpaEvent: {
    _enum: {
      NewAuthorities: {
        authoritySet: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
      },
      Paused: 'Null',
      Resumed: 'Null'
    }
  },
  /**
   * Lookup29: sp_finality_grandpa::app::Public
   **/
  SpFinalityGrandpaAppPublic: 'SpCoreEd25519Public',
  /**
   * Lookup30: sp_core::ed25519::Public
   **/
  SpCoreEd25519Public: '[u8;32]',
  /**
   * Lookup31: pallet_balances::pallet::Event<T, I>
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
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup32: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup33: pallet_sudo::pallet::Event<T>
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
        sudoResult: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup37: pallet_utility::pallet::Event
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
        result: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup38: pallet_dapi::pallet::Event<T>
   **/
  PalletDapiEvent: {
    _enum: {
      ProjectRegistered: {
        projectId: 'LocalRuntimeMassbitId',
        consumer: 'AccountId32',
        chainId: 'Bytes',
        quota: 'u128',
      },
      ProjectDeposited: {
        projectId: 'LocalRuntimeMassbitId',
        quota: 'u128',
      },
      ProjectReachedQuota: {
        projectId: 'LocalRuntimeMassbitId',
      },
      ProviderRegistered: {
        providerId: 'LocalRuntimeMassbitId',
        providerType: 'PalletDapiProviderType',
        operator: 'AccountId32',
        chainId: 'Bytes',
      },
      ProviderActivated: {
        providerId: 'LocalRuntimeMassbitId',
        providerType: 'PalletDapiProviderType',
      },
      ProviderDeactivated: {
        providerId: 'LocalRuntimeMassbitId',
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
        accountId: 'AccountId32'
      }
    }
  },
  /**
   * Lookup39: local_runtime::MassbitId
   **/
  LocalRuntimeMassbitId: '[u8;36]',
  /**
   * Lookup41: pallet_dapi::types::ProviderType
   **/
  PalletDapiProviderType: {
    _enum: ['Gateway', 'Node']
  },
  /**
   * Lookup42: pallet_dapi::types::ProviderDeactivateReason
   **/
  PalletDapiProviderDeactivateReason: {
    _enum: {
      BadPerformance: {
        requests: 'u64',
        successRate: 'u32',
        averageLatency: 'u32',
      },
      OutOfSync: 'Null',
      UnRegistered: 'Null'
    }
  },
  /**
   * Lookup43: pallet_dapi_staking::pallet::pallet::Event<T>
   **/
  PalletDapiStakingPalletEvent: {
    _enum: {
      Stake: {
        staker: 'AccountId32',
        providerId: 'LocalRuntimeMassbitId',
        amount: 'u128',
      },
      Unstake: {
        staker: 'AccountId32',
        providerId: 'LocalRuntimeMassbitId',
        amount: 'u128',
      },
      WithdrawFromUnregistered: {
        who: 'AccountId32',
        providerId: 'LocalRuntimeMassbitId',
        amount: 'u128',
      },
      Withdrawn: {
        staker: 'AccountId32',
        amount: 'u128',
      },
      NewDapiStakingEra: {
        era: 'u32',
      },
      Reward: {
        who: 'AccountId32',
        providerId: 'LocalRuntimeMassbitId',
        era: 'u32',
        amount: 'u128',
      },
      ProviderUnregistered: 'LocalRuntimeMassbitId'
    }
  },
  /**
   * Lookup44: pallet_block_reward::pallet::Event<T>
   **/
  PalletBlockRewardEvent: {
    _enum: {
      DistributionConfigurationChanged: 'PalletBlockRewardRewardDistributionConfig'
    }
  },
  /**
   * Lookup45: pallet_block_reward::RewardDistributionConfig
   **/
  PalletBlockRewardRewardDistributionConfig: {
    providersPercent: 'Perbill',
    validatorsPercent: 'Perbill'
  },
  /**
   * Lookup47: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
   * Lookup51: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup55: frame_system::pallet::Call<T>
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
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup59: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'u64',
    maxBlock: 'u64',
    perClass: 'FrameSupportWeightsPerDispatchClassWeightsPerClass'
  },
  /**
   * Lookup60: frame_support::weights::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportWeightsPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass'
  },
  /**
   * Lookup61: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'u64',
    maxExtrinsic: 'Option<u64>',
    maxTotal: 'Option<u64>',
    reserved: 'Option<u64>'
  },
  /**
   * Lookup63: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportWeightsPerDispatchClassU32'
  },
  /**
   * Lookup64: frame_support::weights::PerDispatchClass<T>
   **/
  FrameSupportWeightsPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
   * Lookup65: frame_support::weights::RuntimeDbWeight
   **/
  FrameSupportWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup66: sp_version::RuntimeVersion
   **/
  SpVersionRuntimeVersion: {
    specName: 'Text',
    implName: 'Text',
    authoringVersion: 'u32',
    specVersion: 'u32',
    implVersion: 'u32',
    apis: 'Vec<([u8;8],u32)>',
    transactionVersion: 'u32',
    stateVersion: 'u8'
  },
  /**
   * Lookup72: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered']
  },
  /**
   * Lookup73: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup75: pallet_grandpa::StoredState<N>
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
        delay: 'u32'
      }
    }
  },
  /**
   * Lookup76: pallet_grandpa::StoredPendingChange<N, Limit>
   **/
  PalletGrandpaStoredPendingChange: {
    scheduledAt: 'u32',
    delay: 'u32',
    nextAuthorities: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
    forced: 'Option<u32>'
  },
  /**
   * Lookup79: pallet_grandpa::pallet::Call<T>
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
        bestFinalizedBlockNumber: 'u32'
      }
    }
  },
  /**
   * Lookup80: sp_finality_grandpa::EquivocationProof<primitive_types::H256, N>
   **/
  SpFinalityGrandpaEquivocationProof: {
    setId: 'u64',
    equivocation: 'SpFinalityGrandpaEquivocation'
  },
  /**
   * Lookup81: sp_finality_grandpa::Equivocation<primitive_types::H256, N>
   **/
  SpFinalityGrandpaEquivocation: {
    _enum: {
      Prevote: 'FinalityGrandpaEquivocationPrevote',
      Precommit: 'FinalityGrandpaEquivocationPrecommit'
    }
  },
  /**
   * Lookup82: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Prevote<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrevote: {
    roundNumber: 'u64',
    identity: 'SpFinalityGrandpaAppPublic',
    first: '(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)',
    second: '(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)'
  },
  /**
   * Lookup83: finality_grandpa::Prevote<primitive_types::H256, N>
   **/
  FinalityGrandpaPrevote: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup84: sp_finality_grandpa::app::Signature
   **/
  SpFinalityGrandpaAppSignature: 'SpCoreEd25519Signature',
  /**
   * Lookup85: sp_core::ed25519::Signature
   **/
  SpCoreEd25519Signature: '[u8;64]',
  /**
   * Lookup88: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Precommit<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrecommit: {
    roundNumber: 'u64',
    identity: 'SpFinalityGrandpaAppPublic',
    first: '(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)',
    second: '(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)'
  },
  /**
   * Lookup89: finality_grandpa::Precommit<primitive_types::H256, N>
   **/
  FinalityGrandpaPrecommit: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup91: sp_core::Void
   **/
  SpCoreVoid: 'Null',
  /**
   * Lookup92: pallet_grandpa::pallet::Error<T>
   **/
  PalletGrandpaError: {
    _enum: ['PauseFailed', 'ResumeFailed', 'ChangePending', 'TooSoon', 'InvalidKeyOwnershipProof', 'InvalidEquivocationProof', 'DuplicateOffenceReport']
  },
  /**
   * Lookup94: pallet_balances::BalanceLock<Balance>
   **/
  PalletBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u128',
    reasons: 'PalletBalancesReasons'
  },
  /**
   * Lookup95: pallet_balances::Reasons
   **/
  PalletBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All']
  },
  /**
   * Lookup98: pallet_balances::ReserveData<ReserveIdentifier, Balance>
   **/
  PalletBalancesReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup100: pallet_balances::Releases
   **/
  PalletBalancesReleases: {
    _enum: ['V1_0_0', 'V2_0_0']
  },
  /**
   * Lookup101: pallet_balances::pallet::Call<T, I>
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
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup106: pallet_balances::pallet::Error<T, I>
   **/
  PalletBalancesError: {
    _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'KeepAlive', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves']
  },
  /**
   * Lookup108: pallet_transaction_payment::Releases
   **/
  PalletTransactionPaymentReleases: {
    _enum: ['V1Ancient', 'V2']
  },
  /**
   * Lookup110: frame_support::weights::WeightToFeeCoefficient<Balance>
   **/
  FrameSupportWeightsWeightToFeeCoefficient: {
    coeffInteger: 'u128',
    coeffFrac: 'Perbill',
    negative: 'bool',
    degree: 'u8'
  },
  /**
   * Lookup111: pallet_sudo::pallet::Call<T>
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
        call: 'Call'
      }
    }
  },
  /**
   * Lookup113: pallet_utility::pallet::Call<T>
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
        asOrigin: 'LocalRuntimeOriginCaller',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup115: local_runtime::OriginCaller
   **/
  LocalRuntimeOriginCaller: {
    _enum: {
      system: 'FrameSupportDispatchRawOrigin',
      Void: 'SpCoreVoid'
    }
  },
  /**
   * Lookup116: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
   **/
  FrameSupportDispatchRawOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup117: pallet_dapi::pallet::Call<T>
   **/
  PalletDapiCall: {
    _enum: {
      register_project: {
        projectId: 'LocalRuntimeMassbitId',
        chainId: 'Bytes',
        deposit: 'Compact<u128>',
      },
      deposit_project: {
        projectId: 'LocalRuntimeMassbitId',
        deposit: 'Compact<u128>',
      },
      submit_project_usage: {
        projectId: 'LocalRuntimeMassbitId',
        usage: 'u128',
      },
      register_provider: {
        providerId: 'LocalRuntimeMassbitId',
        providerType: 'PalletDapiProviderType',
        operator: 'AccountId32',
        chainId: 'Bytes',
      },
      deposit_provider: {
        providerId: 'LocalRuntimeMassbitId',
        deposit: 'Compact<u128>',
      },
      unregister_provider: {
        providerId: 'LocalRuntimeMassbitId',
      },
      report_provider_offence: {
        providerId: 'LocalRuntimeMassbitId',
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
        chainId: 'Bytes'
      }
    }
  },
  /**
   * Lookup118: pallet_dapi_staking::pallet::pallet::Call<T>
   **/
  PalletDapiStakingPalletCall: {
    _enum: {
      withdraw_from_unregistered_staker: {
        providerId: 'LocalRuntimeMassbitId',
      },
      withdraw_from_unregistered_operator: {
        providerId: 'LocalRuntimeMassbitId',
      },
      stake: {
        providerId: 'LocalRuntimeMassbitId',
        value: 'Compact<u128>',
      },
      unstake: {
        providerId: 'LocalRuntimeMassbitId',
        value: 'Compact<u128>',
      },
      withdraw_unstaked: 'Null',
      claim_staker: {
        providerId: 'LocalRuntimeMassbitId',
      },
      claim_operator: {
        providerId: 'LocalRuntimeMassbitId',
        era: 'Compact<u32>',
      },
      force_new_era: 'Null'
    }
  },
  /**
   * Lookup119: pallet_block_reward::pallet::Call<T>
   **/
  PalletBlockRewardCall: {
    _enum: {
      set_configuration: {
        rewardDistroParams: 'PalletBlockRewardRewardDistributionConfig'
      }
    }
  },
  /**
   * Lookup120: pallet_sudo::pallet::Error<T>
   **/
  PalletSudoError: {
    _enum: ['RequireSudo']
  },
  /**
   * Lookup121: pallet_utility::pallet::Error<T>
   **/
  PalletUtilityError: {
    _enum: ['TooManyCalls']
  },
  /**
   * Lookup122: pallet_dapi::types::Project<sp_core::crypto::AccountId32, frame_support::storage::bounded_vec::BoundedVec<T, S>>
   **/
  PalletDapiProject: {
    consumer: 'AccountId32',
    chainId: 'Bytes',
    quota: 'u128',
    usage: 'u128'
  },
  /**
   * Lookup124: pallet_dapi::types::Provider<sp_core::crypto::AccountId32, frame_support::storage::bounded_vec::BoundedVec<T, S>>
   **/
  PalletDapiProvider: {
    providerType: 'PalletDapiProviderType',
    operator: 'AccountId32',
    chainId: 'Bytes',
    state: 'PalletDapiProviderState'
  },
  /**
   * Lookup125: pallet_dapi::types::ProviderState
   **/
  PalletDapiProviderState: {
    _enum: ['Registered', 'Active', 'InActive']
  },
  /**
   * Lookup126: BTreeSet<sp_core::crypto::AccountId32>
   **/
  BTreeSetAccountId32: 'Vec<AccountId32>',
  /**
   * Lookup128: BTreeSet<frame_support::storage::bounded_vec::BoundedVec<T, S>>
   **/
  BTreeSetBoundedVec: 'Vec<Bytes>',
  /**
   * Lookup130: pallet_dapi::pallet::Error<T>
   **/
  PalletDapiError: {
    _enum: ['AlreadyExist', 'InactiveProvider', 'BadChainId', 'NotExist', 'NotOwner', 'PermissionDenied', 'InvalidProviderState']
  },
  /**
   * Lookup131: pallet_dapi_staking::AccountLedger<Balance>
   **/
  PalletDapiStakingAccountLedger: {
    locked: 'Compact<u128>',
    unbondingInfo: 'PalletDapiStakingUnbondingInfo'
  },
  /**
   * Lookup132: pallet_dapi_staking::UnbondingInfo<Balance>
   **/
  PalletDapiStakingUnbondingInfo: {
    unlockingChunks: 'Vec<PalletDapiStakingUnlockingChunk>'
  },
  /**
   * Lookup134: pallet_dapi_staking::UnlockingChunk<Balance>
   **/
  PalletDapiStakingUnlockingChunk: {
    amount: 'Compact<u128>',
    unlockEra: 'Compact<u32>'
  },
  /**
   * Lookup135: pallet_dapi_staking::RewardInfo<Balance>
   **/
  PalletDapiStakingRewardInfo: {
    operators: 'Compact<u128>',
    stakers: 'Compact<u128>'
  },
  /**
   * Lookup136: pallet_dapi_staking::Forcing
   **/
  PalletDapiStakingForcing: {
    _enum: ['NotForcing', 'ForceNew']
  },
  /**
   * Lookup137: pallet_dapi_staking::ProviderInfo<sp_core::crypto::AccountId32>
   **/
  PalletDapiStakingProviderInfo: {
    operator: 'AccountId32',
    state: 'PalletDapiStakingProviderState',
    unreserved: 'bool'
  },
  /**
   * Lookup138: pallet_dapi_staking::ProviderState
   **/
  PalletDapiStakingProviderState: {
    _enum: {
      Registered: 'Null',
      Unregistered: 'u32'
    }
  },
  /**
   * Lookup139: pallet_dapi_staking::EraInfo<Balance>
   **/
  PalletDapiStakingEraInfo: {
    rewards: 'PalletDapiStakingRewardInfo',
    staked: 'Compact<u128>',
    locked: 'Compact<u128>'
  },
  /**
   * Lookup141: pallet_dapi_staking::ProviderStakeInfo<Balance>
   **/
  PalletDapiStakingProviderStakeInfo: {
    total: 'Compact<u128>',
    numberOfStakers: 'Compact<u32>',
    providerRewardClaimed: 'bool'
  },
  /**
   * Lookup143: pallet_dapi_staking::StakerInfo<Balance>
   **/
  PalletDapiStakingStakerInfo: {
    stakes: 'Vec<PalletDapiStakingEraStake>'
  },
  /**
   * Lookup145: pallet_dapi_staking::EraStake<Balance>
   **/
  PalletDapiStakingEraStake: {
    staked: 'Compact<u128>',
    era: 'Compact<u32>'
  },
  /**
   * Lookup146: frame_support::PalletId
   **/
  FrameSupportPalletId: '[u8;8]',
  /**
   * Lookup147: pallet_dapi_staking::pallet::pallet::Error<T>
   **/
  PalletDapiStakingPalletError: {
    _enum: ['InsufficientValue', 'StakingWithNoValue', 'MaxNumberOfStakersExceeded', 'NotOperatedProvider', 'NotStakedProvider', 'UnknownEraReward', 'UnexpectedStakeInfoEra', 'TooManyEraStakeValues', 'UnclaimedRewardsRemaining', 'UnstakingWithNoValue', 'TooManyUnlockingChunks', 'NothingToWithdraw', 'EraOutOfBounds', 'NotOwnedProvider', 'AlreadyClaimedInThisEra', 'NotUnregisteredProvider', 'AlreadyRegisteredProvider']
  },
  /**
   * Lookup148: pallet_block_reward::pallet::Error<T>
   **/
  PalletBlockRewardError: {
    _enum: ['InvalidDistributionConfiguration']
  },
  /**
   * Lookup150: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: 'SpCoreEd25519Signature',
      Sr25519: 'SpCoreSr25519Signature',
      Ecdsa: 'SpCoreEcdsaSignature'
    }
  },
  /**
   * Lookup151: sp_core::sr25519::Signature
   **/
  SpCoreSr25519Signature: '[u8;64]',
  /**
   * Lookup152: sp_core::ecdsa::Signature
   **/
  SpCoreEcdsaSignature: '[u8;65]',
  /**
   * Lookup155: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup156: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup157: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup160: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u32>',
  /**
   * Lookup161: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup162: pallet_transaction_payment::ChargeTransactionPayment<T>
   **/
  PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
  /**
   * Lookup163: local_runtime::Runtime
   **/
  LocalRuntimeRuntime: 'Null'
};
