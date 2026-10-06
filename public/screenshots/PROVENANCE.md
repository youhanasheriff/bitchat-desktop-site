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
