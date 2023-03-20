import { DataGrid } from '../../component/DataGrid/DataGrid';
import { SearchSection } from '../../component/Search/SearchSection';

export default function Home() {
    return (
        <section className='flex flex-col'>
            <SearchSection />
            <DataGrid />
        </section>
    );
}
