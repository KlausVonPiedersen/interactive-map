// Initialize the map
const map = L.map('map', {
    crs: L.CRS.Simple, 
    minZoom: -2, 
    maxZoom: 2,
    zoomControl: true 
});

const imageWidth = 5635;
const imageHeight = 6667;


const imageBounds = [
    [0, 0],
    [imageHeight, imageWidth]
];

L.imageOverlay('map.webp', imageBounds).addTo(map);

map.fitBounds(imageBounds);

const specialIcons = {
    gargoyle_icon: L.icon({
        iconUrl: 'gargoyle_icon.png',
        iconSize: [64, 64],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    }),
    squire_icon: L.icon({
        iconUrl: 'squire_icon.png',
        iconSize: [64, 64],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    })
};

const specialMarkers = [
    { coords: [imageHeight - 3180, 3715], name: "Moulding Meadows Squire", img: "moulding_meadows_squire.png", icon: specialIcons.squire_icon },
    { coords: [imageHeight - 3610, 3567], name: "Fungal Village Squire", img: "fungal_village_squire.png", icon: specialIcons.squire_icon },
    { coords: [imageHeight - 3929, 1859], name: "Redtown Proper Squire", img: "redtown_proper_squire.png", icon: specialIcons.squire_icon },
    { coords: [imageHeight - 5772, 1358], name: "Gaoler's Gulf Squire", img: "gaolers_gulf_squire.png", icon: specialIcons.squire_icon },
    { coords: [imageHeight - 4913, 1685], name: "Redcrown Woods Squire", img: "redcrown_woods_squire.png", icon: specialIcons.squire_icon },
    { coords: [imageHeight - 4568, 1365], name: "Waterdale Squire", img: "waterdale_squire.png", icon: specialIcons.squire_icon },
    { coords: [imageHeight - 3462, 1826], name: "Treehouse Bastion Squire", img: "treehouse_bastion_squire.png", icon: specialIcons.squire_icon },
    { coords: [imageHeight - 2486, 1792], name: "Drainage Ruins Squire", img: "drainage_ruins_squire.png", icon: specialIcons.squire_icon },
    { coords: [imageHeight - 1663, 1895], name: "Throne sewers Squire", img: "throne_sewers_squire.png", icon: specialIcons.squire_icon },
    { coords: [imageHeight - 1000, 1775], name: "Uptown Outskirts Squire", img: "uptown_outskirts_squire.png", icon: specialIcons.squire_icon },
    { coords: [imageHeight - 5285, 3450], name: "Bogjaw Chasm Squire", img: "bogjaw_chasm_squire.png", icon: specialIcons.squire_icon },
    { coords: [imageHeight - 2657, 3745], name: "Tripe's Landing Squire", img: "tripes_landing_squire.png", icon: specialIcons.squire_icon },
    { coords: [imageHeight - 1885, 3652], name: "Rabenousse's Ramparts Squire", img: "rabenousses_ramparts_squire.png", icon: specialIcons.squire_icon },
    { coords: [imageHeight - 1395, 3441], name: "Feast Halls Squire", img: "feast_halls_squire.png", icon: specialIcons.squire_icon },
    { coords: [imageHeight - 3285, 2909], name: "False King's Crag Squire", img: "feast_halls_squire.png", icon: specialIcons.squire_icon }, // Needs a screenshot aswell but i cant be bothered booting the game rn :)
    { coords: [imageHeight - 4265, 4856], name: "Crypt Hill Squire", img: "feast_halls_squire.png", icon: specialIcons.squire_icon }, // Needs a screenshot aswell but i cant be bothered booting the game rn :)

    { coords: [imageHeight - 3700, 1596], name: "Vacant Tower Gargoyle", img: "vacant_tower_gargoyle.png", icon: specialIcons.gargoyle_icon },
    { coords: [imageHeight - 2399, 1700], name: "Drainage Ruins Gargoyle", img: "drainage_ruins_gargoyle.png", icon: specialIcons.gargoyle_icon },
    { coords: [imageHeight - 5054, 3600], name: "Blackbeak Knoll Gargoyle", img: "blackbeack_knoll_gargoyle.png", icon: specialIcons.gargoyle_icon },
    { coords: [imageHeight - 4860, 3460], name: "Gurgling Gorge Gargoyle", img: "gurgling_gorge_gargoyle.png", icon: specialIcons.gargoyle_icon },
    { coords: [imageHeight - 3690, 3690], name: "Fungal Village Gargoyle", img: "fungal_village_gargoyle.png", icon: specialIcons.gargoyle_icon },
];

specialMarkers.forEach(({ coords, name, img, icon }) => {
    const marker = L.marker(coords, { icon }).addTo(map);

    const popupContent = `
        <div>
            <img src="${img}" style="width: 500px; height: auto; border-radius: 20px;"><br><b>${name}</b>
        </div>
    `;
    
    marker.bindTooltip(name, { permanent: false, direction: 'top' });

    marker.bindPopup(popupContent, {
        maxWidth: 520,
    });

    marker.on("click", function () {
        this.openPopup();
    });

    marker.on("popupclose", function () {
        this.bindTooltip(name, { permanent: false, direction: 'top' });
    });
});

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
    uptown_gates: { coords: [imageHeight - 445, 1760], name: "Uptown Gates" },
    crownway_red: { coords: [imageHeight - 4000, 3033], name: "Crownway" },
    redtown_proper: { coords: [imageHeight - 3911, 2213], name: "Redcrown Proper" },
};

const createCustomIcon = (color) => {
    return L.divIcon({
        className: 'custom-icon',
        html: `<div class="marker-icon" style="background-color: ${color}; border-radius: 50%; width: 30px; height: 30px;"></div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -20]
    });
};

Object.entries(markers).forEach(([key, { coords, name }]) => {
    let color = 'blue'; // Default color
    if (key.includes('red')) color = 'red'; 

    markers[key].marker = L.marker(coords, { icon: createCustomIcon(color) }).addTo(map)
        .bindTooltip(name, { permanent: false, direction: 'top' });
});

const paths = [
    { from: "gurgling_tower", to: "gurgling_gorge_upper", lineColor: 'blue', lineStyle: '5, 5' },
    { from: "mangrove", to: "boglink_shrine", lineColor: 'blue', lineStyle: '5, 5' },
    { from: "mangrove", to: "mr_uncles_house", lineColor: 'blue', lineStyle: '5, 5' },
    { from: "boglink_shrine", to: "boglink_monastary", lineColor: 'blue', lineStyle: '5, 5' },
    { from: "boglink_monastary", to: "gurgling_gorge", lineColor: 'blue', lineStyle: '5, 5' },
    { from: "gurgling_gorge", to: "gurgling_tower", lineColor: 'blue', lineStyle: '5, 5' },
    { from: "gurgling_gorge", to: "gurgling_gorge_upper", lineColor: 'blue', lineStyle: '5, 5' },
    { from: "gurgling_gorge", to: "graveway", lineColor: 'blue', lineStyle: '5, 5' },
    { from: "graveway", to: "deaths_door", lineColor: 'blue', lineStyle: '5, 5' },
    { from: "deaths_door", to: "graveyard_basin", lineColor: 'blue', lineStyle: '5, 5' },
    { from: "gurgling_tower", to: "central_gurglevale", lineColor: 'blue', lineStyle: '5, 5' },
    { from: "central_gurglevale", to: "guttergap_gully", lineColor: 'blue', lineStyle: '5, 5' },
    { from: "guttergap_gully", to: "cave_of_glee", lineColor: 'blue', lineStyle: '5, 5' },
    { from: "guttergap_gully", to: "grand_aqueduct_crossing", lineColor: 'blue', lineStyle: '5, 5' },
    { from: "grand_aqueduct_crossing", to: "fungal_fields", lineColor: 'blue', lineStyle: '5, 5' },
    { from: "fungal_fields", to: "fortress_of_the_famished", lineColor: 'blue', lineStyle: '5, 5' },
    { from: "fortress_of_the_famished", to: "mcshickens_bulwark", lineColor: 'blue', lineStyle: '5, 5' },
    { from: "mcshickens_bulwark", to: "fat_black", lineColor: 'blue', lineStyle: '5, 5' },
    { from: "mcshickens_bulwark", to: "gnoddricks_belfry", lineColor: 'blue', lineStyle: '5, 5' },
    { from: "mr_uncles_house", to: "waterdale", lineColor: 'blue', lineStyle: '5, 5' },
    { from: "waterdale", to: "twopond_clearing", lineColor: 'blue', lineStyle: '5, 5' },
    { from: "twopond_clearing", to: "leftwood_ruins_head", lineColor: 'blue', lineStyle: '5, 5' },
    { from: "twopond_clearing", to: "treehouse_keep", lineColor: 'blue', lineStyle: '5, 5' },
    { from: "treehouse_keep", to: "kingswood", lineColor: 'blue', lineStyle: '5, 5' },
    { from: "kingswood", to: "encampment_approach", lineColor: 'blue', lineStyle: '5, 5' },
    { from: "encampment_approach", to: "drainage_ruins", lineColor: 'blue', lineStyle: '5, 5' },
    { from: "drainage_ruins", to: "high_order_encampment", lineColor: 'blue', lineStyle: '5, 5' },
    { from: "high_order_encampment", to: "throne_sewers", lineColor: 'blue', lineStyle: '5, 5' },
    { from: "throne_sewers", to: "outskirts_well", lineColor: 'blue', lineStyle: '5, 5' },
    { from: "outskirts_well", to: "uptown_gates", lineColor: 'blue', lineStyle: '5, 5' },
    { from: "uptown_gates", to: "crownway", lineColor: 'blue', lineStyle: '5, 5' },
    { from: "crownway_red", to: "redtown_proper", lineColor: 'red', lineStyle: '5, 5' },
];

paths.forEach(({ from, to, lineColor, lineStyle }) => {
    if (markers[from] && markers[to]) {
        L.polyline(
            [markers[from].marker.getLatLng(), markers[to].marker.getLatLng()],
            {
                color: lineColor,
                weight: 2,
                opacity: 0.8,
                dashArray: lineStyle
            }
        ).addTo(map);
    }
});

