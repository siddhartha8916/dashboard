import { BRAND } from '../../types/brand';
import BrandOne from '../../images/brand/brand-01.svg';
import BrandTwo from '../../images/brand/brand-02.svg';
import BrandThree from '../../images/brand/brand-03.svg';
import BrandFour from '../../images/brand/brand-04.svg';
import BrandFive from '../../images/brand/brand-05.svg';

const brandData: BRAND[] = [
  {
    logo: BrandOne,
    name: 'Pac-Man',
    visitors: 'Jan 15',
    revenues: 'Feb 15',
    sales: 4.9,
    conversion: 4.8,
  },
  {
    logo: BrandTwo,
    name: 'Snoopy Run',
    visitors: 'Feb 1',
    revenues: 'Mar 2',
    sales: 4.8,
    conversion: 4.3,
  },
  {
    logo: BrandThree,
    name: 'Running With Peeps',
    visitors: 'Mar 16',
    revenues: 'Apr 15',
    sales: 4.7,
    conversion: 3.7,
  },
  {
    logo: BrandFour,
    name: 'Godzilla X Kong',
    visitors: 'Apr 14',
    revenues: 'May 12',
    sales: 4.7,
    conversion: 2.5,
  },
  {
    logo: BrandFive,
    name: 'Spring Has Sprung',
    visitors: 'Mar 21',
    revenues: 'Apr 21',
    sales: 4.6,
    conversion: 4.2,
  },
  {
    logo: BrandFive,
    name: 'A Beautiful Run In the Neighbourhood',
    visitors: 'Jan 23',
    revenues: 'Feb 23',
    sales: 4.5,
    conversion: 4.2,
  },
  {
    logo: BrandFive,
    name: 'Sweethearts',
    visitors: 'Apr 1',
    revenues: 'May 1',
    sales: 4.1,
    conversion: 4.2,
  },
];

const TableOne = () => {
  return (
    <div className="rounded-lg border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Top Events
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
            Event Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Start Date
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              End Date
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Ratings
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
            Growth
            </h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === brandData.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              
              <p className="hidden text-black dark:text-white sm:block">
                {brand.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.visitors}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black">{brand.revenues}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{brand.sales}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{brand.conversion}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
