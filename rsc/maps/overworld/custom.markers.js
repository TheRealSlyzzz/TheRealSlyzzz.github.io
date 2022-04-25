/*Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },
*/

UnminedCustomMarkers = {
    isEnabled: true,
    markers: [
        // Federation Monument
        {
            x: 850,
            z: 18350,
            image: "../../banners/federation.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
        },
        // Federation Arena
        {
            x: 800,
            z: 16977,
            image: "../../banners/federation.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            minImageScale: 0.2,
            text: "",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
        },
        // Federation Spawn
        {
            x: -156,
            z: -201,
            image: "../../banners/federation.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            minImageScale: 0.2,
            text: "",
            textColor: "white", 
            offsetX: 0,
            offsetY: 20,
        }
    ]
}
