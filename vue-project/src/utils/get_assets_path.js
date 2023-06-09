export const getAssetsURL = (path) => {
    return new URL(`../assets/${path}`,import.meta.url).href
}

 