import sub from 'youtube-transcript'

import { NextApiRequest, NextApiResponse } from 'next';
const ytb = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    const link = `https://www.youtube.com/watch?v=${id}`
    const data = await sub.fetchTranscript(link)

    res.status(200).json({
        link: id,
        data: data
    })
}

export default ytb