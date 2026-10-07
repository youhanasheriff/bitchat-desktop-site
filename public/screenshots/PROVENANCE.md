# Native screenshot provenance

These images are captures of BitChat Desktop's actual native macOS SwiftUI views, rendered in an AppKit window by the app's Swift Testing host. They are not HTML recreations or generated UI concepts.

The conversations and nearby people are fictitious sample data supplied through `MockTransport` and `ConversationStore`. No real messages, real device identities, or network traffic were used. Connection indicators reflect the fixture, not a claim of measured hardware interoperability.

- `light-bubbles.png`: native Light appearance, Bubble message layout.
- `terminal.png`: native Terminal appearance, Terminal message layout.
- `graphite.png`: native Graphite appearance, Bubble message layout.
- `settings.png`: native Settings, showing appearance and message layout preferences.

The three chat captures are 2240 × 1680 pixels (1120 × 840 points, Retina). The settings capture is 1240 × 1520 pixels. Only native view content is captured; any surrounding decorative window frame is provided by the website.

The capture helper hosts the shipping views inside a test-only window and uses AppKit's `cacheDisplay` API to save its own view. This avoids needing macOS Screen Recording access to unrelated windows. The full app was also launched locally; screenshot conversations were populated only in the isolated test host.

To regenerate from the app repository on an Apple Silicon Mac with Xcode, first complete the app’s documented local build (`bash apps/macos/scripts/build-local.sh`) so its pinned dependencies and toolchain compatibility patch are prepared. Then run:

```sh
bash apps/macos/scripts/capture-marketing.sh /absolute/path/to/bitchat-desktop-site/public/screenshots
```

The opt-in capture test is `ViewSmokeTests/desktopMarketingScreenshots()`. Its fixture is excluded from the shipping app. Other test runs skip capture unless the helper's temporary marker exists.

## Linux discovery preview

`linux-discovery.png` is a 900 × 600 capture of the actual Rust/GTK4 window running on Debian 12 aarch64 in Docker, with GTK 4.8.3, the Cairo renderer, and Xvfb. It shows the ready state, Mainnet selection, and an empty device list. No Bluetooth controller was exposed to the container and no devices or conversations were invented. Captured October 7, 2026 from the implementation in app commit `eb7794730c6abdb39e86582cfb19b87b3fc4c956`; this is UI evidence, not proof of physical Bluetooth interoperability.

## Windows discovery preview

`windows-discovery.png` is the real native Win32 ready window, captured using Windows `PrintWindow` on a GitHub-hosted Windows Server 2025 x64 desktop. No devices, messages, or Bluetooth hardware results were fabricated.

- App source: `e846deaf4b1f68538ad4cf9a241d76444c95fcc6`.
- [Successful build and UI validation](https://github.com/youhanasheriff/bitchat-desktop/actions/runs/37605974918).
- Capture: `apps/windows/scripts/check.ps1`, from the native Release executable.
- Dimensions: 940 × 650 pixels. Original PNG, unedited.
- This shows discovery UI only. CI exercised the no-radio error path; it does not establish physical Bluetooth interoperability.
