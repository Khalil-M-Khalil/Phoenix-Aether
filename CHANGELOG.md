# Changelog

All notable Phoenix Aether releases are documented here.

## [0.1.0] — 2026-08-16

### Added

- Windows x64 NSIS installer with Phoenix Aether visual identity.
- Portable Windows build for evaluation.
- Local Wi-Fi and mobile-hotspot handoff for browser-based receiving.
- Animated QR optical fallback with Phoenix Aether Receive workflow.
- Native Windows file selection through Electron IPC.
- Streaming file reads and SHA-256 integrity verification.
- Multi-file and folder selection with bundle packaging.
- About view with creator attribution and authorized-development contact links.
- Safe application-integrity warning that stops without deleting user files or blocking network addresses.

### Known limitations

- This release is a Windows preview and has not yet implemented end-to-end encryption or authenticated peer identity.
- QR transfer is not practical for multi-gigabyte images; local Wi-Fi handoff is recommended for large files.
- Windows Firewall and personal-hotspot isolation can prevent local browser access until the network is treated as private and local communication is allowed.

[0.1.0]: https://github.com/Khalil-M-Khalil/Phoenix-Aether/releases/tag/v0.1.0
