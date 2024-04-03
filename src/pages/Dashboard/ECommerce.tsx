import React from 'react';
import CardDataStats from '../../components/CardDataStats';
import ChartOne from '../../components/Charts/ChartOne';
import ChartThree from '../../components/Charts/ChartThree';
import ChartTwo from '../../components/Charts/ChartTwo';
import ChatCard from '../../components/Chat/ChatCard';
import MapOne from '../../components/Maps/MapOne';
import TableOne from '../../components/Tables/TableOne';
import DefaultLayout from '../../layout/DefaultLayout';
import { FaUsersGear } from 'react-icons/fa6';
import { FaRunning } from 'react-icons/fa';
import { GiPathDistance } from 'react-icons/gi';
import { MdEventAvailable } from 'react-icons/md';

const ECommerce: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats
          title="Total Participants"
          total="550K"
          rate="0.43%"
          levelUp
        >
          <FaUsersGear color='#7C3AED'/>
        </CardDataStats>
        <CardDataStats
          title="Active Participants"
          total="450K"
          rate="4.35%"
          levelUp
        >
          <FaRunning color='#7C3AED'/>
        </CardDataStats>
        <CardDataStats
          title="Total Distance Covered"
          total="4.2M"
          rate="2.59%"
          levelUp
        >
          <GiPathDistance color='#7C3AED' />
        </CardDataStats>
        <CardDataStats title="Total Events" total="120+" rate="">
          <MdEventAvailable color='#7C3AED'/>
        </CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </DefaultLayout>
  );
};

export default ECommerce;
