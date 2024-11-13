import {
    Header,
    GetTodayWidget,
    GetHourlyWidget,
    GetKakaoMapWidget,
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    GetSunriseAndSunset,
    GetWavesWidget,
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
                        <Card className="flex-1">
                            <CardHeader>
                                <CardTitle className="text-xl">Today's Highlights</CardTitle>
                                <CardDescription>
                                    오늘 날씨 중 주의깊게 살펴보아야 할 이벤트를 조회하고 있습니다.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-5">
                                <div className="flex items-center gap-5">
                                    <Card className=" w-full bg-neutral-100">
                                        <CardHeader>
                                            <CardDescription className="font-semibold text-neutral-700">
                                                해양 및 조수 데이터
                                                <span className="text-neutral-400 font-normal ml-1">
                                                    Marine and Sailing
                                                </span>
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="w-full flex items-center justify-between">
                                            <img src="src/assets/icons/Waves.png" alt="" className="h-14" />
                                            <div className="w-fit grid grid-cols-4 gap-3">
                                                <div className="flex flex-col items-center">
                                                    {/* 몇회 만조/간조 표시 영역 */}
                                                    <p className="text-sm text-muted-foreground">1회 - 만조</p>
                                                    {/* 시간 표시 영역 */}
                                                    <p className="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight">
                                                        05:48
                                                        <span className="ml-[1px]">am</span>
                                                    </p>
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    {/* 몇회 만조/간조 표시 영역 */}
                                                    <p className="text-sm text-muted-foreground">1회 - 만조</p>
                                                    {/* 시간 표시 영역 */}
                                                    <p className="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight">
                                                        05:48
                                                        <span className="ml-[1px]">am</span>
                                                    </p>
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    {/* 몇회 만조/간조 표시 영역 */}
                                                    <p className="text-sm text-muted-foreground">1회 - 만조</p>
                                                    {/* 시간 표시 영역 */}
                                                    <p className="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight">
                                                        05:48
                                                        <span className="ml-[1px]">am</span>
                                                    </p>
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    {/* 몇회 만조/간조 표시 영역 */}
                                                    <p className="text-sm text-muted-foreground">1회 - 만조</p>
                                                    {/* 시간 표시 영역 */}
                                                    <p className="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight">
                                                        05:48
                                                        <span className="ml-[1px]">am</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card className=" w-full bg-neutral-100">
                                        <CardHeader>
                                            <CardDescription className="font-semibold text-neutral-700">
                                                일출/일몰
                                                <span className="text-neutral-400 font-normal ml-1">
                                                    Sunrise and Sunset
                                                </span>
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="grid grid-cols-2">
                                            <GetSunriseAndSunset
                                                imgUrl={"src/assets/icons/1000d.svg"}
                                                label={"Sunrise"}
                                                time={"07:00 AM"}
                                            />
                                            <GetSunriseAndSunset
                                                imgUrl={"src/assets/icons/1000n.svg"}
                                                label={"Sunset"}
                                                time={"05:34 PM"}
                                            />
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="w-full grid grid-cols-4 gap-5">
                                    <GetWavesWidget
                                        labelKo={"습도"}
                                        labelEn={"Humidity"}
                                        imgUrl={"src/assets/icons/Humidity.svg"}
                                        value={80}
                                        unit={"%"}
                                    />
                                    <GetWavesWidget
                                        labelKo={"기압"}
                                        labelEn={"Pressure"}
                                        imgUrl={"src/assets/icons/Wind.svg"}
                                        value={1024}
                                        unit={"hPa"}
                                    />
                                    <GetWavesWidget
                                        labelKo={"가시거리"}
                                        labelEn={"Visibility"}
                                        imgUrl={"src/assets/icons/Fog.svg"}
                                        value={10}
                                        unit={"km"}
                                    />
                                    <GetWavesWidget
                                        labelKo={"체감온도"}
                                        labelEn={"Feels Like"}
                                        imgUrl={"src/assets/icons/Hot.svg"}
                                        value={19}
                                        unit={"&#8451;"}
                                    />
                                    {/* <Card className="w-full h-fit bg-neutral-50">
                                        <CardHeader>
                                            <CardDescription className="font-semibold text-neutral-700">
                                                습도
                                                <span className="text-neutral-400 font-normal ml-1">Humidity</span>
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex items-center justify-between">
                                            <img src="src/assets/icons/Humidity.svg" alt="" className="h-10 w-10" />
                                            <p className="poppins-medium scroll-m-20 text-3xl font-semibold tracking-tight">
                                                80
                                                <span className="text-lg ml-1">%</span>
                                            </p>
                                        </CardContent>
                                    </Card> */}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
