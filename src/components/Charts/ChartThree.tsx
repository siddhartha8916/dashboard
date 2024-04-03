import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

interface ChartThreeState {
  series: number[];
}

const options: ApexOptions = {
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    type: 'donut',
  },
  colors: ['#3C50E0', '#6577F3', '#8FD0EF', '#0FADCF'],
  labels: ['Facebook', 'Instagram', 'YouTube', 'X'],
  legend: {
    show: false,
    position: 'bottom',
  },

  plotOptions: {
    pie: {
      donut: {
        size: '65%',
        background: 'transparent',
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 380,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

const ChartThree: React.FC = () => {
  const [state, setState] = useState<ChartThreeState>({
    series: [65, 34, 12, 56],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
      series: [65, 34, 12, 56],
    }));
  };
  handleReset;

  return (
    <div className="sm:px-7.5 col-span-12 rounded-lg border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Social Media Reach
          </h5>
        </div>
      </div>

      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex justify-center">
          <ReactApexChart
            options={options}
            series={state.series}
            type="donut"
          />
        </div>
      </div>

      <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
        <div className="sm:w-1/2 w-full px-8">
          <div className="flex w-full items-center">
            {/* <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-primary"></span> */}
            <FaFacebook className="mr-2" />
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Facebook </span>
              <span> 65% </span>
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 w-full px-8">
          <div className="flex w-full items-center">
            <FaInstagram className="mr-2" />
            {/* <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#6577F3]"></span> */}
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Instagram </span>
              <span> 34% </span>
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 w-full px-8">
          <div className="flex w-full items-center">
            <FaYoutube className="mr-2" />
            {/* <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#8FD0EF]"></span> */}
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> YouTube </span>
              <span> 45% </span>
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 w-full px-8">
          <div className="flex w-full items-center">
            {/* <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#0FADCF]"></span> */}
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="18px"
              width="18px"
              className="mr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
            </svg>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> X </span>
              <span> 12% </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartThree;
