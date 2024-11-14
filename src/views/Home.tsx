import axios from "axios";
import {
    Header,
    GetTodayWidget,
    GetHourlyWidget,
    GetKakaoMapWidget,
    GetTodayHighlightsWidget,
    GetDayItem,
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components";


function HomePage() {
    const fetchApi= async (localName: string)=>{
        const APP_KEY = "cdc7457485e04f1687404802241411";
        const BASE_URL = "http://api.weatherapi.com/v1";
        
        try{
            /** Promise 인스턴스 방법을 사용했을 땐, resolve에 해당 */  
            const res = await axios.get(`${BASE_URL}/current.json?q=seoul&key=${APP_KEY}`) ;
            console.log(res);
        } catch(error){
            /** Promise 인스턴스 방법을 사용했을 땐, resolve에 해당 */  
            console.error(error);
        }finally{
            /* 비동기 로직이 실행되던. 안되던 무조건 실행되어야 하는 로직이 작성된다. */
            console.log("fetchApi 호출은 되었습니다.");
        }

    };
    fetchApi();

    return (
        <div className="page">
            <div className="page__container">
                <Header />
                <div className="w-full h-full flex flex-col items-center justify-start pb-6 px-6 gap-5">
                    {/* 상단 3개의 위젯 */}
                    <div className="w-full flex items-center gap-5">
                        <GetTodayWidget />
                        <GetHourlyWidget />
                        <GetKakaoMapWidget />
                    </div>
                    {/* 하단 2개의 위젯 */}
                    <div className="w-full flex items-center gap-5">
                        <GetTodayHighlightsWidget />
                        <Card className="w-1/4 h-full">
                            <CardHeader>
                                <CardTitle>7 Days</CardTitle>
                                <CardDescription>이번주 날씨를 조회하고 있습니다.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-1">
                                <GetDayItem highTemp={20} lowTemp={10} />
                                <GetDayItem highTemp={20} lowTemp={10} />
                                <GetDayItem highTemp={20} lowTemp={10} />
                                <GetDayItem highTemp={20} lowTemp={10} />
                                <GetDayItem highTemp={20} lowTemp={10} />
                                <GetDayItem highTemp={20} lowTemp={10} />
                                <GetDayItem highTemp={20} lowTemp={10} />
                                <GetDayItem highTemp={20} lowTemp={10} />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
