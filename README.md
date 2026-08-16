# Phoenix Aether

## Offline Local and Optical File Transfer for Windows

**Phoenix Aether** is an independent Windows application for transferring files without cloud accounts or a mandatory Internet service. It provides two complementary transport modes: a fast local handoff over a private Wi-Fi or mobile-hotspot network, and an optical QR-frame fallback for environments where a network path is unavailable.

> **Project status:** Windows x64 preview release. The application is suitable for controlled evaluation and local transfer testing. It currently verifies integrity with SHA-256; it does not claim confidentiality or end-to-end encryption.

## Ownership and authorship

Phoenix Aether is created and maintained by **Khalil Mohammad Khalil**.

Copyright © 2026 Khalil Mohammad Khalil. All rights reserved. The repository is currently private. Authorized development, academic collaboration, modification, redistribution, and commercial use must be discussed with the creator before proceeding.

## Why Phoenix Aether exists

Conventional file-transfer workflows often depend on a cloud account, an external server, or a persistent Internet connection. Phoenix Aether explores a different operational model: the sender and receiver establish a direct local path, while the application preserves a visual fallback for constrained or isolated environments.

The project is designed as an applied software-engineering study in local transport, streaming I/O, integrity verification, human-readable transfer states, and safe desktop packaging.

## Core capabilities

| Capability | Description |
|---|---|
| Fast local handoff | Serves a temporary download session over the sender's local Wi-Fi or mobile-hotspot address. |
| Offline operation | Internet access and cloud accounts are not required when both devices share a private local network. |
| Optical fallback | Splits a file or bundle into animated QR frames for a Phoenix Aether receiver. |
| Streaming file access | Reads large files incrementally instead of loading the complete payload into renderer memory. |
| Multi-item selection | Selects multiple files or a complete folder and packages them into a transferable archive. |
| Integrity verification | Computes and validates SHA-256 values for the prepared transfer. |
| Windows-native file access | Uses the native Windows picker through Electron IPC instead of relying on a stale renderer file reference. |
| Ownership controls | Includes author metadata, an About view, and integrity checks that fail safely without deleting user data or blocking network addresses. |

## Installation

Download the latest Windows installer from the [Releases](../../releases) page. Run the NSIS installer, review the ownership and license notice, select the installation directory, and optionally create a desktop shortcut. The installer creates a standard Windows uninstall entry.

For users who do not want installation, the release may also provide a Portable executable. The installer is recommended for normal evaluation because it creates the application shortcut and uninstall registration consistently.

## Local Wi-Fi handoff

The recommended workflow for large files is the local handoff mode:

1. Connect the Windows sender and receiver to the same private Wi-Fi network or mobile hotspot.
2. Disable VPN software temporarily during initial testing if it changes route selection or blocks local traffic.
3. Select one or more files, or select a folder.
4. Copy the temporary local link displayed by Phoenix Aether.
5. Open the link on the receiving device in a browser.
6. Download the prepared file or bundle and verify its SHA-256 value.

The link is local to the current network and is not a cloud upload. Windows Firewall may ask for permission on private networks. Do not expose a Phoenix Aether session to an untrusted network.

## Optical QR fallback

The optical mode is intended for small or constrained transfers. The sender displays animated QR frames and the receiver uses the Phoenix Aether **Receive** workflow to collect and rebuild them. A normal phone QR scanner cannot reconstruct a Phoenix Aether transfer; it may display a fragment of the frame payload instead.

QR transfer is not efficient for multi-gigabyte ISO images. For large files, use the local Wi-Fi handoff.

## Security model and limitations

Phoenix Aether currently provides **integrity verification**, not confidentiality. SHA-256 helps detect accidental corruption or an altered payload after transfer, but it does not encrypt the file and does not prove the identity of the sender by itself. Do not use this preview release to transfer secrets until encryption and authenticated peer authorization have been implemented and independently reviewed.

The packaged application includes a release integrity manifest for core application files. If a protected application file is modified, the application may stop safely and present an ownership notice. It does not delete user files, erase itself, block IP addresses, or monitor users' networks.

## Architecture overview

The Windows build uses Electron with a main process, a restricted preload bridge, and a renderer interface. File selection, streaming reads, hashing, temporary-session management, and local HTTP serving are handled outside the renderer. The renderer receives only the operations required for the current session through the preload bridge.

The local handoff is intentionally temporary. A prepared session is represented by a random token and is served by the local process while the application remains open. Closing Phoenix Aether invalidates the session.

## Development

The source tree is provided under `src/` for authorized development. The project uses Node.js, Electron, Electron Builder, `archiver`, `jsqr`, and `qrcode`.

```powershell
cd src
npm install
npm run lint:quick
npm run dist:win
```

The Windows installer is produced through NSIS packaging. A release build should be generated only after the integrity manifest, source metadata, and release checksum have been reviewed.

## Release verification

Each official release should publish a SHA-256 checksum for the installer. On Windows PowerShell:

```powershell
Get-FileHash .\Phoenix-Aether-Setup.exe -Algorithm SHA256
```

Compare the result with the checksum published in the release notes. A mismatch means the file should not be executed until the source of the discrepancy is understood.

## Contact and authorized development

For authorized modification, academic collaboration, bug reports, or development requests, contact the creator:

- Email: [khalilmkhalil0937@gmail.com](mailto:khalilmkhalil0937@gmail.com)
- Instagram: [@khalil_m_khalil09](https://instagram.com/khalil_m_khalil09)
- WhatsApp: [Direct contact](https://wa.me/khalil_m_khalil0)

## License

This repository is distributed under the terms in [`LICENSE`](LICENSE). The code and binaries are not granted for unauthorized modification, redistribution, resale, or rebranding.

## References

The implementation uses standard platform and cryptographic primitives rather than claiming a proprietary cryptographic protocol. Relevant technical references include [Electron Security](https://www.electronjs.org/docs/latest/tutorial/security), [Node.js File System APIs](https://nodejs.org/api/fs.html), [Node.js Crypto APIs](https://nodejs.org/api/crypto.html), and [Microsoft Authenticode](https://learn.microsoft.com/en-us/windows-hardware/drivers/install/authenticode).
