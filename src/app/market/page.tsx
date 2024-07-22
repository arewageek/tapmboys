import Market from '@/components/market/Market'
import MarketComponent from '@/components/market/MarketComponent'
import CurrentPoints from '@/components/tasks/CurrentPoints'


const MarketPlace = () => {
    return (
        <section className='flex items-center flex-col static overflow-hidden max-h-[calc(100vh-110px)]'>
            <CurrentPoints type="sm" />

            <div className='mt-4 overflow-y-auto w-full sticky top-0 bottom-0 min-h-[100vh] '>
                <MarketComponent />
            </div>
        </section>
    )
}

export default MarketPlace