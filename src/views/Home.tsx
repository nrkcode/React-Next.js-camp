import {
    Header,
    GetTodayWidget,
    GetHourlyWidget,
    Card,
    CardTitle,
    CardHeader,
    CardContent,
    CardDescription,
    GetKakaoMapWidget
} from "@/components";

function HomePage() {
    return (
        <div className="page">
            <div className="page__container">
                <Header />
                <div className="w-full h-full flex flex-col items-center justify-start pb-6 py-6 px-6 bg-black">
                    {/* 상단 3개의 위젯 */}
                    <div className="w-full flex items-center gap-6">
                        <GetTodayWidget />
                        <GetHourlyWidget />
                        <GetKakaoMapWidget />
                    </div>
                    {/* 하위 2개의 위젯 */}
                    <div className="w-full flex items-center gap-6">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
