/* global google */
import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

// import './HeatMap.css'

class HeatMap extends Component {
    static defaultProps = {
        zoom: 12,
        center: { lat: 19.79999084053231, lng: 85.8164070416972 },
    }

    constructor(props) {
        super(props)
        this.state = {
            heatmapVisible: true,
            heatmapPoints: [
                { lat: 19.792543338297722, lng: 85.81469524681168, weight: 5 },
                { lat: 19.79695749108003, lng: 85.8292023634837, weight: 5 },
                { lat: 19.794852295020327, lng: 85.82205706721241, weight: 5 },
                { lat: 19.798247758774057, lng: 85.83468764142933, weight: 5 },
                { lat: 19.801914778267747, lng: 85.84443122725382, weight: 5 },
                { lat: 19.803069192842475, lng: 85.81837615701203, weight: 5 },
                { lat: 19.798723117919426, lng: 85.81361262616451, weight: 5 },
                { lat: 19.80286547323198, lng: 85.82754234515804, weight: 5 },
                { lat: 19.81013131141126, lng: 85.83216152658594, weight: 3 },
                { lat: 19.80456312868306, lng: 85.83699723214329, weight: 3 },
                { lat: 19.811625180933056, lng: 85.842843383638, weight: 2 },
                { lat: 19.813254840772103, lng: 85.82147966953391, weight: 2 },
                { lat: 19.807855616228647, lng: 85.81261560297634, weight: 3 },
                { lat: 19.802488068441484, lng: 85.81006656187675, weight: 3 },
                { lat: 19.79574982661704, lng: 85.80399741640154, weight: 3 },
                { lat: 19.787869148051627, lng: 85.80011316329741, weight: 3 },
                { lat: 19.789011299548225, lng: 85.80399741640154, weight: 3 },
                { lat: 19.804543746436313, lng: 85.80144837530194, weight: 2 },
                { lat: 19.809911224868937, lng: 85.80860996696269, weight: 2 },
                { lat: 19.797120339590265, lng: 85.79343710327468, weight: 2 },
                { lat: 19.78741228515932, lng: 85.78785348943748, weight: 2 },
                { lat: 19.783330742747324, lng: 85.77968626176312, weight: 2 },
                // { lat: , lng: , weight:  },
                // { lat: , lng: , weight:  },
                // { lat: , lng: , weight:  },
                // { lat: , lng: , weight:  },
                // { lat: , lng: , weight:  },
                // { lat: , lng: , weight:  },
            ]
        }
    }

    onMapClick({ x, y, lat, lng, event }) {
        if (!this.state.heatmapVisible) {
            return
        }

        this.setState({
            heatmapPoints: [...this.state.heatmapPoints, { lat, lng }]
        })
        if (this._googleMap !== undefined) {
            const point = new google.maps.LatLng(lat, lng)
            this._googleMap.heatmap.data.push(point)
        }
    }

    toggleHeatMap() {
        this.setState({
            heatmapVisible: !this.state.heatmapVisible
        }, () => {
            if (this._googleMap !== undefined) {
                this._googleMap.heatmap.setMap(this.state.heatmapVisible ? this._googleMap.map_ : null)
            }
        })

    }

    render() {

        const apiKey = { key: 'AIzaSyC58s_nNEL1SpAfqkMGH8LanJ6n6M3R4Iw' }
        const heatMapData = {
            positions: this.state.heatmapPoints,
            options: {
                radius: 40,
                opacity: 0.6
            }
        }

        console.log(this.state)

        return (
            <div style={{ height: '100%', width: '100%' }}>
                <GoogleMapReact
                    ref={(el) => this._googleMap = el}
                    bootstrapURLKeys={apiKey}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    heatmapLibrary={true}
                    heatmap={heatMapData}
                >
                </GoogleMapReact>
            </div>
        )
    }
}

export default HeatMap
