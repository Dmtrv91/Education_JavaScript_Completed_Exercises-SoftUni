function parseTownsToJSON(towns) 
{
    let townsArr = [];
    for (let town of towns.slice(1)) 
    {
        let [empty, townName, lat, lng] =
            town.split(/\s*\|\s*/);
        let townObj = { Town: townName, Latitude:
                Number(lat), Longitude: Number(lng) };
        townsArr.push(townObj);
    }
    console.log(JSON.stringify(townsArr));;
}

parseTownsToJSON(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']
);