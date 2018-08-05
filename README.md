This is a client-side application that gets data representing observations of biological species in nature and shows those observations by displaying locational markers in a map UI. When clicked, each marker shows an informational window that indicates the latitude and longitude of the observation, as well as the common name and scientific name of the observed species.

The intended purpose is as a tool for ecologists and naturalists who wish to visualize the locations of biological species they observe.

To get the application up and running, you will need to do the following:
  - Set up a remote server with an API endpoint that responds with JSON in the following format:
    [
      {
        id: <integer>,
        latitude: <string>,
        longitude: <string>,
        date: <string>,
        species_common_name: <string>,
        species_scientific_name: <string>
      },
      {
        id: <integer>,
        latitude: <string>,
        longitude: <string>,
        date: <string>,
        species_common_name: <string>,
        species_scientific_name: <string>
      },
      ...
    ]
  - In the file js/map.js, replace <URL string> with a string representing the API endpoint
  - In the file js/map.js, replace <latitude number> and <longitude number> with numbers representing the coordinates of the desired center of the map display
  - In the file index.html, replace <API_KEY> with a valid Google Maps JavaScript API key
  - Open up index.html in your browser, or host the application in production with index.html as the index document

An example of source code for a server is at: https://github.com/nickedwards109/ecological-observation-server

For an example of this application in production, as well as an example of a corresponding API endpoint in production, you can contact Nick Edwards at nickedwards109@gmail.com. He might even respond.
