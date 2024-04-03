import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const options: ApexOptions = {
  legend: {
    show: false,
    position: 'top',
    horizontalAlign: 'left',
  },
  colors: ['#3C50E0', '#80CAEE', '#ADA4A5'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 335,
    type: 'area',
    dropShadow: {
      enabled: true,
      color: '#623CEA14',
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: 'straight',
  },
  // labels: {
  //   show: false,
  //   position: "top",
  // },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: '#fff',
    strokeColors: ['#3056D3', '#80CAEE', '#ADA4A5'],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: 'category',
    categories: [
      'Sep',
      'Oct',
      'Nov',
      'Dec',
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: '0px',
      },
    },
    min: 0,
    max: 100,
  },
};

interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartOne: React.FC = () => {
  const [state, setState] = useState<ChartOneState>({
    series: [
      {
        name: "Snoopy's Lucky",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
      },
      {
        name: 'Snoopy Run',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
      },
      {
        name: 'Pac-Man',
        data: [43, 11, 25, 26, 25, 35, 39, 24, 46, 56, 32, 45],
      },
    ],
  });
  const [item, setItem] = useState('day');

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  handleReset;

  const handleWeekChange = (i: string) => {
    switch (i) {
      case 'week':
        setState({
          series: [
            {
                name: "Snoopy's Lucky",
                data: [42, 31, 38, 40, 46, 41, 45, 30, 49, 42, 50, 35],
            },
            {
                name: 'Snoopy Run',
                data: [45, 39, 47, 49, 32, 48, 34, 36, 43, 30, 41, 44],
            },
            {
                name: 'Pac-Man',
                data: [43, 38, 48, 31, 50, 36, 45, 32, 39, 47, 30, 46],
            },
        ],
        });
        setItem('week');
        break;
      case 'day':
        setState({
          series: [
            {
              name: "Snoopy's Lucky",
              data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
            },
            {
              name: 'Snoopy Run',
              data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
            },
            {
              name: 'Pac-Man',
              data: [43, 11, 25, 26, 25, 35, 39, 24, 46, 56, 32, 45],
            },
          ],
        });
        setItem('day');
        break;
      case 'month':
        setState({
          series: [
            {
                name: "Snoopy's Lucky",
                data: [72, 66, 78, 75, 69, 71, 63, 65, 74, 70, 68, 62],
            },
            {
                name: 'Snoopy Run',
                data: [73, 64, 79, 67, 76, 72, 61, 70, 77, 62, 65, 71],
            },
            {
                name: 'Pac-Man',
                data: [64, 79, 75, 67, 63, 73, 61, 76, 78, 66, 68, 72],
            },
        ],
        });
        setItem('month');
        break;

      default:
        break;
    }
  };

  return (
    <div className="col-span-12 rounded-lg border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-primary">SNOOPY'S LUCKY</p>
              <p className="text-sm font-medium">12.01.2024 - 12.02.2024</p>
            </div>
          </div>
          <div className="flex min-w-47.5">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-secondary">SNOOPY RUN</p>
              <p className="text-sm font-medium">12.01.2024 - 12.02.2024</p>
            </div>
          </div>
          <div className="flex min-w-47.5">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-[#ADA4A5]">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-[#ADA4A5]"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-[#ADA4A5]">PAC-MAN</p>
              <p className="text-sm font-medium">12.01.2024 - 12.02.2024</p>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
            <button
              className={`rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark ${
                item === 'day' && 'bg-white shadow-card'
              }`}
              onClick={() => handleWeekChange('day')}
            >
              Day
            </button>
            <button
              className={`rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark ${
                item === 'week' && 'bg-white shadow-card'
              }`}
              onClick={() => handleWeekChange('week')}
            >
              Week
            </button>
            <button
              className={`rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark ${
                item === 'month' && 'bg-white shadow-card'
              }`}
              onClick={() => handleWeekChange('month')}
            >
              Month
            </button>
          </div>
        </div>
      </div>

      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="area"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
