import { Header } from "@/components";

function HomePage() {
    return (
        <div className="page">
            <div className="page__container">
                <Header />
                <div className="">
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