import { Location } from '@/components/index';
import { StoreType } from '@/lib/graphcms/types';

interface StoreSectionProps {
  stores: StoreType[];
}

const StoresSection = ({ stores }: StoreSectionProps) => (
  <section className='locationsection' id='locations'>
    <h2 className='locationsection__header responsive-width'>
      Laundry Basket +
      <br />
      Locations
    </h2>
    {stores.map((store, i) => (
      <Location key={store.id} store={store} isReverse={i % 2 === 0}  />
    ))}
  </section>
);

export default StoresSection;
