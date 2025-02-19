// Initialize the map
const map = L.map('map', {
    crs: L.CRS.Simple, 
    minZoom: -2, 
    zoomControl: true 
});

const imageWidth = 5635;
const imageHeight = 6667;


const imageBounds = [
    [0, 0],
    [imageHeight, imageWidth]
];


L.imageOverlay('map.png', imageBounds).addTo(map);

map.fitBounds(imageBounds);

const markers = {
    mangrove: { coords: [imageHeight - 5675, 1896], name: "Mangrove Pits" },
    boglink_shrine: { coords: [imageHeight - 5900, 2340], name: "Boglink Shrine" },
    boglink_monastary: { coords: [imageHeight - 5643, 4123], name: "Boglink Monastary" },
    gurgling_gorge: { coords: [imageHeight - 5288, 3444], name: "Gurgling Gorge" },
    graveway: { coords: [imageHeight - 4865, 3967], name: "Graveway" },
    gurgling_tower: { coords: [imageHeight - 4737, 3587], name: "Gurgling Tower" },
    gurgling_gorge_upper: { coords: [imageHeight - 4709, 3431], name: "Gurgling Gorge (Upper)" },
    central_gurglevale: { coords: [imageHeight - 4550, 3654], name: "Central Gurglevale" },
    deaths_door: { coords: [imageHeight - 4575, 3805], name: "Death's Door" },
    guttergap_gully: { coords: [imageHeight - 4317, 3434], name: "Guttergap Gully" },
    cave_of_glee: { coords: [imageHeight - 4167, 2968], name: "Cave of Glee" },
    graveyard_basin: { coords: [imageHeight - 3897, 4460], name: "Graveyard Basin" },
    grand_aqueduct_crossing: { coords: [imageHeight - 3737, 3399], name: "Grand Aqueduct Crossing" },
    fungal_fields: { coords: [imageHeight - 3183, 3644], name: "Fungal Fields" },
    fortress_of_the_famished: { coords: [imageHeight - 2635, 3794], name: "Fortress of the Famished" },
    mcshickens_bulwark: { coords: [imageHeight - 2136, 3506], name: "McShicken's Bulwark" },
    fat_black: { coords: [imageHeight - 1493, 3844], name: "Fat Black" },
    gnoddricks_belfry: { coords: [imageHeight - 1047, 3636], name: "Gnoddrick's Belfry" },
    mr_uncles_house: { coords: [imageHeight - 4933, 1695], name: "Mr Uncle's House" },
    waterdale: { coords: [imageHeight - 4444, 1185], name: "Waterdale" },
    twopond_clearing: { coords: [imageHeight - 3920, 1535], name: "Twopond Clearing" },
    leftwood_ruins_head: { coords: [imageHeight - 3330, 1555], name: "Leftwood Ruins Head" },
    treehouse_keep: { coords: [imageHeight - 3449, 2167], name: "Treehouse Keep" },
    kingswood: { coords: [imageHeight - 3052, 1819], name: "Kingswood" },
    encampment_approach: { coords: [imageHeight - 2782, 2232], name: "Encampment Approach" },
    drainage_ruins: { coords: [imageHeight - 2144, 1914], name: "Drainage Ruins" },
    high_order_encampment: { coords: [imageHeight - 1950, 2226], name: "High Order Encampment" },
    throne_sewers: { coords: [imageHeight - 1487, 2030], name: "Throne Sewers" },
    outskirts_well: { coords: [imageHeight - 1078, 1927], name: "Outskirts Well" },
    uptown_gates: { coords: [imageHeight - 445, 1760], name: "Uptown Gates" }
};

Object.entries(markers).forEach(([key, { coords, name }]) => {
    markers[key].marker = L.marker(coords).addTo(map)
        .bindTooltip(name, { permanent: false, direction: 'top' });
});

const paths = [
    { from: "gurgling_tower", to: "gurgling_gorge_upper" },
    { from: "mangrove", to: "boglink_shrine" },
    { from: "mangrove", to: "mr_uncles_house" },
    { from: "boglink_shrine", to: "boglink_monastary" },
    { from: "boglink_monastary", to: "gurgling_gorge" },
    { from: "gurgling_gorge", to: "gurgling_tower" },
    { from: "gurgling_gorge", to: "gurgling_gorge_upper" },
    { from: "gurgling_gorge", to: "graveway" },
    { from: "graveway", to: "deaths_door" },
    { from: "deaths_door", to: "graveyard_basin" },
    { from: "gurgling_tower", to: "central_gurglevale" },
    { from: "central_gurglevale", to: "guttergap_gully" },
    { from: "guttergap_gully", to: "cave_of_glee" },
    { from: "guttergap_gully", to: "grand_aqueduct_crossing" },
    { from: "grand_aqueduct_crossing", to: "fungal_fields" },
    { from: "fungal_fields", to: "fortress_of_the_famished" },
    { from: "fortress_of_the_famished", to: "mcshickens_bulwark" },
    { from: "mcshickens_bulwark", to: "fat_black" },
    { from: "mcshickens_bulwark", to: "gnoddricks_belfry" },
    { from: "mr_uncles_house", to: "waterdale" },
    { from: "waterdale", to: "twopond_clearing" },
    { from: "twopond_clearing", to: "leftwood_ruins_head" },
    { from: "twopond_clearing", to: "treehouse_keep" },
    { from: "twopond_clearing", to: "kingswood" },
    { from: "kingswood", to: "encampment_approach" },
    { from: "encampment_approach", to: "high_order_encampment" },
    { from: "encampment_approach", to: "drainage_ruins" },
    { from: "drainage_ruins", to: "throne_sewers" },
    { from: "throne_sewers", to: "outskirts_well" },
    { from: "outskirts_well", to: "uptown_gates" }
];

paths.forEach(({ from, to }) => {
    if (markers[from] && markers[to]) {
        L.polyline(
            [markers[from].marker.getLatLng(), markers[to].marker.getLatLng()],
            {
                color: '#00f',
                weight: 2,
                opacity: 0.8,
                dashArray: '5, 5'
            }
        ).addTo(map);
    }
});
