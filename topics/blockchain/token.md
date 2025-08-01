---
title: Token
description: Learn about frontrunning risks in EIP-20 token approvals and the importance of following accepted Ethereum token standards like EIP-20 and EIP-721 for secure smart contracts.
date: null
redirect:
  - /kY1gvw
---

## Frontrunning

The EIP-20 token's `approve()` function creates the potential for an approved spender to spend more
than the intended amount. A
front running attack can be
used, enabling an approved spender to call `transferFrom()` both before and after the call to
`approve()` is processed. More details are available on the
[EIP](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md#approve), and in
[this document](https://docs.google.com/document/d/1YLPtQxZu1UAvO9cZ1O2RPXBbT0mooh4DYKjA_jp-RLM/edit).

## Standardization

Generally speaking, smart contracts of tokens should follow an accepted and stable standard.

Examples of currently accepted standards include:

- [EIP20](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md)
- [EIP721](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md) (non-fungible token)
- More at [eips.ethereum.org](https://eips.ethereum.org/erc#final)
