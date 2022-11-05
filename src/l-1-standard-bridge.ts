import {
  ERC20DepositInitiated as ERC20DepositInitiatedEvent,
  ERC20WithdrawalFinalized as ERC20WithdrawalFinalizedEvent,
  ETHDepositInitiated as ETHDepositInitiatedEvent,
  ETHWithdrawalFinalized as ETHWithdrawalFinalizedEvent
} from "../generated/L1StandardBridge/L1StandardBridge"
import {
  ERC20DepositInitiated,
  ERC20WithdrawalFinalized,
  ETHDepositInitiated,
  ETHWithdrawalFinalized
} from "../generated/schema"

export function handleERC20DepositInitiated(
  event: ERC20DepositInitiatedEvent
): void {
  let entity = new ERC20DepositInitiated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._l1Token = event.params._l1Token
  entity._l2Token = event.params._l2Token
  entity._from = event.params._from
  entity._to = event.params._to
  entity._amount = event.params._amount
  entity._data = event.params._data
  entity.save()
}

export function handleERC20WithdrawalFinalized(
  event: ERC20WithdrawalFinalizedEvent
): void {
  let entity = new ERC20WithdrawalFinalized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._l1Token = event.params._l1Token
  entity._l2Token = event.params._l2Token
  entity._from = event.params._from
  entity._to = event.params._to
  entity._amount = event.params._amount
  entity._data = event.params._data
  entity.save()
}

export function handleETHDepositInitiated(
  event: ETHDepositInitiatedEvent
): void {
  let entity = new ETHDepositInitiated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._from = event.params._from
  entity._to = event.params._to
  entity._amount = event.params._amount
  entity._data = event.params._data
  entity.save()
}

export function handleETHWithdrawalFinalized(
  event: ETHWithdrawalFinalizedEvent
): void {
  let entity = new ETHWithdrawalFinalized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._from = event.params._from
  entity._to = event.params._to
  entity._amount = event.params._amount
  entity._data = event.params._data
  entity.save()
}
