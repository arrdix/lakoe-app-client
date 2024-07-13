'use client'
import * as React from 'react'
import { TrendingUp } from 'lucide-react'
import { Label, Pie, PieChart } from 'recharts'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
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
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";

const pieData = [
    { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
    { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
    { browser: 'firefox', visitors: 287, fill: 'var(--color-firefox)' },
    { browser: 'edge', visitors: 173, fill: 'var(--color-edge)' },
    { browser: 'other', visitors: 190, fill: 'var(--color-other)' },
]

const chartData = [
    { month: 'January', desktop: 186, mobile: 80 },
    { month: 'February', desktop: 305, mobile: 200 },
    { month: 'March', desktop: 237, mobile: 120 },
    { month: 'April', desktop: 73, mobile: 190 },
    { month: 'May', desktop: 209, mobile: 130 },
    { month: 'June', desktop: 214, mobile: 140 },
]

const chartConfig = {
    visitors: {
        label: 'Visitors',
    },
    chrome: {
        label: 'Pending',
        color: '#D8D9DA',
    },
    safari: {
        label: 'Proccess',
        color: '#FFC700',
    },
    firefox: {
        label: 'Success',
        color: '#9BEC00',
    },
    edge: {
        label: 'Rejected',
        color: '#FF0000',
    },
    desktop: {
        label: 'Success',
        color: '#9BEC00',
    },
    mobile: {
        label: 'Rejected',
        color: '#FF0000',
    },
} satisfies ChartConfig

export default function TestDashboardPage() {
    const totalVisitors = React.useMemo(() => {
        return pieData.reduce((acc, curr) => acc + curr.visitors, 0)
    }, [])

    return (
        <div className="w-full bg-white rounded-lg flex flex-col gap-3 p-8">
            <h1 className="text-xl font-bold text-black">Dashboard</h1>

            {/* Card Dashboard */}
            <div className="flex flex-row gap-5">
                <div className="relative flex flex-col text-white bg-gradient-to-tr from-slate-800 to-slate-400 shadow bg-clip-border rounded-md w-96">
                    <div className="p-6 flex flex-col">
                        <div className='flex flex-row'>
                            <div className="h-full w-1 bg-white mx-2 self-stretch rounded"></div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-inherit">
                                    PENDING
                                </p>
                                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    Rp. 123
                                </h5>
                            </div>
                        </div>
                        <div className='flex flex-row items-center'>
                            <FaLongArrowAltUp className='text-slate-100' />
                            <span className='text-slate-100 mr-1'>
                                +5.3%
                            </span>
                            <p>
                                Since last week
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative flex flex-col text-white bg-gradient-to-tr from-amber-600 to-yellow-400 shadow bg-clip-border rounded-md w-96">
                    <div className="p-6 flex flex-col">
                        <div className='flex flex-row'>
                            <div className="h-full w-1 bg-white mx-2 self-stretch rounded"></div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-inherit">
                                    PROCCESS
                                </p>
                                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    Rp. 123
                                </h5>
                            </div>
                        </div>
                        <div className='flex flex-row items-center'>
                            <FaLongArrowAltDown className='text-yellow-100' />
                            <span className='text-yellow-100 mr-1'>
                                +5.3%
                            </span>
                            <p>
                                Since last week
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative flex flex-col text-white bg-gradient-to-tr from-lime-600 to-lime-400 shadow bg-clip-border rounded-md w-96">
                    <div className="p-6 flex flex-col">
                        <div className='flex flex-row'>
                            <div className="h-full w-1 bg-white mx-2 self-stretch rounded"></div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-inherit">
                                    SUCCESS
                                </p>
                                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    Rp. 123
                                </h5>
                            </div>
                        </div>
                        <div className='flex flex-row items-center'>
                            <FaLongArrowAltUp className='text-lime-100' />
                            <span className='text-lime-100 mr-1'>
                                +5.3%
                            </span>
                            <p>
                                Since last week
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative flex flex-col text-white bg-gradient-to-tr from-rose-600 to-red-400 shadow bg-clip-border rounded-md w-96">
                    <div className="p-6 flex flex-col">
                        <div className='flex flex-row'>
                            <div className="h-full w-1 bg-white mx-2 self-stretch rounded"></div>
                            <div className="flex flex-col items-center justify-center">
                                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-inherit">
                                    REJECTED
                                </p>
                                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    Rp. 123
                                </h5>
                            </div>
                        </div>
                        <div className='flex flex-row items-center'>
                            <FaLongArrowAltDown className='text-red-100' />
                            <span className='text-red-100 mr-1'>
                                +5.3%
                            </span>
                            <p>
                                Since last week
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-row gap-5">
                {/* Pie Chart */}
                <Card className="relative flex flex-col text-white bg-white border-white shadow bg-clip-border rounded-md w-3/6">
                    <CardHeader className="items-center pb-0">
                        <CardTitle>Total Visitor</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
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
                                    data={pieData.slice(0, 4)}
                                    dataKey="visitors"
                                    nameKey="browser"
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
                                                            {totalVisitors.toLocaleString()}
                                                        </tspan>
                                                        <tspan
                                                            x={viewBox.cx}
                                                            y={(viewBox.cy || 0) + 24}
                                                            className="fill-muted-foreground"
                                                        >
                                                            Visitors
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
                        <div className="flex items-center gap-2 font-medium leading-none">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="leading-none text-muted-foreground">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>

                {/* Bar Chart */}
                <Card className="relative flex flex-col text-white bg-white border-white shadow bg-clip-border rounded-md w-3/6">
                    <CardHeader>
                        <CardTitle>Total Transaksi</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <BarChart accessibilityLayer data={chartData}>
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent indicator="dashed" />}
                                />
                                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-2 text-sm">
                        <div className="flex gap-2 font-medium leading-none">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="leading-none text-muted-foreground">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
            </div>

            {/* Table Invoice */}
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>No.</TableHead>
                        <TableHead>Deskripsi</TableHead>
                        <TableHead>Nilai</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Tipe</TableHead>
                        <TableHead className="text-right">Tanggal</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">1</TableCell>
                        <TableCell>Pinjol</TableCell>
                        <TableCell>123</TableCell>
                        <TableCell>Pending</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">21 Januari 2024</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}
