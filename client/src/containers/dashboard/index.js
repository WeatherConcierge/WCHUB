import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import Post from '../Post'
import FusionCharts from 'fusioncharts';
import Maps from 'fusioncharts/fusioncharts.maps';
import USAMap from 'fusioncharts/maps/fusioncharts.usa';
import ReactFC from 'react-fusioncharts';

Maps(FusionCharts);
USAMap(FusionCharts);

const chartConfigs = {
  type: 'maps/usa',
  width: 1600,
  height: 800,
  dataFormat: 'json',
  dataSource: 
    {
        "chart": {
            "caption": "Temperature X by State ",
            "subcaption": "Last year",
            "entityFillHoverColor": "#cccccc",
            "numberScaleValue": "1,1000,1000",
            "numberScaleUnit": "K,M,B",
            "numberPrefix": "",
            "showLabels": "1",
            "theme": "ocean"
        },
        "colorrange": {
            "minvalue": "0",
            "startlabel": "Low",
            "endlabel": "High",
            "code": "#51d9f5",
            "gradient": "1",
            "color": [
                {
                    "maxvalue": "56580",
                    "displayvalue": "Average",
                    "code": "#0796b3"
                },
                {
                    "maxvalue": "100000",
                    "code": "#0796b3"
                }
            ]
        },
        "data": [
            {
                "id": "HI",
                "value": "3189"
            },
            {
                "id": "DC",
                "value": "2879"
            },
            {
                "id": "MD",
                "value": "920"
            },
            {
                "id": "DE",
                "value": "4607"
            },
            {
                "id": "RI",
                "value": "4890"
            },
            {
                "id": "WA",
                "value": "34927"
            },
            {
                "id": "OR",
                "value": "65798"
            },
            {
                "id": "CA",
                "value": "61861"
            },
            {
                "id": "AK",
                "value": "58911"
            },
            {
                "id": "ID",
                "value": "42662"
            },
            {
                "id": "NV",
                "value": "78041"
            },
            {
                "id": "AZ",
                "value": "41558"
            },
            {
                "id": "MT",
                "value": "62942"
            },
            {
                "id": "WY",
                "value": "78834"
            },
            {
                "id": "UT",
                "value": "50512"
            },
            {
                "id": "CO",
                "value": "73026"
            },
            {
                "id": "NM",
                "value": "78865"
            },
            {
                "id": "ND",
                "value": "50554"
            },
            {
                "id": "SD",
                "value": "35922"
            },
            {
                "id": "NE",
                "value": "43736"
            },
            {
                "id": "KS",
                "value": "32681"
            },
            {
                "id": "OK",
                "value": "79038"
            },
            {
                "id": "TX",
                "value": "75425"
            },
            {
                "id": "MN",
                "value": "43485"
            },
            {
                "id": "IA",
                "value": "46515"
            },
            {
                "id": "MO",
                "value": "63715"
            },
            {
                "id": "AR",
                "value": "34497"
            },
            {
                "id": "LA",
                "value": "70706"
            },
            {
                "id": "WI",
                "value": "42382"
            },
            {
                "id": "IL",
                "value": "73202"
            },
            {
                "id": "KY",
                "value": "79118"
            },
            {
                "id": "TN",
                "value": "44657"
            },
            {
                "id": "MS",
                "value": "66205"
            },
            {
                "id": "AL",
                "value": "75873"
            },
            {
                "id": "GA",
                "value": "76895"
            },
            {
                "id": "MI",
                "value": "67695"
            },
            {
                "id": "IN",
                "value": "33592"
            },
            {
                "id": "OH",
                "value": "32960"
            },
            {
                "id": "PA",
                "value": "54346"
            },
            {
                "id": "NY",
                "value": "42828"
            },
            {
                "id": "VT",
                "value": "77411"
            },
            {
                "id": "NH",
                "value": "51403"
            },
            {
                "id": "ME",
                "value": "64636"
            },
            {
                "id": "MA",
                "value": "51767"
            },
            {
                "id": "CT",
                "value": "57353"
            },
            {
                "id": "NJ",
                "value": "80788"
            },
            {
                "id": "WV",
                "value": "95890"
            },
            {
                "id": "VA",
                "value": "83140"
            },
            {
                "id": "NC",
                "value": "97344"
            },
            {
                "id": "SC",
                "value": "88234"
            },
            {
                "id": "FL",
                "value": "88234"
            }
        ]
    },
};

const Dashboard = () => (

  <div>
        

  <Grid className="feed-items">
  <Grid.Row columns={1}>
      <Grid.Column>
      <div className="weather-view">
      <ReactFC {...chartConfigs} />
      </div>
      </Grid.Column>
  
    
    </Grid.Row>
    <Grid.Row columns={3}>
      <Grid.Column>
        <Post headertext="Coldfront coming look out" description="Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam.Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris.  " image="http://englishstudypage.com/wp-content/uploads/2017/04/sunny-weather-vocabulary.png" likes={456}/>
      </Grid.Column>
      <Grid.Column>
        <Post 
        headertext="Tornado Watch"
        description="Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at pede suscipit sodales."
        image="http://www.trbimg.com/img-5597d920/turbine/os-weather-forecast-orlando-20150702" likes={776}
        />
      </Grid.Column>
      <Grid.Column>
        <Post image="http://news.images.itv.com/image/file/1332710/stream_img.jpg"
        
            headertext="Thunderstorm in NYC"
            description="Coldfront coming look out" description="Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam.Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris.  " likes={1456}
        />
      </Grid.Column>
    
    </Grid.Row>
    <Grid.Row columns={3}>
      <Grid.Column>
        <Post headertext="Coldfront coming look out" description="Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam.Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris.  " likes={678} image="https://goldentroutwilderness.files.wordpress.com/2012/01/various-weather.jpg"/>
      </Grid.Column>
      <Grid.Column>
        <Post 
        headertext="Tornado Watch"
        description="Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at pede suscipit sodales."
        image="http://www.noaa.gov/sites/default/files/styles/scale_crop_360x204/public/thumbnails/image/PHOTO-tornado-outbreak-in-North-Dakota-june.27.2015-Amanda%20L.%20Hill-4.8.16-11-112-x534-landscape.jpg?itok=twGphiLk" likes={567}
        />
      </Grid.Column>
      <Grid.Column>
        <Post image="http://www.cbc.ca/doczone/content/images/episodes/waethergonewiild_1280.jpg"
        
            headertext="Thunderstorm in NYC"
            description="Coldfront coming look out" description="Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam.Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris.  " likes={678}
        />
      </Grid.Column>
    
    </Grid.Row>

  </Grid>

  </div>
)

export default Dashboard