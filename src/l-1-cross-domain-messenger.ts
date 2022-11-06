import {
  FailedRelayedMessage as FailedRelayedMessageEvent,
  MessageAllowed as MessageAllowedEvent,
  MessageBlocked as MessageBlockedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Paused as PausedEvent,
  RelayedMessage as RelayedMessageEvent,
  SentMessage as SentMessageEvent,
  Unpaused as UnpausedEvent
} from "../generated/L1CrossDomainMessenger/L1CrossDomainMessenger"
import {
  FailedRelayedMessage,
  MessageAllowed,
  MessageBlocked,
  OwnershipTransferred,
  Paused,
  RelayedMessage,
  SentMessage,
  Unpaused
} from "../generated/schema"

export function handleFailedRelayedMessage(
  event: FailedRelayedMessageEvent
): void {
  let entity = new FailedRelayedMessage(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.msgHash = event.params.msgHash
  entity.save()
}

export function handleMessageAllowed(event: MessageAllowedEvent): void {
  let entity = new MessageAllowed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._xDomainCalldataHash = event.params._xDomainCalldataHash
  entity.save()
}

export function handleMessageBlocked(event: MessageBlockedEvent): void {
  let entity = new MessageBlocked(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._xDomainCalldataHash = event.params._xDomainCalldataHash
  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.account = event.params.account
  entity.save()
}

export function handleRelayedMessage(event: RelayedMessageEvent): void {
  let entity = new RelayedMessage(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.msgHash = event.params.msgHash
  entity.save()
}

export function handleSentMessage(event: SentMessageEvent): void {
  let entity = new SentMessage(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.target = event.params.target
  entity.sender = event.params.sender
  entity.message = event.params.message
  entity.messageNonce = event.params.messageNonce
  entity.gasLimit = event.params.gasLimit
  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.account = event.params.account
  entity.save()
}
