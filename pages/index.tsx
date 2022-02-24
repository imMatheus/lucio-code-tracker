import type { NextPage } from 'next'
import Head from 'next/head'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import moment from 'moment'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

let number = 6455

const dates = [
    {
        date: '06 feb 2022',
        lines: '6333',
    },
     {
        date: '07 feb 2022',
        lines: '6363',
    },
     {
        date: '08 feb 2022',
        lines: '6353',
    },
    {
        date: '23 feb 2022',
        lines: '7346',
    },
    {
        date: '24 feb 2022',
        lines: '7533',
    },
]

for (let i = 0; i < 50; i++) {
    const now = new Date()
    const time = new Date(now.getTime() + i * 1000 * 60 * 60 * 24)
    const factor = Math.random() * 2 > 1 / 2 ? 1 : -1
    const add = Math.ceil(Math.random() * 100) * factor

    dates.push({
        date: moment(time).format('YYYY-MM-DD'),
        // date: time.getFullYear() + ':' + time.getMonth() + ':' + time.getDay(),
        lines: number + add + '',
    })

    number += add
}

export const data = {
    labels: dates.map(({ date }) => date),
    datasets: [
        {
            label: 'Lines of code',
            data: dates.map(({ lines }) => lines),
            borderColor: '#2266ff',
            backgroundColor: '#2266ff77',
        },
    ],
}

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'LucioCode code tracker',
        },
    },
    color: '#ff0000',
}

const Home: NextPage = () => {
    return (
        <div className='h-screen w-screen bg-gray-900'>
            <Head>
                <title>Lucio code tracker</title>
                <meta
                    name='description'
                    content='An app to keep track of the proggrese of LucioCode'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className='2xl:max-w-7xl p-6 mx-auto'>
                <Line
                    options={{
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top' as const,
                            },
                            title: {
                                display: true,
                                text: 'LucioCode code tracker',
                                color: '#eee',
                            },
                        },

                        color: '#eee',
                    }}
                    data={data}
                />
            </main>
        </div>
    )
}

export default Home
