import {
    Header,
    GetTodayWidget,
    GetHourlyWidget,
    GetKakaoMapWidget,
    GetTodayHighlightsWidget,
    GetDaysWidget
} from "@/components";

function HomePage() {
    return (
        <div className="page">
            <div className="page__container">
                <Header />
                <div className="w-full h-full flex flex-col items-center justify-start pb-6 px-6 bg-slate-200">
                    {/* 상단 3개의 위젯 */}
                    <div className="w-full flex items-center gap-6">
                        <GetTodayWidget />
                        <GetHourlyWidget />
                        <GetKakaoMapWidget />
                    </div>
                    {/* 하단 2개의 위젯 */}
                    <div className="w-full flex items-center py-4 gap-6">
                        <GetTodayHighlightsWidget />
                        <GetDaysWidget />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;