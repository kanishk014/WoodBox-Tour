var APP_DATA = {
  "scenes": [
    {
      "id": "0-woodbox-entry",
      "name": "WoodBox Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.7514871555697216,
        "pitch": 0.26384202418944724,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": 2.8293304839963893,
          "pitch": 0.3912574970100433,
          "rotation": 0,
          "target": "1-woodbox-inside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-woodbox-inside",
      "name": "WoodBox Inside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.47843990684040527,
        "pitch": 0.1933748997164919,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": -0.06445341041311181,
          "pitch": 0.24028919102505242,
          "rotation": 0,
          "target": "2-hotspot-1"
        },
        {
          "yaw": 3.0664676715674215,
          "pitch": 0.5144876253037545,
          "rotation": 0,
          "target": "0-woodbox-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hotspot-1",
      "name": "Hotspot 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.8813464788945957,
        "pitch": 0.2789602300265983,
        "fov": 1.4748933029224438
      },
      "linkHotspots": [
        {
          "yaw": 3.088772854649693,
          "pitch": 0.32143003298346784,
          "rotation": 0,
          "target": "1-woodbox-inside"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
