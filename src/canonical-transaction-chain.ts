import {
  L2GasParamsUpdated as L2GasParamsUpdatedEvent,
  QueueBatchAppended as QueueBatchAppendedEvent,
  SequencerBatchAppended as SequencerBatchAppendedEvent,
  TransactionBatchAppended as TransactionBatchAppendedEvent,
  TransactionEnqueued as TransactionEnqueuedEvent
} from "../generated/CanonicalTransactionChain/CanonicalTransactionChain"
import {
  L2GasParamsUpdated,
  QueueBatchAppended,
  SequencerBatchAppended,
  TransactionBatchAppended,
  TransactionEnqueued
} from "../generated/schema"

export function handleL2GasParamsUpdated(event: L2GasParamsUpdatedEvent): void {
  let entity = new L2GasParamsUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.l2GasDiscountDivisor = event.params.l2GasDiscountDivisor
  entity.enqueueGasCost = event.params.enqueueGasCost
  entity.enqueueL2GasPrepaid = event.params.enqueueL2GasPrepaid
  entity.save()
}

export function handleQueueBatchAppended(event: QueueBatchAppendedEvent): void {
  let entity = new QueueBatchAppended(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._startingQueueIndex = event.params._startingQueueIndex
  entity._numQueueElements = event.params._numQueueElements
  entity._totalElements = event.params._totalElements
  entity.save()
}

export function handleSequencerBatchAppended(
  event: SequencerBatchAppendedEvent
): void {
  let entity = new SequencerBatchAppended(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._startingQueueIndex = event.params._startingQueueIndex
  entity._numQueueElements = event.params._numQueueElements
  entity._totalElements = event.params._totalElements
  entity.save()
}

export function handleTransactionBatchAppended(
  event: TransactionBatchAppendedEvent
): void {
  let entity = new TransactionBatchAppended(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._batchIndex = event.params._batchIndex
  entity._batchRoot = event.params._batchRoot
  entity._batchSize = event.params._batchSize
  entity._prevTotalElements = event.params._prevTotalElements
  entity._extraData = event.params._extraData
  entity.save()
}

export function handleTransactionEnqueued(
  event: TransactionEnqueuedEvent
): void {
  let entity = new TransactionEnqueued(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._l1TxOrigin = event.params._l1TxOrigin
  entity._target = event.params._target
  entity._gasLimit = event.params._gasLimit
  entity._data = event.params._data
  entity._queueIndex = event.params._queueIndex
  entity._timestamp = event.params._timestamp
  entity.save()
}
