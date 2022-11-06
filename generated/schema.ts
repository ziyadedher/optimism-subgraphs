// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal,
} from "@graphprotocol/graph-ts";

export class ERC20DepositInitiated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save ERC20DepositInitiated entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ERC20DepositInitiated must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ERC20DepositInitiated", id.toString(), this);
    }
  }

  static load(id: string): ERC20DepositInitiated | null {
    return changetype<ERC20DepositInitiated | null>(
      store.get("ERC20DepositInitiated", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _l1Token(): Bytes {
    let value = this.get("_l1Token");
    return value!.toBytes();
  }

  set _l1Token(value: Bytes) {
    this.set("_l1Token", Value.fromBytes(value));
  }

  get _l2Token(): Bytes {
    let value = this.get("_l2Token");
    return value!.toBytes();
  }

  set _l2Token(value: Bytes) {
    this.set("_l2Token", Value.fromBytes(value));
  }

  get _from(): Bytes {
    let value = this.get("_from");
    return value!.toBytes();
  }

  set _from(value: Bytes) {
    this.set("_from", Value.fromBytes(value));
  }

  get _to(): Bytes {
    let value = this.get("_to");
    return value!.toBytes();
  }

  set _to(value: Bytes) {
    this.set("_to", Value.fromBytes(value));
  }

  get _amount(): BigInt {
    let value = this.get("_amount");
    return value!.toBigInt();
  }

  set _amount(value: BigInt) {
    this.set("_amount", Value.fromBigInt(value));
  }

  get _data(): Bytes {
    let value = this.get("_data");
    return value!.toBytes();
  }

  set _data(value: Bytes) {
    this.set("_data", Value.fromBytes(value));
  }
}

export class ERC20WithdrawalFinalized extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save ERC20WithdrawalFinalized entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ERC20WithdrawalFinalized must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ERC20WithdrawalFinalized", id.toString(), this);
    }
  }

  static load(id: string): ERC20WithdrawalFinalized | null {
    return changetype<ERC20WithdrawalFinalized | null>(
      store.get("ERC20WithdrawalFinalized", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _l1Token(): Bytes {
    let value = this.get("_l1Token");
    return value!.toBytes();
  }

  set _l1Token(value: Bytes) {
    this.set("_l1Token", Value.fromBytes(value));
  }

  get _l2Token(): Bytes {
    let value = this.get("_l2Token");
    return value!.toBytes();
  }

  set _l2Token(value: Bytes) {
    this.set("_l2Token", Value.fromBytes(value));
  }

  get _from(): Bytes {
    let value = this.get("_from");
    return value!.toBytes();
  }

  set _from(value: Bytes) {
    this.set("_from", Value.fromBytes(value));
  }

  get _to(): Bytes {
    let value = this.get("_to");
    return value!.toBytes();
  }

  set _to(value: Bytes) {
    this.set("_to", Value.fromBytes(value));
  }

  get _amount(): BigInt {
    let value = this.get("_amount");
    return value!.toBigInt();
  }

  set _amount(value: BigInt) {
    this.set("_amount", Value.fromBigInt(value));
  }

  get _data(): Bytes {
    let value = this.get("_data");
    return value!.toBytes();
  }

  set _data(value: Bytes) {
    this.set("_data", Value.fromBytes(value));
  }
}

export class ETHDepositInitiated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ETHDepositInitiated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ETHDepositInitiated must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ETHDepositInitiated", id.toString(), this);
    }
  }

  static load(id: string): ETHDepositInitiated | null {
    return changetype<ETHDepositInitiated | null>(
      store.get("ETHDepositInitiated", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _from(): Bytes {
    let value = this.get("_from");
    return value!.toBytes();
  }

  set _from(value: Bytes) {
    this.set("_from", Value.fromBytes(value));
  }

  get _to(): Bytes {
    let value = this.get("_to");
    return value!.toBytes();
  }

  set _to(value: Bytes) {
    this.set("_to", Value.fromBytes(value));
  }

  get _amount(): BigInt {
    let value = this.get("_amount");
    return value!.toBigInt();
  }

  set _amount(value: BigInt) {
    this.set("_amount", Value.fromBigInt(value));
  }

  get _data(): Bytes {
    let value = this.get("_data");
    return value!.toBytes();
  }

  set _data(value: Bytes) {
    this.set("_data", Value.fromBytes(value));
  }
}

export class ETHWithdrawalFinalized extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save ETHWithdrawalFinalized entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ETHWithdrawalFinalized must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ETHWithdrawalFinalized", id.toString(), this);
    }
  }

  static load(id: string): ETHWithdrawalFinalized | null {
    return changetype<ETHWithdrawalFinalized | null>(
      store.get("ETHWithdrawalFinalized", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _from(): Bytes {
    let value = this.get("_from");
    return value!.toBytes();
  }

  set _from(value: Bytes) {
    this.set("_from", Value.fromBytes(value));
  }

  get _to(): Bytes {
    let value = this.get("_to");
    return value!.toBytes();
  }

  set _to(value: Bytes) {
    this.set("_to", Value.fromBytes(value));
  }

  get _amount(): BigInt {
    let value = this.get("_amount");
    return value!.toBigInt();
  }

  set _amount(value: BigInt) {
    this.set("_amount", Value.fromBigInt(value));
  }

  get _data(): Bytes {
    let value = this.get("_data");
    return value!.toBytes();
  }

  set _data(value: Bytes) {
    this.set("_data", Value.fromBytes(value));
  }
}

export class FailedRelayedMessage extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save FailedRelayedMessage entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type FailedRelayedMessage must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("FailedRelayedMessage", id.toString(), this);
    }
  }

  static load(id: string): FailedRelayedMessage | null {
    return changetype<FailedRelayedMessage | null>(
      store.get("FailedRelayedMessage", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get msgHash(): Bytes {
    let value = this.get("msgHash");
    return value!.toBytes();
  }

  set msgHash(value: Bytes) {
    this.set("msgHash", Value.fromBytes(value));
  }
}

export class MessageAllowed extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MessageAllowed entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type MessageAllowed must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("MessageAllowed", id.toString(), this);
    }
  }

  static load(id: string): MessageAllowed | null {
    return changetype<MessageAllowed | null>(store.get("MessageAllowed", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _xDomainCalldataHash(): Bytes {
    let value = this.get("_xDomainCalldataHash");
    return value!.toBytes();
  }

  set _xDomainCalldataHash(value: Bytes) {
    this.set("_xDomainCalldataHash", Value.fromBytes(value));
  }
}

export class MessageBlocked extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MessageBlocked entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type MessageBlocked must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("MessageBlocked", id.toString(), this);
    }
  }

  static load(id: string): MessageBlocked | null {
    return changetype<MessageBlocked | null>(store.get("MessageBlocked", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _xDomainCalldataHash(): Bytes {
    let value = this.get("_xDomainCalldataHash");
    return value!.toBytes();
  }

  set _xDomainCalldataHash(value: Bytes) {
    this.set("_xDomainCalldataHash", Value.fromBytes(value));
  }
}

export class OwnershipTransferred extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save OwnershipTransferred entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type OwnershipTransferred must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("OwnershipTransferred", id.toString(), this);
    }
  }

  static load(id: string): OwnershipTransferred | null {
    return changetype<OwnershipTransferred | null>(
      store.get("OwnershipTransferred", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get previousOwner(): Bytes {
    let value = this.get("previousOwner");
    return value!.toBytes();
  }

  set previousOwner(value: Bytes) {
    this.set("previousOwner", Value.fromBytes(value));
  }

  get newOwner(): Bytes {
    let value = this.get("newOwner");
    return value!.toBytes();
  }

  set newOwner(value: Bytes) {
    this.set("newOwner", Value.fromBytes(value));
  }
}

export class Paused extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Paused entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Paused must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Paused", id.toString(), this);
    }
  }

  static load(id: string): Paused | null {
    return changetype<Paused | null>(store.get("Paused", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }
}

export class RelayedMessage extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RelayedMessage entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type RelayedMessage must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("RelayedMessage", id.toString(), this);
    }
  }

  static load(id: string): RelayedMessage | null {
    return changetype<RelayedMessage | null>(store.get("RelayedMessage", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get msgHash(): Bytes {
    let value = this.get("msgHash");
    return value!.toBytes();
  }

  set msgHash(value: Bytes) {
    this.set("msgHash", Value.fromBytes(value));
  }
}

export class SentMessage extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SentMessage entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type SentMessage must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SentMessage", id.toString(), this);
    }
  }

  static load(id: string): SentMessage | null {
    return changetype<SentMessage | null>(store.get("SentMessage", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get target(): Bytes {
    let value = this.get("target");
    return value!.toBytes();
  }

  set target(value: Bytes) {
    this.set("target", Value.fromBytes(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value!.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get message(): Bytes {
    let value = this.get("message");
    return value!.toBytes();
  }

  set message(value: Bytes) {
    this.set("message", Value.fromBytes(value));
  }

  get messageNonce(): BigInt {
    let value = this.get("messageNonce");
    return value!.toBigInt();
  }

  set messageNonce(value: BigInt) {
    this.set("messageNonce", Value.fromBigInt(value));
  }

  get gasLimit(): BigInt {
    let value = this.get("gasLimit");
    return value!.toBigInt();
  }

  set gasLimit(value: BigInt) {
    this.set("gasLimit", Value.fromBigInt(value));
  }
}

export class Unpaused extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Unpaused entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Unpaused must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Unpaused", id.toString(), this);
    }
  }

  static load(id: string): Unpaused | null {
    return changetype<Unpaused | null>(store.get("Unpaused", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }
}

export class StateBatchAppended extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save StateBatchAppended entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type StateBatchAppended must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("StateBatchAppended", id.toString(), this);
    }
  }

  static load(id: string): StateBatchAppended | null {
    return changetype<StateBatchAppended | null>(
      store.get("StateBatchAppended", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _batchIndex(): BigInt {
    let value = this.get("_batchIndex");
    return value!.toBigInt();
  }

  set _batchIndex(value: BigInt) {
    this.set("_batchIndex", Value.fromBigInt(value));
  }

  get _batchRoot(): Bytes {
    let value = this.get("_batchRoot");
    return value!.toBytes();
  }

  set _batchRoot(value: Bytes) {
    this.set("_batchRoot", Value.fromBytes(value));
  }

  get _batchSize(): BigInt {
    let value = this.get("_batchSize");
    return value!.toBigInt();
  }

  set _batchSize(value: BigInt) {
    this.set("_batchSize", Value.fromBigInt(value));
  }

  get _prevTotalElements(): BigInt {
    let value = this.get("_prevTotalElements");
    return value!.toBigInt();
  }

  set _prevTotalElements(value: BigInt) {
    this.set("_prevTotalElements", Value.fromBigInt(value));
  }

  get _extraData(): Bytes {
    let value = this.get("_extraData");
    return value!.toBytes();
  }

  set _extraData(value: Bytes) {
    this.set("_extraData", Value.fromBytes(value));
  }
}

export class StateBatchDeleted extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save StateBatchDeleted entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type StateBatchDeleted must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("StateBatchDeleted", id.toString(), this);
    }
  }

  static load(id: string): StateBatchDeleted | null {
    return changetype<StateBatchDeleted | null>(
      store.get("StateBatchDeleted", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _batchIndex(): BigInt {
    let value = this.get("_batchIndex");
    return value!.toBigInt();
  }

  set _batchIndex(value: BigInt) {
    this.set("_batchIndex", Value.fromBigInt(value));
  }

  get _batchRoot(): Bytes {
    let value = this.get("_batchRoot");
    return value!.toBytes();
  }

  set _batchRoot(value: Bytes) {
    this.set("_batchRoot", Value.fromBytes(value));
  }
}

export class L2GasParamsUpdated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save L2GasParamsUpdated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type L2GasParamsUpdated must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("L2GasParamsUpdated", id.toString(), this);
    }
  }

  static load(id: string): L2GasParamsUpdated | null {
    return changetype<L2GasParamsUpdated | null>(
      store.get("L2GasParamsUpdated", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get l2GasDiscountDivisor(): BigInt {
    let value = this.get("l2GasDiscountDivisor");
    return value!.toBigInt();
  }

  set l2GasDiscountDivisor(value: BigInt) {
    this.set("l2GasDiscountDivisor", Value.fromBigInt(value));
  }

  get enqueueGasCost(): BigInt {
    let value = this.get("enqueueGasCost");
    return value!.toBigInt();
  }

  set enqueueGasCost(value: BigInt) {
    this.set("enqueueGasCost", Value.fromBigInt(value));
  }

  get enqueueL2GasPrepaid(): BigInt {
    let value = this.get("enqueueL2GasPrepaid");
    return value!.toBigInt();
  }

  set enqueueL2GasPrepaid(value: BigInt) {
    this.set("enqueueL2GasPrepaid", Value.fromBigInt(value));
  }
}

export class QueueBatchAppended extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save QueueBatchAppended entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type QueueBatchAppended must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("QueueBatchAppended", id.toString(), this);
    }
  }

  static load(id: string): QueueBatchAppended | null {
    return changetype<QueueBatchAppended | null>(
      store.get("QueueBatchAppended", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _startingQueueIndex(): BigInt {
    let value = this.get("_startingQueueIndex");
    return value!.toBigInt();
  }

  set _startingQueueIndex(value: BigInt) {
    this.set("_startingQueueIndex", Value.fromBigInt(value));
  }

  get _numQueueElements(): BigInt {
    let value = this.get("_numQueueElements");
    return value!.toBigInt();
  }

  set _numQueueElements(value: BigInt) {
    this.set("_numQueueElements", Value.fromBigInt(value));
  }

  get _totalElements(): BigInt {
    let value = this.get("_totalElements");
    return value!.toBigInt();
  }

  set _totalElements(value: BigInt) {
    this.set("_totalElements", Value.fromBigInt(value));
  }
}

export class SequencerBatchAppended extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save SequencerBatchAppended entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type SequencerBatchAppended must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SequencerBatchAppended", id.toString(), this);
    }
  }

  static load(id: string): SequencerBatchAppended | null {
    return changetype<SequencerBatchAppended | null>(
      store.get("SequencerBatchAppended", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _startingQueueIndex(): BigInt {
    let value = this.get("_startingQueueIndex");
    return value!.toBigInt();
  }

  set _startingQueueIndex(value: BigInt) {
    this.set("_startingQueueIndex", Value.fromBigInt(value));
  }

  get _numQueueElements(): BigInt {
    let value = this.get("_numQueueElements");
    return value!.toBigInt();
  }

  set _numQueueElements(value: BigInt) {
    this.set("_numQueueElements", Value.fromBigInt(value));
  }

  get _totalElements(): BigInt {
    let value = this.get("_totalElements");
    return value!.toBigInt();
  }

  set _totalElements(value: BigInt) {
    this.set("_totalElements", Value.fromBigInt(value));
  }
}

export class TransactionBatchAppended extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save TransactionBatchAppended entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TransactionBatchAppended must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TransactionBatchAppended", id.toString(), this);
    }
  }

  static load(id: string): TransactionBatchAppended | null {
    return changetype<TransactionBatchAppended | null>(
      store.get("TransactionBatchAppended", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _batchIndex(): BigInt {
    let value = this.get("_batchIndex");
    return value!.toBigInt();
  }

  set _batchIndex(value: BigInt) {
    this.set("_batchIndex", Value.fromBigInt(value));
  }

  get _batchRoot(): Bytes {
    let value = this.get("_batchRoot");
    return value!.toBytes();
  }

  set _batchRoot(value: Bytes) {
    this.set("_batchRoot", Value.fromBytes(value));
  }

  get _batchSize(): BigInt {
    let value = this.get("_batchSize");
    return value!.toBigInt();
  }

  set _batchSize(value: BigInt) {
    this.set("_batchSize", Value.fromBigInt(value));
  }

  get _prevTotalElements(): BigInt {
    let value = this.get("_prevTotalElements");
    return value!.toBigInt();
  }

  set _prevTotalElements(value: BigInt) {
    this.set("_prevTotalElements", Value.fromBigInt(value));
  }

  get _extraData(): Bytes {
    let value = this.get("_extraData");
    return value!.toBytes();
  }

  set _extraData(value: Bytes) {
    this.set("_extraData", Value.fromBytes(value));
  }
}

export class TransactionEnqueued extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TransactionEnqueued entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TransactionEnqueued must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TransactionEnqueued", id.toString(), this);
    }
  }

  static load(id: string): TransactionEnqueued | null {
    return changetype<TransactionEnqueued | null>(
      store.get("TransactionEnqueued", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _l1TxOrigin(): Bytes {
    let value = this.get("_l1TxOrigin");
    return value!.toBytes();
  }

  set _l1TxOrigin(value: Bytes) {
    this.set("_l1TxOrigin", Value.fromBytes(value));
  }

  get _target(): Bytes {
    let value = this.get("_target");
    return value!.toBytes();
  }

  set _target(value: Bytes) {
    this.set("_target", Value.fromBytes(value));
  }

  get _gasLimit(): BigInt {
    let value = this.get("_gasLimit");
    return value!.toBigInt();
  }

  set _gasLimit(value: BigInt) {
    this.set("_gasLimit", Value.fromBigInt(value));
  }

  get _data(): Bytes {
    let value = this.get("_data");
    return value!.toBytes();
  }

  set _data(value: Bytes) {
    this.set("_data", Value.fromBytes(value));
  }

  get _queueIndex(): BigInt {
    let value = this.get("_queueIndex");
    return value!.toBigInt();
  }

  set _queueIndex(value: BigInt) {
    this.set("_queueIndex", Value.fromBigInt(value));
  }

  get _timestamp(): BigInt {
    let value = this.get("_timestamp");
    return value!.toBigInt();
  }

  set _timestamp(value: BigInt) {
    this.set("_timestamp", Value.fromBigInt(value));
  }
}
