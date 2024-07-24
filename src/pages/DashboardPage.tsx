'use client'
import { TrendingUp } from 'lucide-react'
import { Label, Pie, PieChart } from 'recharts'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart'
import DashboardCard from '@/components/dashboard/DashboardCard'
import { useEffect, useState } from 'react'
import API from '@/networks/api'

const chartConfig = {} satisfies ChartConfig

interface Summary {
    belumDibayar: number
    pesananBaru: number
    siapDikirim: number
    dalamPengiriman: number
    pesananSelesai: number
    dibatalkan: number
}

interface PieCartSummary {
    title: string
    value: number
}

export default function TestDashboardPage() {
    const [summary, setSummary] = useState<Summary>()
    const [pieCartSummary, setPieCartSummary] = useState<PieCartSummary[]>()

    useEffect(() => {
        async function GET_SUMMARY() {
            const summary: Summary = await API.ORDER.SUMMARY()
            setSummary(summary)

            const pieCartSummary = [
                { title: 'Belum Dibayar', value: summary.belumDibayar, fill: '#1E293B' },
                { title: 'Pesanan Baru', value: summary.pesananBaru, fill: '#0568A0' },
                { title: 'Siap Dikirim', value: summary.siapDikirim, fill: '#0D766E' },
                { title: 'Dalam Pengiriman', value: summary.dalamPengiriman, fill: '#EA580B' },
                { title: 'Pesanan Selesai', value: summary.pesananSelesai, fill: '#16803C' },
                { title: 'Dibatalkan', value: summary.dibatalkan, fill: '#B91C1B' },
            ]
            setPieCartSummary(pieCartSummary)
        }

        GET_SUMMARY()
    }, [])

    if (summary && pieCartSummary) {
        const pieChart = pieCartSummary.reduce((total, item) => total + item.value, 0)
        return (
            <div className="w-full bg-white rounded-lg flex flex-col gap-3 p-8">
                <h1 className="text-xl font-bold text-black">Dashboard</h1>

                {/* Card Dashboard */}
                <div className="flex flex-row gap-5">
                    <DashboardCard
                        title="Belum DIbayar"
                        value={summary.belumDibayar}
                        color="bg-slate-800"
                    />
                    <DashboardCard
                        title="Pesanan Baru"
                        value={summary.pesananBaru}
                        color="bg-sky-700"
                    />
                    <DashboardCard
                        title="Siap Dikirim"
                        value={summary.siapDikirim}
                        color="bg-teal-700"
                    />
                </div>
                <div className="flex flex-row gap-5">
                    <DashboardCard
                        title="Dalam Pengiriman"
                        value={summary.dalamPengiriman}
                        color="bg-orange-600"
                    />
                    <DashboardCard
                        title="Pesanan Selesai"
                        value={summary.pesananSelesai}
                        color="bg-green-700"
                    />
                    <DashboardCard
                        title="Dibatalkan"
                        value={summary.dibatalkan}
                        color="bg-red-700"
                    />
                </div>

                <div className="w-full flex flex-row gap-5">
                    {/* Pie Chart */}
                    <Card className="relative flex flex-col text-white bg-white border-white shadow bg-clip-border rounded-md w-full">
                        <CardHeader className="items-center pb-0">
                            <CardDescription>Pie Chart Pesanan</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1 pb-0">
                            <ChartContainer
                                config={chartConfig}
                                className="mx-auto aspect-square max-h-[250px]"
                            >
                                <PieChart>
                                    <ChartTooltip
                                        cursor={false}
                                        content={<ChartTooltipContent hideLabel />}
                                    />
                                    <Pie
                                        data={pieCartSummary.slice(0, 6)}
                                        dataKey="value"
                                        nameKey="title"
                                        innerRadius={60}
                                        strokeWidth={5}
                                    >
                                        <Label
                                            content={({ viewBox }) => {
                                                if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                                                    return (
                                                        <text
                                                            x={viewBox.cx}
                                                            y={viewBox.cy}
                                                            textAnchor="middle"
                                                            dominantBaseline="middle"
                                                        >
                                                            <tspan
                                                                x={viewBox.cx}
                                                                y={viewBox.cy}
                                                                className="fill-foreground text-3xl font-bold"
                                                            >
                                                                {pieChart.toLocaleString()}
                                                            </tspan>
                                                            <tspan
                                                                x={viewBox.cx}
                                                                y={(viewBox.cy || 0) + 24}
                                                                className="fill-muted-foreground"
                                                            >
                                                                Pesanan
                                                            </tspan>
                                                        </text>
                                                    )
                                                }
                                            }}
                                        />
                                    </Pie>
                                </PieChart>
                            </ChartContainer>
                        </CardContent>
                        <CardFooter className="flex-col gap-2 text-sm">
                            <div className="leading-none text-muted-foreground">
                                Total ringkasan pesanan toko kamu.
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        )
    }
}
