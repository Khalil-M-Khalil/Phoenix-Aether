# Contributing to Phoenix Aether

Phoenix Aether is maintained as an independently authored software project. Contributions are welcome only when they are coordinated with Khalil Mohammad Khalil and preserve the project's authorship, safety boundaries, and documentation quality.

## Before proposing a change

Please contact the creator before modifying, redistributing, or publishing a derivative build. Describe the academic, technical, or operational purpose of the proposed change and identify the affected transport or security boundary.

## Engineering expectations

Changes should preserve the separation between the Electron main process, the restricted preload bridge, and the renderer. File reads must remain streaming where practical, local sessions must remain temporary, and every transfer path must preserve explicit size and SHA-256 reporting. New code should include a focused test or a reproducible verification procedure.

The project does not accept changes that silently collect user data, expose local sessions to public networks, delete user files, self-delete the application, block IP addresses, or weaken integrity warnings. Encryption and authenticated peer identity require a separate design review before implementation.

## Documentation and review

Every functional change must update the README, changelog, or relevant security documentation. A pull request or patch should state the problem, design decision, test evidence, Windows version, and any remaining limitations. The creator retains final approval over official releases and branding.

## Contact

Authorized development requests should be sent to [khalilmkhalil0937@gmail.com](mailto:khalilmkhalil0937@gmail.com).
