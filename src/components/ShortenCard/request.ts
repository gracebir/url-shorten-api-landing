
export type shortenResult = {
    ok?: boolean,
    result: {
        full_short_link: string,
        original_link: string
    }
}

export const shortUrl = async (url:string) => {
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data:shortenResult = await response.json()
    return data
}