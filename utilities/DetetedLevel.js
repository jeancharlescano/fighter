export function detectedLevel(ndPoint) {
    let level = Math.ceil(ndPoint/ 100) - 1
    return level
}