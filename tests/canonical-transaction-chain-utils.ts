import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Bytes, Address } from "@graphprotocol/graph-ts"
import {
  L2GasParamsUpdated,
  QueueBatchAppended,
  SequencerBatchAppended,
  TransactionBatchAppended,
  TransactionEnqueued
} from "../generated/CanonicalTransactionChain/CanonicalTransactionChain"

export function createL2GasParamsUpdatedEvent(
  l2GasDiscountDivisor: BigInt,
  enqueueGasCost: BigInt,
  enqueueL2GasPrepaid: BigInt
): L2GasParamsUpdated {
  let l2GasParamsUpdatedEvent = changetype<L2GasParamsUpdated>(newMockEvent())

  l2GasParamsUpdatedEvent.parameters = new Array()

  l2GasParamsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "l2GasDiscountDivisor",
      ethereum.Value.fromUnsignedBigInt(l2GasDiscountDivisor)
    )
  )
  l2GasParamsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "enqueueGasCost",
      ethereum.Value.fromUnsignedBigInt(enqueueGasCost)
    )
  )
  l2GasParamsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "enqueueL2GasPrepaid",
      ethereum.Value.fromUnsignedBigInt(enqueueL2GasPrepaid)
    )
  )

  return l2GasParamsUpdatedEvent
}

export function createQueueBatchAppendedEvent(
  _startingQueueIndex: BigInt,
  _numQueueElements: BigInt,
  _totalElements: BigInt
): QueueBatchAppended {
  let queueBatchAppendedEvent = changetype<QueueBatchAppended>(newMockEvent())

  queueBatchAppendedEvent.parameters = new Array()

  queueBatchAppendedEvent.parameters.push(
    new ethereum.EventParam(
      "_startingQueueIndex",
      ethereum.Value.fromUnsignedBigInt(_startingQueueIndex)
    )
  )
  queueBatchAppendedEvent.parameters.push(
    new ethereum.EventParam(
      "_numQueueElements",
      ethereum.Value.fromUnsignedBigInt(_numQueueElements)
    )
  )
  queueBatchAppendedEvent.parameters.push(
    new ethereum.EventParam(
      "_totalElements",
      ethereum.Value.fromUnsignedBigInt(_totalElements)
    )
  )

  return queueBatchAppendedEvent
}

export function createSequencerBatchAppendedEvent(
  _startingQueueIndex: BigInt,
  _numQueueElements: BigInt,
  _totalElements: BigInt
): SequencerBatchAppended {
  let sequencerBatchAppendedEvent = changetype<SequencerBatchAppended>(
    newMockEvent()
  )

  sequencerBatchAppendedEvent.parameters = new Array()

  sequencerBatchAppendedEvent.parameters.push(
    new ethereum.EventParam(
      "_startingQueueIndex",
      ethereum.Value.fromUnsignedBigInt(_startingQueueIndex)
    )
  )
  sequencerBatchAppendedEvent.parameters.push(
    new ethereum.EventParam(
      "_numQueueElements",
      ethereum.Value.fromUnsignedBigInt(_numQueueElements)
    )
  )
  sequencerBatchAppendedEvent.parameters.push(
    new ethereum.EventParam(
      "_totalElements",
      ethereum.Value.fromUnsignedBigInt(_totalElements)
    )
  )

  return sequencerBatchAppendedEvent
}

export function createTransactionBatchAppendedEvent(
  _batchIndex: BigInt,
  _batchRoot: Bytes,
  _batchSize: BigInt,
  _prevTotalElements: BigInt,
  _extraData: Bytes
): TransactionBatchAppended {
  let transactionBatchAppendedEvent = changetype<TransactionBatchAppended>(
    newMockEvent()
  )

  transactionBatchAppendedEvent.parameters = new Array()

  transactionBatchAppendedEvent.parameters.push(
    new ethereum.EventParam(
      "_batchIndex",
      ethereum.Value.fromUnsignedBigInt(_batchIndex)
    )
  )
  transactionBatchAppendedEvent.parameters.push(
    new ethereum.EventParam(
      "_batchRoot",
      ethereum.Value.fromFixedBytes(_batchRoot)
    )
  )
  transactionBatchAppendedEvent.parameters.push(
    new ethereum.EventParam(
      "_batchSize",
      ethereum.Value.fromUnsignedBigInt(_batchSize)
    )
  )
  transactionBatchAppendedEvent.parameters.push(
    new ethereum.EventParam(
      "_prevTotalElements",
      ethereum.Value.fromUnsignedBigInt(_prevTotalElements)
    )
  )
  transactionBatchAppendedEvent.parameters.push(
    new ethereum.EventParam("_extraData", ethereum.Value.fromBytes(_extraData))
  )

  return transactionBatchAppendedEvent
}

export function createTransactionEnqueuedEvent(
  _l1TxOrigin: Address,
  _target: Address,
  _gasLimit: BigInt,
  _data: Bytes,
  _queueIndex: BigInt,
  _timestamp: BigInt
): TransactionEnqueued {
  let transactionEnqueuedEvent = changetype<TransactionEnqueued>(newMockEvent())

  transactionEnqueuedEvent.parameters = new Array()

  transactionEnqueuedEvent.parameters.push(
    new ethereum.EventParam(
      "_l1TxOrigin",
      ethereum.Value.fromAddress(_l1TxOrigin)
    )
  )
  transactionEnqueuedEvent.parameters.push(
    new ethereum.EventParam("_target", ethereum.Value.fromAddress(_target))
  )
  transactionEnqueuedEvent.parameters.push(
    new ethereum.EventParam(
      "_gasLimit",
      ethereum.Value.fromUnsignedBigInt(_gasLimit)
    )
  )
  transactionEnqueuedEvent.parameters.push(
    new ethereum.EventParam("_data", ethereum.Value.fromBytes(_data))
  )
  transactionEnqueuedEvent.parameters.push(
    new ethereum.EventParam(
      "_queueIndex",
      ethereum.Value.fromUnsignedBigInt(_queueIndex)
    )
  )
  transactionEnqueuedEvent.parameters.push(
    new ethereum.EventParam(
      "_timestamp",
      ethereum.Value.fromUnsignedBigInt(_timestamp)
    )
  )

  return transactionEnqueuedEvent
}
