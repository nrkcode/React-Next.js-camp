import {GetDayItem, Card, CardHeader, CardTitle, CardDescription, CardContent} from "@/components";


interface WeatherInfo {
    maxTemp: number;
    minTemp: number;
    date: string;
    iconCode: string;
    isDay: boolean;
}

interface Prillops {
    data: WeatherInfo[];
}

function GetWeekWidget( {data} : Prillops) {
    return(
        <Card className="w-1/4 h-full">
                            <CardHeader>
                                <CardTitle>7 Days</CardTitle>
                                <CardDescription>이번주 날씨를 조회하고 있습니다.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-1">
                            {data.map((item: WeatherInfo) => {
                    return <GetDayItem data={item} key={item.date} />;
                })}
                            </CardContent>
                        </Card>
    );
}

export {GetWeekWidget};