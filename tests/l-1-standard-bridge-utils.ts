import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  ERC20DepositInitiated,
  ERC20WithdrawalFinalized,
  ETHDepositInitiated,
  ETHWithdrawalFinalized
} from "../generated/L1StandardBridge/L1StandardBridge"

export function createERC20DepositInitiatedEvent(
  _l1Token: Address,
  _l2Token: Address,
  _from: Address,
  _to: Address,
  _amount: BigInt,
  _data: Bytes
): ERC20DepositInitiated {
  let erc20DepositInitiatedEvent = changetype<ERC20DepositInitiated>(
    newMockEvent()
  )

  erc20DepositInitiatedEvent.parameters = new Array()

  erc20DepositInitiatedEvent.parameters.push(
    new ethereum.EventParam("_l1Token", ethereum.Value.fromAddress(_l1Token))
  )
  erc20DepositInitiatedEvent.parameters.push(
    new ethereum.EventParam("_l2Token", ethereum.Value.fromAddress(_l2Token))
  )
  erc20DepositInitiatedEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  erc20DepositInitiatedEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  erc20DepositInitiatedEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  erc20DepositInitiatedEvent.parameters.push(
    new ethereum.EventParam("_data", ethereum.Value.fromBytes(_data))
  )

  return erc20DepositInitiatedEvent
}

export function createERC20WithdrawalFinalizedEvent(
  _l1Token: Address,
  _l2Token: Address,
  _from: Address,
  _to: Address,
  _amount: BigInt,
  _data: Bytes
): ERC20WithdrawalFinalized {
  let erc20WithdrawalFinalizedEvent = changetype<ERC20WithdrawalFinalized>(
    newMockEvent()
  )

  erc20WithdrawalFinalizedEvent.parameters = new Array()

  erc20WithdrawalFinalizedEvent.parameters.push(
    new ethereum.EventParam("_l1Token", ethereum.Value.fromAddress(_l1Token))
  )
  erc20WithdrawalFinalizedEvent.parameters.push(
    new ethereum.EventParam("_l2Token", ethereum.Value.fromAddress(_l2Token))
  )
  erc20WithdrawalFinalizedEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  erc20WithdrawalFinalizedEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  erc20WithdrawalFinalizedEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  erc20WithdrawalFinalizedEvent.parameters.push(
    new ethereum.EventParam("_data", ethereum.Value.fromBytes(_data))
  )

  return erc20WithdrawalFinalizedEvent
}

export function createETHDepositInitiatedEvent(
  _from: Address,
  _to: Address,
  _amount: BigInt,
  _data: Bytes
): ETHDepositInitiated {
  let ethDepositInitiatedEvent = changetype<ETHDepositInitiated>(newMockEvent())

  ethDepositInitiatedEvent.parameters = new Array()

  ethDepositInitiatedEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  ethDepositInitiatedEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  ethDepositInitiatedEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  ethDepositInitiatedEvent.parameters.push(
    new ethereum.EventParam("_data", ethereum.Value.fromBytes(_data))
  )

  return ethDepositInitiatedEvent
}

export function createETHWithdrawalFinalizedEvent(
  _from: Address,
  _to: Address,
  _amount: BigInt,
  _data: Bytes
): ETHWithdrawalFinalized {
  let ethWithdrawalFinalizedEvent = changetype<ETHWithdrawalFinalized>(
    newMockEvent()
  )

  ethWithdrawalFinalizedEvent.parameters = new Array()

  ethWithdrawalFinalizedEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  ethWithdrawalFinalizedEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  ethWithdrawalFinalizedEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  ethWithdrawalFinalizedEvent.parameters.push(
    new ethereum.EventParam("_data", ethereum.Value.fromBytes(_data))
  )

  return ethWithdrawalFinalizedEvent
}
