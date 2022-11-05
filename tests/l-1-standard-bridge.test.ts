import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { ERC20DepositInitiated } from "../generated/schema"
import { ERC20DepositInitiated as ERC20DepositInitiatedEvent } from "../generated/L1StandardBridge/L1StandardBridge"
import { handleERC20DepositInitiated } from "../src/l-1-standard-bridge"
import { createERC20DepositInitiatedEvent } from "./l-1-standard-bridge-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _l1Token = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _l2Token = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _from = Address.fromString("0x0000000000000000000000000000000000000001")
    let _to = Address.fromString("0x0000000000000000000000000000000000000001")
    let _amount = BigInt.fromI32(234)
    let _data = Bytes.fromI32(1234567890)
    let newERC20DepositInitiatedEvent = createERC20DepositInitiatedEvent(
      _l1Token,
      _l2Token,
      _from,
      _to,
      _amount,
      _data
    )
    handleERC20DepositInitiated(newERC20DepositInitiatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ERC20DepositInitiated created and stored", () => {
    assert.entityCount("ERC20DepositInitiated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ERC20DepositInitiated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_l1Token",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ERC20DepositInitiated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_l2Token",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ERC20DepositInitiated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_from",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ERC20DepositInitiated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_to",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ERC20DepositInitiated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_amount",
      "234"
    )
    assert.fieldEquals(
      "ERC20DepositInitiated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_data",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
