import sub from 'youtube-transcript'

type ModelFunYtb = {
    country: string,
    lang: string,
    link: string
}

const funYtb = async ({ country, lang, link }: ModelFunYtb) => {
    const y = await sub.fetchTranscript(link, { country: country, lang: lang })
    console.log(y)
    return {
        link: link,
        sub: y
    }
}

export default funYtb