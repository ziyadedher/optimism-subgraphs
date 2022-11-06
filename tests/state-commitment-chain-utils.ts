import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  StateBatchAppended,
  StateBatchDeleted
} from "../generated/StateCommitmentChain/StateCommitmentChain"

export function createStateBatchAppendedEvent(
  _batchIndex: BigInt,
  _batchRoot: Bytes,
  _batchSize: BigInt,
  _prevTotalElements: BigInt,
  _extraData: Bytes
): StateBatchAppended {
  let stateBatchAppendedEvent = changetype<StateBatchAppended>(newMockEvent())

  stateBatchAppendedEvent.parameters = new Array()

  stateBatchAppendedEvent.parameters.push(
    new ethereum.EventParam(
      "_batchIndex",
      ethereum.Value.fromUnsignedBigInt(_batchIndex)
    )
  )
  stateBatchAppendedEvent.parameters.push(
    new ethereum.EventParam(
      "_batchRoot",
      ethereum.Value.fromFixedBytes(_batchRoot)
    )
  )
  stateBatchAppendedEvent.parameters.push(
    new ethereum.EventParam(
      "_batchSize",
      ethereum.Value.fromUnsignedBigInt(_batchSize)
    )
  )
  stateBatchAppendedEvent.parameters.push(
    new ethereum.EventParam(
      "_prevTotalElements",
      ethereum.Value.fromUnsignedBigInt(_prevTotalElements)
    )
  )
  stateBatchAppendedEvent.parameters.push(
    new ethereum.EventParam("_extraData", ethereum.Value.fromBytes(_extraData))
  )

  return stateBatchAppendedEvent
}

export function createStateBatchDeletedEvent(
  _batchIndex: BigInt,
  _batchRoot: Bytes
): StateBatchDeleted {
  let stateBatchDeletedEvent = changetype<StateBatchDeleted>(newMockEvent())

  stateBatchDeletedEvent.parameters = new Array()

  stateBatchDeletedEvent.parameters.push(
    new ethereum.EventParam(
      "_batchIndex",
      ethereum.Value.fromUnsignedBigInt(_batchIndex)
    )
  )
  stateBatchDeletedEvent.parameters.push(
    new ethereum.EventParam(
      "_batchRoot",
      ethereum.Value.fromFixedBytes(_batchRoot)
    )
  )

  return stateBatchDeletedEvent
}
