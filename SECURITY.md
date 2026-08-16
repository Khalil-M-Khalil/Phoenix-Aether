# Security Policy

## Scope

This policy applies to the Phoenix Aether source and official Windows releases published in this repository.

## Current security posture

Phoenix Aether is a Windows preview application. The current release provides SHA-256 integrity verification and temporary local transfer sessions. It does not yet provide end-to-end encryption, authenticated peer identity, or a formal cryptographic key-exchange protocol. Users must not treat this preview as a confidential channel for secrets.

## Responsible disclosure

Please do not publish an unpatched vulnerability, exploit, credential, or private transfer data in a public issue. Send a concise report to [khalilmkhalil0937@gmail.com](mailto:khalilmkhalil0937@gmail.com), including the affected version, operating system, reproducible steps, expected behavior, and impact. Remove personal data and sensitive files from the report.

## Safe response to tampering

Official builds may verify a release manifest and stop safely if protected files have changed. Phoenix Aether does not self-delete, delete user files, ban IP addresses, or monitor network identities. Any integrity warning should be treated as a reason to stop execution and obtain a trusted release from the official repository.

## Release verification

Users should compare the SHA-256 hash of a downloaded installer with the checksum in the corresponding GitHub Release. Do not execute a release whose checksum does not match.

## Contact

The project creator and security contact is Khalil Mohammad Khalil:

- Email: khalilmkhalil0937@gmail.com
- Instagram: https://instagram.com/khalil_m_khalil09
- WhatsApp: https://wa.me/khalil_m_khalil0
