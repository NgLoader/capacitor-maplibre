// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorMaplibre",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "CapacitorMaplibre",
            targets: ["MaplibrePluginPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "MaplibrePluginPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/MaplibrePluginPlugin"),
        .testTarget(
            name: "MaplibrePluginPluginTests",
            dependencies: ["MaplibrePluginPlugin"],
            path: "ios/Tests/MaplibrePluginPluginTests")
    ]
)