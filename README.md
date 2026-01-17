# 🔁 API Token Replay Demo

API Token Replay Demo is a small frontend demonstration that shows
how token-based authentication works in modern APIs.

It explains how a token received during login can be reused
to access protected endpoints.

---

## Overview

Most modern applications use token-based authentication.
After login, a token is issued and sent with every protected request.

This demo visually explains that flow using simple browser-side code.

---

## What This Demo Shows

- Login API request
- Token generation and usage
- Authorization header usage
- Accessing protected API endpoints
- Why token security is critical

---

## Why This Matters

If a token:
- Is leaked
- Is logged carelessly
- Is stored insecurely

An attacker can replay it to access protected resources.

Understanding this flow is essential for:
- Developers
- Security testers
- Bug bounty hunters

---

## Usage

1. Open the HTML file in a browser
2. Open DevTools Console (F12)
3. Click the "Run Demo" button
4. Observe token usage and replay behavior

---

## Important Notes

- This is an educational demo
- No brute force or exploitation involved
- Assumes a backend API exists
- Intended for learning and awareness only

---

## Learning Outcome

This demo helps you understand:
- Token-based authentication
- API authorization headers
- Replay risks
- Secure API design basics
