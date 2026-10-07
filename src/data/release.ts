// Update these values together when publishing a new app preview.
export const release = {
  version: "v0.1.0-preview.1",
  platform: "macOS · Apple silicon",
  url: "https://github.com/youhanasheriff/bitchat-desktop/releases/download/v0.1.0-preview.1/BitChat-Desktop-0.1.0-preview.1-macos-arm64.dmg",
  zipUrl: "https://github.com/youhanasheriff/bitchat-desktop/releases/download/v0.1.0-preview.1/BitChat-Desktop-0.1.0-preview.1-macos-arm64.zip",
  notesUrl:
    "https://github.com/youhanasheriff/bitchat-desktop/releases/tag/v0.1.0-preview.1",
  requirements: "Apple silicon · macOS 13+",
  size: "8.7 MB",
  sizeLabel: "compressed macOS DMG download",
  downloadBytes: 8724815,
  appBundleBytes: 24100064,
  sha256: "57a40890ad7ebec60b68a35e462c755384b4fc28e7f8eda0fa41234a017d9e73",
  signing: "Ad-hoc signed. Not notarized by Apple.",
};
export const repository = "https://github.com/youhanasheriff/bitchat-desktop";

export const linuxRelease = {
  version: "0.1.0-preview.2",
  tag: "linux-v0.1.0-preview.2",
  notesUrl: "https://github.com/youhanasheriff/bitchat-desktop/releases/tag/linux-v0.1.0-preview.2",
  x86Url: "https://github.com/youhanasheriff/bitchat-desktop/releases/download/linux-v0.1.0-preview.2/bitchat-desktop_0.1.0~preview.2-1_amd64.deb",
  armUrl: "https://github.com/youhanasheriff/bitchat-desktop/releases/download/linux-v0.1.0-preview.2/bitchat-desktop_0.1.0~preview.2-1_arm64.deb",
  requirements: "Debian 12 / Ubuntu 24.04 · .deb installers",
  scope: "Bluetooth discovery only. Messaging is not available yet.",
};

export const windowsRelease = {
  version: "0.1.0-preview.2",
  tag: "windows-v0.1.0-preview.2",
  notesUrl: "https://github.com/youhanasheriff/bitchat-desktop/releases/tag/windows-v0.1.0-preview.2",
  url: "https://github.com/youhanasheriff/bitchat-desktop/releases/download/windows-v0.1.0-preview.2/BitChat-Desktop-0.1.0-preview.2-windows-x86_64-setup.exe",
  zipUrl: "https://github.com/youhanasheriff/bitchat-desktop/releases/download/windows-v0.1.0-preview.2/BitChat-Desktop-0.1.0-preview.2-windows-x86_64.zip",
  requirements: "Intel/AMD 64-bit · Windows 11 recommended",
  scope: "Bluetooth discovery only. Messaging is not available yet.",
};
