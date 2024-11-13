import { Header } from "@/components";

function HomePage() {
    return (
        <div className="page">
            <div className="page__container bg-stone-900">
                <Header />
                <div className="w-full h-full flex flex-col items-center justify-start pb-6 px-6 gap-6">
                    {/* 상단 3개의 위젯 */}
                    <div className="w-full flex items-center gap-6"></div>
                    {/* 하위 2개의 위젯 */}
                    <div className="w-full flex items-center gap-6"></div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;